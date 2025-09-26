function newTableRow(atck,def,speed,hp,type) {
    let tr = document.createElement("tr");
    let tdAtck = document.createElement("td");
    let tdDef = document.createElement("td");
    let tdSpeed = document.createElement("td");
    let tdHp = document.createElement("td");
    let tdType = document.createElement("td");

    tdAtck.innerHTML = atck;
    tdDef.innerHTML = def;
    tdSpeed.innerHTML = speed;
    tdHp.innerHTML = hp;
    tdType.innerHTML = type;

    document.getElementById("pokeData").appendChild(tr);
    tr.appendChild(tdAtck);
    tr.appendChild(tdDef);
    tr.appendChild(tdSpeed);
    tr.appendChild(tdHp);
    tr.appendChild(tdType);
}

newTableRow(45,49,45,44,"grass");

function generatePokemon(){
    const url = "https://pokeapi.co/api/v2/nature/{id or name}"
}

// https://pokeapi.co/api/v2/nature/{id or name}
// function kereses(){    
//     //alert("Működik!")
//     let keresett = $("searchInput").value;
//     keresett = keresett.trim();
//     console.log(keresett);
//     keresett = keresett.replaceAll(" ", "+");

//     const url = `https://itunes.apple.com/search?term=${keresett}&limit=200&media=music`;

//     fetch(url)
//     .then( response =>  response.json())
//     .then( (data) => {
//         // console.log(data);
//         const results = data.results;

//         console.log(results)
//         $("zenek").innerHTML = "";
//         for(let i=0; i<results.length; i++){
//             newTableRow(results[i].artistName, results[i].trackName, results[i].releaseDate.substring(0,4), results[i].primaryGenreName, results[i].trackTimeMillis, results[i].previewUrl);
//         }
//     })