function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve("Número par");
        } else {
            reject("Número impar");
        }
    });
}

verificarNumero(4)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));