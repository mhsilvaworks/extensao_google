// tests/playwright.config.ts
import { defineConfig } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: './', // Onde estão os testes
  reporter: [['html', { outputFolder: 'playwright-report' }]], // Onde salvar o relatório
  use: {
    headless: true, // ESSENCIAL para rodar no Docker
  },
});