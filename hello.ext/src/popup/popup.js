// Encontra o botão pelo ID que você definiu no HTML
const botaoOi = document.getElementById('oi');

// Adiciona um "ouvinte" que espera por um clique no botão
botaoOi.addEventListener('click', () => {
    alert('Olá! Você clicou no botão!');
});