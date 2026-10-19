
function crearCuentaBancaria(titular, saldoInicial) {
    let saldo = saldoInicial;
    let historial = [];

    // Función para registrar operaciones
    function registrarOperacion(tipo, monto) {
        historial.push({
            tipo: tipo,
            monto: monto,
            fecha: new Date().toLocaleString()
        });
    }

    // Métodos 
    return {
        obtenerTitular: function () {
            return titular;
        },

        verSaldo: function () {
            return "Saldo disponible: $" + saldo;
        },

        depositar: function (monto) {
            if (monto <= 0) {
                return "El monto debe ser mayor a 0";
            }

            saldo += monto;
            registrarOperacion("Depósito", monto);

            return "Depósito realizado. " + this.verSaldo();
        },

        retirar: function (monto) {
            if (monto <= 0) {
                return "El monto debe ser mayor a 0";
            }

            if (monto > saldo) {
                return "Fondos insuficientes";
            }

            saldo -= monto;
            registrarOperacion("Retiro", monto);

            return "Retiro realizado. " + this.verSaldo();
        },

        verHistorial: function () {
            return historial.map(operacion => ({ ...operacion }));
        }
    };
}

// Crear una cuenta bancaria
const cuenta = crearCuentaBancaria("Diego", 500);

// Probar los métodos
console.log(cuenta.obtenerTitular());
console.log(cuenta.verSaldo());

console.log(cuenta.depositar(100));
console.log(cuenta.retirar(50));

console.log(cuenta.retirar(1000));
console.log(cuenta.depositar(0));

// Mostrar el historial
console.log("Historial de operaciones:");
console.log(cuenta.verHistorial());

console.log(cuenta.saldo);     
console.log(cuenta.historial);
