let saldo = 500;

function checkBalance() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(saldo);
        }, 1000);
    });
}

function withdrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount <= saldo) {
                saldo -= amount;
                resolve(saldo);
            } else {
                reject("Fondos insuficientes");
            }
        }, 2000);
    });
}

async function cajero() {
    try {
        const saldoInicial = await checkBalance();
        console.log("Saldo disponible:", saldoInicial + "$");

        console.log("Retirando 300$...");
        let saldoRestante = await withdrawMoney(300);
        console.log("Operación exitosa, saldo restante:", saldoRestante + "$");

        console.log("Retirando 300$...");
        saldoRestante = await withdrawMoney(300);
        console.log("Operación exitosa, saldo restante:", saldoRestante + "$");

    } catch (error) {
        console.log("Error:", error);
    }
}

cajero();