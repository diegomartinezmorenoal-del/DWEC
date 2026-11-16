const input = document.querySelector('input');
const destino = document.querySelector('.parrafo-destino');

input.addEventListener('input', () => {
  destino.textContent = input.value;
});