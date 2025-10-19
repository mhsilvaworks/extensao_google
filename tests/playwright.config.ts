// tests/playwright.config.ts
import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  testDir: './',
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true, // Essencial para rodar no Docker
      },
    },
  ],
});