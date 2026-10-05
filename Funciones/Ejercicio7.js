function sumarPares(array) {
    let suma = 0;

    for (let numero of array) {
        if (numero % 2 === 0) {
            suma += numero;
        }
    }

    return suma;
}

let numerosPares = [1, 2, 3, 4, 5, 6];

console.log("7. Suma de pares:", sumarPares(numerosPares));