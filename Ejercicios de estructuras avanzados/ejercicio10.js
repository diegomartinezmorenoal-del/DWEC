
let usuarios = new Map([
    [1, { nombre: "Diego", edad: 19, email: "diego@gmail.com" }],
    [2, { nombre: "Antonio", edad: 17, email: "antonio@gmail.com" }],
    [3, { nombre: "Carlos", edad: 22, email: "carlos@gmail.com" }]
]);

// PASO 1: Convertimos el Map en un objeto
let objetoUsuarios = Object.fromEntries(usuarios);

console.log("Objeto de usuarios:");
console.log(objetoUsuarios);

// PASO 2: Convertimos el objeto en un Map
// Utilizamos el email como clave
let nuevoMapa = new Map(
    Object.entries(objetoUsuarios).map(([id, usuario]) => [
        usuario.email,
        usuario
    ])
);

console.log("Nuevo mapa de usuarios:");
console.log(nuevoMapa);
