
const comunicarBtn = document.getElementById('comunicar');
const statusEl = document.getElementById('status');


comunicarBtn.addEventListener('click', () => {
  statusEl.textContent = 'Enviando PING...';


  chrome.runtime.sendMessage({ type: 'PING' }, (response) => {
    if (chrome.runtime.lastError) {
  
        statusEl.textContent = 'Erro: ' + chrome.runtime.lastError.message;
    } else {
     
        console.log('Popup recebeu a resposta:', response);
        statusEl.textContent = response.text;
    }
  });
});