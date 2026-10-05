function convertirMayusculas(array) {
    let resultado = [];

    for (let palabra of array) {
        resultado.push(palabra.toUpperCase());
    }

    return resultado;
}

let palabras = ["hola", "mundo", "javascript"];

console.log("4. Mayúsculas:", convertirMayusculas(palabras));