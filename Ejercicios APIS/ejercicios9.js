async function obtenerPokemon() {
    try {
        // 1. Obtener los datos del Pokemon
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/pikachu"
        );

        if (!response.ok) {
            throw new Error("Error al obtener el Pokemon");
        }

        const pokemon = await response.json();

        console.log("Pokemon:", pokemon.name);
        console.log("Altura:", pokemon.height);
        console.log("Peso:", pokemon.weight);

        // 2. Obtener los datos de la especie
        const responseEspecie = await fetch(pokemon.species.url);

        if (!responseEspecie.ok) {
            throw new Error("Error al obtener la especie");
        }

        const especie = await responseEspecie.json();

        console.log("Especie:", especie.name);

        // 3. Obtener la cadena evolutiva
        const responseEvolucion = await fetch(
            especie.evolution_chain.url
        );

        if (!responseEvolucion.ok) {
            throw new Error("Error al obtener la evolución");
        }

        const evolucion = await responseEvolucion.json();

        // 4. Mostrar la cadena evolutiva
        console.log("Cadena evolutiva:");

        let actual = evolucion.chain;

        console.log(actual.species.name);

        while (actual.evolves_to.length > 0) {
            actual = actual.evolves_to[0];
            console.log("->", actual.species.name);
        }

    } catch (error) {
        console.log("Error:", error.message);
    }
}

obtenerPokemon();