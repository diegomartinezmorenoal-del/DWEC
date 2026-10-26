function waitSeconds(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, segundos * 1000);
    });
}

async function finalizar() {
    await waitSeconds(3);
    console.log("Tiempo finalizado");
}

finalizar();