<<<<<<< Updated upstream
function init(){
    renderDex()
}
function renderDex(){
    for (let i = 0; i < allPokemon.length; i++) {
        const Pokemon = allPokemon[i];

        let pName = Pokemon['Name'];
        let pImg = Pokemon['Img1'];
=======
content.innerHTML = "";

function init() {
    renderDex()
    introSequenz()
    renderName()
}
function introSequenz() {
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
    document.addEventListener('click', () => {
        toggleMusic();
        // toggleFullScreen();
        setTimeout(() => {
            addOrden(0)
        }, 1000);
        overlay.classList.add('d-none')
    }, { once: true });
}
function renderDex() {
    showloadingScreen()
    if (rangeCounter === 1) {
        addOrden(4)
    }
    let rangeMin = 100 * rangeCounter;
    let rangeMax = 100 * (rangeCounter + 1);
    if (rangeMax >= allPokemon.length) {
        rangeMax = allPokemon.length;
        rangeMin = allPokemon.length;
    }
    for (let i = rangeMin; i < rangeMax; i++) {
        setTimeout(() => {
            const Pokemon = allPokemon[i];

            let pName = capitalizeFirstLetter(Pokemon['name']);
            let pImg = Pokemon['img1'];
>>>>>>> Stashed changes

            content.innerHTML += /*html*/`
        <div id="Card${i}" class="dexCard" onclick="showBackside(${i})">
<<<<<<< Updated upstream
            <div>
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
=======
                <svg class="svg" margin="0" width="90" height="90" xmlns="http://www.w3.org/2000/svg">
>>>>>>> Stashed changes
                  <circle class="blueCircle" cx="40" cy="40" r="20"/>
                  <circle class="blackCircle" cx="40" cy="40" r="20" fill="none" stroke="black" stroke-width="14" />
                  <circle class="whiteCircle" cx="40" cy="40" r="20" fill="none" stroke="white" stroke-width="10"/>
                </svg>
    
            <div class="pokeImgContainer">
                <img class="dexCardImage" src="${pImg}" alt="Pokemon">
            </div>
            <h1 class="cardName">${pName}</h1>
        </div>
    
        `

        }, 500);
    }
<<<<<<< Updated upstream
}
async function showBackside(index) {
    addOrden(1);
    if (index !== 'MissingNo'){
        openCardBG.innerHTML = "";
        openCardBG.classList.remove('d-none');
        let pokemonIndex = pokemonEnglish[index];
        let myPokemon = await loadPokemon2(pokemonIndex);
        let frontHome = myPokemon['sprites']['other']['home']['front_default'];
        let frontClassic = myPokemon['sprites']['front_default'];
        let statsHP = myPokemon['stats']['0']['base_stat'];
        let statsATK = myPokemon['stats']['1']['base_stat'];
        let statsDEF = myPokemon['stats']['2']['base_stat'];
        let statsSATK = myPokemon['stats']['3']['base_stat'];
        let statsSDEF = myPokemon['stats']['4']['base_stat'];
        let statsINIT = myPokemon['stats']['5']['base_stat'];
        let pkmnName = myPokemon['name']
        let pkmnId = myPokemon['id']
        let pkmnType1 = myPokemon['types']['0']['type']['name']
        let pkmnType2 = myPokemon['types']['1'] && myPokemon['types']['1']['type']['name'];
        let move = (x)=>{
=======
    loadingScreen.classList.add('d-none')
    rangeCounter++
}
async function showBackside(index) {
    setTimeout(() => {addOrden(1)}, 1000);
    toggleBtns()
    if (index !== 'MissingNo') {
        pcSound.play()
        openCardBG.innerHTML = "";
        openCardBG.classList.remove('d-none');
        let myPokemon = allPokemon[index]

        let cry = new Audio()
        cry.src = myPokemon['cry'];
        cry.volume = 0.2;

        let move = (x) => {
>>>>>>> Stashed changes
            try {
                let move = myPokemon['abilities'][`${x}`]['ability']['name'];
                return /*html*/`
                    <h1 class="ability">${capitalizeFirstLetter(move)}</h1>
                `
<<<<<<< Updated upstream
            }catch(e){
                // console.log("No Ability " + e);
                return "";
            }
        };
        // console.log(myPokemon['abilities']["0"]['ability']['name']);
=======
            } catch (e) {
                return "";
            }
        };
        setTimeout(() => {cry.play()}, 500);

>>>>>>> Stashed changes
        let card = /*html*/`
            <div class="openCard">
                <div class="closeButton" onclick="closeWindow()"></div>
                <div class="openCardLeft">
                    <div class="nameId">
                        <h1>${capitalizeFirstLetter(myPokemon['name'])}</h1>
                        <p>ID : ${myPokemon['id']}</p>
                    </div>
    
                    <div class="images">
                        <img src="${myPokemon['img1']}" alt="homeFront">
                        <img src="${myPokemon['img2']}" alt="normales Front">
                    </div>
    
                    <div id="types" class="types">
                        <div id="type1" class="type">${capitalizeFirstLetter(myPokemon['typ1'])}</div>
                    </div>
    
                    <div class="moveTable">
                        <h2>Fähigkeiten :</h2>
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
                        <div class="chartContainer">
                            <canvas id="myChart"></canvas>
                         </div>
                         <div class="statValues">
                            <div >
<<<<<<< Updated upstream
                                <div class="fontHP"><p>Health&nbsp;-&nbsp;Points<br>HP:</p><p>${statsHP}</p></div>
                                <div class="fontATK"><p>Attack<br>ATK:</p><p>${statsATK}</p></div>
                                <div class="fontDEF"><p>Defense<br>DEF:</p><p>${statsDEF}</p></div>
                            </div>
                            <div>
                                <div class="fontSATK"><p>Spec&nbsp;Attack<br>S-ATK:</p><p>${statsSATK}</p></div>
                                <div class="fontSDEF"><p>Spec&nbsp;Defense<br>S-DEF:</p><p>${statsSDEF}</p></div>
                                <div class="fontINIT"><p>Initiative<br>INIT:</p><p>${statsINIT}</p></div>
=======
                                <div class="font HP"><p>Health&nbsp;-&nbsp;Points&nbsp;HP:</p><p>${myPokemon['statsHP']}</p></div>
                                <div class="font ATK"><p>Attack<br>ATK:</p><p>${myPokemon['statsATK']}</p></div>
                                <div class="font DEF"><p>Defense<br>DEF:</p><p>${myPokemon['statsDEF']}</p></div>
                                <div class="font SATK"><p>Spec&nbsp;Attack<br>S-ATK:</p><p>${myPokemon['statsSATK']}</p></div>
                                <div class="font SDEF"><p>Spec&nbsp;Defense<br>S-DEF:</p><p>${myPokemon['statsSDEF']}</p></div>
                                <div class="font INIT"><p>Initiative<br>INIT:</p><p>${myPokemon['statsINIT']}</p></div>
>>>>>>> Stashed changes
                            </div>
                        </div>                      

                    </div>
                </div>
            </div>
    
            `
        openCardBG.innerHTML = card;
        if (myPokemon['typ2']) {
            let types = document.getElementById('types');
            types.innerHTML += `<div id="type2" class="type">${capitalizeFirstLetter(myPokemon['typ2'])}</div>`
        }
<<<<<<< Updated upstream
        checkType(pkmnType1, "type1");
        try{
            checkType(pkmnType2, "type2");
        }catch(e){
            // console.log("Fehler kein 2. Typ : " + e);
=======
        checkType(myPokemon['typ1'], "type1");
        try {
            checkType(myPokemon['typ2'], "type2");
        } catch (e) {
            // console.error("Fehler kein 2. Typ : " + e);
>>>>>>> Stashed changes
        }
        showChart(myPokemon['statsHP'], myPokemon['statsATK'], myPokemon['statsDEF'], myPokemon['statsSATK'], myPokemon['statsSDEF'], myPokemon['statsINIT'])
    } else {
        missingNoMania()
    }
}
<<<<<<< Updated upstream
=======
// function backCard(pkmnName, pkmnId, frontHome, frontClassic, pkmnType1 ){
//     return /*html*/`
//     <div class="openCard">
//         <div class="closeButton" onclick="closeWindow()"></div>
//         <div class="openCardLeft">
//             <div class="nameId">
//                 <h1>${capitalizeFirstLetter(pkmnName)}</h1>
//                 <p>ID : ${pkmnId}</p>
//             </div>

//             <div class="images">
//                 <img src="${frontHome}" alt="homeFront">
//                 <img src="${frontClassic}" alt="normales Front">
//             </div>

//             <div id="types" class="types">
//                 <div id="type1" class="type">${capitalizeFirstLetter(pkmnType1)}</div>
//             </div>

//             <div class="moveTable">
//                 <h2>Abilities :</h2>
//                 <div id="allMoves" class="allMoves">
//                     ${move(0)}
//                     ${move(1)}
//                     ${move(2)}
//                     ${move(3)}
//                 </div>
//             </div>
//         </div>
//         <div id="rightBackside" class="openCardRight">
//             <div class="allStats">
//                 <div class=chartContainer>
//                     <canvas id="myChart"></canvas>
//                  </div>
//                 <div class="statValues">
//                     <div >
//                         <div class="font HP"><p>Lebenspunkte<br>HP:</p><p>${statsHP}</p></div>
//                         <div class="font ATK"><p>Attack<br>ATK:</p><p>${statsATK}</p></div>
//                         <div class="font DEF"><p>Defense<br>DEF:</p><p>${statsDEF}</p></div>
//                     </div>
//                     <div>
//                         <div class="font SATK"><p>Spec&nbsp;Attack<br>S-ATK:</p><p>${statsSATK}</p></div>
//                         <div class="font SDEF"><p>Spec&nbsp;Defense<br>S-DEF:</p><p>${statsSDEF}</p></div>
//                         <div class="font INIT"><p>Initiative<br>INIT:</p><p>${statsINIT}</p></div>
//                     </div>
//                 </div>                      
//             </div>
//         </div>
//     </div>

//     `

// }
function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
function closeWindow() {
    toggleBtns()
    closeButton.play()
    openCardBG.classList.add('d-none');
    openCardBG.innerHTML = "";
}
function checkType(type, id) {
    let typefield = document.getElementById(`${id}`);
    typefield.classList = "";
    typefield.classList.add('type')
    if (type == "Normal") {
        typefield.classList.add("normal")
    }
    else if (type == "Pflanze") {
        typefield.classList.add("grass")
    }
    else if (type == "Feuer") {
        typefield.classList.add("fire")
    }
    else if (type == "Wasser") {
        typefield.classList.add("water")
    }
    else if (type == "Käfer") {
        typefield.classList.add("bug")
    }
    else if (type == "Flug") {
        typefield.classList.add("flying")
    }
    else if (type == "Gift") {
        typefield.classList.add("poison")
    }
    else if (type == "Elektro") {
        typefield.classList.add("electric")
    }
    else if (type == "Kampf") {
        typefield.classList.add("fighting")
    }
    else if (type == "Boden") {
        typefield.classList.add("ground")
    }
    else if (type == "Gestein") {
        typefield.classList.add("rock")
    }
    else if (type == "Eis") {
        typefield.classList.add("ice")
    }
    else if (type == "Psycho") {
        typefield.classList.add("psychic")
    }
    else if (type == "Geist") {
        typefield.classList.add("ghost")
    }
    else if (type == "Drache") {
        typefield.classList.add("dragon")
    }
    else if (type == "Unlicht") {
        typefield.classList.add("dark")
    }
    else if (type == "Stahl") {
        typefield.classList.add("steel")
    }
    else if (type === "Coding Trainee") {
        typefield.classList.add("CT")
    }
    else if (type == "Fee") {
        typefield.classList.add("fairy")
    } else {
        typefield.classList.add('d-none')
    }
}
function showChart(hp, atk, def, satk, sdef, init) {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'polarArea',
        data: {
            // labels: ['Lebenspunkte (HP)', 'Angriff (ATK)', 'Verteidigung (DEF)', 'Spezial Angriff (S-ATK):', 'Spezial Verteidigung (S-DEF)', 'Initiative (INIT)'],
            datasets: [{
                label: 'Punkte',
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
    content.innerHTML += /*html*/`
    <div id="CardMissigno" class="dexCard" onclick="showBackside('MissingNo'), lavandia.play()">
            <svg width="100" margin="1em" height="100" xmlns="http://www.w3.org/2000/svg">
              <circle class="blueCircle" cx="40" cy="40" r="20"/>
              <circle  cx="40" cy="40" r="20" fill="none" stroke="black" stroke-width="14" />
              <circle  cx="40" cy="40" r="20" fill="none" stroke="white" stroke-width="10"/>
            
            </svg>
        <div class="pokeImgContainer">
            <img src="./IMG/MissingNo.png" alt="">
        </div>
        <h1 class="cardName">MissingNo</h1>
    </div>

    `
}
async function missingNoMania() {
    music.pause()
    toggleBtns()
    let spawnNo = (x) => {
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
        image.style.width = (5 * Math.random()) + '%'
        image.style.zIndex = 6;
        document.body.appendChild(image);
        console.log(ErrorNo[x % ErrorNo.length])
        loadingScreen.innerHTML += ErrorNo[x % ErrorNo.length]
        return "";
    }
    let x = 0
    setInterval(() => {
        spawnNo(x);
        console.log(x);
        if (x == 1000) {
            lavandia.pause()
            addOrden(7)
        }
        x++
    }
        , 2)
}
function showloadingScreen() {
    loadingScreen.classList.remove('d-none')
    loadingScreen.innerHTML = /*html*/`
        <img id="pikachu" src="./IMG/pikachu-running.gif" alt="">
    `
}
function toggleBtns(){
    if (!pummeluffButton.classList.contains('d-none')){
        pummeluffButton.classList.add('d-none');
        abraBtn.classList.add('d-none')
        nidobtn.classList.add('d-none')
    }else{
        pummeluffButton.classList.remove('d-none');
        abraBtn.classList.remove('d-none');
        nidobtn.classList.remove('d-none');
    }
}
>>>>>>> Stashed changes
