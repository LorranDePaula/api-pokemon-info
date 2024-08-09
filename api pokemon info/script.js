document.getElementById('searchButton').addEventListener('click', async () => {
    const pokemonName = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Pokémon not found');
        
        const data = await response.json();
        
        document.getElementById('pokemonName').textContent = data.name.toUpperCase();
        document.getElementById('pokemonImage').src = data.sprites.front_default;
        document.getElementById('pokemonType').textContent = `Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
        document.getElementById('pokemonHeight').textContent = `Height: ${data.height / 10} m`;
        document.getElementById('pokemonWeight').textContent = `Weight: ${data.weight / 10} kg`;
        
    } catch (error) {
        alert(error.message);
    }
});

