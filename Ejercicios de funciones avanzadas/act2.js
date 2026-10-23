// Opción tradicional
const multiplicar3 = function(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
};

// Opción concisa con funciones flecha
const multiplicar3Flecha = a => b => c => a * b * c;

console.log(multiplicar3(2)(3)(4));       
console.log(multiplicar3Flecha(2)(3)(4)); 