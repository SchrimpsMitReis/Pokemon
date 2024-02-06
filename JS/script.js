// const body = document.getElementById('body');
// const content = document.getElementById('content');
// const loadingScreen = document.getElementById('loadingScreen');
// const searchInput = document.getElementById('searchInput');
// const searchSubmitButton = document.getElementById("searchBtn")
// const openCardBG = document.getElementById('openCardBG');
// const pummeluffButton = document.getElementById('pummeluffButton')
// content.innerHTML = "";
let rangeCounter = 0;
console.clear()
const pokemonEnglish = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran-f","Nidorina","Nidoqueen","Nidoran-m","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett",
                        "Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetchd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb",
                        "Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr-Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo",
                        "Mew","Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking","Misdreavus",
                        "Unown","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid","Magby","Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh",
                        "Celebi","Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass","Skitty",
                        "Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle","Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish","Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic",
                        "Kecleon","Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys-normal","Turtwig","Grotle","Torterra","Chimchar","Monferno","Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia","Staraptor","Bidoof","Bibarel",
                        "Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos","Shieldon","Bastiodon","Burmy","wormadam-plant","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos","Gastrodon","Ambipom","Drifloon","Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow","Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly","mime-jr","Happiny","Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon",
                        "Skorupi","Drapion","Croagunk","Toxicroak","Carnivine","Finneon","Lumineon","Mantyke","Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","giratina-altered","Cresselia","Phione","Manaphy","Darkrai","shaymin-land","Arceus","Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar",
                        "Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier","Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour","Simipour","Munna","Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr","Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","basculin-red-striped",
                        "Sandile","Krokorok","Krookodile","Darumaka","darmanitan-standard","Maractus","Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed","Ferrothorn",
                        "Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","tornadus-incarnate","thundurus-incarnate","Reshiram","Zekrom","landorus-incarnate","Kyurem","keldeo-ordinary","meloetta-aria",
                        "Genesect","Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder","Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","flabebe","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","meowstic-male","Honedge","Doublade","aegislash-shield","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher","Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura",
                        "Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","pumpkaboo-average","gourgeist-average","Bergmite","Avalugg","Noibat","Noivern","Xerneas","Yveltal","zygarde-50","Diancie","Hoopa","Volcanion","Rowlet","Dartrix","Decidueye","Litten","Torracat","Incineroar","Popplio","Brionne","Primarina","Pikipek","Trumbeak","Toucannon","Yungoos","Gumshoos","Grubbin","Charjabug","Vikavolt","Crabrawler","Crabominable","oricorio-baile","Cutiefly","Ribombee","Rockruff","lycanroc-midday","wishiwashi-solo","Mareanie","Toxapex",
                        "Mudbray","Mudsdale","Dewpider","Araquanid","Fomantis","Lurantis","Morelull","Shiinotic","Salandit","Salazzle","Stufful","Bewear","Bounsweet","Steenee","Tsareena","Comfey","Oranguru","Passimian","Wimpod","Golisopod","Sandygast","Palossand","Pyukumuku","type-null","Silvally","minior-red-meteor","Komala","Turtonator","Togedemaru","mimikyu-disguised","Bruxish","Drampa","Dhelmise","Jangmo-o","Hakamo-o","Kommo-o","tapu-koko","Tapu-Lele","Tapu-Bulu","tapu-bulu","Tapu-Fini","Cosmog","Cosmoem","Solgaleo","Lunala"
]
let currentPokemon;
async function searchPokemon(){
    let searchInputValue = searchInput.value;
    let index = pokemonEnglish.findIndex(name => name.toLowerCase() === searchInputValue.toLowerCase());    
    try{
        await showBackside(index)
    }catch(e){
        // console.log("Das Pokemon das du suchst Existiert nicht" + e);
    }finally{
        searchInputValue = "";
        closeWindow();
    }
}
async function loadPokemon(x, index) {
    try{
        showloadingScreen()
        let pokeName = x.toLocaleLowerCase()
        const API = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        let response = await fetch(API)
        currentPokemon = await response.json()
        loadingScreen.classList.add("d-none");
    }catch(e){
        // console.log(`Computer sagt: 'Nein, weil ${e}'`);
    }
    finally{
        renderPokemonInfo(x, index)
    }

}

async function loadPokemon2(x) {
    let pokeName = x.toLocaleLowerCase()
    const API = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let response = await fetch(API)
    let pokemon = await response.json()
    
    return pokemon;
}
function renderDex(){
    for (let i = 0; i < allPokemon.length; i++) {
        const pkmn = allPokemon[i];
        let name = pkmn['name'];
        renderPokemonInfo(name, i)
    }
}
function renderPokemonInfo(x, index) {
    let pName = x;
    let pImg = currentPokemon['sprites']['other']['home']['front_default']
    let pType1 = currentPokemon['types'][0]['type']['name']
    content.innerHTML += /*html*/`
    <div id="Card${index}" class="dexCard" onclick="showBackside(${index})">
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
function renderMissingNo() {
    addOrden(6)
    let pName = "MissingNo";
    let pImg = "./IMG/MissingNo.png"
    content.innerHTML += /*html*/`
    <div id="CardMissigno" class="dexCard" onclick="showBackside('MissingNo')">
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
        x++
        return "";
    }
    let x = 0
    setInterval(()=>{
        spawnNo(x);
        if (x == 1000){
            addOrden(7)
        }
    }
    ,0.01)
}
function showChart(hp, atk, def, satk, sdef, init){
    const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['HP', 'ATK', 'DEF', 'S-ATK', 'S-DEF', 'INIT'],
        datasets: [{
          label: 'Points',
          data: [hp, atk, def, satk,sdef, init],
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
function showloadingScreen(){
    loadingScreen.classList.remove('d-none')
    loadingScreen.innerHTML = /*html*/`
        <img id="pikachu" src="./IMG/pikachu-running.gif" alt="">
    `
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
async function renderList() {
    addOrden(4)        
    let rangeMin = 100 * rangeCounter;
    let rangeMax = 100 * (rangeCounter + 1);
    if(rangeMax >= pokemonEnglish.length){
        rangeMax = pokemonEnglish.length;
        rangeMin = pokemonEnglish.length;
    }
    for (let i = rangeMin; i < rangeMax; i++) {
        const pokemon = pokemonEnglish[i];
        try{
            await loadPokemon(pokemon, i)            
        }catch(e){
            // console.log("Karte konnte nicht geladen werden : " + e)
        }
        
    }
    rangeCounter++
}
function closeWindow(){
    const openCardBG = document.getElementById('openCardBG');
    openCardBG.classList.add('d-none');
    openCardBG.innerHTML = "";
}
function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
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
        addOrden(0)
        overlay.classList.add('d-none')
    }, {once:true});
}
function block(){
    let a = b;
    a = a;
}
// Prüfe, ob die Funktion für den Vollbildmodus unterstützt wird
function toggleFullScreen() {
    if (!document.fullscreenElement &&    // alternative Schreibweisen für Browser-Kompatibilität
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement) {  // für den Internet Explorer
  
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
      
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
}
function showBackside2(){
    let rightside = document.getElementById("rightBackside")

    rightside.innerHTML = ""
}
function init(){
    renderList();
    introSequenz();
    renderName();
    document.addEventListener('keydown', (event)=>{
        if (event === 'Enter'){
            console.log("Enter");
        }
    })
}
loadMyPokemon() 
//changingPlaceholder()
//toggleMusic()