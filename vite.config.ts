import react from '@vitejs/plugin-react'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig, defineProject, mergeConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

// https://vite.dev/config/
const viteConfig = defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})

const dirname = path.dirname(fileURLToPath(import.meta.url))
const viteOptions = { ...viteConfig }
delete viteOptions.test

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        defineProject(
          mergeConfig(
            viteOptions,
            defineConfig({
              plugins: [
                storybookTest({
                  configDir: path.join(dirname, '.storybook'),
                  storybookScript: 'npm run storybook -- --no-open',
                }),
              ],
              test: {
                name: 'storybook',
                coverage: {
                  exclude: ['src/i18n/locales/**'],
                },
                browser: {
                  enabled: true,
                  headless: true,
                  instances: [{ browser: 'chromium' }],
                  provider: playwright({}),
                },
              },
            }),
          ),
        ),
      ],
    },
  }),
)
