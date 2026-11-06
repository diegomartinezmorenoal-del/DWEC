
// FLAT: tenemos un array dentro de otro array
let grupos = [[1, 2], [3, 4], [5, 6]];

// Eliminamos un nivel de arrays
let numeros = grupos.flat();

console.log("Array con flat:", numeros);


// FLATMAP: multiplicamos cada número por 2
// y después aplanamos el resultado
let valores = [1, 2, 3, 4];

let resultado = valores.flatMap(numero => [numero, numero * 2]);

console.log("Array con flatMap:", resultado);
