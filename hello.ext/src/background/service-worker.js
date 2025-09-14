
chrome.runtime.onInstalled.addListener(() => {
  console.log('Service Worker ativo e ouvindo.');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

  if (message.type === 'PING') {
    console.log('Service Worker recebeu um PING do popup.');
    

    sendResponse({ text: 'Pong! O Service Worker respondeu!', time: new Date().toISOString() });
  }
  

  return true;
});