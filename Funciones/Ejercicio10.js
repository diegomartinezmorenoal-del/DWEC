function factorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log("10. Factorial de 5:", factorial(5));