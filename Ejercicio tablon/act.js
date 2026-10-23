class Pelicula {

  //propiedad privada
  #precioBase;

  constructor(titulo, genero) {
    this.titulo = titulo;
    this.genero = genero;
    this.#precioBase = 5; // Inicializado a $5 
  }

  // Getter para calcular y obtener el precio total
  get precio() {
    if (this.genero === "Terror" || this.genero === "Estreno") {
      return this.#precioBase + 2;
    }
    return this.#precioBase;
  }

  // Setter para actualizar el género con validación
  set genero(nuevoGenero) {
    if (typeof nuevoGenero !== "string" || nuevoGenero.trim() === "") {
      throw new TypeError("El género no puede estar vacío");
    }
    this._genero = nuevoGenero;
  }

  // Getter para consultar el género actual
  get genero() {
    return this._genero;
  }
}


console.log("--- Inicio de Pruebas ---");

// Crear el objeto de prueba
const miPelicula = new Pelicula("El Conjuro", "Terror");

console.log(`Película: ${miPelicula.titulo}`);
console.log(`Género actual: ${miPelicula.genero}`);
console.log(`Precio: $${miPelicula.precio}`); // Esperado: 7

// Cambiar el género sin el recargo
miPelicula.genero = "Comedia";
console.log(`\nNuevo género: ${miPelicula.genero}`);
console.log(`Nuevo precio : $${miPelicula.precio}`); // Esperado: 5

// Probar el setter con un valor vacío dentro de try...catch
console.log("\n--- Prueba de Validación ---");

try {
  // forzar el error
  miPelicula.genero = "";
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`Error capturado correctamente: "${error.message}"`);
  } else {
    console.error("Error inesperado:", error);
  }
}

// Verificar que el género no cambió tras el intento fallido
console.log(`Género después del intento fallido: ${miPelicula.genero}`);