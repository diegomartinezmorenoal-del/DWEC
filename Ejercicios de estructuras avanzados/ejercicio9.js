
let usuarios = new Map([
    [1, { nombre: "Diego", edad: 19, email: "diego@gmail.com" }],
    [2, { nombre: "Antonio", edad: 17, email: "antonio@gmail.com" }],
    [3, { nombre: "Carlos", edad: 22, email: "carlos@gmail.com" }]
]);

// Filtramos los usuarios mayores de edad
let mayoresEdad = [...usuarios.values()].filter(usuario => usuario.edad >= 18);

// Obtenemos sus emails
let emails = mayoresEdad.map(usuario => usuario.email);

// Convertimos los emails en un Set
let emailsSet = new Set(emails);

console.log("Emails de mayores de edad:", emailsSet);
