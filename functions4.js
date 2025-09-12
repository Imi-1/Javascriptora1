// osztay !== objektum
// osztaly: tervrajz, sablon
// objektum: konkret dolog, amit az osztaly alapjan hozunk letre
// pelda: kutya osztaly -> bodri objektum

class Szemely{
    constructor(nev,foglalkozas,szuletesiEv){
        this.nev=nev;
        this.foglalkozas=foglalkozas;
        this.szuletesiEv=szuletesiEv;
    }

    hanyEves(){
        return (new Date().getFullYear())-this.szuletesiEv;
    }
}

class Alkalmazott extends Szemely{
    static bonus=10; //10%
    #belepesiKod= undefined;
    constructor(nev,foglalkozas,szuletesiEv,ber){
        super(nev,foglalkozas,szuletesiEv);
        this.ber=ber;
    }

    setBelepesiKod(kod){
        if(typeof kod == "number"){
            this.#belepesiKod=kod;
        }
    }

    getBelepesiKod(){
        return this.#belepesiKod;
    }


    set belepesiKod(kod){
        if(typeof kod == "number"){
            this.#belepesiKod=kod;
        }
    }

    get belepesiKod(){
        return this.#belepesiKod;
    }

    get fizetesLekerdez(){
        if(new Date().getMonth()==11){
            return this.ber + (this.ber*(1+(Alkalmazott.bonus/100)));
        }
        return this.ber;
    }

    static get bonus(){
        return Alkalmazott.bonus;
    }
}

let odon = new Szemely("Odon","tanulo",2010);
console.log(odon);
console.log(odon.nev + " " + odon.hanyEves()+" eves");

let orsi = new Szemely("Orsi","tanulo",2012);

let virag = new Alkalmazott("Virag","tanar",1980,450000);
console.log(virag);
console.log(virag.nev + " " + virag.hanyEves()+" eves, ber: "+virag.ber);

virag.setBelepesiKod(1234);
virag.belepesiKod=5678;
console.log(virag.nev + "belepesi kod: "+virag.belepesiKod);

console.log(virag.nev + " fizetese: "+virag.fizetesLekerdez);
console.log("Bonus: "+Alkalmazott.bonus);
