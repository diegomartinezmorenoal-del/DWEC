function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 5) {
                resolve({
                    id: id,
                    nombre: "Usuario " + id
                });
            } else {
                reject("Usuario no encontrado");
            }
        }, 2000);
    });
}

async function mostrarUsuario(id) {
    try {
        const usuario = await getUser(id);
        console.log(usuario);
    } catch (error) {
        console.log("Error:", error);
    }
}

mostrarUsuario(3);