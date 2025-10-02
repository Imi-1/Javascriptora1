function getMaxId(){
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=1")
    .then(response => response.json())
    .then(data=> maxId=data.count)
    .catch(err => console.error("Error fetching max ID:", err));
}

function generateRandomPoke(){
    const id = Math.floor(Math.random()*maxId+1)
    console.log(id)
    createPokemon(id)
}

function  createPokemon(pokemon){
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon.toString().toLowerCase().trim()+"/"
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Pokémon not found");
            return response.json();
        })
        .then(data => {
            document.getElementById("pokeName").textContent = data.name.toUpperCase();
            document.getElementById("pokeImage").src = data.sprites.front_default;
            document.getElementById("pokeType").textContent = "Type: " + data.types.map(t => t.type.name).join(", ");
 
            document.getElementById("hp").textContent = data.stats.find(s => s.stat.name === "hp").base_stat;
            document.getElementById("attack").textContent = data.stats.find(s => s.stat.name === "attack").base_stat;
            document.getElementById("defense").textContent = data.stats.find(s => s.stat.name === "defense").base_stat;
            document.getElementById("speed").textContent = data.stats.find(s => s.stat.name === "speed").base_stat;
 
            document.getElementById("searchInput").value = "";
        })
        .catch(err => {
            console.error("Error fetching Pokémon:", err);
            alert("Pokémon not found. Check the name!");
        });


}



getMaxId().then(generateRandomPoke)


document.getElementById("refresh").addEventListener("click", (generateRandomPoke))

document.getElementById("searchBtn").addEventListener("click",() =>{
    const pokemon = document.getElementById("searchInput").value
    if (pokemon)createPokemon(pokemon)
})

document.getElementById("searchInput").addEventListener("keypress",e =>{
    if(e.key==="Enter"){
        const pokemon = document.getElementById("searchInput").value
        if (pokemon)createPokemon(pokemon)
    }
})
