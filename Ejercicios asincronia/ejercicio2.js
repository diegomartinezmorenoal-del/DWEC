function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completada");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completada");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completada");
        callback();
    }, 1000);
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("Todas las tareas terminadas");
        });
    });
});