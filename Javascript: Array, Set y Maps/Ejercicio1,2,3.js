
let animales = ["Perro", "Gato", "León", "Tigre", "Elefante"];

console.log("EJERCICIO 1");
console.log("Animales:", animales);



animales.unshift("Conejo"); // Añade al principio
animales.push("Caballo");   // Añade al final

console.log("EJERCICIO 2");
console.log("Animales actualizados:", animales);



animales.splice(2, 1);

console.log("EJERCICIO 3");
console.log("Después de eliminar el tercero:", animales);
