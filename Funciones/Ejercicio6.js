function Comunes(array1, array2) {
    let comunes = [];

    for (let elemento of array1) {
        if (array2.includes(elemento) && !comunes.includes(elemento)) {
            comunes.push(elemento);
        }
    }

    return comunes;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

console.log("6. Elementos comunes:", Comunes(array1, array2));