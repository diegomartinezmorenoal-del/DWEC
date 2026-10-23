// 1. Expandir array como argumentos de una función
const numeros = [5, 12, 8, 130, 44];
const numeroMaximo = Math.max(...numeros);
console.log("Número máximo:", numeroMaximo);

const grupoA = ["Ana", "Juan"];
const grupoB = ["Pedro", "Elena"];
const todos = [...grupoA, ...grupoB, "Carlos"];
console.log("Lista completa:", todos); 

// 3. Clonar y fusionar objetos
const usuario = { nombre: "Antonio", rol: "Developer" };
const usuarioActualizado = { ...usuario, activo: true, rol: "Lead Developer" };
console.log("Usuario actualizado:", usuarioActualizado);
