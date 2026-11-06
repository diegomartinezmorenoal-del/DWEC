
// Array de precios de productos
let precios = [10, 20, 30, 40, 50];

// MAP
let preciosAumentados = precios.map(precio => precio * 1.10);

console.log("Precios aumentados:", preciosAumentados);

// FILTER
let preciosFiltrados = precios.filter(precio => precio > 30);

console.log("Precios mayores de 30:", preciosFiltrados);

// REDUCE: sumamos todos los precios
let total = precios.reduce((acumulador, precio) => acumulador + precio, 0);

console.log("Total de los precios:", total);
