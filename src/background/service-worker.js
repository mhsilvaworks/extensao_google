// src/background/service-worker.js

chrome.runtime.onInstalled.addListener(() => {
  console.log('Service Worker ativo e ouvindo.');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'PING') {
    console.log('Service Worker recebeu um PING do painel de controle.');
    
    // NOVA RESPOSTA TEMÁTICA
    sendResponse({ text: 'Conexão com a nave estabelecida! Todos os sistemas operantes.', time: new Date().toISOString() });
  }
  
  return true;
});