const caja = document.querySelector('#caja');
const btnAlternar = document.querySelector('#btn-alternar');

btnAlternar.addEventListener('click', () => {
  caja.classList.toggle('destacado');
});