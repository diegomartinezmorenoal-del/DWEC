function contarVocales(texto) {
    let contador = 0;
    let vocales = "aeiouáéíóú";

    for (let letra of texto.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

console.log("3. Número de vocales:", contarVocales("Hola Mundo")); 