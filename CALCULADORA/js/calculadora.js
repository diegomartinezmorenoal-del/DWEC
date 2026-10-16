const pantalla = document.getElementById("pantalla");
const mensaje = document.getElementById("mensaje");
let expresion = "";

function mostrar() {
  pantalla.value = expresion || "0";
}

document.querySelectorAll("button").forEach(boton => {
  boton.addEventListener("mouseenter", () => {
    if (boton.classList.contains("numero")) {
      const n = Number(boton.dataset.value);
      boton.style.backgroundColor = Number.isInteger(n) && n % 2 === 0 ? "#e74c3c" : "#28b463";
    } else {
      boton.style.backgroundColor = "#ffd43b";
    }
  });
  boton.addEventListener("mouseleave", () => boton.style.backgroundColor = "");
  boton.addEventListener("click", () => {
    mensaje.textContent = "";
    const valor = boton.dataset.value;
    const accion = boton.dataset.action;
    if (accion === "clear") expresion = "";
    else if (accion === "delete") expresion = expresion.slice(0, -1);
    else if (accion === "equals") calcular();
    else if (accion === "sqrt") operarUnario(Math.sqrt);
    else if (accion === "square") operarUnario(n => n * n);
    else if (accion === "percent") operarUnario(n => n / 100);
    else if (accion === "sign") operarUnario(n => -n);
    else if (valor !== undefined) expresion += valor;
    mostrar();
  });
});

function calcular() {
  if (!expresion) return;
  // Solo se permiten números y operadores matemáticos básicos.
  if (!/^[0-9+\-*/().\s]+$/.test(expresion)) {
    mensaje.textContent = "Operación no válida";
    return;
  }
  try {
    const resultado = Function('"use strict"; return (' + expresion + ')')();
    if (!Number.isFinite(resultado)) throw new Error();
    expresion = String(Number(resultado.toFixed(10)));
  } catch {
    mensaje.textContent = "Operación incorrecta";
    expresion = "";
  }
}
function operarUnario(funcion) {
  if (!expresion) return;
  calcular();
  if (!expresion) return;
  const resultado = funcion(Number(expresion));
  if (!Number.isFinite(resultado)) {
    mensaje.textContent = "No se puede realizar esa operación";
    expresion = "";
  } else expresion = String(Number(resultado.toFixed(10)));
}
