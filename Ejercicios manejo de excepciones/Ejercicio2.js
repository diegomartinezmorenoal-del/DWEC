try {
  console.log("Ejecutando operaciones...");
  JSON.parse("{ JSON mal formado }");
} catch (error) {
  console.error("Error al procesar JSON:", error.message);
} finally {
  console.log("Bloque finally: Esto se ejecuta siempre, haya error o no.");
}