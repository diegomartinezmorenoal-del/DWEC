function mayor(array) {
    let maximo = array[0];

    for (let numero of array) {
        if (numero > maximo) {
            maximo = numero;
        }
    }

    return maximo;
}

let numeros = [10, 25, 7, 42, 18];

console.log("2. Mayor:", mayor(numeros));