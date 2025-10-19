// tests/extension.spec.ts

import { test, expect } from '@playwright/test';

test('Popup da extensão abre e tem o título correto', async ({ context }) => {
  // --- A CORREÇÃO FINAL ESTÁ AQUI ---

  // 1. Verifica se o service worker já existe na lista.
  let serviceWorker = context.serviceWorkers()[0];

  // 2. Se não existir, espera pelo evento de criação.
  if (!serviceWorker) {
    serviceWorker = await context.waitForEvent('serviceworker');
  }

  // Garante que o service worker foi encontrado de uma forma ou de outra.
  expect(serviceWorker).toBeDefined();

  // Extrai o ID da extensão a partir da URL do service worker.
  const extensionId = new URL(serviceWorker.url()).hostname;

  // Cria uma nova página e navega diretamente para a URL do popup.
  const page = await context.newPage();
  await page.goto(`chrome-extension://${extensionId}/src/popup/popup.html`);

  // Verifica se o título da página do popup é o que esperamos.
  await expect(page).toHaveTitle('Diagnóstico da Nave');
});