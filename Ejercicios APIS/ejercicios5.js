fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        title: "Título actualizado",
        body: "Contenido actualizado",
        userId: 1
    })
})
    .then(response => response.json())
    .then(datos => {
        console.log("Publicación actualizada:", datos);
    })
    .catch(error => {
        console.log("Error:", error);
    });