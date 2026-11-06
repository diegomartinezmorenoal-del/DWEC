
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// Elevamos todos los números al cubo
let cubos = numeros.map(numero => numero ** 3);

// Filtramos solamente los números pares
let pares = cubos.filter(numero => numero % 2 === 0);

console.log("Números originales:", numeros);
console.log("Números al cubo:", cubos);
console.log("Cubos pares:", pares);
