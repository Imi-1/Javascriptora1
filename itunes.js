
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

        console.log(results)
        $("zenek").innerHTML = "";
        for(let i=0; i<results.length; i++){
            newTableRow(results[i].artistName, results[i].trackName, results[i].releaseDate.substring(0,4), results[i].primaryGenreName, results[i].trackTimeMillis, results[i].previewUrl);
        }
    })
    
    .catch((error) => {
        console.error("Hiba történt a lekérdezés során: " + error);
    })
}

function newTableRow(eloado, cim, ev, tipus, millis, previewUrl){
    ev= ev==undefined?"-":ev.substring(0,4);
    let tr = document.createElement("tr");
    let tdEloado = document.createElement("td");
    let tdCim = document.createElement("td");
    let tdEv = document.createElement("td");
    let tdTipus = document.createElement("td");
    let tdHossz = document.createElement("td")

    tdEloado.innerHTML = eloado;
    tdCim.innerHTML = cim;
    tdEv.innerHTML = ev;
    tdTipus.innerHTML = tipus;
    tdHossz.innerHTML=millis2TimeFormat(millis)
    tdCim.classList +="cim"


    tdCim.onclick = () => {

        if($("lejatszo")!=null){
            $("lejatszo").remove();
        }
        const lejatszo = document.createElement("audio");
        lejatszo.id="lejatszo";
        lejatszo.controls = true;
        lejatszo.autoplay = true;

        const source = document.createElement("source");
        source.src = previewUrl;
        lejatszo.appendChild(source);
        $("zene-lejatszo").appendChild(lejatszo);
    }

    tr.appendChild(tdEloado);
    tr.appendChild(tdCim);
    tr.appendChild(tdEv);
    tr.appendChild(tdTipus);
    tr.appendChild(tdHossz)
    $("zenek").appendChild(tr);


}

function millis2TimeFormat(input){
    let h= Math.floor(input/(60*60*1000))
    input = input - h*60*60*1000
    let m= Math.floor(input/(60*1000))
    input = input - m*60*1000
    let s= Math.floor(input/1000)
    let ms = input%1000

    let str = ""
    if(h>0){
        str += h.toString().padStart(2,"0") + ":"
        str += m.toString().padStart(2,"0") + ":"
        str += s.toString().padStart(2,"0") + ":"
        str += ms.toString().padStart(3,"0") + ":"

        return str
    }
}

$("searchBtn").addEventListener("click", kereses);
$("searchInput").addEventListener("keypress", event => {
    if(event.key === "Enter"){
        kereses();
    }
});