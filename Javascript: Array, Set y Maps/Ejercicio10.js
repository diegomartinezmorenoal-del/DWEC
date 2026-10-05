let numeros = [1, 2, 3, 4, 5, 2, 3];

let conjunto = new Set(numeros);

let mapa = new Map();

mapa.set("Numeros", conjunto);

console.log("10. Array original:", numeros);
console.log("Set:", conjunto);
console.log("Map:", mapa);