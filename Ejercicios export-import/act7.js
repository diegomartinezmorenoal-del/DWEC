// 7. Exporta una función, una constante y una clase por defecto en un solo objeto

function restar(a, b) {
  return a - b;
}

const IVA = 0.21;

class Coche {
  constructor(marca) {
    this.marca = marca;
  }
}

// Exportación por defecto agrupada:
export default {
  restar,
  IVA,
  Coche
};