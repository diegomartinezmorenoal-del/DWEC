function createCounter(valorInicial = 0) {
  let contador = valorInicial; // Variable privada mediante closure

  return {
    increment: function() {
      contador++;
      return contador;
    },
    decrement: function() {
      contador--;
      return contador;
    },
    getValue: function() {
      return contador;
    }
  };
}

const miContador = createCounter(10);

console.log(miContador.getValue());   
console.log(miContador.increment()); 
console.log(miContador.increment()); 
console.log(miContador.decrement()); 
console.log(miContador.getValue());   