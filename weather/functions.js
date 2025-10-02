const key="4754d27ac0ae9ed76410a851ea5a6ac2"

async function getData(city) {
    const url=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.toLowerCase().trim().toString()+"&appid="+key)

    const data= await url.json()
    console.log(data)
}

document.getElementById("searchField").addEventListener(("keypress"),e =>{
    if(e.key==="Enter"){
        const city=document.getElementById("searchField").value
        if(city)getData(city)
    }
})
getData("london")