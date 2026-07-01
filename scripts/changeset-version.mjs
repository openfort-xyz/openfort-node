#!/usr/bin/env node
// Runs `changeset version` with retries.
//
// Why: when a changeset is present, @changesets/changelog-github calls the
// GitHub GraphQL API (via @changesets/get-github-info) to resolve the PR/commit
// behind each changeset. That request intermittently fails with
// "Invalid response body ... Premature close" / "Failed to parse data from
// GitHub" — a transport-level flake (undici + the package's legacy url.parse
// fetch, seen under Node 24 on GitHub-hosted runners). It has failed the
// Release workflow on back-to-back pushes.
//
// On that failure changesets explicitly "escapes applying the changesets, and
// no files are affected", so re-invoking `changeset version` is idempotent and
// safe. A couple of retries with backoff turns the flake into a non-event while
// preserving the PR-linked changelog the repo configures via changelog-github.

import { spawnSync } from "node:child_process";

const MAX_ATTEMPTS = 4;
const BASE_DELAY_MS = 3000;

// Substrings that mark the known-flaky GitHub GraphQL failure worth retrying.
const RETRYABLE = [
  "Premature close",
  "Failed to parse data from GitHub",
  "api.github.com/graphql",
  "ECONNRESET",
  "socket hang up",
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function run() {
  const res = spawnSync("pnpm", ["exec", "changeset", "version"], {
    encoding: "utf8",
    stdio: ["inherit", "pipe", "pipe"],
  });
  if (res.stdout) process.stdout.write(res.stdout);
  if (res.stderr) process.stderr.write(res.stderr);
  const combined = `${res.stdout ?? ""}${res.stderr ?? ""}`;
  return { status: res.status ?? 1, combined };
}

for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  const { status, combined } = run();
  if (status === 0) {
    process.exit(0);
  }

  const retryable = RETRYABLE.some((m) => combined.includes(m));
  if (!retryable || attempt === MAX_ATTEMPTS) {
    console.error(
      `\n[changeset-version] failed on attempt ${attempt}/${MAX_ATTEMPTS}` +
        (retryable ? " (retries exhausted)" : " (non-retryable error)"),
    );
    process.exit(status);
  }

  const delay = BASE_DELAY_MS * attempt;
  console.error(
    `\n[changeset-version] transient GitHub API flake on attempt ${attempt}/${MAX_ATTEMPTS}; retrying in ${delay}ms...`,
  );
  await sleep(delay);
}
