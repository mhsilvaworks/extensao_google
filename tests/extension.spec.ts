// tests/extension.spec.ts
import { test, expect } from '@playwright/test';

test('Abre a página do Google e verifica o título', async ({ page }) => {

  await page.goto('https://www.google.com');

  await expect(page).toHaveTitle('Google');
});