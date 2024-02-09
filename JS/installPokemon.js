const axios = require('axios')
const fs = require('fs');
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
                        "Sandile","Krokorok","Krookodile","Darumaka","darmanitan-standard","tan","Zen Mode Darmanitan","Maractus","Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed","Ferrothorn",
                        "Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","tornadus-incarnate","thundurus-incarnate","Reshiram","Zekrom","landorus-incarnate","Kyurem","keldeo-ordinary","meloetta-aria",
                        "Genesect","Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder","Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","flabebe","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","meowstic-male","Honedge","Doublade","aegislash-shield","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher","Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura",
                        "Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","pumpkaboo-average","gourgeist-average","Bergmite","Avalugg","Noibat","Noivern","Xerneas","Yveltal","zygarde-50","Diancie","Hoopa","Volcanion","Rowlet","Dartrix","Decidueye","Litten","Torracat","Incineroar","Popplio","Brionne","Primarina","Pikipek","Trumbeak","Toucannon","Yungoos","Gumshoos","Grubbin","Charjabug","Vikavolt","Crabrawler","Crabominable","oricorio-baile","Cutiefly","Ribombee","Rockruff","lycanroc-midday","wishiwashi-solo","Mareanie","Toxapex",
                        "Mudbray","Mudsdale","Dewpider","Araquanid","Fomantis","Lurantis","Morelull","Shiinotic","Salandit","Salazzle","Stufful","Bewear","Bounsweet","Steenee","Tsareena","Comfey","Oranguru","Passimian","Wimpod","Golisopod","Sandygast","Palossand","Pyukumuku","type-null","Silvally","minior-red-meteor","Komala","Turtonator","Togedemaru","mimikyu-disguised","Bruxish","Drampa","Dhelmise","Jangmo-o","Hakamo-o","Kommo-o","tapu-koko","Tapu-Lele","Tapu-Bulu","tapu-bulu","Tapu-Fini","Cosmog","Cosmoem","Solgaleo","Lunala"
]
class Pokemon{
    constructor(name, id, img1, img2, typ1, typ2, moves, statsHP, statsATK, statsDEF, statsINIT, statsSATK, statsSDEF){
        this.name = name;
        this.id = id;
        this.img1 = img1;
        this.img2 = img2;
        this.typ1 = typ1;
        this.typ2 = typ2;
        this.moves = moves;
        this.statsHP = statsHP;
        this.statsATK = statsATK;
        this.statsDEF = statsDEF;
        this.statsINIT = statsINIT;
        this.statsSATK = statsSATK;
        this.statsSDEF = statsSDEF;
        this.caught = false;

    }
}

let myPokeData = [];
async function createAPI(){ // Install funktion
    for (let i = 1; i < pokemonEnglish.length; i++) {
            console.log(i/pokemonEnglish, " % : ", i ," / ", pokemonEnglish.length);
            await downloadPokemon(i)
        }
        await saveAllData();
        // console.log("Date gespeichert");

    }

async function loadPokemon2(x) {
    // let pokeName = x.toLocaleLowerCase()
    const API = `https://pokeapi.co/api/v2/pokemon/${x}/`;
    let response = await fetch(API)
    
    let pokemon = await response.json()
    return pokemon;
}

async function downloadPokemon(i){
    // let pokemonIndex = pokemonEnglish[index];
    let myPokemon = await loadPokemon2(i);
    let pkmnName = myPokemon['name']
    let frontHome = await saveConnect(myPokemon['sprites']['other']['home']['front_default'], pkmnName, 'home' );
    let frontClassic = await saveConnect(myPokemon['sprites']['front_default'], pkmnName, 'classic' );
    let statsHP = myPokemon['stats']['0']['base_stat'];
    let statsATK = myPokemon['stats']['1']['base_stat'];
    let statsDEF = myPokemon['stats']['2']['base_stat'];
    let statsSATK = myPokemon['stats']['3']['base_stat'];
    let statsSDEF = myPokemon['stats']['4']['base_stat'];
    let statsINIT = myPokemon['stats']['5']['base_stat'];
    let pkmnId = myPokemon['id']
    let pkmnType1 = myPokemon['types']['0']['type']['name']
    let pkmnType2 = myPokemon['types'][1] && myPokemon['types'][1]['type']['name'];
    let moves = () =>{
        allMoves = [];
        for (let i = 0; i < 4; i++) {
            if (myPokemon['abilities'][i]){
                allMoves.push(myPokemon['abilities'][i]['ability']['name'])
            }
        }
        return allMoves
    }
    const newPokemon = new Pokemon(pkmnName, pkmnId, frontHome, frontClassic, pkmnType1, pkmnType2, moves(), statsHP, statsATK, statsDEF, statsINIT, statsSATK, statsSDEF)
    myPokeData.push(newPokemon)
}
function saveAllData(){
    const intro = "const allPokemon = "
    const data = intro + JSON.stringify(myPokeData, null, 2);
    fs.writeFile('PokemonDB.js', data, (err) => {
        if (err) {
          console.error('Fehler beim Erstellen der Datei:', err);
        } else {
          console.log('Die Datei wurde erfolgreich erstellt.');
        }
      });
}
// Bilder speichern
async function saveConnect(url,pokeName,side) {
    const bildUrl = `${url}`;
    // Pfad und Dateiname, unter dem das Bild gespeichert werden soll
    const speicherpfad = `../IMG/DexImg/${pokeName}_${side}.png`;
    
    axios({
      method: 'get',
      url: bildUrl,
      responseType: 'stream'
    })
      .then((response) => {
        // Pipe (Weiterleiten) des Bildstroms in eine lokale Datei
        response.data.pipe(fs.createWriteStream(speicherpfad));
    
        // Optional: Auf das Ende des Schreibvorgangs warten
        response.data.on('end', () => {
          console.log('Bild erfolgreich heruntergeladen und gespeichert.');
        });
      })
      .catch((error) => {
        console.error('Fehler beim Herunterladen des Bildes:', error);
      });
    
    return speicherpfad

}
console.clear()
createAPI()
