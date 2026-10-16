function evaluarSaldo(saldo, retiro) {
  if (typeof saldo !== "number" || typeof retiro !== "number") {
    throw new TypeError("Los argumentos deben ser números.");
  }
  if (retiro <= 0) {
    throw new RangeError("El monto a retirar debe ser mayor que cero.");
  }
  if (retiro > saldo) {
    throw new Error("Saldo insuficiente para realizar el retiro.");
  }
  return saldo - retiro;
}

try {
  evaluarSaldo(100, -50);
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Error de Tipo:", error.message);
  } else if (error instanceof RangeError) {
    console.error("Error de Rango:", error.message);
  } else {
    console.error("Error General:", error.message);
  }
}