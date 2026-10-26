function firstTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Primera tarea completada");
            resolve();
        }, 1000);
    });
}

function secondTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Segunda tarea completada");
            resolve();
        }, 2000);
    });
}

function thirdTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tercera tarea completada");
            resolve();
        }, 1500);
    });
}

async function executeTasks() {
    await firstTask();
    await secondTask();
    await thirdTask();
}

executeTasks();