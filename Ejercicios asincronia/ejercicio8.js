function tarea1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tarea 1 completada");
            resolve();
        }, 1000);
    });
}

function tarea2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tarea 2 completada");
            resolve();
        }, 2000);
    });
}

function tarea3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tarea 3 completada");
            resolve();
        }, 3000);
    });
}

Promise.all([tarea1(), tarea2(), tarea3()])
    .then(() => {
        console.log("Todas las promesas resueltas");
    });