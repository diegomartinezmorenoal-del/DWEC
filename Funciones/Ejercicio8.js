function cuadrados(array) {
    let resultado = [];

    for (let numero of array) {
        resultado.push(numero ** 2);
    }

    return resultado;
}

let numerosCuadrado = [2, 3, 4, 5];

console.log("8. Números al cuadrado:", cuadrados(numerosCuadrado));