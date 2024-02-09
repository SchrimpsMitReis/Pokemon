content.innerHTML = "";

function init(){
    renderDex()
    introSequenz()
    renderName()
}
function introSequenz(){
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('d-none');

    let html = /*html*/`
            <div class="introBg">
                <div class="introContainer">
                    <p class="introText">"Willkommen in der Welt der Pokémon!<br><br> 
                    Meine Name ist Professor Eich. Die Menschen nennen mich auch den Pokémon Professor. <br><br>
                    Diese Welt wird von Wesen bewohnt, die man Pokémon nennt. <br> Für manche sind Pokemon Haustiere, ander tragen Kämpfe mit Ihnen aus. Ich selbst... <br>
                    ... habe mein Hobby zum Beruf gemacht und studiere Pokémon. <br><br>
                    Eine unglaubliche Reise in die Welt der Pokémon erwartet Dich!
                    Eine Welt voller Wunder, Abenteuer und Geheimnisse! <br>Kurz gesagt, ein Traum wird wahr!</p>
                </div>
                <div class="profEich"></div>
            </div>

    `
    overlay.innerHTML = html;
    document.addEventListener('click', ()=>{
        toggleMusic();
        // toggleFullScreen();
        setTimeout(() => {
            addOrden(0)
        }, 1000);
            overlay.classList.add('d-none')
    }, {once:true});
}
function renderDex(){
    if (rangeCounter === 1){
        addOrden(4)
    }
    let rangeMin = 100 * rangeCounter;
    let rangeMax = 100 * (rangeCounter + 1);
    if(rangeMax >= allPokemon.length){
        rangeMax = allPokemon.length;
        rangeMin = allPokemon.length;
    }

    for (let i = rangeMin; i < rangeMax; i++) {
        const Pokemon = allPokemon[i];

        let pName = Pokemon['name'];
        let pImg = Pokemon['img1'];

        content.innerHTML += /*html*/`
        <div id="Card${i}" class="dexCard" onclick="showBackside(${i})">
            <div>
                <svg width="90" height="90" xmlns="http://www.w3.org/2000/svg">
                  <circle class="blueCircle" cx="40" cy="40" r="20"/>
                  <circle  cx="40" cy="40" r="20" fill="none" stroke="black" stroke-width="14" />
                  <circle  cx="40" cy="40" r="20" fill="none" stroke="white" stroke-width="10"/>
                </svg>
    
            </div>
            <div class="pokeImgContainer">
                <img src="${pImg}" alt="Pokemon">
            </div>
            <h1 class="cardName">${pName}</h1>
        </div>
    
        `
    }
    rangeCounter++
}
async function showBackside(index) {
    setTimeout(() => {
        addOrden(1)
    }, 1000);

    if (index !== 'MissingNo'){
        pcSound.play()
        openCardBG.innerHTML = "";
        openCardBG.classList.remove('d-none');
        let myPokemon = allPokemon[index]
        let frontHome = myPokemon['img1'];
        let frontClassic = myPokemon['img2'];
        let statsHP = myPokemon['statsHP'];
        let statsATK = myPokemon['statsATK'];
        let statsDEF = myPokemon['statsDEF'];
        let statsSATK = myPokemon['statsSATK'];
        let statsSDEF = myPokemon['statsSDEF'];
        let statsINIT = myPokemon['statsINIT'];
        let pkmnName = myPokemon['name']
        let pkmnId = myPokemon['id']
        let pkmnType1 = myPokemon['typ1']
        let pkmnType2 = myPokemon['typ2'];
        let move = (x)=>{
            try {
                let move = myPokemon['moves'][x];
                return /*html*/`
                    <h1 class="ability">${capitalizeFirstLetter(move)}</h1>
                `
            }catch(e){
                // console.error("No Ability " + e);
                return "";
            }
        };
        let card = /*html*/`
            <div class="openCard">
                <div class="closeButton" onclick="closeWindow()"></div>
                <div class="openCardLeft">
                    <div class="nameId">
                        <h1>${capitalizeFirstLetter(pkmnName)}</h1>
                        <p>ID : ${pkmnId}</p>
                    </div>
    
                    <div class="images">
                        <img src="${frontHome}" alt="homeFront">
                        <img src="${frontClassic}" alt="normales Front">
                    </div>
    
                    <div id="types" class="types">
                        <div id="type1" class="type">${capitalizeFirstLetter(pkmnType1)}</div>
                    </div>
    
                    <div class="moveTable">
                        <h2>Abilities :</h2>
                        <div id="allMoves" class="allMoves">
                            ${move(0)}
                            ${move(1)}
                            ${move(2)}
                            ${move(3)}
                        </div>
                    </div>
                </div>
                <div id="rightBackside" class="openCardRight">
                    <div class="allStats">
                        <div class=chartContainer>
                            <canvas id="myChart"></canvas>
                         </div>
                        <div class="statValues">
                            <div >
                                <div class="font HP"><p>Health&nbsp;-&nbsp;Points<br>HP:</p><p>${statsHP}</p></div>
                                <div class="font ATK"><p>Attack<br>ATK:</p><p>${statsATK}</p></div>
                                <div class="font DEF"><p>Defense<br>DEF:</p><p>${statsDEF}</p></div>
                            </div>
                            <div>
                                <div class="font SATK"><p>Spec&nbsp;Attack<br>S-ATK:</p><p>${statsSATK}</p></div>
                                <div class="font SDEF"><p>Spec&nbsp;Defense<br>S-DEF:</p><p>${statsSDEF}</p></div>
                                <div class="font INIT"><p>Initiative<br>INIT:</p><p>${statsINIT}</p></div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
    
            `
        openCardBG.innerHTML = card;
        if (pkmnType2){
            let types = document.getElementById('types');
            types.innerHTML += `<div id="type2" class="type">${capitalizeFirstLetter(pkmnType2)}</div>`
        }
        checkType(pkmnType1, "type1");
        try{
            checkType(pkmnType2, "type2");
        }catch(e){
            // console.error("Fehler kein 2. Typ : " + e);
        }
        showChart(statsHP,statsATK,statsDEF,statsSATK,statsSDEF,statsINIT)
    }else{
        missingNoMania()
    }
}
function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
function closeWindow(){
    closeButton.play()
    const openCardBG = document.getElementById('openCardBG');
    openCardBG.classList.add('d-none');
    openCardBG.innerHTML = "";
}
function checkType(type, id){
    let typefield = document.getElementById(`${id}`);
    typefield.classList = "";
    typefield.classList.add('type')
    if( type == "normal"){
        typefield.classList.add("normal")
    }
    else if( type == "grass"){
        typefield.classList.add("grass")
    }
    else if( type == "fire"){
        typefield.classList.add("fire")
    }
    else if( type == "water"){
        typefield.classList.add("water")
    }
    else if( type == "bug"){
        typefield.classList.add("bug")
    }
    else if( type == "flying"){
        typefield.classList.add("flying")
    }
    else if( type == "poison"){
        typefield.classList.add("poison")
    }
    else if( type == "electric"){
        typefield.classList.add("electric")
    }
    else if( type == "fighting"){
        typefield.classList.add("fighting")
    }
    else if( type == "ground"){
        typefield.classList.add("ground")
    }
    else if( type == "rock"){
        typefield.classList.add("rock")
    }
    else if( type == "ice"){
        typefield.classList.add("ice")
    }
    else if( type == "psychic"){
        typefield.classList.add("psychic")
    }
    else if( type == "ghost"){
        typefield.classList.add("ghost")
    }
    else if( type == "dragon"){
        typefield.classList.add("dragon")
    }
    else if( type == "dark"){
        typefield.classList.add("dark")
    }
    else if( type == "steel"){
        typefield.classList.add("steel")
    }
    else if( type === "Coding Trainee"){
        typefield.classList.add("CT")
    }
    else if( type == "fairy"){
        typefield.classList.add("fairy")
    }else{
        typefield.classList.add('d-none')
    }
}
function showChart(hp, atk, def, satk, sdef, init){
    const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['HP', 'ATK', 'DEF', 'S-ATK', 'S-DEF', 'INIT'],
        datasets: [{
          label: 'Points',
          data: [hp, atk, def, satk, sdef, init],
          borderWidth: 1,
          backgroundColor: [
            '#2E66B1',
            '#E42829',
            '#FECA1B',
            '#6990c4',
            '#e05a5a',
            '#fbdf81',
          ],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
}
function renderMissingNo() {
    Evolve.play()
    setTimeout(() => {
        addOrden(6)
    }, 1000);
    let pName = "MissingNo";
    let pImg = "./IMG/MissingNo.png"
    
    content.innerHTML += /*html*/`
    <div id="CardMissigno" class="dexCard" onclick="showBackside('MissingNo'), lavandia.play()">
        <div>
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <circle class="blueCircle" cx="40" cy="40" r="20"/>
              <circle  cx="40" cy="40" r="20" fill="none" stroke="black" stroke-width="14" />
              <circle  cx="40" cy="40" r="20" fill="none" stroke="white" stroke-width="10"/>
            
            </svg>

        </div>
        <div class="pokeImgContainer">
            <img src="${pImg}" alt="">
        </div>
        <h1 class="cardName">${pName}</h1>
    </div>

    `
}
async function missingNoMania() {
    music.pause()
    let spawnNo = (x)=>{
        const ErrorNo = [
            "Kritischer Fehler",
            "Critical Error",
            "Error Crítico",
            "Erreur Critique",
            "Errore Critico",
            "Erro Crítico",
            "Kritieke Fout",
            "Критическая ошибка",
            "关键错误",
            "致命的なエラー",
            "치명적인 오류",
            "خطأ حرج",
            "Kritik Hata"
        ]
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
    
        let randomX = Math.floor(Math.random() * screenWidth);
        let randomY = Math.floor(Math.random() * screenHeight);
        let image = document.createElement('img');
        image.src = './IMG/MissingNo.png'; 
        image.id = `randomImage${x}`;
        image.style.position = 'absolute'
        image.style.left = randomX + 'px';
        image.style.top = randomY + 'px';
        image.style.width = (5 * Math.random()) +'%'
        image.style.zIndex = 6;
        document.body.appendChild(image);
        console.log(ErrorNo[x%ErrorNo.length])
        loadingScreen.innerHTML += ErrorNo[x%ErrorNo.length]
        return "";
    }
    let x = 0
    setInterval(()=>{
        spawnNo(x);
        console.log(x);
        if (x == 1000){
            lavandia.pause()
            addOrden(7)
        }
        x++
    }
    ,2)
}
