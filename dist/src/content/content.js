

console.log('Content Script carregado e executando!');

const links = document.querySelectorAll('a');

for (const link of links) {
  link.style.outline = '2px solid #ec0089';
}