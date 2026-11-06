
let conjuntoA = new Set([1, 2, 3, 4, 5]);
let conjuntoB = new Set([4, 5, 6, 7, 8]);

let union = new Set([...conjuntoA, ...conjuntoB]);

let interseccion = new Set(
    [...conjuntoA].filter(numero => conjuntoB.has(numero))
);

let diferencia = new Set(
    [...conjuntoA].filter(numero => !conjuntoB.has(numero))
);

// Recorremos la unión
console.log("ELEMENTOS DE LA UNION:");
for (let numero of union) {
    console.log(numero);
}

// Recorremos la intersección
console.log("ELEMENTOS DE LA INTERSECCION:");
for (let numero of interseccion) {
    console.log(numero);
}

// Recorremos la diferencia
console.log("ELEMENTOS DE LA DIFERENCIA:");
for (let numero of diferencia) {
    console.log(numero);
}
