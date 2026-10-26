fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la petición");
        }

        return response.json();
    })
    .then(datos => {
        console.log(datos);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });