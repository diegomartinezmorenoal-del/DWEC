function sumarYProcesar(callback, ...numbers) {
  const suma = numbers.reduce((total, n) => total + n, 0);
  // Invocamos el callback pasándole el resultado de la suma
  callback(suma);
}

// Ejemplo de uso con callback que imprime en consola
sumarYProcesar((resultado) => {
  console.log(`El resultado de la suma es: ${resultado}`);
}, 10, 20, 30); 

// Ejemplo con un callback que realiza otra operación
function formatearComoMoneda(valor) {
  console.log(`Total: $${valor.toFixed(2)}`);
}

sumarYProcesar(formatearComoMoneda, 15.5, 24.5); 