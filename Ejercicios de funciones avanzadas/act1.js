function crearSaludador(saludo) {
  return function(nombre) {
    return `${saludo}, ${nombre}!`;
  };
}

const saludarHola = crearSaludador("Hola");
console.log(saludarHola("Antonio")); 
console.log(saludarHola("María"));   