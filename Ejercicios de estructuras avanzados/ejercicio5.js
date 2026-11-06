
let conjuntoA = new Set([1, 2, 3, 4, 5]);
let conjuntoB = new Set([4, 5, 6, 7, 8]);

// UNION: juntamos los dos conjuntos
let union = new Set([...conjuntoA, ...conjuntoB]);

// INTERSECCION: elementos que están en ambos
let interseccion = new Set(
    [...conjuntoA].filter(numero => conjuntoB.has(numero))
);

// DIFERENCIA: elementos que están en A pero no en B
let diferencia = new Set(
    [...conjuntoA].filter(numero => !conjuntoB.has(numero))
);

console.log("Unión:", union);
console.log("Intersección:", interseccion);
console.log("Diferencia:", diferencia);
