async function obtenerPublicaciones() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    const datos = await response.json();

    console.log(datos);
}

obtenerPublicaciones();