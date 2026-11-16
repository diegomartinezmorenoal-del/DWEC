
const viajes = [
    {
        clase_pais: "usa",
        ciudad_h2: "New York,NY",
        detalle_precio_total: "1,899",
        detalle_num_noches: 7,
        precio_noche: 275,
        ruta_imagen: "./photos/newyork.jpeg",
        pie_imagen: " Puente Brooklyn"
    },
    {
        clase_pais: "paris",
        ciudad_h2: "Paris,Francia",
        detalle_precio_total: "1,499",
        detalle_num_noches: 5,
        precio_noche: 300,
        ruta_imagen: "./photos/paris.jpeg",
        pie_imagen: " Notre Dame de Paris"
    },
    {
        clase_pais: "uk",
        ciudad_h2: "Londres,UK",
        detalle_precio_total: "2,199",
        detalle_num_noches: 5,
        precio_noche: 440,
        ruta_imagen: "./photos/london.jpeg",
        pie_imagen: " Torre de Londres"
    }
];

// Buscamos el título
const titulo = document.getElementById("mostrar");

let visible = false;

// Evento para mostrar y ocultar
titulo.addEventListener("click", function() {

    if (visible == false) {

        mostrarViajes();

        titulo.textContent = "OCULTAR VIAJES";
        visible = true;

    } else {

        const lista = document.querySelector("body > ul");

        if (lista) {
            lista.remove();
        }

        titulo.textContent = "MOSTRAR VIAJES";
        visible = false;
    }

});


function mostrarViajes() {

    // Creamos la lista principal
    const lista = document.createElement("ul");

    // Recorremos los viajes
    viajes.forEach(function(viaje) {

        const elemento = document.createElement("li");

        elemento.className = "viaje " + viaje.clase_pais;

        // Ciudad
        const ciudad = document.createElement("h2");
        ciudad.textContent = viaje.ciudad_h2;

        // Precio total
        const detalle = document.createElement("span");
        detalle.className = "detalle";

        detalle.textContent =
            viaje.detalle_precio_total + "€ por " +
            viaje.detalle_num_noches + " noches ";

        // Precio por noche
        const precioNoche = document.createElement("span");
        precioNoche.className = " precio-noche";

        precioNoche.textContent =
            viaje.precio_noche + "€ por noche ";

        // Botón reserva
        const boton = document.createElement("button");
        boton.className = "reserva";
        boton.textContent = "Resérvalo ya!";

        // Lista de fotografías
        const fotos = document.createElement("ul");
        fotos.className = "fotos";

        const foto = document.createElement("li");

        // Imagen
        const imagen = document.createElement("img");
        imagen.src = viaje.ruta_imagen;

        // Pie de imagen
        const pie = document.createElement("span");
        pie.textContent = viaje.pie_imagen;


        // APARTADO B: DESTACAR PRECIO

        imagen.addEventListener("mouseenter", function() {
            precioNoche.classList.add("destacado");
        });

        imagen.addEventListener("mouseleave", function() {
            precioNoche.classList.remove("destacado");
        });

        pie.addEventListener("mouseenter", function() {
            precioNoche.classList.add("destacado");
        });

        pie.addEventListener("mouseleave", function() {
            precioNoche.classList.remove("destacado");
        });


        // APARTADO C: RESERVA

        boton.addEventListener("click", function() {

            if (elemento.querySelector(".formulario-reserva")) {
                return;
            }

            const formulario = document.createElement("div");
            formulario.className = "formulario-reserva";

            const campoNombre = document.createElement("input");
            campoNombre.type = "text";
            campoNombre.placeholder = "Escribe tu nombre";

            const aceptar = document.createElement("button");
            aceptar.textContent = "Aceptar";

            aceptar.addEventListener("click", function() {

                const nombre = campoNombre.value.trim();

                if (nombre === "") {

                    alert("Debes introducir tu nombre");

                } else {

                    localStorage.setItem("nombreUsuario", nombre);

                    alert("Reserva realizada. Bienvenido " + nombre);

                    formulario.remove();
                }

            });

            formulario.appendChild(campoNombre);
            formulario.appendChild(aceptar);

            boton.after(formulario);

        });


        // Añadimos imagen y pie
        foto.appendChild(imagen);
        foto.appendChild(pie);

        fotos.appendChild(foto);

        // Añadimos todo al viaje
        elemento.appendChild(ciudad);
        elemento.appendChild(detalle);
        elemento.appendChild(precioNoche);
        elemento.appendChild(boton);
        elemento.appendChild(fotos);

        // Añadimos el viaje a la lista
        lista.appendChild(elemento);

    });

    // Colocamos la lista debajo del título
    titulo.after(lista);
}
