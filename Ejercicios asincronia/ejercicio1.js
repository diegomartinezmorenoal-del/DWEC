function saludar(nombre, callback) {
    setTimeout(() => {
        callback(nombre);
    }, 2000);
}

saludar("Diego", (nombre) => {
    console.log("Hola, " + nombre);
});