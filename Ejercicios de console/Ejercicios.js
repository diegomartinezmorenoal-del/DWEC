// 1. Crea una función que utilice error correctamente
function obtenerUsuario(id) {
  if (!id) {
    console.error("Error: El ID del usuario es obligatorio para realizar la búsqueda.");
    return null;
  }
  return { id, nombre: "Ana" };
}

// 2. Crea una función que utilice warn correctamente
function conectarBaseDatos(intentos) {
  if (intentos > 3) {
    console.warn("Advertencia: La conexión está tardando más de lo habitual. Intentos:", intentos);
  }
}

// 3. Crea una función que utilice info correctamente
function iniciarServidor(puerto) {
  console.info(`Información: El servidor se ha iniciado correctamente en el puerto ${puerto}.`);
}

// 4. Utiliza table
const productos = [
  { id: 1, nombre: "Teclado", precio: 25 },
  { id: 2, nombre: "Ratón", precio: 15 },
  { id: 3, nombre: "Monitor", precio: 180 }
];
console.table(productos);

// 5. Utiliza group
console.group("Detalles del Pedido #1042");
console.log("Cliente: María López");
console.log("Estado: Enviado");
console.log("Total: $220");
console.groupEnd();

// 6. Utiliza time
console.time("Proceso de procesamiento de datos");
// Simulamos una tarea o bucle
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Proceso de procesamiento de datos");

// 7. Valida con assert si un número es positivo
function verificarNumeroPositivo(numero) {
  console.assert(numero > 0, `El número ${numero} no es positivo.`);
}
verificarNumeroPositivo(-5); // Mostrará un mensaje de error en consola
verificarNumeroPositivo(10); // No mostrará nada porque la condición es verdadera

// 8. Utiliza count
function registrarAcceso(usuario) {
  console.count(`Accesos registrados para ${usuario}`);
}
registrarAcceso("Carlos");
registrarAcceso("Ana");
registrarAcceso("Carlos");

// 9. Utiliza trace
function pasoA() {
  pasoB();
}

function pasoB() {
  console.trace("Rastreo de la pila de llamadas (stack trace):");
}

pasoA();

// 10. Utiliza clear
// Limpia la consola cuando sea necesario
console.clear();