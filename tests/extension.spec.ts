// tests/extension.spec.ts

import { test, expect } from '@playwright/test';

// Este teste simples prova que o Playwright, dentro do Docker, funciona.
test('Abre a página do Google e verifica o título', async ({ page }) => {
  // 1. Navega para um site conhecido
  await page.goto('https://www.google.com');

  // 2. Verifica se o título da página é o esperado.
  await expect(page).toHaveTitle('Google');
});