let dia = parseInt(prompt("Introduce tu día de nacimiento:"));
let mes = parseInt(prompt("Introduce tu mes de nacimiento:"));
let anio = parseInt(prompt("Introduce tu año de nacimiento:"));

let fecha = new Date(anio, mes - 1, dia);
let hoy = new Date();

// Comprobar que la fecha sea correcta
if (
    fecha.getFullYear() !== anio ||
    fecha.getMonth() !== mes - 1 ||
    fecha.getDate() !== dia ||
    fecha > hoy ||
    anio <= 0
) {
    console.log("Error: fecha no válida");
} else {
    let numero = dia + mes + anio;

    // Sumar las cifras hasta obtener un dígito
    while (numero > 9) {
        let suma = 0;

        while (numero > 0) {
            suma += numero % 10;
            numero = Math.floor(numero / 10);
        }

        numero = suma;
    }

    console.log("Tu número del tarot es:", numero);
}