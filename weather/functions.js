async function getData(city) {
    const key="4754d27ac0ae9ed76410a851ea5a6ac2"
    try{
        const url=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.toLowerCase().trim().toString()+"&appid="+key+"&units=metric&lang=hu")

        if (!url.ok) {
            throw new Error(url.status + " - " + url.statusText);
        }

        const data= await url.json()
        console.log(data)


        document.getElementById("name").innerText = data.name + ", " + data.sys.country;
        document.getElementById("name").style.backgroundImage = "url('https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png')";
        document.getElementById("currentweather").innerText = data.weather[0].description;
        document.getElementById("temp").innerText = "🌡️ Hőmérséklet: " + data.main.temp + "°C";
        document.getElementById("humidity").innerText = "💧 Páratartalom: " + data.main.humidity + "%";
        document.getElementById("pressure").innerText = "⚖️ Légnyomás: "+ data.main.pressure + "hPa";
        document.getElementById("wind").innerText = "🌬️ Szélsebesség: " + data.wind.speed + " m/s";
        document.getElementById("err").innerText=""
        



    }
    catch (err) {
        console.error("Hiba történt:", err);
        alert("Nem jó a megadott város!");
                
        const list = ["name","currentweather","temp","humidity","pressure","wind"]
        for(let i of list){
            const divcontent=document.getElementById(i)
            divcontent.innerText="-"
        }
        document.getElementById("name").style.backgroundImage = "";
        document.getElementById("err").innerText="Nem sikerült betölteni a várost!"

    }
    
}


document.getElementById("searchBtn").addEventListener("click",() =>{
    const city = document.getElementById("searchField").value
    if (city)getData(city)
})

document.getElementById("searchField").addEventListener(("keypress"),e =>{
    if(e.key==="Enter"){
        const city=document.getElementById("searchField").value
        if(city)getData(city)
    }
})
getData("london")