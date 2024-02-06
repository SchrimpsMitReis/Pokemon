class Orden{
    desc;
    hint;
    constructor(name){
        this.name = name;
        this.img = `./IMG/${this.name}.png`
    }
    achievmentNote(){
        console.log("Note");
    }
}

const felsOrden = new Orden("Felsorden") // Intro
const quellOrden = new Orden("Quellorden") // Pokekarte Angucken
const donnerOrden = new Orden("Donnerorden") // Rotom anklicken
const farbOrden = new Orden("Farborden") // Suchen
const seelenOrden = new Orden("Seelenorden") // Abra
const sumpfOrden = new Orden("Sumpforden") // Pummeluff
const vulkanOrden = new Orden("Vulkanorden") // MissingNo
const erdOrden = new Orden("Erdorden") //MissingMania



let allBadges = [
    felsOrden,
    quellOrden,
    donnerOrden,
    farbOrden,
    seelenOrden,
    sumpfOrden,
    vulkanOrden,
    erdOrden
]