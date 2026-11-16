const btnAgregar = document.querySelector('#btn-agregar');
const btnBorrar = document.querySelector('#btn-borrar');
const lista = document.querySelector('#lista');

btnAgregar.addEventListener('click', () => {
  const texto = prompt('Texto del nuevo elemento:');

  // prompt devuelve null si se cancela; también evitamos texto vacío
  if (texto === null || texto.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = texto.trim();
  lista.appendChild(li);
});

btnBorrar.addEventListener('click', () => {
  const ultimo = lista.lastElementChild;

  // Si la lista está vacía, lastElementChild es null
  if (ultimo !== null) {
    ultimo.remove();
  }
});