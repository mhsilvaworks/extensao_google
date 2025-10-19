// tests/extension.spec.ts
import { test, expect } from '@playwright/test';

test('Popup da extensão abre e tem o título correto', async ({ context }) => {
  
  const page = await context.newPage();
  await page.goto('about:blank');
  const serviceWorker = await context.waitForEvent('serviceworker');
  expect(serviceWorker).toBeDefined();

  const extensionId = new URL(serviceWorker.url()).hostname;

  await page.goto(`chrome-extension://${extensionId}/src/popup/popup.html`);

  await expect(page).toHaveTitle('Diagnóstico da Nave');
});