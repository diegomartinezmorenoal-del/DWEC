class PropiedadFaltanteError extends Error {
  constructor(propiedad) {
    super(`La propiedad requerida '${propiedad}' no existe en el objeto.`);
    this.name = "PropiedadFaltanteError";
  }
}

function verificarPropiedad(objeto, propiedad) {
  if (!objeto || !Object.prototype.hasOwnProperty.call(objeto, propiedad)) {
    throw new PropiedadFaltanteError(propiedad);
  }
  return true;
}

try {
  const producto = { nombre: "Laptop", precio: 1200 };
  verificarPropiedad(producto, "stock");
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}