
let usuarios = new Map([
    [1, { nombre: "Diego", edad: 19, email: "diego@gmail.com" }],
    [2, { nombre: "Antonio", edad: 17, email: "antonio@gmail.com" }],
    [3, { nombre: "Carlos", edad: 22, email: "carlos@gmail.com" }]
]);

// Creamos un array con los nombres
let nombres = [...usuarios.values()].map(usuario => usuario.nombre);

console.log("Nombres de los usuarios:", nombres);
