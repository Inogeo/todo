import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      coverage: {
        provider: 'istanbul',
        reportsDirectory: './coverage',
        reporter: ['cobertura'], // specify XML format (cobertura) only
      },
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
})
