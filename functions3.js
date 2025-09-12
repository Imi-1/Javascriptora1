const jellemzok = [
    "Nagy Mária;164;59",
    "Kiss Géza;177.57;64.5",
    "Tóth Bianka;158.3;49",
    "Kálmán Béla;188.1;79",
    "Rácz Teréz;174.18;62.5",
];

function helykitolto({m}){
    if(m.indexOf(".")>=0){
        let tort =m.substring(m.indexOf(".")+1)
        tort=tort.padEnd(2,"0")
        m=m.substring(0,m.indexOf(".")+1)+tort
    }
    else{
        m+=".00"
    }
    return m
}
for(let i=0; i<jellemzok.length; i++){
    const adat = jellemzok[i].split(";");
    const nev = adat[0];
    const magassag = adat[1];
    const suly = adat[2];

    console.log("Név:"+nev+", Magasság: "+helykitolto(magassag)+", Súly: "+helykitolto(suly));
}