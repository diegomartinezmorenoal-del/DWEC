function validarEdad(edad) {
  if (edad < 0) {
    throw new Error("La edad no puede ser un número negativo.");
  }
  return `Edad válida: ${edad}`;
}

try {
  validarEdad(-5);
} catch (error) {
  console.error(error.message);
}