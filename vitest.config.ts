import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      reporter: process.env.CI ? ['lcov'] : ['text', 'json', 'html'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/*.d.ts',
        '**/openapi-client/generated/**',
        '**/version.ts',
      ],
    },
    testTimeout: 60_000,
    hookTimeout: 60_000,
  },
})
