let pantalla = document.getElementById('pantalla');
let expr = '';

// Añade número o punto a la pantalla
function numero(n) {
  // Si en pantalla hay '0', 'Infinity' o 'Error', se reemplaza por el nuevo número
  if (pantalla.value === '0' || pantalla.value === 'Infinity' || pantalla.value === 'Error') {
    expr = n === '.' ? '0.' : n;
  } else {
    expr += n;
  }
  pantalla.value = expr;
}

// Añade operador (+, -, *, /)
function operacion(op) {
  // Si hay error o Infinity, no permite añadir operadores
  if (pantalla.value1 === 'Infinity' || pantalla.value === 'Error') return;
  expr += op;
  pantalla.value = expr;
}

// Borra todo (botón C)
function limpiar() {
  expr = '';
  pantalla.value = '0';
}

// Calcula la raíz cuadrada
function raiz() {
  try {
    let res = Math.sqrt(eval(expr));
    expr = isFinite(res) ? res.toString() : 'Infinity';
    pantalla.value = expr;
  } catch {
    pantalla.value = 'Error'; expr = '';
  }
}

// Calcula el porcentaje
function porcentaje() {
  try {
    let res = eval(expr) / 100;
    expr = isFinite(res) ? res.toString() : 'Infinity';
    pantalla.value = expr;
  } catch {
    pantalla.value = 'Error'; expr = '';
  }
}

// Resuelve la operación (botón =)
function calcular() {
  try {
    let res = eval(expr);
    expr = isFinite(res) ? res.toString() : 'Infinity';
    pantalla.value = expr;
  } catch {
    pantalla.value = 'Error'; expr = '';
  }
}