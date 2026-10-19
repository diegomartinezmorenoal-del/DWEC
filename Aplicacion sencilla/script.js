
function crearContador() {
    let contador = 0;

    function incrementar() {
        contador++;
    }

    function mostrar() {
        document.getElementById("resultado").textContent =
            "El número es: " + contador;
    }

    return {
        incrementar,
        mostrar
    };
}

let acciones = crearContador();

document.getElementById("incrementar").addEventListener("click", function() {
    acciones.incrementar();
});

document.getElementById("mostrar").addEventListener("click", function() {
    acciones.mostrar();
});
