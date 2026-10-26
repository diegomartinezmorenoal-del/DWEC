console.log("Inicio");

setTimeout(() => console.log("setTimeout ejecutado"), 0);

Promise.resolve().then(() => console.log("Promesa resuelta"));

console.log("Fin");