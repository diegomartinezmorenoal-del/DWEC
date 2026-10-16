try {
  let resultado = variableInexistente + 5;
} catch (error) {
  console.error("Excepción capturada:", error.message);
}