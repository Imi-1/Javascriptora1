
function $(str){
    return document.getElementById(str);
}


function kereses(){    
    //alert("Működik!")
    let keresett = $("searchInput").value;
    keresett = keresett.trim();
    console.log(keresett);
    keresett = keresett.replaceAll(" ", "+");

    const url = `https://itunes.apple.com/search?term=${keresett}&limit=200&media=music`;

    fetch(url)
    .then( response =>  response.json())
    .then( (data) => {
        // console.log(data);
        const results = data.results;

        $("zenek").innerHTML = "";
        for(let i=0; i<results.length; i++){
            newTableRow(results[i].artistName, results[i].trackName, results[i].releaseDate.substring(0,4), results[i].primaryGenreName);
        }
    })
    
    .catch((error) => {
        console.error("Hiba történt a lekérdezés során: " + error);
    })
}

function newTableRow(eloado, cim, ev, tipus){
    let tr = document.createElement("tr");
    let tdEloado = document.createElement("td");
    let tdCim = document.createElement("td");
    let tdEv = document.createElement("td");
    let tdTipus = document.createElement("td");

    tdEloado.innerHTML = eloado;
    tdCim.innerHTML = cim;
    tdEv.innerHTML = ev;
    tdTipus.innerHTML = tipus;

    tr.appendChild(tdEloado);
    tr.appendChild(tdCim);
    tr.appendChild(tdEv);
    tr.appendChild(tdTipus);
    $("zenek").appendChild(tr);
}

$("searchBtn").addEventListener("click", kereses);
$("searchInput").addEventListener("keypress", event => {
    if(event.key === "Enter"){
        kereses();
    }
});