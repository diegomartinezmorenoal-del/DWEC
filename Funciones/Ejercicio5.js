function esPrimo(numero) {

    if (numero < 2) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("5. ¿Es primo el 7?:", esPrimo(7));
console.log("5. ¿Es primo el 10?:", esPrimo(10));