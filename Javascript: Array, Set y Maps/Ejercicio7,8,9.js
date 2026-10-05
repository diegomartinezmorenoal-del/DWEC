let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

console.log("7. Meses:", meses);



if (meses.has(5)) {
    console.log("8. El mes número 5 es:", meses.get(5));
} else {
    console.log("El mes no existe");
}


meses.set("Verano", ["Junio", "Julio", "Agosto"]);

console.log("9. Meses de verano:", meses.get("Verano"));
