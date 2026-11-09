//1. Clases, Propiedades y Métodos (2.5 Puntos)
//Diseñe una clase llamada Película con las siguientes especificaciones:
//Constructor: Acepta titulo, genero (String) y una propiedad privada llamada #precioBase (Number), que se inicializa a $5.
//Propiedad Privada: #precioBase.
//Método Getter precio(): Devuelve el precio total de la película. Si el género es "Terror" o "Estreno", el precio debe ser el #precioBase más un recargo de $2. En cualquier otro caso, debe devolver solo el #precioBase.
//Método Setter genero: Permite cambiar el género, pero sólo si el nuevo género es una cadena de texto no vacía. En caso contrario, debe lanzar un TypeError con el mensaje: "El género no puede estar vacío".
//Tarea: Implemente la clase, cree un objeto de prueba y pruebe el setter con un valor vacío dentro de un bloque try...catch.Las pruebas son parte del examen

class Pelicula {

    // Constructor
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.#precioBase = 5;
    }

    // Propiedad privada
    #precioBase;

    // Getter del precio
    get precio() {
        if (this.genero === "Terror" || this.genero === "Estreno") {
            return this.#precioBase + 2;
        } else {
            return this.#precioBase;
        }
    }

    // Setter del género
    set genero(nuevoGenero) {
        if (typeof nuevoGenero !== "string" || nuevoGenero.trim() === "") {
            throw new TypeError("El género no puede estar vacío");
        }

        this._genero = nuevoGenero;
    }

    // Getter del género
    get genero() {
        return this._genero;
    }
}


// Creamos un objeto de prueba
const pelicula1 = new Pelicula("Saw", "Terror");

// Mostramos los datos
console.log("Título:", pelicula1.titulo);
console.log("Género:", pelicula1.genero);
console.log("Precio:", pelicula1.precio + "€");

// Probamos el setter con un valor vacío
try {
    pelicula1.genero = "";
} catch (error) {
    console.log("Error:", error.message);
}