// Función genérica
function aplicarDescuento(porcentaje, precio) {
  return precio - (precio * (porcentaje / 100));
}

// Función parcial
function crearCalculadoraDescuento(porcentaje) {
  return function(precio) {
    return aplicarDescuento(porcentaje, precio);
  };
}

// Creamos funciones con precios preconfigurados
const aplicarIVA21 = crearCalculadoraDescuento(21);
const aplicarDescuento10 = crearCalculadoraDescuento(10);

console.log(aplicarDescuento10(100)); 
console.log(aplicarIVA21(100));       