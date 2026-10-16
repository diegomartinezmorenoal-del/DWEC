const valores = ["3.14", "42", "hola", null, "10.5", undefined, "100.2.3"];

valores.forEach((item, index) => {
  try {
    if (item === null || item === undefined || isNaN(Number(item))) {
      throw new Error(`El valor '${item}' no se puede convertir a float.`);
    }
    const numeroFloat = parseFloat(item);
    console.log(`[Índice ${index}] Convertido con éxito: ${numeroFloat}`);
  } catch (error) {
    console.error(`[Índice ${index}] Error: ${error.message}`);
  }
});