let s = "Ez egy szöveg"

let hosszu = `Ez
egy
hosszu
cucc
`

//stringek igazabol tombbok
console.log(s[5])
s[5]="c" //Read only, nem mukodik
console.log(s[5])

//vannak beepitett fuggvenyek
console.log(s.substring(0,7) )//0-tol 6-ig
s=s.substring(0,5)+"c"+s.substring(6)
console.log(s)

console.log("A szoveg hossza: "+s.length)

console.log(s.at(-1)) //utolso karakter
console.log(s.charAt(s.length-1)) //utolso karakter


console.log(s.at(26)) //tulindexelt, undefined
console.log(s.charAt(26)) //tulindexelt, ""

console.log(s.at(-2)) //Hatulos elotti karakter
console.log(s.charAt(-2)) //tulindexelt, ""

console.log(s.includes("a"))
console.log(s.includes("egc")) 

console.log(s.toLowerCase())
console.log(s.toUpperCase())

let username = "  Balu  "
console.log(username)
console.log(username.trim()) //elso es utolso spacek eltavolitasa
console.log(username.trimStart()) //elso spacek eltavolitasa
console.log(username.trimEnd()) //utolso spacek eltavolitasa

let d = new Date()
let h = d.getHours()
let m = d.getMinutes()
let sec = d.getSeconds()

function timeModify(t){
    return (t+"").padStart(2,"0")
}

console.log(`${timeModify(h)}:${timeModify(m)}:${timeModify(sec)}`)

console.log(s.replace("egc","2")) //csak az elso talalatot csereli
console.log(s.replaceAll("e","3")) //minden talalatot csereli
console.log(s.toLocaleLowerCase().replaceAll("e","3")) //minden talalatot csereli

console.log(s.indexOf("e")) //elso talalat indexe
console.log(s.lastIndexOf("e")) //utolso talalat indexe

console.log(s.split(" ")) //szavakra bontja a szoveget es tombbe teszi