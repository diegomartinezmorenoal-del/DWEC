function invertirPalabras(texto) {
    let palabras = texto.split(" ");

    palabras.reverse();

    return palabras.join(" ");
}

console.log(
    "9. Texto invertido:",
    invertirPalabras("Hola mundo")
);