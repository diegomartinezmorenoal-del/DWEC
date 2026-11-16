const btn = document.getElementById('btn-cambiar');
const titulo = document.getElementById('titulo-principal');

btn.addEventListener('click', () => {
  titulo.textContent = '¡Hola Mundo desde el DOM!';
});