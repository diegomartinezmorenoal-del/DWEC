function operacionInestable() {
  if (Math.random() > 0.2) {
    throw new Error("Fallo de conexión en el servidor.");
  }
  return "¡Conexión exitosa!";
}

function ejecutarConReintentos(fn, maxReintentos = 10) {
  let intentos = 0;

  while (intentos < maxReintentos) {
    try {
      intentos++;
      console.log(`Intento ${intentos}...`);
      const resultado = fn();
      console.log(resultado);
      return resultado;
    } catch (error) {
      console.warn(`Error en el intento ${intentos}: ${error.message}`);
      if (intentos === maxReintentos) {
        throw new Error(`Se alcanzó el límite máximo de ${maxReintentos} reintentos sin éxito.`);
      }
    }
  }
}

try {
  ejecutarConReintentos(operacionInestable, 10);
} catch (error) {
  console.error("Proceso fallido:", error.message);
}