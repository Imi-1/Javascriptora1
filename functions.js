const autok = ["Audi", "BMW", "Suzuki", "Ford", "Opel", "BYD"]

console.log(autok[3])//Ford
console.log(autok.length)

autok.push("Skoda")
console.log(autok)

autok.pop()
console.log(autok.at(2))//Suzuki
console.log(autok[-1]) //undefined
console.log(autok.at(-1))//Opel

autok.fill("Trabant", 1,4)
console.log(autok)

console.log(autok.find((value)=>{return value=="BYD"}))
console.log(autok.findIndex((value)=>{return value=="Ford"}))

console.log(autok.includes("Audi"))
console.log(autok.indexOf("Ford"))

autok.sort()
console.log(autok)
autok.reverse
console.log(autok)


for(let i=0; i<autok.length; i++){
    console.log(i+",:"+autok[i])
}
autok.forEach((value)=>{
    console.log(value)
})

let szamok = [9,122,-3,5,78]
for(i=0; i<10; i++){
    szamok.push(Math.round(Math.random()*200)-100)
}
console.log(szamok)


let ujTomb = szamok.filter(value=> value%2==0&& value>0)
console.log(ujTomb)

console.log(szamok.find(value=>value>100)!=undefined)

console.log(Math.max(...szamok))//spread operator: ... | fesorolast csinal a tombbol

szamok=[6,...szamok]
console.log(szamok)

function osszead(a,b){
    return a+b
}
function osszead(a,b,c){
    return a+b,c
}

function summary(...param){ //rest parameter: ... | tombbot csinal a felsorolasbol
    let sum=0
    for(let i=0; i<param.length; i++){
        sum+= param[i]
    }
    return sum
}

console.log(summary(2,4))
console.log(summary(2,4,9,2,1))

//map
ujSzamok= szamok.map(value=> value*2+1)
console.log(ujSzamok)

ujAutok = autok.map(value => value.substring(0,2)+"waa")
console.log(ujAutok)