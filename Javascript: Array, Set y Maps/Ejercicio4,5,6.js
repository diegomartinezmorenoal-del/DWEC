let libros = new Set([
    "Don Quijote",
    "Harry Potter",
    "El Principito",
    "La Odisea",
    "Drácula"
]);

console.log("EJERCICIO 4");
console.log("Libros:", [...libros]);

libros.add("El Hobbit");
libros.add("Harry Potter");

console.log("EJERCICIO 5");
console.log("Libros actualizados:", [...libros]);

libros.delete("Drácula");

console.log("EJERCICIO 6");
console.log("Después de eliminar Drácula:", [...libros]);
