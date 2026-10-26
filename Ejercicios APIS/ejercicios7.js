fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
    .then(response => {
        if (!response.ok) {
            throw new Error("No se ha podido borrar");
        }

        console.log("Publicación borrada correctamente");
        console.log("Estado HTTP:", response.status);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });