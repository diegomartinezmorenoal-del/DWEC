fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Mi primera publicación",
        body: "Esta es una publicación de prueba",
        userId: 1
    })
})
    .then(response => response.json())
    .then(datos => {
        console.log("Publicación creada:", datos);
    })
    .catch(error => {
        console.log("Error:", error);
    });