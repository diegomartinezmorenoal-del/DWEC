
// Creamos un Map con información de usuarios
let usuarios = new Map([
    [1, { nombre: "Diego", edad: 19, email: "diego@gmail.com" }],
    [2, { nombre: "Antonio", edad: 17, email: "antonio@gmail.com" }],
    [3, { nombre: "Carlos", edad: 22, email: "carlos@gmail.com" }]
]);

// Recorremos el mapa
usuarios.forEach((usuario, id) => {
    console.log("ID:", id);
    console.log("Nombre:", usuario.nombre);
    console.log("Edad:", usuario.edad);
    console.log("Email:", usuario.email);
    console.log("----------------");
});
