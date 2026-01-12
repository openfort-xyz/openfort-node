import { defineConfig } from 'orval'

export default defineConfig({
  openfort: {
    input: {
      target: './openapi.json',
    },
    output: {
      clean: true,
      target: './generated',
      mode: 'tags-split',
      mock: false,
      override: {
        mutator: {
          path: './openfortApiClient.ts',
          name: 'openfortApiClient',
        },
      },
      workspace: './src/openapi-client',
    },
  },
  openfortAuth: {
    input: {
      target: './openapi-auth.json',
    },
    output: {
      clean: false,
      target: './generated/auth',
      mode: 'tags-split',
      mock: false,
      baseUrl: '/iam/v2/auth',
      override: {
        mutator: {
          path: './openfortApiClient.ts',
          name: 'openfortApiClient',
        },
      },
      workspace: './src/openapi-client',
    },
  },
})
