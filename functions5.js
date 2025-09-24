/* Készítsen egy Jarmu osztályt, amely nyilvántartja a következő tulajdonságokat:
- típus (bicikli, autó, repülős, stb.)
- üzemanyag (benzin, kerozin, null, stb.)
- kerekek száma
- végsebesség
 
Készítsen az osztályhoz egy olyan metódust, amellyel lekérdezhető, hogy hány jármű lett lérehozva (példányosítva).
 
Készítsen egy olyan metódust, amely paraméterben egy távolságot vár (km-ben), a függvény pedig megmondja, hogy az adott járműnek mennyi időbe telik, amíg ezt a távolságot megteszi (végsebességgel lehet számolni).
*/
 
class Jarmu {
    static jarmuvekSzama = 0;
    constructor(tipus, uzemanyag, kerekekSzama, vegsebesseg)    {
        this.tipus = tipus;
        this.uzemanyag = uzemanyag;
        this.kerekekSzama = kerekekSzama;
        this.vegsebesseg = vegsebesseg;
        Jarmu.jarmuvekSzama++;
    }

    static get jarmuvekSzama() {
        return (Jarmu.jarmuvekSzama);
    }

    ido(tavolsag) {
        return tavolsag / this.vegsebesseg;
    }


}

let auto = new Jarmu("autó", "benzin", 4, 130);
console.log(auto);
console.log("Idő: " + auto.ido(260) + " óra");
console.log("Járművek száma: " + Jarmu.jarmuvekSzama);

let repulo = new Jarmu("repülő", "kerozin", 6, 900);
console.log("Járművek száma: " + Jarmu.jarmuvekSzama);
