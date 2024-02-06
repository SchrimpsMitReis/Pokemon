function init(){
    renderDex()
}
function renderDex(){
    for (let i = 0; i < allPokemon.length; i++) {
        const Pokemon = allPokemon[i];

        let pName = Pokemon['Name'];
        let pImg = Pokemon['Img1'];

        content.innerHTML += /*html*/`
        <div id="Card${i}" class="dexCard" onclick="showBackside(${i})">
            <div>
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
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
            try {
                let move = myPokemon['abilities'][`${x}`]['ability']['name'];
                return /*html*/`
                    <h1 class="ability">${capitalizeFirstLetter(move)}</h1>
                `
            }catch(e){
                // console.log("No Ability " + e);
                return "";
            }
        };
        // console.log(myPokemon['abilities']["0"]['ability']['name']);
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
                                <div class="fontHP"><p>Health&nbsp;-&nbsp;Points<br>HP:</p><p>${statsHP}</p></div>
                                <div class="fontATK"><p>Attack<br>ATK:</p><p>${statsATK}</p></div>
                                <div class="fontDEF"><p>Defense<br>DEF:</p><p>${statsDEF}</p></div>
                            </div>
                            <div>
                                <div class="fontSATK"><p>Spec&nbsp;Attack<br>S-ATK:</p><p>${statsSATK}</p></div>
                                <div class="fontSDEF"><p>Spec&nbsp;Defense<br>S-DEF:</p><p>${statsSDEF}</p></div>
                                <div class="fontINIT"><p>Initiative<br>INIT:</p><p>${statsINIT}</p></div>
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
            // console.log("Fehler kein 2. Typ : " + e);
        }
        showChart(statsHP,statsATK,statsDEF,statsSATK,statsSDEF,statsINIT)
    }else{
        missingNoMania()
    }
}
