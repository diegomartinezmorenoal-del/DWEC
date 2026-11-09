//2. Sets y Control de Flujo con for...of (2.5 Puntos)
//Dado el siguiente conjunto de datos, que representa una lista de tareas pendientes:JavaScript
//const tareasConDuplicados = ["Comprar pan", "Programar", "Estudiar JS", "Comprar pan", "Estudiar JS", "Comer"];

//Tarea:Cree un nuevo Set llamado tareasUnicas a partir del array dado, eliminando automáticamente los duplicados.Utilice un bucle for...of para iterar sobre tareasUnicas.Dentro del bucle, implemente la lógica para saltarse (no imprimir) la tarea que contenga la palabra "pan" y para detener la ejecución del bucle tan pronto como se encuentre la tarea "Comer".Imprima las tareas restantes en la consola.




const tareasConDuplicados = ["Comprar pan", "Programar", "Estudiar JS", "Comprar pan", "Estudiar JS", "Comer"];

// Creamos un Set para eliminar los duplicados
const tareasUnicas = new Set(tareasConDuplicados);

// Recorremos el Set con un for...of
for (const tarea of tareasUnicas) {

    // Si la tarea contiene la palabra "pan", la saltamos
    if (tarea.includes("pan")) {
        continue;
    }

    // Si encontramos la tarea "Comer", detenemos el bucle
    if (tarea === "Comer") {
        break;
    }

    // Mostramos las tareas restantes
    console.log(tarea);
}