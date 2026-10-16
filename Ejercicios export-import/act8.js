// 8. Importa una función, una constante y una clase por defecto
import miModulo from './act7.js';

// Acceso a los elementos exportados por defecto:
console.log(miModulo.restar(10, 4));
console.log(miModulo.IVA);
const miAuto = new miModulo.Coche("Toyota"); 