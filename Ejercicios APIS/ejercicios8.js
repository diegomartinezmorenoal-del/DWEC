async function obtenerTiempo() {
    const apiKey = "TU_API_KEY";
    const ciudad = "Sevilla";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al consultar el tiempo");
        }

        const datos = await response.json();

        console.log("Ciudad:", datos.name);
        console.log("Temperatura:", datos.main.temp + " ºC");
        console.log("Tiempo:", datos.weather[0].description);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

obtenerTiempo();