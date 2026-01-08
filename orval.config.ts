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
})
