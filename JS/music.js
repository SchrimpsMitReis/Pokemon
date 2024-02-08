function toggleMusic() {
    if (music.paused) {
      music.play();
      pummeluffButton.classList.add("pummeluffPlay")
      pummeluffButton.classList.remove("pummeluffPause")
    } else {
      Slap.play()
      music.pause();
      pummeluffButton.classList.add("pummeluffPause")
      pummeluffButton.classList.remove("pummeluffPlay")

    }
}
let levelUp = new Audio()
levelUp.src = "../audio/PokemonLVLUP.mp3";

let pling = new Audio()
pling.src = "../audio/PokemonPling.mp3"
pling.volume = 0.2;
document.addEventListener('click', ()=>{
  pling.play()
})

let pcSound = new Audio()
pcSound.src = "../audio/PcSound.mp3"
pcSound.volume = 0.3

let Evolve = new Audio()
Evolve.src = "../audio/Evolve.mp3"
Evolve.volume = 0.3

let Abra = new Audio()
Abra.src = "../audio/063-abra.mp3"
Abra.volume = 0.2

let Slap = new Audio()
Slap.src = "../audio/slap.mp3"
Slap.volume = 0.2

let Pummel = new Audio()
Pummel.src = "../audio/jigglypuff.mp3"
Pummel.volume = 0.2

let closeButton = new Audio()
closeButton.src = "../audio/closeButton.mp3"
closeButton.volume = 0.1;

let music = new Audio()
music.src = "../audio/music.mp3";
music.volume = 0.03;