fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
    });