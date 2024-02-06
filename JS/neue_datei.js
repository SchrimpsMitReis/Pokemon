const allPokemon = [[
  {
    "name": "bulbasaur",
    "id": 1,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "overgrow",
      "chlorophyll"
    ],
    "statsHP": 45,
    "satsATK": 49,
    "satsDEF": 49,
    "satsINIT": 45,
    "satsSATK": 65,
    "satsSDEF": 65
  },
  {
    "name": "ivysaur",
    "id": 2,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "overgrow",
      "chlorophyll"
    ],
    "statsHP": 60,
    "satsATK": 62,
    "satsDEF": 63,
    "satsINIT": 60,
    "satsSATK": 80,
    "satsSDEF": 80
  },
  {
    "name": "venusaur",
    "id": 3,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "overgrow",
      "chlorophyll"
    ],
    "statsHP": 80,
    "satsATK": 82,
    "satsDEF": 83,
    "satsINIT": 80,
    "satsSATK": 100,
    "satsSDEF": 100
  },
  {
    "name": "charmander",
    "id": 4,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "solar-power"
    ],
    "statsHP": 39,
    "satsATK": 52,
    "satsDEF": 43,
    "satsINIT": 65,
    "satsSATK": 60,
    "satsSDEF": 50
  },
  {
    "name": "charmeleon",
    "id": 5,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "solar-power"
    ],
    "statsHP": 58,
    "satsATK": 64,
    "satsDEF": 58,
    "satsINIT": 80,
    "satsSATK": 80,
    "satsSDEF": 65
  },
  {
    "name": "charizard",
    "id": 6,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "blaze",
      "solar-power"
    ],
    "statsHP": 78,
    "satsATK": 84,
    "satsDEF": 78,
    "satsINIT": 100,
    "satsSATK": 109,
    "satsSDEF": 85
  },
  {
    "name": "squirtle",
    "id": 7,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "rain-dish"
    ],
    "statsHP": 44,
    "satsATK": 48,
    "satsDEF": 65,
    "satsINIT": 43,
    "satsSATK": 50,
    "satsSDEF": 64
  },
  {
    "name": "wartortle",
    "id": 8,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "rain-dish"
    ],
    "statsHP": 59,
    "satsATK": 63,
    "satsDEF": 80,
    "satsINIT": 58,
    "satsSATK": 65,
    "satsSDEF": 80
  },
  {
    "name": "blastoise",
    "id": 9,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "rain-dish"
    ],
    "statsHP": 79,
    "satsATK": 83,
    "satsDEF": 100,
    "satsINIT": 78,
    "satsSATK": 85,
    "satsSDEF": 105
  },
  {
    "name": "caterpie",
    "id": 10,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "typ1": "bug",
    "moves": [
      "shield-dust",
      "run-away"
    ],
    "statsHP": 45,
    "satsATK": 30,
    "satsDEF": 35,
    "satsINIT": 45,
    "satsSATK": 20,
    "satsSDEF": 20
  },
  {
    "name": "metapod",
    "id": 11,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    "typ1": "bug",
    "moves": [
      "shed-skin"
    ],
    "statsHP": 50,
    "satsATK": 20,
    "satsDEF": 55,
    "satsINIT": 30,
    "satsSATK": 25,
    "satsSDEF": 25
  },
  {
    "name": "butterfree",
    "id": 12,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "compound-eyes",
      "tinted-lens"
    ],
    "statsHP": 60,
    "satsATK": 45,
    "satsDEF": 50,
    "satsINIT": 70,
    "satsSATK": 90,
    "satsSDEF": 80
  },
  {
    "name": "weedle",
    "id": 13,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "shield-dust",
      "run-away"
    ],
    "statsHP": 40,
    "satsATK": 35,
    "satsDEF": 30,
    "satsINIT": 50,
    "satsSATK": 20,
    "satsSDEF": 20
  },
  {
    "name": "kakuna",
    "id": 14,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "shed-skin"
    ],
    "statsHP": 45,
    "satsATK": 25,
    "satsDEF": 50,
    "satsINIT": 35,
    "satsSATK": 25,
    "satsSDEF": 25
  },
  {
    "name": "beedrill",
    "id": 15,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "swarm",
      "sniper"
    ],
    "statsHP": 65,
    "satsATK": 90,
    "satsDEF": 40,
    "satsINIT": 75,
    "satsSATK": 45,
    "satsSDEF": 80
  },
  {
    "name": "pidgey",
    "id": 16,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "statsHP": 40,
    "satsATK": 45,
    "satsDEF": 40,
    "satsINIT": 56,
    "satsSATK": 35,
    "satsSDEF": 35
  },
  {
    "name": "pidgeotto",
    "id": 17,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "statsHP": 63,
    "satsATK": 60,
    "satsDEF": 55,
    "satsINIT": 71,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "pidgeot",
    "id": 18,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "statsHP": 83,
    "satsATK": 80,
    "satsDEF": 75,
    "satsINIT": 101,
    "satsSATK": 70,
    "satsSDEF": 70
  },
  {
    "name": "rattata",
    "id": 19,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "guts",
      "hustle"
    ],
    "statsHP": 30,
    "satsATK": 56,
    "satsDEF": 35,
    "satsINIT": 72,
    "satsSATK": 25,
    "satsSDEF": 35
  },
  {
    "name": "raticate",
    "id": 20,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "guts",
      "hustle"
    ],
    "statsHP": 55,
    "satsATK": 81,
    "satsDEF": 60,
    "satsINIT": 97,
    "satsSATK": 50,
    "satsSDEF": 70
  },
  {
    "name": "spearow",
    "id": 21,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/21.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "sniper"
    ],
    "statsHP": 40,
    "satsATK": 60,
    "satsDEF": 30,
    "satsINIT": 70,
    "satsSATK": 31,
    "satsSDEF": 31
  },
  {
    "name": "fearow",
    "id": 22,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "sniper"
    ],
    "statsHP": 65,
    "satsATK": 90,
    "satsDEF": 65,
    "satsINIT": 100,
    "satsSATK": 61,
    "satsSDEF": 61
  },
  {
    "name": "ekans",
    "id": 23,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/23.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    "typ1": "poison",
    "moves": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "statsHP": 35,
    "satsATK": 60,
    "satsDEF": 44,
    "satsINIT": 55,
    "satsSATK": 40,
    "satsSDEF": 54
  },
  {
    "name": "arbok",
    "id": 24,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/24.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    "typ1": "poison",
    "moves": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "statsHP": 60,
    "satsATK": 95,
    "satsDEF": 69,
    "satsINIT": 80,
    "satsSATK": 65,
    "satsSDEF": 79
  },
  {
    "name": "pikachu",
    "id": 25,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "typ1": "electric",
    "moves": [
      "static",
      "lightning-rod"
    ],
    "statsHP": 35,
    "satsATK": 55,
    "satsDEF": 40,
    "satsINIT": 90,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "raichu",
    "id": 26,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    "typ1": "electric",
    "moves": [
      "static",
      "lightning-rod"
    ],
    "statsHP": 60,
    "satsATK": 90,
    "satsDEF": 55,
    "satsINIT": 110,
    "satsSATK": 90,
    "satsSDEF": 80
  },
  {
    "name": "sandshrew",
    "id": 27,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    "typ1": "ground",
    "moves": [
      "sand-veil",
      "sand-rush"
    ],
    "statsHP": 50,
    "satsATK": 75,
    "satsDEF": 85,
    "satsINIT": 40,
    "satsSATK": 20,
    "satsSDEF": 30
  },
  {
    "name": "sandslash",
    "id": 28,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    "typ1": "ground",
    "moves": [
      "sand-veil",
      "sand-rush"
    ],
    "statsHP": 75,
    "satsATK": 100,
    "satsDEF": 110,
    "satsINIT": 65,
    "satsSATK": 45,
    "satsSDEF": 55
  },
  {
    "name": "nidoran-f",
    "id": 29,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/29.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    "typ1": "poison",
    "moves": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "statsHP": 55,
    "satsATK": 47,
    "satsDEF": 52,
    "satsINIT": 41,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "nidorina",
    "id": 30,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    "typ1": "poison",
    "moves": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "statsHP": 70,
    "satsATK": 62,
    "satsDEF": 67,
    "satsINIT": 56,
    "satsSATK": 55,
    "satsSDEF": 55
  },
  {
    "name": "nidoqueen",
    "id": 31,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    "typ1": "poison",
    "typ2": "ground",
    "moves": [
      "poison-point",
      "rivalry",
      "sheer-force"
    ],
    "statsHP": 90,
    "satsATK": 92,
    "satsDEF": 87,
    "satsINIT": 76,
    "satsSATK": 75,
    "satsSDEF": 85
  },
  {
    "name": "nidoran-m",
    "id": 32,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/32.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    "typ1": "poison",
    "moves": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "statsHP": 46,
    "satsATK": 57,
    "satsDEF": 40,
    "satsINIT": 50,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "nidorino",
    "id": 33,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/33.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    "typ1": "poison",
    "moves": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "statsHP": 61,
    "satsATK": 72,
    "satsDEF": 57,
    "satsINIT": 65,
    "satsSATK": 55,
    "satsSDEF": 55
  },
  {
    "name": "nidoking",
    "id": 34,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/34.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    "typ1": "poison",
    "typ2": "ground",
    "moves": [
      "poison-point",
      "rivalry",
      "sheer-force"
    ],
    "statsHP": 81,
    "satsATK": 102,
    "satsDEF": 77,
    "satsINIT": 85,
    "satsSATK": 85,
    "satsSDEF": 75
  },
  {
    "name": "clefairy",
    "id": 35,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    "typ1": "fairy",
    "moves": [
      "cute-charm",
      "magic-guard",
      "friend-guard"
    ],
    "statsHP": 70,
    "satsATK": 45,
    "satsDEF": 48,
    "satsINIT": 35,
    "satsSATK": 60,
    "satsSDEF": 65
  },
  {
    "name": "clefable",
    "id": 36,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    "typ1": "fairy",
    "moves": [
      "cute-charm",
      "magic-guard",
      "unaware"
    ],
    "statsHP": 95,
    "satsATK": 70,
    "satsDEF": 73,
    "satsINIT": 60,
    "satsSATK": 95,
    "satsSDEF": 90
  },
  {
    "name": "vulpix",
    "id": 37,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/37.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    "typ1": "fire",
    "moves": [
      "flash-fire",
      "drought"
    ],
    "statsHP": 38,
    "satsATK": 41,
    "satsDEF": 40,
    "satsINIT": 65,
    "satsSATK": 50,
    "satsSDEF": 65
  },
  {
    "name": "ninetales",
    "id": 38,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    "typ1": "fire",
    "moves": [
      "flash-fire",
      "drought"
    ],
    "statsHP": 73,
    "satsATK": 76,
    "satsDEF": 75,
    "satsINIT": 100,
    "satsSATK": 81,
    "satsSDEF": 100
  },
  {
    "name": "jigglypuff",
    "id": 39,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    "typ1": "normal",
    "typ2": "fairy",
    "moves": [
      "cute-charm",
      "competitive",
      "friend-guard"
    ],
    "statsHP": 115,
    "satsATK": 45,
    "satsDEF": 20,
    "satsINIT": 20,
    "satsSATK": 45,
    "satsSDEF": 25
  },
  {
    "name": "wigglytuff",
    "id": 40,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/40.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    "typ1": "normal",
    "typ2": "fairy",
    "moves": [
      "cute-charm",
      "competitive",
      "frisk"
    ],
    "statsHP": 140,
    "satsATK": 70,
    "satsDEF": 45,
    "satsINIT": 45,
    "satsSATK": 85,
    "satsSDEF": 50
  },
  {
    "name": "zubat",
    "id": 41,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/41.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    "typ1": "poison",
    "typ2": "flying",
    "moves": [
      "inner-focus",
      "infiltrator"
    ],
    "statsHP": 40,
    "satsATK": 45,
    "satsDEF": 35,
    "satsINIT": 55,
    "satsSATK": 30,
    "satsSDEF": 40
  },
  {
    "name": "golbat",
    "id": 42,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/42.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    "typ1": "poison",
    "typ2": "flying",
    "moves": [
      "inner-focus",
      "infiltrator"
    ],
    "statsHP": 75,
    "satsATK": 80,
    "satsDEF": 70,
    "satsINIT": 90,
    "satsSATK": 65,
    "satsSDEF": 75
  },
  {
    "name": "oddish",
    "id": 43,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/43.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "run-away"
    ],
    "statsHP": 45,
    "satsATK": 50,
    "satsDEF": 55,
    "satsINIT": 30,
    "satsSATK": 75,
    "satsSDEF": 65
  },
  {
    "name": "gloom",
    "id": 44,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/44.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "stench"
    ],
    "statsHP": 60,
    "satsATK": 65,
    "satsDEF": 70,
    "satsINIT": 40,
    "satsSATK": 85,
    "satsSDEF": 75
  },
  {
    "name": "vileplume",
    "id": 45,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/45.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "effect-spore"
    ],
    "statsHP": 75,
    "satsATK": 80,
    "satsDEF": 85,
    "satsINIT": 50,
    "satsSATK": 110,
    "satsSDEF": 90
  },
  {
    "name": "paras",
    "id": 46,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/46.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "effect-spore",
      "dry-skin",
      "damp"
    ],
    "statsHP": 35,
    "satsATK": 70,
    "satsDEF": 55,
    "satsINIT": 25,
    "satsSATK": 45,
    "satsSDEF": 55
  },
  {
    "name": "parasect",
    "id": 47,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/47.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "effect-spore",
      "dry-skin",
      "damp"
    ],
    "statsHP": 60,
    "satsATK": 95,
    "satsDEF": 80,
    "satsINIT": 30,
    "satsSATK": 60,
    "satsSDEF": 80
  },
  {
    "name": "venonat",
    "id": 48,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/48.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "compound-eyes",
      "tinted-lens",
      "run-away"
    ],
    "statsHP": 60,
    "satsATK": 55,
    "satsDEF": 50,
    "satsINIT": 45,
    "satsSATK": 40,
    "satsSDEF": 55
  },
  {
    "name": "venomoth",
    "id": 49,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/49.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "shield-dust",
      "tinted-lens",
      "wonder-skin"
    ],
    "statsHP": 70,
    "satsATK": 65,
    "satsDEF": 60,
    "satsINIT": 90,
    "satsSATK": 90,
    "satsSDEF": 75
  },
  {
    "name": "diglett",
    "id": 50,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/50.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    "typ1": "ground",
    "moves": [
      "sand-veil",
      "arena-trap",
      "sand-force"
    ],
    "statsHP": 10,
    "satsATK": 55,
    "satsDEF": 25,
    "satsINIT": 95,
    "satsSATK": 35,
    "satsSDEF": 45
  },
  {
    "name": "dugtrio",
    "id": 51,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/51.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    "typ1": "ground",
    "moves": [
      "sand-veil",
      "arena-trap",
      "sand-force"
    ],
    "statsHP": 35,
    "satsATK": 100,
    "satsDEF": 50,
    "satsINIT": 120,
    "satsSATK": 50,
    "satsSDEF": 70
  },
  {
    "name": "meowth",
    "id": 52,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/52.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "technician",
      "unnerve"
    ],
    "statsHP": 40,
    "satsATK": 45,
    "satsDEF": 35,
    "satsINIT": 90,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "persian",
    "id": 53,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/53.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    "typ1": "normal",
    "moves": [
      "limber",
      "technician",
      "unnerve"
    ],
    "statsHP": 65,
    "satsATK": 70,
    "satsDEF": 60,
    "satsINIT": 115,
    "satsSATK": 65,
    "satsSDEF": 65
  },
  {
    "name": "psyduck",
    "id": 54,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    "typ1": "water",
    "moves": [
      "damp",
      "cloud-nine",
      "swift-swim"
    ],
    "statsHP": 50,
    "satsATK": 52,
    "satsDEF": 48,
    "satsINIT": 55,
    "satsSATK": 65,
    "satsSDEF": 50
  },
  {
    "name": "golduck",
    "id": 55,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/55.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    "typ1": "water",
    "moves": [
      "damp",
      "cloud-nine",
      "swift-swim"
    ],
    "statsHP": 80,
    "satsATK": 82,
    "satsDEF": 78,
    "satsINIT": 85,
    "satsSATK": 95,
    "satsSDEF": 80
  },
  {
    "name": "mankey",
    "id": 56,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/56.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    "typ1": "fighting",
    "moves": [
      "vital-spirit",
      "anger-point",
      "defiant"
    ],
    "statsHP": 40,
    "satsATK": 80,
    "satsDEF": 35,
    "satsINIT": 70,
    "satsSATK": 35,
    "satsSDEF": 45
  },
  {
    "name": "primeape",
    "id": 57,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/57.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    "typ1": "fighting",
    "moves": [
      "vital-spirit",
      "anger-point",
      "defiant"
    ],
    "statsHP": 65,
    "satsATK": 105,
    "satsDEF": 60,
    "satsINIT": 95,
    "satsSATK": 60,
    "satsSDEF": 70
  },
  {
    "name": "growlithe",
    "id": 58,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/58.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    "typ1": "fire",
    "moves": [
      "intimidate",
      "flash-fire",
      "justified"
    ],
    "statsHP": 55,
    "satsATK": 70,
    "satsDEF": 45,
    "satsINIT": 60,
    "satsSATK": 70,
    "satsSDEF": 50
  },
  {
    "name": "arcanine",
    "id": 59,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/59.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    "typ1": "fire",
    "moves": [
      "intimidate",
      "flash-fire",
      "justified"
    ],
    "statsHP": 90,
    "satsATK": 110,
    "satsDEF": 80,
    "satsINIT": 95,
    "satsSATK": 100,
    "satsSDEF": 80
  },
  {
    "name": "poliwag",
    "id": 60,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/60.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    "typ1": "water",
    "moves": [
      "water-absorb",
      "damp",
      "swift-swim"
    ],
    "statsHP": 40,
    "satsATK": 50,
    "satsDEF": 40,
    "satsINIT": 90,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "poliwhirl",
    "id": 61,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/61.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    "typ1": "water",
    "moves": [
      "water-absorb",
      "damp",
      "swift-swim"
    ],
    "statsHP": 65,
    "satsATK": 65,
    "satsDEF": 65,
    "satsINIT": 90,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "poliwrath",
    "id": 62,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/62.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    "typ1": "water",
    "typ2": "fighting",
    "moves": [
      "water-absorb",
      "damp",
      "swift-swim"
    ],
    "statsHP": 90,
    "satsATK": 95,
    "satsDEF": 95,
    "satsINIT": 70,
    "satsSATK": 70,
    "satsSDEF": 90
  },
  {
    "name": "abra",
    "id": 63,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/63.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    "typ1": "psychic",
    "moves": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ],
    "statsHP": 25,
    "satsATK": 20,
    "satsDEF": 15,
    "satsINIT": 90,
    "satsSATK": 105,
    "satsSDEF": 55
  },
  {
    "name": "kadabra",
    "id": 64,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/64.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    "typ1": "psychic",
    "moves": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ],
    "statsHP": 40,
    "satsATK": 35,
    "satsDEF": 30,
    "satsINIT": 105,
    "satsSATK": 120,
    "satsSDEF": 70
  },
  {
    "name": "alakazam",
    "id": 65,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/65.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    "typ1": "psychic",
    "moves": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ],
    "statsHP": 55,
    "satsATK": 50,
    "satsDEF": 45,
    "satsINIT": 120,
    "satsSATK": 135,
    "satsSDEF": 95
  },
  {
    "name": "machop",
    "id": 66,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/66.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "statsHP": 70,
    "satsATK": 80,
    "satsDEF": 50,
    "satsINIT": 35,
    "satsSATK": 35,
    "satsSDEF": 35
  },
  {
    "name": "machoke",
    "id": 67,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/67.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "statsHP": 80,
    "satsATK": 100,
    "satsDEF": 70,
    "satsINIT": 45,
    "satsSATK": 50,
    "satsSDEF": 60
  },
  {
    "name": "machamp",
    "id": 68,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/68.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "statsHP": 90,
    "satsATK": 130,
    "satsDEF": 80,
    "satsINIT": 55,
    "satsSATK": 65,
    "satsSDEF": 85
  },
  {
    "name": "bellsprout",
    "id": 69,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/69.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "gluttony"
    ],
    "statsHP": 50,
    "satsATK": 75,
    "satsDEF": 35,
    "satsINIT": 40,
    "satsSATK": 70,
    "satsSDEF": 30
  },
  {
    "name": "weepinbell",
    "id": 70,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/70.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "gluttony"
    ],
    "statsHP": 65,
    "satsATK": 90,
    "satsDEF": 50,
    "satsINIT": 55,
    "satsSATK": 85,
    "satsSDEF": 45
  },
  {
    "name": "victreebel",
    "id": 71,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/71.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "gluttony"
    ],
    "statsHP": 80,
    "satsATK": 105,
    "satsDEF": 65,
    "satsINIT": 70,
    "satsSATK": 100,
    "satsSDEF": 70
  },
  {
    "name": "tentacool",
    "id": 72,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/72.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    "typ1": "water",
    "typ2": "poison",
    "moves": [
      "clear-body",
      "liquid-ooze",
      "rain-dish"
    ],
    "statsHP": 40,
    "satsATK": 40,
    "satsDEF": 35,
    "satsINIT": 70,
    "satsSATK": 50,
    "satsSDEF": 100
  },
  {
    "name": "tentacruel",
    "id": 73,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/73.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    "typ1": "water",
    "typ2": "poison",
    "moves": [
      "clear-body",
      "liquid-ooze",
      "rain-dish"
    ],
    "statsHP": 80,
    "satsATK": 70,
    "satsDEF": 65,
    "satsINIT": 100,
    "satsSATK": 80,
    "satsSDEF": 120
  },
  {
    "name": "geodude",
    "id": 74,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/74.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ],
    "statsHP": 40,
    "satsATK": 80,
    "satsDEF": 100,
    "satsINIT": 20,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "graveler",
    "id": 75,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/75.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ],
    "statsHP": 55,
    "satsATK": 95,
    "satsDEF": 115,
    "satsINIT": 35,
    "satsSATK": 45,
    "satsSDEF": 45
  },
  {
    "name": "golem",
    "id": 76,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/76.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ],
    "statsHP": 80,
    "satsATK": 120,
    "satsDEF": 130,
    "satsINIT": 45,
    "satsSATK": 55,
    "satsSDEF": 65
  },
  {
    "name": "ponyta",
    "id": 77,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/77.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    "typ1": "fire",
    "moves": [
      "run-away",
      "flash-fire",
      "flame-body"
    ],
    "statsHP": 50,
    "satsATK": 85,
    "satsDEF": 55,
    "satsINIT": 90,
    "satsSATK": 65,
    "satsSDEF": 65
  },
  {
    "name": "rapidash",
    "id": 78,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/78.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    "typ1": "fire",
    "moves": [
      "run-away",
      "flash-fire",
      "flame-body"
    ],
    "statsHP": 65,
    "satsATK": 100,
    "satsDEF": 70,
    "satsINIT": 105,
    "satsSATK": 80,
    "satsSDEF": 80
  },
  {
    "name": "slowpoke",
    "id": 79,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/79.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    "typ1": "water",
    "typ2": "psychic",
    "moves": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "statsHP": 90,
    "satsATK": 65,
    "satsDEF": 65,
    "satsINIT": 15,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "slowbro",
    "id": 80,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/80.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    "typ1": "water",
    "typ2": "psychic",
    "moves": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "statsHP": 95,
    "satsATK": 75,
    "satsDEF": 110,
    "satsINIT": 30,
    "satsSATK": 100,
    "satsSDEF": 80
  },
  {
    "name": "magnemite",
    "id": 81,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/81.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    "typ1": "electric",
    "typ2": "steel",
    "moves": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ],
    "statsHP": 25,
    "satsATK": 35,
    "satsDEF": 70,
    "satsINIT": 45,
    "satsSATK": 95,
    "satsSDEF": 55
  },
  {
    "name": "magneton",
    "id": 82,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/82.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    "typ1": "electric",
    "typ2": "steel",
    "moves": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ],
    "statsHP": 50,
    "satsATK": 60,
    "satsDEF": 95,
    "satsINIT": 70,
    "satsSATK": 120,
    "satsSDEF": 70
  },
  {
    "name": "farfetchd",
    "id": 83,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/83.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "inner-focus",
      "defiant"
    ],
    "statsHP": 52,
    "satsATK": 90,
    "satsDEF": 55,
    "satsINIT": 60,
    "satsSATK": 58,
    "satsSDEF": 62
  },
  {
    "name": "doduo",
    "id": 84,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/84.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "run-away",
      "early-bird",
      "tangled-feet"
    ],
    "statsHP": 35,
    "satsATK": 85,
    "satsDEF": 45,
    "satsINIT": 75,
    "satsSATK": 35,
    "satsSDEF": 35
  },
  {
    "name": "dodrio",
    "id": 85,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/85.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "run-away",
      "early-bird",
      "tangled-feet"
    ],
    "statsHP": 60,
    "satsATK": 110,
    "satsDEF": 70,
    "satsINIT": 110,
    "satsSATK": 60,
    "satsSDEF": 60
  },
  {
    "name": "seel",
    "id": 86,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/86.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    "typ1": "water",
    "moves": [
      "thick-fat",
      "hydration",
      "ice-body"
    ],
    "statsHP": 65,
    "satsATK": 45,
    "satsDEF": 55,
    "satsINIT": 45,
    "satsSATK": 45,
    "satsSDEF": 70
  },
  {
    "name": "dewgong",
    "id": 87,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/87.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    "typ1": "water",
    "typ2": "ice",
    "moves": [
      "thick-fat",
      "hydration",
      "ice-body"
    ],
    "statsHP": 90,
    "satsATK": 70,
    "satsDEF": 80,
    "satsINIT": 70,
    "satsSATK": 70,
    "satsSDEF": 95
  },
  {
    "name": "grimer",
    "id": 88,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/88.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    "typ1": "poison",
    "moves": [
      "stench",
      "sticky-hold",
      "poison-touch"
    ],
    "statsHP": 80,
    "satsATK": 80,
    "satsDEF": 50,
    "satsINIT": 25,
    "satsSATK": 40,
    "satsSDEF": 50
  },
  {
    "name": "muk",
    "id": 89,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/89.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    "typ1": "poison",
    "moves": [
      "stench",
      "sticky-hold",
      "poison-touch"
    ],
    "statsHP": 105,
    "satsATK": 105,
    "satsDEF": 75,
    "satsINIT": 50,
    "satsSATK": 65,
    "satsSDEF": 100
  },
  {
    "name": "shellder",
    "id": 90,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/90.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    "typ1": "water",
    "moves": [
      "shell-armor",
      "skill-link",
      "overcoat"
    ],
    "statsHP": 30,
    "satsATK": 65,
    "satsDEF": 100,
    "satsINIT": 40,
    "satsSATK": 45,
    "satsSDEF": 25
  },
  {
    "name": "cloyster",
    "id": 91,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/91.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    "typ1": "water",
    "typ2": "ice",
    "moves": [
      "shell-armor",
      "skill-link",
      "overcoat"
    ],
    "statsHP": 50,
    "satsATK": 95,
    "satsDEF": 180,
    "satsINIT": 70,
    "satsSATK": 85,
    "satsSDEF": 45
  },
  {
    "name": "gastly",
    "id": 92,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/92.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    "typ1": "ghost",
    "typ2": "poison",
    "moves": [
      "levitate"
    ],
    "statsHP": 30,
    "satsATK": 35,
    "satsDEF": 30,
    "satsINIT": 80,
    "satsSATK": 100,
    "satsSDEF": 35
  },
  {
    "name": "haunter",
    "id": 93,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/93.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    "typ1": "ghost",
    "typ2": "poison",
    "moves": [
      "levitate"
    ],
    "statsHP": 45,
    "satsATK": 50,
    "satsDEF": 45,
    "satsINIT": 95,
    "satsSATK": 115,
    "satsSDEF": 55
  },
  {
    "name": "gengar",
    "id": 94,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    "typ1": "ghost",
    "typ2": "poison",
    "moves": [
      "cursed-body"
    ],
    "statsHP": 60,
    "satsATK": 65,
    "satsDEF": 60,
    "satsINIT": 110,
    "satsSATK": 130,
    "satsSDEF": 75
  },
  {
    "name": "onix",
    "id": 95,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/95.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "rock-head",
      "sturdy",
      "weak-armor"
    ],
    "statsHP": 35,
    "satsATK": 45,
    "satsDEF": 160,
    "satsINIT": 70,
    "satsSATK": 30,
    "satsSDEF": 45
  },
  {
    "name": "drowzee",
    "id": 96,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/96.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    "typ1": "psychic",
    "moves": [
      "insomnia",
      "forewarn",
      "inner-focus"
    ],
    "statsHP": 60,
    "satsATK": 48,
    "satsDEF": 45,
    "satsINIT": 42,
    "satsSATK": 43,
    "satsSDEF": 90
  },
  {
    "name": "hypno",
    "id": 97,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/97.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    "typ1": "psychic",
    "moves": [
      "insomnia",
      "forewarn",
      "inner-focus"
    ],
    "statsHP": 85,
    "satsATK": 73,
    "satsDEF": 70,
    "satsINIT": 67,
    "satsSATK": 73,
    "satsSDEF": 115
  },
  {
    "name": "krabby",
    "id": 98,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/98.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    "typ1": "water",
    "moves": [
      "hyper-cutter",
      "shell-armor",
      "sheer-force"
    ],
    "statsHP": 30,
    "satsATK": 105,
    "satsDEF": 90,
    "satsINIT": 50,
    "satsSATK": 25,
    "satsSDEF": 25
  },
  {
    "name": "kingler",
    "id": 99,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/99.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    "typ1": "water",
    "moves": [
      "hyper-cutter",
      "shell-armor",
      "sheer-force"
    ],
    "statsHP": 55,
    "satsATK": 130,
    "satsDEF": 115,
    "satsINIT": 75,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "voltorb",
    "id": 100,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/100.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    "typ1": "electric",
    "moves": [
      "soundproof",
      "static",
      "aftermath"
    ],
    "statsHP": 40,
    "satsATK": 30,
    "satsDEF": 50,
    "satsINIT": 100,
    "satsSATK": 55,
    "satsSDEF": 55
  },
  {
    "name": "electrode",
    "id": 101,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/101.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    "typ1": "electric",
    "moves": [
      "soundproof",
      "static",
      "aftermath"
    ],
    "statsHP": 60,
    "satsATK": 50,
    "satsDEF": 70,
    "satsINIT": 150,
    "satsSATK": 80,
    "satsSDEF": 80
  },
  {
    "name": "exeggcute",
    "id": 102,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/102.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    "typ1": "grass",
    "typ2": "psychic",
    "moves": [
      "chlorophyll",
      "harvest"
    ],
    "statsHP": 60,
    "satsATK": 40,
    "satsDEF": 80,
    "satsINIT": 40,
    "satsSATK": 60,
    "satsSDEF": 45
  },
  {
    "name": "exeggutor",
    "id": 103,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/103.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    "typ1": "grass",
    "typ2": "psychic",
    "moves": [
      "chlorophyll",
      "harvest"
    ],
    "statsHP": 95,
    "satsATK": 95,
    "satsDEF": 85,
    "satsINIT": 55,
    "satsSATK": 125,
    "satsSDEF": 75
  },
  {
    "name": "cubone",
    "id": 104,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/104.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    "typ1": "ground",
    "moves": [
      "rock-head",
      "lightning-rod",
      "battle-armor"
    ],
    "statsHP": 50,
    "satsATK": 50,
    "satsDEF": 95,
    "satsINIT": 35,
    "satsSATK": 40,
    "satsSDEF": 50
  },
  {
    "name": "marowak",
    "id": 105,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/105.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    "typ1": "ground",
    "moves": [
      "rock-head",
      "lightning-rod",
      "battle-armor"
    ],
    "statsHP": 60,
    "satsATK": 80,
    "satsDEF": 110,
    "satsINIT": 45,
    "satsSATK": 50,
    "satsSDEF": 80
  },
  {
    "name": "hitmonlee",
    "id": 106,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/106.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    "typ1": "fighting",
    "moves": [
      "limber",
      "reckless",
      "unburden"
    ],
    "statsHP": 50,
    "satsATK": 120,
    "satsDEF": 53,
    "satsINIT": 87,
    "satsSATK": 35,
    "satsSDEF": 110
  },
  {
    "name": "hitmonchan",
    "id": 107,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/107.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    "typ1": "fighting",
    "moves": [
      "keen-eye",
      "iron-fist",
      "inner-focus"
    ],
    "statsHP": 50,
    "satsATK": 105,
    "satsDEF": 79,
    "satsINIT": 76,
    "satsSATK": 35,
    "satsSDEF": 110
  },
  {
    "name": "lickitung",
    "id": 108,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/108.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    "typ1": "normal",
    "moves": [
      "own-tempo",
      "oblivious",
      "cloud-nine"
    ],
    "statsHP": 90,
    "satsATK": 55,
    "satsDEF": 75,
    "satsINIT": 30,
    "satsSATK": 60,
    "satsSDEF": 75
  },
  {
    "name": "koffing",
    "id": 109,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/109.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    "typ1": "poison",
    "moves": [
      "levitate",
      "neutralizing-gas",
      "stench"
    ],
    "statsHP": 40,
    "satsATK": 65,
    "satsDEF": 95,
    "satsINIT": 35,
    "satsSATK": 60,
    "satsSDEF": 45
  },
  {
    "name": "weezing",
    "id": 110,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/110.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    "typ1": "poison",
    "moves": [
      "levitate",
      "neutralizing-gas",
      "stench"
    ],
    "statsHP": 65,
    "satsATK": 90,
    "satsDEF": 120,
    "satsINIT": 60,
    "satsSATK": 85,
    "satsSDEF": 70
  },
  {
    "name": "rhyhorn",
    "id": 111,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/111.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    "typ1": "ground",
    "typ2": "rock",
    "moves": [
      "lightning-rod",
      "rock-head",
      "reckless"
    ],
    "statsHP": 80,
    "satsATK": 85,
    "satsDEF": 95,
    "satsINIT": 25,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "rhydon",
    "id": 112,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/112.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    "typ1": "ground",
    "typ2": "rock",
    "moves": [
      "lightning-rod",
      "rock-head",
      "reckless"
    ],
    "statsHP": 105,
    "satsATK": 130,
    "satsDEF": 120,
    "satsINIT": 40,
    "satsSATK": 45,
    "satsSDEF": 45
  },
  {
    "name": "chansey",
    "id": 113,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/113.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    "typ1": "normal",
    "moves": [
      "natural-cure",
      "serene-grace",
      "healer"
    ],
    "statsHP": 250,
    "satsATK": 5,
    "satsDEF": 5,
    "satsINIT": 50,
    "satsSATK": 35,
    "satsSDEF": 105
  },
  {
    "name": "tangela",
    "id": 114,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/114.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "leaf-guard",
      "regenerator"
    ],
    "statsHP": 65,
    "satsATK": 55,
    "satsDEF": 115,
    "satsINIT": 60,
    "satsSATK": 100,
    "satsSDEF": 40
  },
  {
    "name": "kangaskhan",
    "id": 115,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/115.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    "typ1": "normal",
    "moves": [
      "early-bird",
      "scrappy",
      "inner-focus"
    ],
    "statsHP": 105,
    "satsATK": 95,
    "satsDEF": 80,
    "satsINIT": 90,
    "satsSATK": 40,
    "satsSDEF": 80
  },
  {
    "name": "horsea",
    "id": 116,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/116.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "sniper",
      "damp"
    ],
    "statsHP": 30,
    "satsATK": 40,
    "satsDEF": 70,
    "satsINIT": 60,
    "satsSATK": 70,
    "satsSDEF": 25
  },
  {
    "name": "seadra",
    "id": 117,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/117.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    "typ1": "water",
    "moves": [
      "poison-point",
      "sniper",
      "damp"
    ],
    "statsHP": 55,
    "satsATK": 65,
    "satsDEF": 95,
    "satsINIT": 85,
    "satsSATK": 95,
    "satsSDEF": 45
  },
  {
    "name": "goldeen",
    "id": 118,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/118.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "water-veil",
      "lightning-rod"
    ],
    "statsHP": 45,
    "satsATK": 67,
    "satsDEF": 60,
    "satsINIT": 63,
    "satsSATK": 35,
    "satsSDEF": 50
  },
  {
    "name": "seaking",
    "id": 119,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/119.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "water-veil",
      "lightning-rod"
    ],
    "statsHP": 80,
    "satsATK": 92,
    "satsDEF": 65,
    "satsINIT": 68,
    "satsSATK": 65,
    "satsSDEF": 80
  },
  {
    "name": "staryu",
    "id": 120,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/120.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    "typ1": "water",
    "moves": [
      "illuminate",
      "natural-cure",
      "analytic"
    ],
    "statsHP": 30,
    "satsATK": 45,
    "satsDEF": 55,
    "satsINIT": 85,
    "satsSATK": 70,
    "satsSDEF": 55
  },
  {
    "name": "starmie",
    "id": 121,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/121.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    "typ1": "water",
    "typ2": "psychic",
    "moves": [
      "illuminate",
      "natural-cure",
      "analytic"
    ],
    "statsHP": 60,
    "satsATK": 75,
    "satsDEF": 85,
    "satsINIT": 115,
    "satsSATK": 100,
    "satsSDEF": 85
  },
  {
    "name": "mr-mime",
    "id": 122,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/122.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "soundproof",
      "filter",
      "technician"
    ],
    "statsHP": 40,
    "satsATK": 45,
    "satsDEF": 65,
    "satsINIT": 90,
    "satsSATK": 100,
    "satsSDEF": 120
  },
  {
    "name": "scyther",
    "id": 123,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/123.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "swarm",
      "technician",
      "steadfast"
    ],
    "statsHP": 70,
    "satsATK": 110,
    "satsDEF": 80,
    "satsINIT": 105,
    "satsSATK": 55,
    "satsSDEF": 80
  },
  {
    "name": "jynx",
    "id": 124,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/124.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    "typ1": "ice",
    "typ2": "psychic",
    "moves": [
      "oblivious",
      "forewarn",
      "dry-skin"
    ],
    "statsHP": 65,
    "satsATK": 50,
    "satsDEF": 35,
    "satsINIT": 95,
    "satsSATK": 115,
    "satsSDEF": 95
  },
  {
    "name": "electabuzz",
    "id": 125,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/125.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    "typ1": "electric",
    "moves": [
      "static",
      "vital-spirit"
    ],
    "statsHP": 65,
    "satsATK": 83,
    "satsDEF": 57,
    "satsINIT": 105,
    "satsSATK": 95,
    "satsSDEF": 85
  },
  {
    "name": "magmar",
    "id": 126,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/126.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    "typ1": "fire",
    "moves": [
      "flame-body",
      "vital-spirit"
    ],
    "statsHP": 65,
    "satsATK": 95,
    "satsDEF": 57,
    "satsINIT": 93,
    "satsSATK": 100,
    "satsSDEF": 85
  },
  {
    "name": "pinsir",
    "id": 127,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/127.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    "typ1": "bug",
    "moves": [
      "hyper-cutter",
      "mold-breaker",
      "moxie"
    ],
    "statsHP": 65,
    "satsATK": 125,
    "satsDEF": 100,
    "satsINIT": 85,
    "satsSATK": 55,
    "satsSDEF": 70
  },
  {
    "name": "tauros",
    "id": 128,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/128.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    "typ1": "normal",
    "moves": [
      "intimidate",
      "anger-point",
      "sheer-force"
    ],
    "statsHP": 75,
    "satsATK": 100,
    "satsDEF": 95,
    "satsINIT": 110,
    "satsSATK": 40,
    "satsSDEF": 70
  },
  {
    "name": "magikarp",
    "id": 129,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/129.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "rattled"
    ],
    "statsHP": 20,
    "satsATK": 10,
    "satsDEF": 55,
    "satsINIT": 80,
    "satsSATK": 15,
    "satsSDEF": 20
  },
  {
    "name": "gyarados",
    "id": 130,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/130.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "intimidate",
      "moxie"
    ],
    "statsHP": 95,
    "satsATK": 125,
    "satsDEF": 79,
    "satsINIT": 81,
    "satsSATK": 60,
    "satsSDEF": 100
  },
  {
    "name": "lapras",
    "id": 131,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/131.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    "typ1": "water",
    "typ2": "ice",
    "moves": [
      "water-absorb",
      "shell-armor",
      "hydration"
    ],
    "statsHP": 130,
    "satsATK": 85,
    "satsDEF": 80,
    "satsINIT": 60,
    "satsSATK": 85,
    "satsSDEF": 95
  },
  {
    "name": "ditto",
    "id": 132,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    "typ1": "normal",
    "moves": [
      "limber",
      "imposter"
    ],
    "statsHP": 48,
    "satsATK": 48,
    "satsDEF": 48,
    "satsINIT": 48,
    "satsSATK": 48,
    "satsSDEF": 48
  },
  {
    "name": "eevee",
    "id": 133,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "adaptability",
      "anticipation"
    ],
    "statsHP": 55,
    "satsATK": 55,
    "satsDEF": 50,
    "satsINIT": 55,
    "satsSATK": 45,
    "satsSDEF": 65
  },
  {
    "name": "vaporeon",
    "id": 134,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    "typ1": "water",
    "moves": [
      "water-absorb",
      "hydration"
    ],
    "statsHP": 130,
    "satsATK": 65,
    "satsDEF": 60,
    "satsINIT": 65,
    "satsSATK": 110,
    "satsSDEF": 95
  },
  {
    "name": "jolteon",
    "id": 135,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/135.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    "typ1": "electric",
    "moves": [
      "volt-absorb",
      "quick-feet"
    ],
    "statsHP": 65,
    "satsATK": 65,
    "satsDEF": 60,
    "satsINIT": 130,
    "satsSATK": 110,
    "satsSDEF": 95
  },
  {
    "name": "flareon",
    "id": 136,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/136.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    "typ1": "fire",
    "moves": [
      "flash-fire",
      "guts"
    ],
    "statsHP": 65,
    "satsATK": 130,
    "satsDEF": 60,
    "satsINIT": 65,
    "satsSATK": 95,
    "satsSDEF": 110
  },
  {
    "name": "porygon",
    "id": 137,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/137.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    "typ1": "normal",
    "moves": [
      "trace",
      "download",
      "analytic"
    ],
    "statsHP": 65,
    "satsATK": 60,
    "satsDEF": 70,
    "satsINIT": 40,
    "satsSATK": 85,
    "satsSDEF": 75
  },
  {
    "name": "omanyte",
    "id": 138,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/138.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "swift-swim",
      "shell-armor",
      "weak-armor"
    ],
    "statsHP": 35,
    "satsATK": 40,
    "satsDEF": 100,
    "satsINIT": 35,
    "satsSATK": 90,
    "satsSDEF": 55
  },
  {
    "name": "omastar",
    "id": 139,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/139.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "swift-swim",
      "shell-armor",
      "weak-armor"
    ],
    "statsHP": 70,
    "satsATK": 60,
    "satsDEF": 125,
    "satsINIT": 55,
    "satsSATK": 115,
    "satsSDEF": 70
  },
  {
    "name": "kabuto",
    "id": 140,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/140.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "swift-swim",
      "battle-armor",
      "weak-armor"
    ],
    "statsHP": 30,
    "satsATK": 80,
    "satsDEF": 90,
    "satsINIT": 55,
    "satsSATK": 55,
    "satsSDEF": 45
  },
  {
    "name": "kabutops",
    "id": 141,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/141.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "swift-swim",
      "battle-armor",
      "weak-armor"
    ],
    "statsHP": 60,
    "satsATK": 115,
    "satsDEF": 105,
    "satsINIT": 80,
    "satsSATK": 65,
    "satsSDEF": 70
  },
  {
    "name": "aerodactyl",
    "id": 142,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/142.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    "typ1": "rock",
    "typ2": "flying",
    "moves": [
      "rock-head",
      "pressure",
      "unnerve"
    ],
    "statsHP": 80,
    "satsATK": 105,
    "satsDEF": 65,
    "satsINIT": 130,
    "satsSATK": 60,
    "satsSDEF": 75
  },
  {
    "name": "snorlax",
    "id": 143,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    "typ1": "normal",
    "moves": [
      "immunity",
      "thick-fat",
      "gluttony"
    ],
    "statsHP": 160,
    "satsATK": 110,
    "satsDEF": 65,
    "satsINIT": 30,
    "satsSATK": 65,
    "satsSDEF": 110
  },
  {
    "name": "articuno",
    "id": 144,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/144.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    "typ1": "ice",
    "typ2": "flying",
    "moves": [
      "pressure",
      "snow-cloak"
    ],
    "statsHP": 90,
    "satsATK": 85,
    "satsDEF": 100,
    "satsINIT": 85,
    "satsSATK": 95,
    "satsSDEF": 125
  },
  {
    "name": "zapdos",
    "id": 145,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/145.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    "typ1": "electric",
    "typ2": "flying",
    "moves": [
      "pressure",
      "static"
    ],
    "statsHP": 90,
    "satsATK": 90,
    "satsDEF": 85,
    "satsINIT": 100,
    "satsSATK": 125,
    "satsSDEF": 90
  },
  {
    "name": "moltres",
    "id": 146,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/146.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "pressure",
      "flame-body"
    ],
    "statsHP": 90,
    "satsATK": 100,
    "satsDEF": 90,
    "satsINIT": 90,
    "satsSATK": 125,
    "satsSDEF": 85
  },
  {
    "name": "dratini",
    "id": 147,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/147.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    "typ1": "dragon",
    "moves": [
      "shed-skin",
      "marvel-scale"
    ],
    "statsHP": 41,
    "satsATK": 64,
    "satsDEF": 45,
    "satsINIT": 50,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "dragonair",
    "id": 148,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/148.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    "typ1": "dragon",
    "moves": [
      "shed-skin",
      "marvel-scale"
    ],
    "statsHP": 61,
    "satsATK": 84,
    "satsDEF": 65,
    "satsINIT": 70,
    "satsSATK": 70,
    "satsSDEF": 70
  },
  {
    "name": "dragonite",
    "id": 149,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    "typ1": "dragon",
    "typ2": "flying",
    "moves": [
      "inner-focus",
      "multiscale"
    ],
    "statsHP": 91,
    "satsATK": 134,
    "satsDEF": 95,
    "satsINIT": 80,
    "satsSATK": 100,
    "satsSDEF": 100
  },
  {
    "name": "mewtwo",
    "id": 150,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    "typ1": "psychic",
    "moves": [
      "pressure",
      "unnerve"
    ],
    "statsHP": 106,
    "satsATK": 110,
    "satsDEF": 90,
    "satsINIT": 130,
    "satsSATK": 154,
    "satsSDEF": 90
  },
  {
    "name": "mew",
    "id": 151,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/151.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    "typ1": "psychic",
    "moves": [
      "synchronize"
    ],
    "statsHP": 100,
    "satsATK": 100,
    "satsDEF": 100,
    "satsINIT": 100,
    "satsSATK": 100,
    "satsSDEF": 100
  },
  {
    "name": "chikorita",
    "id": 152,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/152.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "leaf-guard"
    ],
    "statsHP": 45,
    "satsATK": 49,
    "satsDEF": 65,
    "satsINIT": 45,
    "satsSATK": 49,
    "satsSDEF": 65
  },
  {
    "name": "bayleef",
    "id": 153,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/153.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "leaf-guard"
    ],
    "statsHP": 60,
    "satsATK": 62,
    "satsDEF": 80,
    "satsINIT": 60,
    "satsSATK": 63,
    "satsSDEF": 80
  },
  {
    "name": "meganium",
    "id": 154,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/154.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "leaf-guard"
    ],
    "statsHP": 80,
    "satsATK": 82,
    "satsDEF": 100,
    "satsINIT": 80,
    "satsSATK": 83,
    "satsSDEF": 100
  },
  {
    "name": "cyndaquil",
    "id": 155,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/155.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "flash-fire"
    ],
    "statsHP": 39,
    "satsATK": 52,
    "satsDEF": 43,
    "satsINIT": 65,
    "satsSATK": 60,
    "satsSDEF": 50
  },
  {
    "name": "quilava",
    "id": 156,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/156.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "flash-fire"
    ],
    "statsHP": 58,
    "satsATK": 64,
    "satsDEF": 58,
    "satsINIT": 80,
    "satsSATK": 80,
    "satsSDEF": 65
  },
  {
    "name": "typhlosion",
    "id": 157,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/157.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "flash-fire"
    ],
    "statsHP": 78,
    "satsATK": 84,
    "satsDEF": 78,
    "satsINIT": 100,
    "satsSATK": 109,
    "satsSDEF": 85
  },
  {
    "name": "totodile",
    "id": 158,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/158.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "sheer-force"
    ],
    "statsHP": 50,
    "satsATK": 65,
    "satsDEF": 64,
    "satsINIT": 43,
    "satsSATK": 44,
    "satsSDEF": 48
  },
  {
    "name": "croconaw",
    "id": 159,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/159.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "sheer-force"
    ],
    "statsHP": 65,
    "satsATK": 80,
    "satsDEF": 80,
    "satsINIT": 58,
    "satsSATK": 59,
    "satsSDEF": 63
  },
  {
    "name": "feraligatr",
    "id": 160,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/160.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "sheer-force"
    ],
    "statsHP": 85,
    "satsATK": 105,
    "satsDEF": 100,
    "satsINIT": 78,
    "satsSATK": 79,
    "satsSDEF": 83
  },
  {
    "name": "sentret",
    "id": 161,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/161.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "keen-eye",
      "frisk"
    ],
    "statsHP": 35,
    "satsATK": 46,
    "satsDEF": 34,
    "satsINIT": 20,
    "satsSATK": 35,
    "satsSDEF": 45
  },
  {
    "name": "furret",
    "id": 162,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/162.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "keen-eye",
      "frisk"
    ],
    "statsHP": 85,
    "satsATK": 76,
    "satsDEF": 64,
    "satsINIT": 90,
    "satsSATK": 45,
    "satsSDEF": 55
  },
  {
    "name": "hoothoot",
    "id": 163,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/163.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "insomnia",
      "keen-eye",
      "tinted-lens"
    ],
    "statsHP": 60,
    "satsATK": 30,
    "satsDEF": 30,
    "satsINIT": 50,
    "satsSATK": 36,
    "satsSDEF": 56
  },
  {
    "name": "noctowl",
    "id": 164,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/164.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "insomnia",
      "keen-eye",
      "tinted-lens"
    ],
    "statsHP": 100,
    "satsATK": 50,
    "satsDEF": 50,
    "satsINIT": 70,
    "satsSATK": 86,
    "satsSDEF": 96
  },
  {
    "name": "ledyba",
    "id": 165,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/165.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "swarm",
      "early-bird",
      "rattled"
    ],
    "statsHP": 40,
    "satsATK": 20,
    "satsDEF": 30,
    "satsINIT": 55,
    "satsSATK": 40,
    "satsSDEF": 80
  },
  {
    "name": "ledian",
    "id": 166,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/166.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "swarm",
      "early-bird",
      "iron-fist"
    ],
    "statsHP": 55,
    "satsATK": 35,
    "satsDEF": 50,
    "satsINIT": 85,
    "satsSATK": 55,
    "satsSDEF": 110
  },
  {
    "name": "spinarak",
    "id": 167,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/167.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "swarm",
      "insomnia",
      "sniper"
    ],
    "statsHP": 40,
    "satsATK": 60,
    "satsDEF": 40,
    "satsINIT": 30,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "ariados",
    "id": 168,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/168.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "swarm",
      "insomnia",
      "sniper"
    ],
    "statsHP": 70,
    "satsATK": 90,
    "satsDEF": 70,
    "satsINIT": 40,
    "satsSATK": 60,
    "satsSDEF": 70
  },
  {
    "name": "crobat",
    "id": 169,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/169.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    "typ1": "poison",
    "typ2": "flying",
    "moves": [
      "inner-focus",
      "infiltrator"
    ],
    "statsHP": 85,
    "satsATK": 90,
    "satsDEF": 80,
    "satsINIT": 130,
    "satsSATK": 70,
    "satsSDEF": 80
  },
  {
    "name": "chinchou",
    "id": 170,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/170.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    "typ1": "water",
    "typ2": "electric",
    "moves": [
      "volt-absorb",
      "illuminate",
      "water-absorb"
    ],
    "statsHP": 75,
    "satsATK": 38,
    "satsDEF": 38,
    "satsINIT": 67,
    "satsSATK": 56,
    "satsSDEF": 56
  },
  {
    "name": "lanturn",
    "id": 171,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/171.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    "typ1": "water",
    "typ2": "electric",
    "moves": [
      "volt-absorb",
      "illuminate",
      "water-absorb"
    ],
    "statsHP": 125,
    "satsATK": 58,
    "satsDEF": 58,
    "satsINIT": 67,
    "satsSATK": 76,
    "satsSDEF": 76
  },
  {
    "name": "pichu",
    "id": 172,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/172.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    "typ1": "electric",
    "moves": [
      "static",
      "lightning-rod"
    ],
    "statsHP": 20,
    "satsATK": 40,
    "satsDEF": 15,
    "satsINIT": 60,
    "satsSATK": 35,
    "satsSDEF": 35
  },
  {
    "name": "cleffa",
    "id": 173,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/173.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    "typ1": "fairy",
    "moves": [
      "cute-charm",
      "magic-guard",
      "friend-guard"
    ],
    "statsHP": 50,
    "satsATK": 25,
    "satsDEF": 28,
    "satsINIT": 15,
    "satsSATK": 45,
    "satsSDEF": 55
  },
  {
    "name": "igglybuff",
    "id": 174,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/174.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    "typ1": "normal",
    "typ2": "fairy",
    "moves": [
      "cute-charm",
      "competitive",
      "friend-guard"
    ],
    "statsHP": 90,
    "satsATK": 30,
    "satsDEF": 15,
    "satsINIT": 15,
    "satsSATK": 40,
    "satsSDEF": 20
  },
  {
    "name": "togepi",
    "id": 175,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/175.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    "typ1": "fairy",
    "moves": [
      "hustle",
      "serene-grace",
      "super-luck"
    ],
    "statsHP": 35,
    "satsATK": 20,
    "satsDEF": 65,
    "satsINIT": 20,
    "satsSATK": 40,
    "satsSDEF": 65
  },
  {
    "name": "togetic",
    "id": 176,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/176.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    "typ1": "fairy",
    "typ2": "flying",
    "moves": [
      "hustle",
      "serene-grace",
      "super-luck"
    ],
    "statsHP": 55,
    "satsATK": 40,
    "satsDEF": 85,
    "satsINIT": 40,
    "satsSATK": 80,
    "satsSDEF": 105
  },
  {
    "name": "natu",
    "id": 177,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/177.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "synchronize",
      "early-bird",
      "magic-bounce"
    ],
    "statsHP": 40,
    "satsATK": 50,
    "satsDEF": 45,
    "satsINIT": 70,
    "satsSATK": 70,
    "satsSDEF": 45
  },
  {
    "name": "xatu",
    "id": 178,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/178.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "synchronize",
      "early-bird",
      "magic-bounce"
    ],
    "statsHP": 65,
    "satsATK": 75,
    "satsDEF": 70,
    "satsINIT": 95,
    "satsSATK": 95,
    "satsSDEF": 70
  },
  {
    "name": "mareep",
    "id": 179,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/179.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    "typ1": "electric",
    "moves": [
      "static",
      "plus"
    ],
    "statsHP": 55,
    "satsATK": 40,
    "satsDEF": 40,
    "satsINIT": 35,
    "satsSATK": 65,
    "satsSDEF": 45
  },
  {
    "name": "flaaffy",
    "id": 180,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/180.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    "typ1": "electric",
    "moves": [
      "static",
      "plus"
    ],
    "statsHP": 70,
    "satsATK": 55,
    "satsDEF": 55,
    "satsINIT": 45,
    "satsSATK": 80,
    "satsSDEF": 60
  },
  {
    "name": "ampharos",
    "id": 181,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/181.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    "typ1": "electric",
    "moves": [
      "static",
      "plus"
    ],
    "statsHP": 90,
    "satsATK": 75,
    "satsDEF": 85,
    "satsINIT": 55,
    "satsSATK": 115,
    "satsSDEF": 90
  },
  {
    "name": "bellossom",
    "id": 182,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/182.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "healer"
    ],
    "statsHP": 75,
    "satsATK": 80,
    "satsDEF": 95,
    "satsINIT": 50,
    "satsSATK": 90,
    "satsSDEF": 100
  },
  {
    "name": "marill",
    "id": 183,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/183.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    "typ1": "water",
    "typ2": "fairy",
    "moves": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ],
    "statsHP": 70,
    "satsATK": 20,
    "satsDEF": 50,
    "satsINIT": 40,
    "satsSATK": 20,
    "satsSDEF": 50
  },
  {
    "name": "azumarill",
    "id": 184,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/184.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    "typ1": "water",
    "typ2": "fairy",
    "moves": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ],
    "statsHP": 100,
    "satsATK": 50,
    "satsDEF": 80,
    "satsINIT": 50,
    "satsSATK": 60,
    "satsSDEF": 80
  },
  {
    "name": "sudowoodo",
    "id": 185,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/185.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "rock-head",
      "rattled"
    ],
    "statsHP": 70,
    "satsATK": 100,
    "satsDEF": 115,
    "satsINIT": 30,
    "satsSATK": 30,
    "satsSDEF": 65
  },
  {
    "name": "politoed",
    "id": 186,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/186.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    "typ1": "water",
    "moves": [
      "water-absorb",
      "damp",
      "drizzle"
    ],
    "statsHP": 90,
    "satsATK": 75,
    "satsDEF": 75,
    "satsINIT": 70,
    "satsSATK": 90,
    "satsSDEF": 100
  },
  {
    "name": "hoppip",
    "id": 187,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/187.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ],
    "statsHP": 35,
    "satsATK": 35,
    "satsDEF": 40,
    "satsINIT": 50,
    "satsSATK": 35,
    "satsSDEF": 55
  },
  {
    "name": "skiploom",
    "id": 188,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/188.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ],
    "statsHP": 55,
    "satsATK": 45,
    "satsDEF": 50,
    "satsINIT": 80,
    "satsSATK": 45,
    "satsSDEF": 65
  },
  {
    "name": "jumpluff",
    "id": 189,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/189.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ],
    "statsHP": 75,
    "satsATK": 55,
    "satsDEF": 70,
    "satsINIT": 110,
    "satsSATK": 55,
    "satsSDEF": 95
  },
  {
    "name": "aipom",
    "id": 190,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/190.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "pickup",
      "skill-link"
    ],
    "statsHP": 55,
    "satsATK": 70,
    "satsDEF": 55,
    "satsINIT": 85,
    "satsSATK": 40,
    "satsSDEF": 55
  },
  {
    "name": "sunkern",
    "id": 191,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/191.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "solar-power",
      "early-bird"
    ],
    "statsHP": 30,
    "satsATK": 30,
    "satsDEF": 30,
    "satsINIT": 30,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "sunflora",
    "id": 192,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/192.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "solar-power",
      "early-bird"
    ],
    "statsHP": 75,
    "satsATK": 75,
    "satsDEF": 55,
    "satsINIT": 30,
    "satsSATK": 105,
    "satsSDEF": 85
  },
  {
    "name": "yanma",
    "id": 193,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/193.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "speed-boost",
      "compound-eyes",
      "frisk"
    ],
    "statsHP": 65,
    "satsATK": 65,
    "satsDEF": 45,
    "satsINIT": 95,
    "satsSATK": 75,
    "satsSDEF": 45
  },
  {
    "name": "wooper",
    "id": 194,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/194.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "damp",
      "water-absorb",
      "unaware"
    ],
    "statsHP": 55,
    "satsATK": 45,
    "satsDEF": 45,
    "satsINIT": 15,
    "satsSATK": 25,
    "satsSDEF": 25
  },
  {
    "name": "quagsire",
    "id": 195,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/195.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "damp",
      "water-absorb",
      "unaware"
    ],
    "statsHP": 95,
    "satsATK": 85,
    "satsDEF": 85,
    "satsINIT": 35,
    "satsSATK": 65,
    "satsSDEF": 65
  },
  {
    "name": "espeon",
    "id": 196,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/196.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    "typ1": "psychic",
    "moves": [
      "synchronize",
      "magic-bounce"
    ],
    "statsHP": 65,
    "satsATK": 65,
    "satsDEF": 60,
    "satsINIT": 110,
    "satsSATK": 130,
    "satsSDEF": 95
  },
  {
    "name": "umbreon",
    "id": 197,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/197.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    "typ1": "dark",
    "moves": [
      "synchronize",
      "inner-focus"
    ],
    "statsHP": 95,
    "satsATK": 65,
    "satsDEF": 110,
    "satsINIT": 65,
    "satsSATK": 60,
    "satsSDEF": 130
  },
  {
    "name": "murkrow",
    "id": 198,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/198.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    "typ1": "dark",
    "typ2": "flying",
    "moves": [
      "insomnia",
      "super-luck",
      "prankster"
    ],
    "statsHP": 60,
    "satsATK": 85,
    "satsDEF": 42,
    "satsINIT": 91,
    "satsSATK": 85,
    "satsSDEF": 42
  },
  {
    "name": "slowking",
    "id": 199,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/199.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    "typ1": "water",
    "typ2": "psychic",
    "moves": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "statsHP": 95,
    "satsATK": 75,
    "satsDEF": 80,
    "satsINIT": 30,
    "satsSATK": 100,
    "satsSDEF": 110
  },
  {
    "name": "misdreavus",
    "id": 200,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/200.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    "typ1": "ghost",
    "moves": [
      "levitate"
    ],
    "statsHP": 60,
    "satsATK": 60,
    "satsDEF": 60,
    "satsINIT": 85,
    "satsSATK": 85,
    "satsSDEF": 85
  },
  {
    "name": "unown",
    "id": 201,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/201.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 48,
    "satsATK": 72,
    "satsDEF": 48,
    "satsINIT": 48,
    "satsSATK": 72,
    "satsSDEF": 48
  },
  {
    "name": "wobbuffet",
    "id": 202,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/202.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    "typ1": "psychic",
    "moves": [
      "shadow-tag",
      "telepathy"
    ],
    "statsHP": 190,
    "satsATK": 33,
    "satsDEF": 58,
    "satsINIT": 33,
    "satsSATK": 33,
    "satsSDEF": 58
  },
  {
    "name": "girafarig",
    "id": 203,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/203.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    "typ1": "normal",
    "typ2": "psychic",
    "moves": [
      "inner-focus",
      "early-bird",
      "sap-sipper"
    ],
    "statsHP": 70,
    "satsATK": 80,
    "satsDEF": 65,
    "satsINIT": 85,
    "satsSATK": 90,
    "satsSDEF": 65
  },
  {
    "name": "pineco",
    "id": 204,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/204.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    "typ1": "bug",
    "moves": [
      "sturdy",
      "overcoat"
    ],
    "statsHP": 50,
    "satsATK": 65,
    "satsDEF": 90,
    "satsINIT": 15,
    "satsSATK": 35,
    "satsSDEF": 35
  },
  {
    "name": "forretress",
    "id": 205,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/205.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    "typ1": "bug",
    "typ2": "steel",
    "moves": [
      "sturdy",
      "overcoat"
    ],
    "statsHP": 75,
    "satsATK": 90,
    "satsDEF": 140,
    "satsINIT": 40,
    "satsSATK": 60,
    "satsSDEF": 60
  },
  {
    "name": "dunsparce",
    "id": 206,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/206.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    "typ1": "normal",
    "moves": [
      "serene-grace",
      "run-away",
      "rattled"
    ],
    "statsHP": 100,
    "satsATK": 70,
    "satsDEF": 70,
    "satsINIT": 45,
    "satsSATK": 65,
    "satsSDEF": 65
  },
  {
    "name": "gligar",
    "id": 207,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/207.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    "typ1": "ground",
    "typ2": "flying",
    "moves": [
      "hyper-cutter",
      "sand-veil",
      "immunity"
    ],
    "statsHP": 65,
    "satsATK": 75,
    "satsDEF": 105,
    "satsINIT": 85,
    "satsSATK": 35,
    "satsSDEF": 65
  },
  {
    "name": "steelix",
    "id": 208,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/208.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    "typ1": "steel",
    "typ2": "ground",
    "moves": [
      "rock-head",
      "sturdy",
      "sheer-force"
    ],
    "statsHP": 75,
    "satsATK": 85,
    "satsDEF": 200,
    "satsINIT": 30,
    "satsSATK": 55,
    "satsSDEF": 65
  },
  {
    "name": "snubbull",
    "id": 209,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/209.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    "typ1": "fairy",
    "moves": [
      "intimidate",
      "run-away",
      "rattled"
    ],
    "statsHP": 60,
    "satsATK": 80,
    "satsDEF": 50,
    "satsINIT": 30,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "granbull",
    "id": 210,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/210.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    "typ1": "fairy",
    "moves": [
      "intimidate",
      "quick-feet",
      "rattled"
    ],
    "statsHP": 90,
    "satsATK": 120,
    "satsDEF": 75,
    "satsINIT": 45,
    "satsSATK": 60,
    "satsSDEF": 60
  },
  {
    "name": "qwilfish",
    "id": 211,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/211.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    "typ1": "water",
    "typ2": "poison",
    "moves": [
      "poison-point",
      "swift-swim",
      "intimidate"
    ],
    "statsHP": 65,
    "satsATK": 95,
    "satsDEF": 85,
    "satsINIT": 85,
    "satsSATK": 55,
    "satsSDEF": 55
  },
  {
    "name": "scizor",
    "id": 212,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/212.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    "typ1": "bug",
    "typ2": "steel",
    "moves": [
      "swarm",
      "technician",
      "light-metal"
    ],
    "statsHP": 70,
    "satsATK": 130,
    "satsDEF": 100,
    "satsINIT": 65,
    "satsSATK": 55,
    "satsSDEF": 80
  },
  {
    "name": "shuckle",
    "id": 213,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/213.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    "typ1": "bug",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "gluttony",
      "contrary"
    ],
    "statsHP": 20,
    "satsATK": 10,
    "satsDEF": 230,
    "satsINIT": 5,
    "satsSATK": 10,
    "satsSDEF": 230
  },
  {
    "name": "heracross",
    "id": 214,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/214.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    "typ1": "bug",
    "typ2": "fighting",
    "moves": [
      "swarm",
      "guts",
      "moxie"
    ],
    "statsHP": 80,
    "satsATK": 125,
    "satsDEF": 75,
    "satsINIT": 85,
    "satsSATK": 40,
    "satsSDEF": 95
  },
  {
    "name": "sneasel",
    "id": 215,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/215.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    "typ1": "dark",
    "typ2": "ice",
    "moves": [
      "inner-focus",
      "keen-eye",
      "pickpocket"
    ],
    "statsHP": 55,
    "satsATK": 95,
    "satsDEF": 55,
    "satsINIT": 115,
    "satsSATK": 35,
    "satsSDEF": 75
  },
  {
    "name": "teddiursa",
    "id": 216,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/216.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "quick-feet",
      "honey-gather"
    ],
    "statsHP": 60,
    "satsATK": 80,
    "satsDEF": 50,
    "satsINIT": 40,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "ursaring",
    "id": 217,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/217.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    "typ1": "normal",
    "moves": [
      "guts",
      "quick-feet",
      "unnerve"
    ],
    "statsHP": 90,
    "satsATK": 130,
    "satsDEF": 75,
    "satsINIT": 55,
    "satsSATK": 75,
    "satsSDEF": 75
  },
  {
    "name": "slugma",
    "id": 218,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/218.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    "typ1": "fire",
    "moves": [
      "magma-armor",
      "flame-body",
      "weak-armor"
    ],
    "statsHP": 40,
    "satsATK": 40,
    "satsDEF": 40,
    "satsINIT": 20,
    "satsSATK": 70,
    "satsSDEF": 40
  },
  {
    "name": "magcargo",
    "id": 219,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/219.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    "typ1": "fire",
    "typ2": "rock",
    "moves": [
      "magma-armor",
      "flame-body",
      "weak-armor"
    ],
    "statsHP": 60,
    "satsATK": 50,
    "satsDEF": 120,
    "satsINIT": 30,
    "satsSATK": 90,
    "satsSDEF": 80
  },
  {
    "name": "swinub",
    "id": 220,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/220.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    "typ1": "ice",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ],
    "statsHP": 50,
    "satsATK": 50,
    "satsDEF": 40,
    "satsINIT": 50,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "piloswine",
    "id": 221,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/221.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    "typ1": "ice",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ],
    "statsHP": 100,
    "satsATK": 100,
    "satsDEF": 80,
    "satsINIT": 50,
    "satsSATK": 60,
    "satsSDEF": 60
  },
  {
    "name": "corsola",
    "id": 222,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/222.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    "typ1": "water",
    "typ2": "rock",
    "moves": [
      "hustle",
      "natural-cure",
      "regenerator"
    ],
    "statsHP": 65,
    "satsATK": 55,
    "satsDEF": 95,
    "satsINIT": 35,
    "satsSATK": 65,
    "satsSDEF": 95
  },
  {
    "name": "remoraid",
    "id": 223,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/223.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    "typ1": "water",
    "moves": [
      "hustle",
      "sniper",
      "moody"
    ],
    "statsHP": 35,
    "satsATK": 65,
    "satsDEF": 35,
    "satsINIT": 65,
    "satsSATK": 65,
    "satsSDEF": 35
  },
  {
    "name": "octillery",
    "id": 224,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/224.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    "typ1": "water",
    "moves": [
      "suction-cups",
      "sniper",
      "moody"
    ],
    "statsHP": 75,
    "satsATK": 105,
    "satsDEF": 75,
    "satsINIT": 45,
    "satsSATK": 105,
    "satsSDEF": 75
  },
  {
    "name": "delibird",
    "id": 225,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/225.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    "typ1": "ice",
    "typ2": "flying",
    "moves": [
      "vital-spirit",
      "hustle",
      "insomnia"
    ],
    "statsHP": 45,
    "satsATK": 55,
    "satsDEF": 45,
    "satsINIT": 75,
    "satsSATK": 65,
    "satsSDEF": 45
  },
  {
    "name": "mantine",
    "id": 226,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/226.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "swift-swim",
      "water-absorb",
      "water-veil"
    ],
    "statsHP": 85,
    "satsATK": 40,
    "satsDEF": 70,
    "satsINIT": 70,
    "satsSATK": 80,
    "satsSDEF": 140
  },
  {
    "name": "skarmory",
    "id": 227,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/227.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    "typ1": "steel",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "sturdy",
      "weak-armor"
    ],
    "statsHP": 65,
    "satsATK": 80,
    "satsDEF": 140,
    "satsINIT": 70,
    "satsSATK": 40,
    "satsSDEF": 70
  },
  {
    "name": "houndour",
    "id": 228,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/228.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    "typ1": "dark",
    "typ2": "fire",
    "moves": [
      "early-bird",
      "flash-fire",
      "unnerve"
    ],
    "statsHP": 45,
    "satsATK": 60,
    "satsDEF": 30,
    "satsINIT": 65,
    "satsSATK": 80,
    "satsSDEF": 50
  },
  {
    "name": "houndoom",
    "id": 229,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/229.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    "typ1": "dark",
    "typ2": "fire",
    "moves": [
      "early-bird",
      "flash-fire",
      "unnerve"
    ],
    "statsHP": 75,
    "satsATK": 90,
    "satsDEF": 50,
    "satsINIT": 95,
    "satsSATK": 110,
    "satsSDEF": 80
  },
  {
    "name": "kingdra",
    "id": 230,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/230.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    "typ1": "water",
    "typ2": "dragon",
    "moves": [
      "swift-swim",
      "sniper",
      "damp"
    ],
    "statsHP": 75,
    "satsATK": 95,
    "satsDEF": 95,
    "satsINIT": 85,
    "satsSATK": 95,
    "satsSDEF": 95
  },
  {
    "name": "phanpy",
    "id": 231,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/231.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    "typ1": "ground",
    "moves": [
      "pickup",
      "sand-veil"
    ],
    "statsHP": 90,
    "satsATK": 60,
    "satsDEF": 60,
    "satsINIT": 40,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "donphan",
    "id": 232,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/232.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    "typ1": "ground",
    "moves": [
      "sturdy",
      "sand-veil"
    ],
    "statsHP": 90,
    "satsATK": 120,
    "satsDEF": 120,
    "satsINIT": 50,
    "satsSATK": 60,
    "satsSDEF": 60
  },
  {
    "name": "porygon2",
    "id": 233,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/233.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    "typ1": "normal",
    "moves": [
      "trace",
      "download",
      "analytic"
    ],
    "statsHP": 85,
    "satsATK": 80,
    "satsDEF": 90,
    "satsINIT": 60,
    "satsSATK": 105,
    "satsSDEF": 95
  },
  {
    "name": "stantler",
    "id": 234,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/234.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    "typ1": "normal",
    "moves": [
      "intimidate",
      "frisk",
      "sap-sipper"
    ],
    "statsHP": 73,
    "satsATK": 95,
    "satsDEF": 62,
    "satsINIT": 85,
    "satsSATK": 85,
    "satsSDEF": 65
  },
  {
    "name": "smeargle",
    "id": 235,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/235.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    "typ1": "normal",
    "moves": [
      "own-tempo",
      "technician",
      "moody"
    ],
    "statsHP": 55,
    "satsATK": 20,
    "satsDEF": 35,
    "satsINIT": 75,
    "satsSATK": 20,
    "satsSDEF": 45
  },
  {
    "name": "tyrogue",
    "id": 236,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/236.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "steadfast",
      "vital-spirit"
    ],
    "statsHP": 35,
    "satsATK": 35,
    "satsDEF": 35,
    "satsINIT": 35,
    "satsSATK": 35,
    "satsSDEF": 35
  },
  {
    "name": "hitmontop",
    "id": 237,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/237.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    "typ1": "fighting",
    "moves": [
      "intimidate",
      "technician",
      "steadfast"
    ],
    "statsHP": 50,
    "satsATK": 95,
    "satsDEF": 95,
    "satsINIT": 70,
    "satsSATK": 35,
    "satsSDEF": 110
  },
  {
    "name": "smoochum",
    "id": 238,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/238.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    "typ1": "ice",
    "typ2": "psychic",
    "moves": [
      "oblivious",
      "forewarn",
      "hydration"
    ],
    "statsHP": 45,
    "satsATK": 30,
    "satsDEF": 15,
    "satsINIT": 65,
    "satsSATK": 85,
    "satsSDEF": 65
  },
  {
    "name": "elekid",
    "id": 239,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/239.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    "typ1": "electric",
    "moves": [
      "static",
      "vital-spirit"
    ],
    "statsHP": 45,
    "satsATK": 63,
    "satsDEF": 37,
    "satsINIT": 95,
    "satsSATK": 65,
    "satsSDEF": 55
  },
  {
    "name": "magby",
    "id": 240,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/240.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    "typ1": "fire",
    "moves": [
      "flame-body",
      "vital-spirit"
    ],
    "statsHP": 45,
    "satsATK": 75,
    "satsDEF": 37,
    "satsINIT": 83,
    "satsSATK": 70,
    "satsSDEF": 55
  },
  {
    "name": "miltank",
    "id": 241,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/241.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    "typ1": "normal",
    "moves": [
      "thick-fat",
      "scrappy",
      "sap-sipper"
    ],
    "statsHP": 95,
    "satsATK": 80,
    "satsDEF": 105,
    "satsINIT": 100,
    "satsSATK": 40,
    "satsSDEF": 70
  },
  {
    "name": "blissey",
    "id": 242,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/242.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    "typ1": "normal",
    "moves": [
      "natural-cure",
      "serene-grace",
      "healer"
    ],
    "statsHP": 255,
    "satsATK": 10,
    "satsDEF": 10,
    "satsINIT": 55,
    "satsSATK": 75,
    "satsSDEF": 135
  },
  {
    "name": "raikou",
    "id": 243,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/243.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    "typ1": "electric",
    "moves": [
      "pressure",
      "inner-focus"
    ],
    "statsHP": 90,
    "satsATK": 85,
    "satsDEF": 75,
    "satsINIT": 115,
    "satsSATK": 115,
    "satsSDEF": 100
  },
  {
    "name": "entei",
    "id": 244,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/244.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    "typ1": "fire",
    "moves": [
      "pressure",
      "inner-focus"
    ],
    "statsHP": 115,
    "satsATK": 115,
    "satsDEF": 85,
    "satsINIT": 100,
    "satsSATK": 90,
    "satsSDEF": 75
  },
  {
    "name": "suicune",
    "id": 245,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/245.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    "typ1": "water",
    "moves": [
      "pressure",
      "inner-focus"
    ],
    "statsHP": 100,
    "satsATK": 75,
    "satsDEF": 115,
    "satsINIT": 85,
    "satsSATK": 90,
    "satsSDEF": 115
  },
  {
    "name": "larvitar",
    "id": 246,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/246.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "guts",
      "sand-veil"
    ],
    "statsHP": 50,
    "satsATK": 64,
    "satsDEF": 50,
    "satsINIT": 41,
    "satsSATK": 45,
    "satsSDEF": 50
  },
  {
    "name": "pupitar",
    "id": 247,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/247.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "shed-skin"
    ],
    "statsHP": 70,
    "satsATK": 84,
    "satsDEF": 70,
    "satsINIT": 51,
    "satsSATK": 65,
    "satsSDEF": 70
  },
  {
    "name": "tyranitar",
    "id": 248,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/248.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    "typ1": "rock",
    "typ2": "dark",
    "moves": [
      "sand-stream",
      "unnerve"
    ],
    "statsHP": 100,
    "satsATK": 134,
    "satsDEF": 110,
    "satsINIT": 61,
    "satsSATK": 95,
    "satsSDEF": 100
  },
  {
    "name": "lugia",
    "id": 249,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/249.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "pressure",
      "multiscale"
    ],
    "statsHP": 106,
    "satsATK": 90,
    "satsDEF": 130,
    "satsINIT": 110,
    "satsSATK": 90,
    "satsSDEF": 154
  },
  {
    "name": "ho-oh",
    "id": 250,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/250.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "pressure",
      "regenerator"
    ],
    "statsHP": 106,
    "satsATK": 130,
    "satsDEF": 90,
    "satsINIT": 90,
    "satsSATK": 110,
    "satsSDEF": 154
  },
  {
    "name": "celebi",
    "id": 251,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/251.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    "typ1": "psychic",
    "typ2": "grass",
    "moves": [
      "natural-cure"
    ],
    "statsHP": 100,
    "satsATK": 100,
    "satsDEF": 100,
    "satsINIT": 100,
    "satsSATK": 100,
    "satsSDEF": 100
  },
  {
    "name": "treecko",
    "id": 252,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/252.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "unburden"
    ],
    "statsHP": 40,
    "satsATK": 45,
    "satsDEF": 35,
    "satsINIT": 70,
    "satsSATK": 65,
    "satsSDEF": 55
  },
  {
    "name": "grovyle",
    "id": 253,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/253.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "unburden"
    ],
    "statsHP": 50,
    "satsATK": 65,
    "satsDEF": 45,
    "satsINIT": 95,
    "satsSATK": 85,
    "satsSDEF": 65
  },
  {
    "name": "sceptile",
    "id": 254,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/254.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "unburden"
    ],
    "statsHP": 70,
    "satsATK": 85,
    "satsDEF": 65,
    "satsINIT": 120,
    "satsSATK": 105,
    "satsSDEF": 85
  },
  {
    "name": "torchic",
    "id": 255,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/255.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "speed-boost"
    ],
    "statsHP": 45,
    "satsATK": 60,
    "satsDEF": 40,
    "satsINIT": 45,
    "satsSATK": 70,
    "satsSDEF": 50
  },
  {
    "name": "combusken",
    "id": 256,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/256.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "speed-boost"
    ],
    "statsHP": 60,
    "satsATK": 85,
    "satsDEF": 60,
    "satsINIT": 55,
    "satsSATK": 85,
    "satsSDEF": 60
  },
  {
    "name": "blaziken",
    "id": 257,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/257.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "speed-boost"
    ],
    "statsHP": 80,
    "satsATK": 120,
    "satsDEF": 70,
    "satsINIT": 80,
    "satsSATK": 110,
    "satsSDEF": 70
  },
  {
    "name": "mudkip",
    "id": 258,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/258.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "damp"
    ],
    "statsHP": 50,
    "satsATK": 70,
    "satsDEF": 50,
    "satsINIT": 40,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "marshtomp",
    "id": 259,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/259.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "torrent",
      "damp"
    ],
    "statsHP": 70,
    "satsATK": 85,
    "satsDEF": 70,
    "satsINIT": 50,
    "satsSATK": 60,
    "satsSDEF": 70
  },
  {
    "name": "swampert",
    "id": 260,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/260.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "torrent",
      "damp"
    ],
    "statsHP": 100,
    "satsATK": 110,
    "satsDEF": 90,
    "satsINIT": 60,
    "satsSATK": 85,
    "satsSDEF": 90
  },
  {
    "name": "poochyena",
    "id": 261,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/261.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    "typ1": "dark",
    "moves": [
      "run-away",
      "quick-feet",
      "rattled"
    ],
    "statsHP": 35,
    "satsATK": 55,
    "satsDEF": 35,
    "satsINIT": 35,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "mightyena",
    "id": 262,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/262.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    "typ1": "dark",
    "moves": [
      "intimidate",
      "quick-feet",
      "moxie"
    ],
    "statsHP": 70,
    "satsATK": 90,
    "satsDEF": 70,
    "satsINIT": 70,
    "satsSATK": 60,
    "satsSDEF": 60
  },
  {
    "name": "zigzagoon",
    "id": 263,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/263.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "gluttony",
      "quick-feet"
    ],
    "statsHP": 38,
    "satsATK": 30,
    "satsDEF": 41,
    "satsINIT": 60,
    "satsSATK": 30,
    "satsSDEF": 41
  },
  {
    "name": "linoone",
    "id": 264,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/264.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "gluttony",
      "quick-feet"
    ],
    "statsHP": 78,
    "satsATK": 70,
    "satsDEF": 61,
    "satsINIT": 100,
    "satsSATK": 50,
    "satsSDEF": 61
  },
  {
    "name": "wurmple",
    "id": 265,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/265.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    "typ1": "bug",
    "moves": [
      "shield-dust",
      "run-away"
    ],
    "statsHP": 45,
    "satsATK": 45,
    "satsDEF": 35,
    "satsINIT": 20,
    "satsSATK": 20,
    "satsSDEF": 30
  },
  {
    "name": "silcoon",
    "id": 266,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/266.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    "typ1": "bug",
    "moves": [
      "shed-skin"
    ],
    "statsHP": 50,
    "satsATK": 35,
    "satsDEF": 55,
    "satsINIT": 15,
    "satsSATK": 25,
    "satsSDEF": 25
  },
  {
    "name": "beautifly",
    "id": 267,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/267.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "swarm",
      "rivalry"
    ],
    "statsHP": 60,
    "satsATK": 70,
    "satsDEF": 50,
    "satsINIT": 65,
    "satsSATK": 100,
    "satsSDEF": 50
  },
  {
    "name": "cascoon",
    "id": 268,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/268.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
    "typ1": "bug",
    "moves": [
      "shed-skin"
    ],
    "statsHP": 50,
    "satsATK": 35,
    "satsDEF": 55,
    "satsINIT": 15,
    "satsSATK": 25,
    "satsSDEF": 25
  },
  {
    "name": "dustox",
    "id": 269,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/269.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "shield-dust",
      "compound-eyes"
    ],
    "statsHP": 60,
    "satsATK": 50,
    "satsDEF": 70,
    "satsINIT": 65,
    "satsSATK": 50,
    "satsSDEF": 90
  },
  {
    "name": "lotad",
    "id": 270,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/270.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    "typ1": "water",
    "typ2": "grass",
    "moves": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ],
    "statsHP": 40,
    "satsATK": 30,
    "satsDEF": 30,
    "satsINIT": 30,
    "satsSATK": 40,
    "satsSDEF": 50
  },
  {
    "name": "lombre",
    "id": 271,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/271.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    "typ1": "water",
    "typ2": "grass",
    "moves": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ],
    "statsHP": 60,
    "satsATK": 50,
    "satsDEF": 50,
    "satsINIT": 50,
    "satsSATK": 60,
    "satsSDEF": 70
  },
  {
    "name": "ludicolo",
    "id": 272,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/272.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    "typ1": "water",
    "typ2": "grass",
    "moves": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ],
    "statsHP": 80,
    "satsATK": 70,
    "satsDEF": 70,
    "satsINIT": 70,
    "satsSATK": 90,
    "satsSDEF": 100
  },
  {
    "name": "seedot",
    "id": 273,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/273.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "early-bird",
      "pickpocket"
    ],
    "statsHP": 40,
    "satsATK": 40,
    "satsDEF": 50,
    "satsINIT": 30,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "nuzleaf",
    "id": 274,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/274.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    "typ1": "grass",
    "typ2": "dark",
    "moves": [
      "chlorophyll",
      "early-bird",
      "pickpocket"
    ],
    "statsHP": 70,
    "satsATK": 70,
    "satsDEF": 40,
    "satsINIT": 60,
    "satsSATK": 60,
    "satsSDEF": 40
  },
  {
    "name": "shiftry",
    "id": 275,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/275.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    "typ1": "grass",
    "typ2": "dark",
    "moves": [
      "chlorophyll",
      "wind-rider",
      "pickpocket"
    ],
    "statsHP": 90,
    "satsATK": 100,
    "satsDEF": 60,
    "satsINIT": 80,
    "satsSATK": 90,
    "satsSDEF": 60
  },
  {
    "name": "taillow",
    "id": 276,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/276.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "guts",
      "scrappy"
    ],
    "statsHP": 40,
    "satsATK": 55,
    "satsDEF": 30,
    "satsINIT": 85,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "swellow",
    "id": 277,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/277.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "guts",
      "scrappy"
    ],
    "statsHP": 60,
    "satsATK": 85,
    "satsDEF": 60,
    "satsINIT": 125,
    "satsSATK": 75,
    "satsSDEF": 50
  },
  {
    "name": "wingull",
    "id": 278,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/278.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "hydration",
      "rain-dish"
    ],
    "statsHP": 40,
    "satsATK": 30,
    "satsDEF": 30,
    "satsINIT": 85,
    "satsSATK": 55,
    "satsSDEF": 30
  },
  {
    "name": "pelipper",
    "id": 279,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/279.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "drizzle",
      "rain-dish"
    ],
    "statsHP": 60,
    "satsATK": 50,
    "satsDEF": 100,
    "satsINIT": 65,
    "satsSATK": 95,
    "satsSDEF": 70
  },
  {
    "name": "ralts",
    "id": 280,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/280.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "synchronize",
      "trace",
      "telepathy"
    ],
    "statsHP": 28,
    "satsATK": 25,
    "satsDEF": 25,
    "satsINIT": 40,
    "satsSATK": 45,
    "satsSDEF": 35
  },
  {
    "name": "kirlia",
    "id": 281,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/281.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "synchronize",
      "trace",
      "telepathy"
    ],
    "statsHP": 38,
    "satsATK": 35,
    "satsDEF": 35,
    "satsINIT": 50,
    "satsSATK": 65,
    "satsSDEF": 55
  },
  {
    "name": "gardevoir",
    "id": 282,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/282.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "synchronize",
      "trace",
      "telepathy"
    ],
    "statsHP": 68,
    "satsATK": 65,
    "satsDEF": 65,
    "satsINIT": 80,
    "satsSATK": 125,
    "satsSDEF": 115
  },
  {
    "name": "surskit",
    "id": 283,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/283.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    "typ1": "bug",
    "typ2": "water",
    "moves": [
      "swift-swim",
      "rain-dish"
    ],
    "statsHP": 40,
    "satsATK": 30,
    "satsDEF": 32,
    "satsINIT": 65,
    "satsSATK": 50,
    "satsSDEF": 52
  },
  {
    "name": "masquerain",
    "id": 284,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/284.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "intimidate",
      "unnerve"
    ],
    "statsHP": 70,
    "satsATK": 60,
    "satsDEF": 62,
    "satsINIT": 80,
    "satsSATK": 100,
    "satsSDEF": 82
  },
  {
    "name": "shroomish",
    "id": 285,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/285.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    "typ1": "grass",
    "moves": [
      "effect-spore",
      "poison-heal",
      "quick-feet"
    ],
    "statsHP": 60,
    "satsATK": 40,
    "satsDEF": 60,
    "satsINIT": 35,
    "satsSATK": 40,
    "satsSDEF": 60
  },
  {
    "name": "breloom",
    "id": 286,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/286.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    "typ1": "grass",
    "typ2": "fighting",
    "moves": [
      "effect-spore",
      "poison-heal",
      "technician"
    ],
    "statsHP": 60,
    "satsATK": 130,
    "satsDEF": 80,
    "satsINIT": 70,
    "satsSATK": 60,
    "satsSDEF": 60
  },
  {
    "name": "slakoth",
    "id": 287,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/287.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    "typ1": "normal",
    "moves": [
      "truant"
    ],
    "statsHP": 60,
    "satsATK": 60,
    "satsDEF": 60,
    "satsINIT": 30,
    "satsSATK": 35,
    "satsSDEF": 35
  },
  {
    "name": "vigoroth",
    "id": 288,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/288.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    "typ1": "normal",
    "moves": [
      "vital-spirit"
    ],
    "statsHP": 80,
    "satsATK": 80,
    "satsDEF": 80,
    "satsINIT": 90,
    "satsSATK": 55,
    "satsSDEF": 55
  },
  {
    "name": "slaking",
    "id": 289,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/289.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    "typ1": "normal",
    "moves": [
      "truant"
    ],
    "statsHP": 150,
    "satsATK": 160,
    "satsDEF": 100,
    "satsINIT": 100,
    "satsSATK": 95,
    "satsSDEF": 65
  },
  {
    "name": "nincada",
    "id": 290,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/290.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    "typ1": "bug",
    "typ2": "ground",
    "moves": [
      "compound-eyes",
      "run-away"
    ],
    "statsHP": 31,
    "satsATK": 45,
    "satsDEF": 90,
    "satsINIT": 40,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "ninjask",
    "id": 291,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/291.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "speed-boost",
      "infiltrator"
    ],
    "statsHP": 61,
    "satsATK": 90,
    "satsDEF": 45,
    "satsINIT": 160,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "shedinja",
    "id": 292,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/292.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
    "typ1": "bug",
    "typ2": "ghost",
    "moves": [
      "wonder-guard"
    ],
    "statsHP": 1,
    "satsATK": 90,
    "satsDEF": 45,
    "satsINIT": 40,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "whismur",
    "id": 293,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/293.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    "typ1": "normal",
    "moves": [
      "soundproof",
      "rattled"
    ],
    "statsHP": 64,
    "satsATK": 51,
    "satsDEF": 23,
    "satsINIT": 28,
    "satsSATK": 51,
    "satsSDEF": 23
  },
  {
    "name": "loudred",
    "id": 294,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/294.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    "typ1": "normal",
    "moves": [
      "soundproof",
      "scrappy"
    ],
    "statsHP": 84,
    "satsATK": 71,
    "satsDEF": 43,
    "satsINIT": 48,
    "satsSATK": 71,
    "satsSDEF": 43
  },
  {
    "name": "exploud",
    "id": 295,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/295.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    "typ1": "normal",
    "moves": [
      "soundproof",
      "scrappy"
    ],
    "statsHP": 104,
    "satsATK": 91,
    "satsDEF": 63,
    "satsINIT": 68,
    "satsSATK": 91,
    "satsSDEF": 73
  },
  {
    "name": "makuhita",
    "id": 296,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/296.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    "typ1": "fighting",
    "moves": [
      "thick-fat",
      "guts",
      "sheer-force"
    ],
    "statsHP": 72,
    "satsATK": 60,
    "satsDEF": 30,
    "satsINIT": 25,
    "satsSATK": 20,
    "satsSDEF": 30
  },
  {
    "name": "hariyama",
    "id": 297,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/297.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    "typ1": "fighting",
    "moves": [
      "thick-fat",
      "guts",
      "sheer-force"
    ],
    "statsHP": 144,
    "satsATK": 120,
    "satsDEF": 60,
    "satsINIT": 50,
    "satsSATK": 40,
    "satsSDEF": 60
  },
  {
    "name": "azurill",
    "id": 298,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/298.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    "typ1": "normal",
    "typ2": "fairy",
    "moves": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ],
    "statsHP": 50,
    "satsATK": 20,
    "satsDEF": 40,
    "satsINIT": 20,
    "satsSATK": 20,
    "satsSDEF": 40
  },
  {
    "name": "nosepass",
    "id": 299,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/299.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "magnet-pull",
      "sand-force"
    ],
    "statsHP": 30,
    "satsATK": 45,
    "satsDEF": 135,
    "satsINIT": 30,
    "satsSATK": 45,
    "satsSDEF": 90
  },
  {
    "name": "skitty",
    "id": 300,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/300.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    "typ1": "normal",
    "moves": [
      "cute-charm",
      "normalize",
      "wonder-skin"
    ],
    "statsHP": 50,
    "satsATK": 45,
    "satsDEF": 45,
    "satsINIT": 50,
    "satsSATK": 35,
    "satsSDEF": 35
  },
  {
    "name": "delcatty",
    "id": 301,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/301.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    "typ1": "normal",
    "moves": [
      "cute-charm",
      "normalize",
      "wonder-skin"
    ],
    "statsHP": 70,
    "satsATK": 65,
    "satsDEF": 65,
    "satsINIT": 90,
    "satsSATK": 55,
    "satsSDEF": 55
  },
  {
    "name": "sableye",
    "id": 302,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/302.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    "typ1": "dark",
    "typ2": "ghost",
    "moves": [
      "keen-eye",
      "stall",
      "prankster"
    ],
    "statsHP": 50,
    "satsATK": 75,
    "satsDEF": 75,
    "satsINIT": 50,
    "satsSATK": 65,
    "satsSDEF": 65
  },
  {
    "name": "mawile",
    "id": 303,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/303.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    "typ1": "steel",
    "typ2": "fairy",
    "moves": [
      "hyper-cutter",
      "intimidate",
      "sheer-force"
    ],
    "statsHP": 50,
    "satsATK": 85,
    "satsDEF": 85,
    "satsINIT": 50,
    "satsSATK": 55,
    "satsSDEF": 55
  },
  {
    "name": "aron",
    "id": 304,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/304.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    "typ1": "steel",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ],
    "statsHP": 50,
    "satsATK": 70,
    "satsDEF": 100,
    "satsINIT": 30,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "lairon",
    "id": 305,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/305.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    "typ1": "steel",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ],
    "statsHP": 60,
    "satsATK": 90,
    "satsDEF": 140,
    "satsINIT": 40,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "aggron",
    "id": 306,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/306.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    "typ1": "steel",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ],
    "statsHP": 70,
    "satsATK": 110,
    "satsDEF": 180,
    "satsINIT": 50,
    "satsSATK": 60,
    "satsSDEF": 60
  },
  {
    "name": "meditite",
    "id": 307,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/307.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    "typ1": "fighting",
    "typ2": "psychic",
    "moves": [
      "pure-power",
      "telepathy"
    ],
    "statsHP": 30,
    "satsATK": 40,
    "satsDEF": 55,
    "satsINIT": 60,
    "satsSATK": 40,
    "satsSDEF": 55
  },
  {
    "name": "medicham",
    "id": 308,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/308.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    "typ1": "fighting",
    "typ2": "psychic",
    "moves": [
      "pure-power",
      "telepathy"
    ],
    "statsHP": 60,
    "satsATK": 60,
    "satsDEF": 75,
    "satsINIT": 80,
    "satsSATK": 60,
    "satsSDEF": 75
  },
  {
    "name": "electrike",
    "id": 309,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/309.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    "typ1": "electric",
    "moves": [
      "static",
      "lightning-rod",
      "minus"
    ],
    "statsHP": 40,
    "satsATK": 45,
    "satsDEF": 40,
    "satsINIT": 65,
    "satsSATK": 65,
    "satsSDEF": 40
  },
  {
    "name": "manectric",
    "id": 310,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/310.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    "typ1": "electric",
    "moves": [
      "static",
      "lightning-rod",
      "minus"
    ],
    "statsHP": 70,
    "satsATK": 75,
    "satsDEF": 60,
    "satsINIT": 105,
    "satsSATK": 105,
    "satsSDEF": 60
  },
  {
    "name": "plusle",
    "id": 311,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/311.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    "typ1": "electric",
    "moves": [
      "plus",
      "lightning-rod"
    ],
    "statsHP": 60,
    "satsATK": 50,
    "satsDEF": 40,
    "satsINIT": 95,
    "satsSATK": 85,
    "satsSDEF": 75
  },
  {
    "name": "minun",
    "id": 312,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/312.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    "typ1": "electric",
    "moves": [
      "minus",
      "volt-absorb"
    ],
    "statsHP": 60,
    "satsATK": 40,
    "satsDEF": 50,
    "satsINIT": 95,
    "satsSATK": 75,
    "satsSDEF": 85
  },
  {
    "name": "volbeat",
    "id": 313,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/313.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    "typ1": "bug",
    "moves": [
      "illuminate",
      "swarm",
      "prankster"
    ],
    "statsHP": 65,
    "satsATK": 73,
    "satsDEF": 75,
    "satsINIT": 85,
    "satsSATK": 47,
    "satsSDEF": 85
  },
  {
    "name": "illumise",
    "id": 314,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/314.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    "typ1": "bug",
    "moves": [
      "oblivious",
      "tinted-lens",
      "prankster"
    ],
    "statsHP": 65,
    "satsATK": 47,
    "satsDEF": 75,
    "satsINIT": 85,
    "satsSATK": 73,
    "satsSDEF": 85
  },
  {
    "name": "roselia",
    "id": 315,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/315.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "natural-cure",
      "poison-point",
      "leaf-guard"
    ],
    "statsHP": 50,
    "satsATK": 60,
    "satsDEF": 45,
    "satsINIT": 65,
    "satsSATK": 100,
    "satsSDEF": 80
  },
  {
    "name": "gulpin",
    "id": 316,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/316.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    "typ1": "poison",
    "moves": [
      "liquid-ooze",
      "sticky-hold",
      "gluttony"
    ],
    "statsHP": 70,
    "satsATK": 43,
    "satsDEF": 53,
    "satsINIT": 40,
    "satsSATK": 43,
    "satsSDEF": 53
  },
  {
    "name": "swalot",
    "id": 317,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/317.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    "typ1": "poison",
    "moves": [
      "liquid-ooze",
      "sticky-hold",
      "gluttony"
    ],
    "statsHP": 100,
    "satsATK": 73,
    "satsDEF": 83,
    "satsINIT": 55,
    "satsSATK": 73,
    "satsSDEF": 83
  },
  {
    "name": "carvanha",
    "id": 318,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/318.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    "typ1": "water",
    "typ2": "dark",
    "moves": [
      "rough-skin",
      "speed-boost"
    ],
    "statsHP": 45,
    "satsATK": 90,
    "satsDEF": 20,
    "satsINIT": 65,
    "satsSATK": 65,
    "satsSDEF": 20
  },
  {
    "name": "sharpedo",
    "id": 319,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/319.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    "typ1": "water",
    "typ2": "dark",
    "moves": [
      "rough-skin",
      "speed-boost"
    ],
    "statsHP": 70,
    "satsATK": 120,
    "satsDEF": 40,
    "satsINIT": 95,
    "satsSATK": 95,
    "satsSDEF": 40
  },
  {
    "name": "wailmer",
    "id": 320,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/320.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    "typ1": "water",
    "moves": [
      "water-veil",
      "oblivious",
      "pressure"
    ],
    "statsHP": 130,
    "satsATK": 70,
    "satsDEF": 35,
    "satsINIT": 60,
    "satsSATK": 70,
    "satsSDEF": 35
  },
  {
    "name": "wailord",
    "id": 321,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/321.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    "typ1": "water",
    "moves": [
      "water-veil",
      "oblivious",
      "pressure"
    ],
    "statsHP": 170,
    "satsATK": 90,
    "satsDEF": 45,
    "satsINIT": 60,
    "satsSATK": 90,
    "satsSDEF": 45
  },
  {
    "name": "numel",
    "id": 322,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/322.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    "typ1": "fire",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "simple",
      "own-tempo"
    ],
    "statsHP": 60,
    "satsATK": 60,
    "satsDEF": 40,
    "satsINIT": 35,
    "satsSATK": 65,
    "satsSDEF": 45
  },
  {
    "name": "camerupt",
    "id": 323,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/323.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    "typ1": "fire",
    "typ2": "ground",
    "moves": [
      "magma-armor",
      "solid-rock",
      "anger-point"
    ],
    "statsHP": 70,
    "satsATK": 100,
    "satsDEF": 70,
    "satsINIT": 40,
    "satsSATK": 105,
    "satsSDEF": 75
  },
  {
    "name": "torkoal",
    "id": 324,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/324.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    "typ1": "fire",
    "moves": [
      "white-smoke",
      "drought",
      "shell-armor"
    ],
    "statsHP": 70,
    "satsATK": 85,
    "satsDEF": 140,
    "satsINIT": 20,
    "satsSATK": 85,
    "satsSDEF": 70
  },
  {
    "name": "spoink",
    "id": 325,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/325.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    "typ1": "psychic",
    "moves": [
      "thick-fat",
      "own-tempo",
      "gluttony"
    ],
    "statsHP": 60,
    "satsATK": 25,
    "satsDEF": 35,
    "satsINIT": 60,
    "satsSATK": 70,
    "satsSDEF": 80
  },
  {
    "name": "grumpig",
    "id": 326,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/326.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    "typ1": "psychic",
    "moves": [
      "thick-fat",
      "own-tempo",
      "gluttony"
    ],
    "statsHP": 80,
    "satsATK": 45,
    "satsDEF": 65,
    "satsINIT": 80,
    "satsSATK": 90,
    "satsSDEF": 110
  },
  {
    "name": "spinda",
    "id": 327,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/327.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    "typ1": "normal",
    "moves": [
      "own-tempo",
      "tangled-feet",
      "contrary"
    ],
    "statsHP": 60,
    "satsATK": 60,
    "satsDEF": 60,
    "satsINIT": 60,
    "satsSATK": 60,
    "satsSDEF": 60
  },
  {
    "name": "trapinch",
    "id": 328,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/328.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    "typ1": "ground",
    "moves": [
      "hyper-cutter",
      "arena-trap",
      "sheer-force"
    ],
    "statsHP": 45,
    "satsATK": 100,
    "satsDEF": 45,
    "satsINIT": 10,
    "satsSATK": 45,
    "satsSDEF": 45
  },
  {
    "name": "vibrava",
    "id": 329,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/329.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    "typ1": "ground",
    "typ2": "dragon",
    "moves": [
      "levitate"
    ],
    "statsHP": 50,
    "satsATK": 70,
    "satsDEF": 50,
    "satsINIT": 70,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "flygon",
    "id": 330,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/330.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    "typ1": "ground",
    "typ2": "dragon",
    "moves": [
      "levitate"
    ],
    "statsHP": 80,
    "satsATK": 100,
    "satsDEF": 80,
    "satsINIT": 100,
    "satsSATK": 80,
    "satsSDEF": 80
  },
  {
    "name": "cacnea",
    "id": 331,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/331.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    "typ1": "grass",
    "moves": [
      "sand-veil",
      "water-absorb"
    ],
    "statsHP": 50,
    "satsATK": 85,
    "satsDEF": 40,
    "satsINIT": 35,
    "satsSATK": 85,
    "satsSDEF": 40
  },
  {
    "name": "cacturne",
    "id": 332,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/332.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    "typ1": "grass",
    "typ2": "dark",
    "moves": [
      "sand-veil",
      "water-absorb"
    ],
    "statsHP": 70,
    "satsATK": 115,
    "satsDEF": 60,
    "satsINIT": 55,
    "satsSATK": 115,
    "satsSDEF": 60
  },
  {
    "name": "swablu",
    "id": 333,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/333.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "natural-cure",
      "cloud-nine"
    ],
    "statsHP": 45,
    "satsATK": 40,
    "satsDEF": 60,
    "satsINIT": 50,
    "satsSATK": 40,
    "satsSDEF": 75
  },
  {
    "name": "altaria",
    "id": 334,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/334.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    "typ1": "dragon",
    "typ2": "flying",
    "moves": [
      "natural-cure",
      "cloud-nine"
    ],
    "statsHP": 75,
    "satsATK": 70,
    "satsDEF": 90,
    "satsINIT": 80,
    "satsSATK": 70,
    "satsSDEF": 105
  },
  {
    "name": "zangoose",
    "id": 335,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/335.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    "typ1": "normal",
    "moves": [
      "immunity",
      "toxic-boost"
    ],
    "statsHP": 73,
    "satsATK": 115,
    "satsDEF": 60,
    "satsINIT": 90,
    "satsSATK": 60,
    "satsSDEF": 60
  },
  {
    "name": "seviper",
    "id": 336,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/336.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    "typ1": "poison",
    "moves": [
      "shed-skin",
      "infiltrator"
    ],
    "statsHP": 73,
    "satsATK": 100,
    "satsDEF": 60,
    "satsINIT": 65,
    "satsSATK": 100,
    "satsSDEF": 60
  },
  {
    "name": "lunatone",
    "id": 337,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/337.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    "typ1": "rock",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 90,
    "satsATK": 55,
    "satsDEF": 65,
    "satsINIT": 70,
    "satsSATK": 95,
    "satsSDEF": 85
  },
  {
    "name": "solrock",
    "id": 338,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/338.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    "typ1": "rock",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 90,
    "satsATK": 95,
    "satsDEF": 85,
    "satsINIT": 70,
    "satsSATK": 55,
    "satsSDEF": 65
  },
  {
    "name": "barboach",
    "id": 339,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/339.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "anticipation",
      "hydration"
    ],
    "statsHP": 50,
    "satsATK": 48,
    "satsDEF": 43,
    "satsINIT": 60,
    "satsSATK": 46,
    "satsSDEF": 41
  },
  {
    "name": "whiscash",
    "id": 340,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/340.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "anticipation",
      "hydration"
    ],
    "statsHP": 110,
    "satsATK": 78,
    "satsDEF": 73,
    "satsINIT": 60,
    "satsSATK": 76,
    "satsSDEF": 71
  },
  {
    "name": "corphish",
    "id": 341,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/341.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    "typ1": "water",
    "moves": [
      "hyper-cutter",
      "shell-armor",
      "adaptability"
    ],
    "statsHP": 43,
    "satsATK": 80,
    "satsDEF": 65,
    "satsINIT": 35,
    "satsSATK": 50,
    "satsSDEF": 35
  },
  {
    "name": "crawdaunt",
    "id": 342,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/342.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    "typ1": "water",
    "typ2": "dark",
    "moves": [
      "hyper-cutter",
      "shell-armor",
      "adaptability"
    ],
    "statsHP": 63,
    "satsATK": 120,
    "satsDEF": 85,
    "satsINIT": 55,
    "satsSATK": 90,
    "satsSDEF": 55
  },
  {
    "name": "baltoy",
    "id": 343,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/343.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    "typ1": "ground",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 40,
    "satsATK": 40,
    "satsDEF": 55,
    "satsINIT": 55,
    "satsSATK": 40,
    "satsSDEF": 70
  },
  {
    "name": "claydol",
    "id": 344,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/344.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    "typ1": "ground",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 60,
    "satsATK": 70,
    "satsDEF": 105,
    "satsINIT": 75,
    "satsSATK": 70,
    "satsSDEF": 120
  },
  {
    "name": "lileep",
    "id": 345,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/345.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    "typ1": "rock",
    "typ2": "grass",
    "moves": [
      "suction-cups",
      "storm-drain"
    ],
    "statsHP": 66,
    "satsATK": 41,
    "satsDEF": 77,
    "satsINIT": 23,
    "satsSATK": 61,
    "satsSDEF": 87
  },
  {
    "name": "cradily",
    "id": 346,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/346.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    "typ1": "rock",
    "typ2": "grass",
    "moves": [
      "suction-cups",
      "storm-drain"
    ],
    "statsHP": 86,
    "satsATK": 81,
    "satsDEF": 97,
    "satsINIT": 43,
    "satsSATK": 81,
    "satsSDEF": 107
  },
  {
    "name": "anorith",
    "id": 347,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/347.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    "typ1": "rock",
    "typ2": "bug",
    "moves": [
      "battle-armor",
      "swift-swim"
    ],
    "statsHP": 45,
    "satsATK": 95,
    "satsDEF": 50,
    "satsINIT": 75,
    "satsSATK": 40,
    "satsSDEF": 50
  },
  {
    "name": "armaldo",
    "id": 348,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/348.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    "typ1": "rock",
    "typ2": "bug",
    "moves": [
      "battle-armor",
      "swift-swim"
    ],
    "statsHP": 75,
    "satsATK": 125,
    "satsDEF": 100,
    "satsINIT": 45,
    "satsSATK": 70,
    "satsSDEF": 80
  },
  {
    "name": "feebas",
    "id": 349,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/349.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "oblivious",
      "adaptability"
    ],
    "statsHP": 20,
    "satsATK": 15,
    "satsDEF": 20,
    "satsINIT": 80,
    "satsSATK": 10,
    "satsSDEF": 55
  },
  {
    "name": "milotic",
    "id": 350,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/350.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    "typ1": "water",
    "moves": [
      "marvel-scale",
      "competitive",
      "cute-charm"
    ],
    "statsHP": 95,
    "satsATK": 60,
    "satsDEF": 79,
    "satsINIT": 81,
    "satsSATK": 100,
    "satsSDEF": 125
  },
  {
    "name": "castform",
    "id": 351,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/351.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    "typ1": "normal",
    "moves": [
      "forecast"
    ],
    "statsHP": 70,
    "satsATK": 70,
    "satsDEF": 70,
    "satsINIT": 70,
    "satsSATK": 70,
    "satsSDEF": 70
  },
  {
    "name": "kecleon",
    "id": 352,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/352.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    "typ1": "normal",
    "moves": [
      "color-change",
      "protean"
    ],
    "statsHP": 60,
    "satsATK": 90,
    "satsDEF": 70,
    "satsINIT": 40,
    "satsSATK": 60,
    "satsSDEF": 120
  },
  {
    "name": "shuppet",
    "id": 353,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/353.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    "typ1": "ghost",
    "moves": [
      "insomnia",
      "frisk",
      "cursed-body"
    ],
    "statsHP": 44,
    "satsATK": 75,
    "satsDEF": 35,
    "satsINIT": 45,
    "satsSATK": 63,
    "satsSDEF": 33
  },
  {
    "name": "banette",
    "id": 354,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/354.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    "typ1": "ghost",
    "moves": [
      "insomnia",
      "frisk",
      "cursed-body"
    ],
    "statsHP": 64,
    "satsATK": 115,
    "satsDEF": 65,
    "satsINIT": 65,
    "satsSATK": 83,
    "satsSDEF": 63
  },
  {
    "name": "duskull",
    "id": 355,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/355.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    "typ1": "ghost",
    "moves": [
      "levitate",
      "frisk"
    ],
    "statsHP": 20,
    "satsATK": 40,
    "satsDEF": 90,
    "satsINIT": 25,
    "satsSATK": 30,
    "satsSDEF": 90
  },
  {
    "name": "dusclops",
    "id": 356,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/356.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    "typ1": "ghost",
    "moves": [
      "pressure",
      "frisk"
    ],
    "statsHP": 40,
    "satsATK": 70,
    "satsDEF": 130,
    "satsINIT": 25,
    "satsSATK": 60,
    "satsSDEF": 130
  },
  {
    "name": "tropius",
    "id": 357,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/357.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "chlorophyll",
      "solar-power",
      "harvest"
    ],
    "statsHP": 99,
    "satsATK": 68,
    "satsDEF": 83,
    "satsINIT": 51,
    "satsSATK": 72,
    "satsSDEF": 87
  },
  {
    "name": "chimecho",
    "id": 358,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/358.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 75,
    "satsATK": 50,
    "satsDEF": 80,
    "satsINIT": 65,
    "satsSATK": 95,
    "satsSDEF": 90
  },
  {
    "name": "absol",
    "id": 359,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/359.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    "typ1": "dark",
    "moves": [
      "pressure",
      "super-luck",
      "justified"
    ],
    "statsHP": 65,
    "satsATK": 130,
    "satsDEF": 60,
    "satsINIT": 75,
    "satsSATK": 75,
    "satsSDEF": 60
  },
  {
    "name": "wynaut",
    "id": 360,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/360.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    "typ1": "psychic",
    "moves": [
      "shadow-tag",
      "telepathy"
    ],
    "statsHP": 95,
    "satsATK": 23,
    "satsDEF": 48,
    "satsINIT": 23,
    "satsSATK": 23,
    "satsSDEF": 48
  },
  {
    "name": "snorunt",
    "id": 361,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/361.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    "typ1": "ice",
    "moves": [
      "inner-focus",
      "ice-body",
      "moody"
    ],
    "statsHP": 50,
    "satsATK": 50,
    "satsDEF": 50,
    "satsINIT": 50,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "glalie",
    "id": 362,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/362.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    "typ1": "ice",
    "moves": [
      "inner-focus",
      "ice-body",
      "moody"
    ],
    "statsHP": 80,
    "satsATK": 80,
    "satsDEF": 80,
    "satsINIT": 80,
    "satsSATK": 80,
    "satsSDEF": 80
  },
  {
    "name": "spheal",
    "id": 363,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/363.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    "typ1": "ice",
    "typ2": "water",
    "moves": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ],
    "statsHP": 70,
    "satsATK": 40,
    "satsDEF": 50,
    "satsINIT": 25,
    "satsSATK": 55,
    "satsSDEF": 50
  },
  {
    "name": "sealeo",
    "id": 364,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/364.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    "typ1": "ice",
    "typ2": "water",
    "moves": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ],
    "statsHP": 90,
    "satsATK": 60,
    "satsDEF": 70,
    "satsINIT": 45,
    "satsSATK": 75,
    "satsSDEF": 70
  },
  {
    "name": "walrein",
    "id": 365,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/365.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    "typ1": "ice",
    "typ2": "water",
    "moves": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ],
    "statsHP": 110,
    "satsATK": 80,
    "satsDEF": 90,
    "satsINIT": 65,
    "satsSATK": 95,
    "satsSDEF": 90
  },
  {
    "name": "clamperl",
    "id": 366,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/366.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    "typ1": "water",
    "moves": [
      "shell-armor",
      "rattled"
    ],
    "statsHP": 35,
    "satsATK": 64,
    "satsDEF": 85,
    "satsINIT": 32,
    "satsSATK": 74,
    "satsSDEF": 55
  },
  {
    "name": "huntail",
    "id": 367,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/367.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "water-veil"
    ],
    "statsHP": 55,
    "satsATK": 104,
    "satsDEF": 105,
    "satsINIT": 52,
    "satsSATK": 94,
    "satsSDEF": 75
  },
  {
    "name": "gorebyss",
    "id": 368,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/368.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "hydration"
    ],
    "statsHP": 55,
    "satsATK": 84,
    "satsDEF": 105,
    "satsINIT": 52,
    "satsSATK": 114,
    "satsSDEF": 75
  },
  {
    "name": "relicanth",
    "id": 369,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/369.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    "typ1": "water",
    "typ2": "rock",
    "moves": [
      "swift-swim",
      "rock-head",
      "sturdy"
    ],
    "statsHP": 100,
    "satsATK": 90,
    "satsDEF": 130,
    "satsINIT": 55,
    "satsSATK": 45,
    "satsSDEF": 65
  },
  {
    "name": "luvdisc",
    "id": 370,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/370.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "hydration"
    ],
    "statsHP": 43,
    "satsATK": 30,
    "satsDEF": 55,
    "satsINIT": 97,
    "satsSATK": 40,
    "satsSDEF": 65
  },
  {
    "name": "bagon",
    "id": 371,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/371.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    "typ1": "dragon",
    "moves": [
      "rock-head",
      "sheer-force"
    ],
    "statsHP": 45,
    "satsATK": 75,
    "satsDEF": 60,
    "satsINIT": 50,
    "satsSATK": 40,
    "satsSDEF": 30
  },
  {
    "name": "shelgon",
    "id": 372,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/372.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    "typ1": "dragon",
    "moves": [
      "rock-head",
      "overcoat"
    ],
    "statsHP": 65,
    "satsATK": 95,
    "satsDEF": 100,
    "satsINIT": 50,
    "satsSATK": 60,
    "satsSDEF": 50
  },
  {
    "name": "salamence",
    "id": 373,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/373.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    "typ1": "dragon",
    "typ2": "flying",
    "moves": [
      "intimidate",
      "moxie"
    ],
    "statsHP": 95,
    "satsATK": 135,
    "satsDEF": 80,
    "satsINIT": 100,
    "satsSATK": 110,
    "satsSDEF": 80
  },
  {
    "name": "beldum",
    "id": 374,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/374.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "clear-body",
      "light-metal"
    ],
    "statsHP": 40,
    "satsATK": 55,
    "satsDEF": 80,
    "satsINIT": 30,
    "satsSATK": 35,
    "satsSDEF": 60
  },
  {
    "name": "metang",
    "id": 375,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/375.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "clear-body",
      "light-metal"
    ],
    "statsHP": 60,
    "satsATK": 75,
    "satsDEF": 100,
    "satsINIT": 50,
    "satsSATK": 55,
    "satsSDEF": 80
  },
  {
    "name": "metagross",
    "id": 376,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/376.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "clear-body",
      "light-metal"
    ],
    "statsHP": 80,
    "satsATK": 135,
    "satsDEF": 130,
    "satsINIT": 70,
    "satsSATK": 95,
    "satsSDEF": 90
  },
  {
    "name": "regirock",
    "id": 377,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/377.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    "typ1": "rock",
    "moves": [
      "clear-body",
      "sturdy"
    ],
    "statsHP": 80,
    "satsATK": 100,
    "satsDEF": 200,
    "satsINIT": 50,
    "satsSATK": 50,
    "satsSDEF": 100
  },
  {
    "name": "regice",
    "id": 378,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/378.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    "typ1": "ice",
    "moves": [
      "clear-body",
      "ice-body"
    ],
    "statsHP": 80,
    "satsATK": 50,
    "satsDEF": 100,
    "satsINIT": 50,
    "satsSATK": 100,
    "satsSDEF": 200
  },
  {
    "name": "registeel",
    "id": 379,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/379.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    "typ1": "steel",
    "moves": [
      "clear-body",
      "light-metal"
    ],
    "statsHP": 80,
    "satsATK": 75,
    "satsDEF": 150,
    "satsINIT": 50,
    "satsSATK": 75,
    "satsSDEF": 150
  },
  {
    "name": "latias",
    "id": 380,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/380.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    "typ1": "dragon",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 80,
    "satsATK": 80,
    "satsDEF": 90,
    "satsINIT": 110,
    "satsSATK": 110,
    "satsSDEF": 130
  },
  {
    "name": "latios",
    "id": 381,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/381.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    "typ1": "dragon",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 80,
    "satsATK": 90,
    "satsDEF": 80,
    "satsINIT": 110,
    "satsSATK": 130,
    "satsSDEF": 110
  },
  {
    "name": "kyogre",
    "id": 382,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/382.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    "typ1": "water",
    "moves": [
      "drizzle"
    ],
    "statsHP": 100,
    "satsATK": 100,
    "satsDEF": 90,
    "satsINIT": 90,
    "satsSATK": 150,
    "satsSDEF": 140
  },
  {
    "name": "groudon",
    "id": 383,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/383.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    "typ1": "ground",
    "moves": [
      "drought"
    ],
    "statsHP": 100,
    "satsATK": 150,
    "satsDEF": 140,
    "satsINIT": 90,
    "satsSATK": 100,
    "satsSDEF": 90
  },
  {
    "name": "rayquaza",
    "id": 384,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/384.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    "typ1": "dragon",
    "typ2": "flying",
    "moves": [
      "air-lock"
    ],
    "statsHP": 105,
    "satsATK": 150,
    "satsDEF": 90,
    "satsINIT": 95,
    "satsSATK": 150,
    "satsSDEF": 90
  },
  {
    "name": "jirachi",
    "id": 385,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/385.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "serene-grace"
    ],
    "statsHP": 100,
    "satsATK": 100,
    "satsDEF": 100,
    "satsINIT": 100,
    "satsSATK": 100,
    "satsSDEF": 100
  },
  {
    "name": "deoxys-normal",
    "id": 386,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/386.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
    "typ1": "psychic",
    "moves": [
      "pressure"
    ],
    "statsHP": 50,
    "satsATK": 150,
    "satsDEF": 50,
    "satsINIT": 150,
    "satsSATK": 150,
    "satsSDEF": 50
  },
  {
    "name": "turtwig",
    "id": 387,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/387.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "shell-armor"
    ],
    "statsHP": 55,
    "satsATK": 68,
    "satsDEF": 64,
    "satsINIT": 31,
    "satsSATK": 45,
    "satsSDEF": 55
  },
  {
    "name": "grotle",
    "id": 388,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/388.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "shell-armor"
    ],
    "statsHP": 75,
    "satsATK": 89,
    "satsDEF": 85,
    "satsINIT": 36,
    "satsSATK": 55,
    "satsSDEF": 65
  },
  {
    "name": "torterra",
    "id": 389,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/389.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    "typ1": "grass",
    "typ2": "ground",
    "moves": [
      "overgrow",
      "shell-armor"
    ],
    "statsHP": 95,
    "satsATK": 109,
    "satsDEF": 105,
    "satsINIT": 56,
    "satsSATK": 75,
    "satsSDEF": 85
  },
  {
    "name": "chimchar",
    "id": 390,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/390.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "iron-fist"
    ],
    "statsHP": 44,
    "satsATK": 58,
    "satsDEF": 44,
    "satsINIT": 61,
    "satsSATK": 58,
    "satsSDEF": 44
  },
  {
    "name": "monferno",
    "id": 391,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/391.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "iron-fist"
    ],
    "statsHP": 64,
    "satsATK": 78,
    "satsDEF": 52,
    "satsINIT": 81,
    "satsSATK": 78,
    "satsSDEF": 52
  },
  {
    "name": "infernape",
    "id": 392,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/392.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "iron-fist"
    ],
    "statsHP": 76,
    "satsATK": 104,
    "satsDEF": 71,
    "satsINIT": 108,
    "satsSATK": 104,
    "satsSDEF": 71
  },
  {
    "name": "piplup",
    "id": 393,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/393.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "competitive"
    ],
    "statsHP": 53,
    "satsATK": 51,
    "satsDEF": 53,
    "satsINIT": 40,
    "satsSATK": 61,
    "satsSDEF": 56
  },
  {
    "name": "prinplup",
    "id": 394,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/394.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "competitive"
    ],
    "statsHP": 64,
    "satsATK": 66,
    "satsDEF": 68,
    "satsINIT": 50,
    "satsSATK": 81,
    "satsSDEF": 76
  },
  {
    "name": "empoleon",
    "id": 395,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/395.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    "typ1": "water",
    "typ2": "steel",
    "moves": [
      "torrent",
      "competitive"
    ],
    "statsHP": 84,
    "satsATK": 86,
    "satsDEF": 88,
    "satsINIT": 60,
    "satsSATK": 111,
    "satsSDEF": 101
  },
  {
    "name": "starly",
    "id": 396,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/396.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "reckless"
    ],
    "statsHP": 40,
    "satsATK": 55,
    "satsDEF": 30,
    "satsINIT": 60,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "staravia",
    "id": 397,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/397.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "intimidate",
      "reckless"
    ],
    "statsHP": 55,
    "satsATK": 75,
    "satsDEF": 50,
    "satsINIT": 80,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "staraptor",
    "id": 398,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/398.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "intimidate",
      "reckless"
    ],
    "statsHP": 85,
    "satsATK": 120,
    "satsDEF": 70,
    "satsINIT": 100,
    "satsSATK": 50,
    "satsSDEF": 60
  },
  {
    "name": "bidoof",
    "id": 399,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/399.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    "typ1": "normal",
    "moves": [
      "simple",
      "unaware",
      "moody"
    ],
    "statsHP": 59,
    "satsATK": 45,
    "satsDEF": 40,
    "satsINIT": 31,
    "satsSATK": 35,
    "satsSDEF": 40
  },
  {
    "name": "bibarel",
    "id": 400,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/400.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    "typ1": "normal",
    "typ2": "water",
    "moves": [
      "simple",
      "unaware",
      "moody"
    ],
    "statsHP": 79,
    "satsATK": 85,
    "satsDEF": 60,
    "satsINIT": 71,
    "satsSATK": 55,
    "satsSDEF": 60
  },
  {
    "name": "kricketot",
    "id": 401,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/401.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    "typ1": "bug",
    "moves": [
      "shed-skin",
      "run-away"
    ],
    "statsHP": 37,
    "satsATK": 25,
    "satsDEF": 41,
    "satsINIT": 25,
    "satsSATK": 25,
    "satsSDEF": 41
  },
  {
    "name": "kricketune",
    "id": 402,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/402.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    "typ1": "bug",
    "moves": [
      "swarm",
      "technician"
    ],
    "statsHP": 77,
    "satsATK": 85,
    "satsDEF": 51,
    "satsINIT": 65,
    "satsSATK": 55,
    "satsSDEF": 51
  },
  {
    "name": "shinx",
    "id": 403,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/403.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    "typ1": "electric",
    "moves": [
      "rivalry",
      "intimidate",
      "guts"
    ],
    "statsHP": 45,
    "satsATK": 65,
    "satsDEF": 34,
    "satsINIT": 45,
    "satsSATK": 40,
    "satsSDEF": 34
  },
  {
    "name": "luxio",
    "id": 404,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/404.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    "typ1": "electric",
    "moves": [
      "rivalry",
      "intimidate",
      "guts"
    ],
    "statsHP": 60,
    "satsATK": 85,
    "satsDEF": 49,
    "satsINIT": 60,
    "satsSATK": 60,
    "satsSDEF": 49
  },
  {
    "name": "luxray",
    "id": 405,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/405.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    "typ1": "electric",
    "moves": [
      "rivalry",
      "intimidate",
      "guts"
    ],
    "statsHP": 80,
    "satsATK": 120,
    "satsDEF": 79,
    "satsINIT": 70,
    "satsSATK": 95,
    "satsSDEF": 79
  },
  {
    "name": "budew",
    "id": 406,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/406.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "natural-cure",
      "poison-point",
      "leaf-guard"
    ],
    "statsHP": 40,
    "satsATK": 30,
    "satsDEF": 35,
    "satsINIT": 55,
    "satsSATK": 50,
    "satsSDEF": 70
  },
  {
    "name": "roserade",
    "id": 407,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/407.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "natural-cure",
      "poison-point",
      "technician"
    ],
    "statsHP": 60,
    "satsATK": 70,
    "satsDEF": 65,
    "satsINIT": 90,
    "satsSATK": 125,
    "satsSDEF": 105
  },
  {
    "name": "cranidos",
    "id": 408,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/408.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    "typ1": "rock",
    "moves": [
      "mold-breaker",
      "sheer-force"
    ],
    "statsHP": 67,
    "satsATK": 125,
    "satsDEF": 40,
    "satsINIT": 58,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "rampardos",
    "id": 409,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/409.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    "typ1": "rock",
    "moves": [
      "mold-breaker",
      "sheer-force"
    ],
    "statsHP": 97,
    "satsATK": 165,
    "satsDEF": 60,
    "satsINIT": 58,
    "satsSATK": 65,
    "satsSDEF": 50
  },
  {
    "name": "shieldon",
    "id": 410,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/410.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    "typ1": "rock",
    "typ2": "steel",
    "moves": [
      "sturdy",
      "soundproof"
    ],
    "statsHP": 30,
    "satsATK": 42,
    "satsDEF": 118,
    "satsINIT": 30,
    "satsSATK": 42,
    "satsSDEF": 88
  },
  {
    "name": "bastiodon",
    "id": 411,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/411.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    "typ1": "rock",
    "typ2": "steel",
    "moves": [
      "sturdy",
      "soundproof"
    ],
    "statsHP": 60,
    "satsATK": 52,
    "satsDEF": 168,
    "satsINIT": 30,
    "satsSATK": 47,
    "satsSDEF": 138
  },
  {
    "name": "burmy",
    "id": 412,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/412.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    "typ1": "bug",
    "moves": [
      "shed-skin",
      "overcoat"
    ],
    "statsHP": 40,
    "satsATK": 29,
    "satsDEF": 45,
    "satsINIT": 36,
    "satsSATK": 29,
    "satsSDEF": 45
  },
  {
    "name": "wormadam-plant",
    "id": 413,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/413.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "anticipation",
      "overcoat"
    ],
    "statsHP": 60,
    "satsATK": 59,
    "satsDEF": 85,
    "satsINIT": 36,
    "satsSATK": 79,
    "satsSDEF": 105
  },
  {
    "name": "mothim",
    "id": 414,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/414.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "swarm",
      "tinted-lens"
    ],
    "statsHP": 70,
    "satsATK": 94,
    "satsDEF": 50,
    "satsINIT": 66,
    "satsSATK": 94,
    "satsSDEF": 50
  },
  {
    "name": "combee",
    "id": 415,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/415.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "honey-gather",
      "hustle"
    ],
    "statsHP": 30,
    "satsATK": 30,
    "satsDEF": 42,
    "satsINIT": 70,
    "satsSATK": 30,
    "satsSDEF": 42
  },
  {
    "name": "vespiquen",
    "id": 416,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/416.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "pressure",
      "unnerve"
    ],
    "statsHP": 70,
    "satsATK": 80,
    "satsDEF": 102,
    "satsINIT": 40,
    "satsSATK": 80,
    "satsSDEF": 102
  },
  {
    "name": "pachirisu",
    "id": 417,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/417.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    "typ1": "electric",
    "moves": [
      "run-away",
      "pickup",
      "volt-absorb"
    ],
    "statsHP": 60,
    "satsATK": 45,
    "satsDEF": 70,
    "satsINIT": 95,
    "satsSATK": 45,
    "satsSDEF": 90
  },
  {
    "name": "buizel",
    "id": 418,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/418.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "water-veil"
    ],
    "statsHP": 55,
    "satsATK": 65,
    "satsDEF": 35,
    "satsINIT": 85,
    "satsSATK": 60,
    "satsSDEF": 30
  },
  {
    "name": "floatzel",
    "id": 419,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/419.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "water-veil"
    ],
    "statsHP": 85,
    "satsATK": 105,
    "satsDEF": 55,
    "satsINIT": 115,
    "satsSATK": 85,
    "satsSDEF": 50
  },
  {
    "name": "cherubi",
    "id": 420,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/420.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll"
    ],
    "statsHP": 45,
    "satsATK": 35,
    "satsDEF": 45,
    "satsINIT": 35,
    "satsSATK": 62,
    "satsSDEF": 53
  },
  {
    "name": "cherrim",
    "id": 421,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/421.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    "typ1": "grass",
    "moves": [
      "flower-gift"
    ],
    "statsHP": 70,
    "satsATK": 60,
    "satsDEF": 70,
    "satsINIT": 85,
    "satsSATK": 87,
    "satsSDEF": 78
  },
  {
    "name": "shellos",
    "id": 422,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/422.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    "typ1": "water",
    "moves": [
      "sticky-hold",
      "storm-drain",
      "sand-force"
    ],
    "statsHP": 76,
    "satsATK": 48,
    "satsDEF": 48,
    "satsINIT": 34,
    "satsSATK": 57,
    "satsSDEF": 62
  },
  {
    "name": "gastrodon",
    "id": 423,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/423.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "sticky-hold",
      "storm-drain",
      "sand-force"
    ],
    "statsHP": 111,
    "satsATK": 83,
    "satsDEF": 68,
    "satsINIT": 39,
    "satsSATK": 92,
    "satsSDEF": 82
  },
  {
    "name": "ambipom",
    "id": 424,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/424.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    "typ1": "normal",
    "moves": [
      "technician",
      "pickup",
      "skill-link"
    ],
    "statsHP": 75,
    "satsATK": 100,
    "satsDEF": 66,
    "satsINIT": 115,
    "satsSATK": 60,
    "satsSDEF": 66
  },
  {
    "name": "drifloon",
    "id": 425,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/425.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    "typ1": "ghost",
    "typ2": "flying",
    "moves": [
      "aftermath",
      "unburden",
      "flare-boost"
    ],
    "statsHP": 90,
    "satsATK": 50,
    "satsDEF": 34,
    "satsINIT": 70,
    "satsSATK": 60,
    "satsSDEF": 44
  },
  {
    "name": "drifblim",
    "id": 426,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/426.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    "typ1": "ghost",
    "typ2": "flying",
    "moves": [
      "aftermath",
      "unburden",
      "flare-boost"
    ],
    "statsHP": 150,
    "satsATK": 80,
    "satsDEF": 44,
    "satsINIT": 80,
    "satsSATK": 90,
    "satsSDEF": 54
  },
  {
    "name": "buneary",
    "id": 427,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/427.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "klutz",
      "limber"
    ],
    "statsHP": 55,
    "satsATK": 66,
    "satsDEF": 44,
    "satsINIT": 85,
    "satsSATK": 44,
    "satsSDEF": 56
  },
  {
    "name": "lopunny",
    "id": 428,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/428.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    "typ1": "normal",
    "moves": [
      "cute-charm",
      "klutz",
      "limber"
    ],
    "statsHP": 65,
    "satsATK": 76,
    "satsDEF": 84,
    "satsINIT": 105,
    "satsSATK": 54,
    "satsSDEF": 96
  },
  {
    "name": "mismagius",
    "id": 429,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/429.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    "typ1": "ghost",
    "moves": [
      "levitate"
    ],
    "statsHP": 60,
    "satsATK": 60,
    "satsDEF": 60,
    "satsINIT": 105,
    "satsSATK": 105,
    "satsSDEF": 105
  },
  {
    "name": "honchkrow",
    "id": 430,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/430.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    "typ1": "dark",
    "typ2": "flying",
    "moves": [
      "insomnia",
      "super-luck",
      "moxie"
    ],
    "statsHP": 100,
    "satsATK": 125,
    "satsDEF": 52,
    "satsINIT": 71,
    "satsSATK": 105,
    "satsSDEF": 52
  },
  {
    "name": "glameow",
    "id": 431,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/431.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    "typ1": "normal",
    "moves": [
      "limber",
      "own-tempo",
      "keen-eye"
    ],
    "statsHP": 49,
    "satsATK": 55,
    "satsDEF": 42,
    "satsINIT": 85,
    "satsSATK": 42,
    "satsSDEF": 37
  },
  {
    "name": "purugly",
    "id": 432,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/432.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    "typ1": "normal",
    "moves": [
      "thick-fat",
      "own-tempo",
      "defiant"
    ],
    "statsHP": 71,
    "satsATK": 82,
    "satsDEF": 64,
    "satsINIT": 112,
    "satsSATK": 64,
    "satsSDEF": 59
  },
  {
    "name": "chingling",
    "id": 433,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/433.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 45,
    "satsATK": 30,
    "satsDEF": 50,
    "satsINIT": 45,
    "satsSATK": 65,
    "satsSDEF": 50
  },
  {
    "name": "stunky",
    "id": 434,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/434.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    "typ1": "poison",
    "typ2": "dark",
    "moves": [
      "stench",
      "aftermath",
      "keen-eye"
    ],
    "statsHP": 63,
    "satsATK": 63,
    "satsDEF": 47,
    "satsINIT": 74,
    "satsSATK": 41,
    "satsSDEF": 41
  },
  {
    "name": "skuntank",
    "id": 435,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/435.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    "typ1": "poison",
    "typ2": "dark",
    "moves": [
      "stench",
      "aftermath",
      "keen-eye"
    ],
    "statsHP": 103,
    "satsATK": 93,
    "satsDEF": 67,
    "satsINIT": 84,
    "satsSATK": 71,
    "satsSDEF": 61
  },
  {
    "name": "bronzor",
    "id": 436,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/436.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "levitate",
      "heatproof",
      "heavy-metal"
    ],
    "statsHP": 57,
    "satsATK": 24,
    "satsDEF": 86,
    "satsINIT": 23,
    "satsSATK": 24,
    "satsSDEF": 86
  },
  {
    "name": "bronzong",
    "id": 437,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/437.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "levitate",
      "heatproof",
      "heavy-metal"
    ],
    "statsHP": 67,
    "satsATK": 89,
    "satsDEF": 116,
    "satsINIT": 33,
    "satsSATK": 79,
    "satsSDEF": 116
  },
  {
    "name": "bonsly",
    "id": 438,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/438.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "rock-head",
      "rattled"
    ],
    "statsHP": 50,
    "satsATK": 80,
    "satsDEF": 95,
    "satsINIT": 10,
    "satsSATK": 10,
    "satsSDEF": 45
  },
  {
    "name": "mime-jr",
    "id": 439,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/439.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "soundproof",
      "filter",
      "technician"
    ],
    "statsHP": 20,
    "satsATK": 25,
    "satsDEF": 45,
    "satsINIT": 60,
    "satsSATK": 70,
    "satsSDEF": 90
  },
  {
    "name": "happiny",
    "id": 440,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/440.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    "typ1": "normal",
    "moves": [
      "natural-cure",
      "serene-grace",
      "friend-guard"
    ],
    "statsHP": 100,
    "satsATK": 5,
    "satsDEF": 5,
    "satsINIT": 30,
    "satsSATK": 15,
    "satsSDEF": 65
  },
  {
    "name": "chatot",
    "id": 441,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/441.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "statsHP": 76,
    "satsATK": 65,
    "satsDEF": 45,
    "satsINIT": 91,
    "satsSATK": 92,
    "satsSDEF": 42
  },
  {
    "name": "spiritomb",
    "id": 442,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/442.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    "typ1": "ghost",
    "typ2": "dark",
    "moves": [
      "pressure",
      "infiltrator"
    ],
    "statsHP": 50,
    "satsATK": 92,
    "satsDEF": 108,
    "satsINIT": 35,
    "satsSATK": 92,
    "satsSDEF": 108
  },
  {
    "name": "gible",
    "id": 443,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/443.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    "typ1": "dragon",
    "typ2": "ground",
    "moves": [
      "sand-veil",
      "rough-skin"
    ],
    "statsHP": 58,
    "satsATK": 70,
    "satsDEF": 45,
    "satsINIT": 42,
    "satsSATK": 40,
    "satsSDEF": 45
  },
  {
    "name": "gabite",
    "id": 444,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/444.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    "typ1": "dragon",
    "typ2": "ground",
    "moves": [
      "sand-veil",
      "rough-skin"
    ],
    "statsHP": 68,
    "satsATK": 90,
    "satsDEF": 65,
    "satsINIT": 82,
    "satsSATK": 50,
    "satsSDEF": 55
  },
  {
    "name": "garchomp",
    "id": 445,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/445.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    "typ1": "dragon",
    "typ2": "ground",
    "moves": [
      "sand-veil",
      "rough-skin"
    ],
    "statsHP": 108,
    "satsATK": 130,
    "satsDEF": 95,
    "satsINIT": 102,
    "satsSATK": 80,
    "satsSDEF": 85
  },
  {
    "name": "munchlax",
    "id": 446,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/446.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "thick-fat",
      "gluttony"
    ],
    "statsHP": 135,
    "satsATK": 85,
    "satsDEF": 40,
    "satsINIT": 5,
    "satsSATK": 40,
    "satsSDEF": 85
  },
  {
    "name": "riolu",
    "id": 447,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/447.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    "typ1": "fighting",
    "moves": [
      "steadfast",
      "inner-focus",
      "prankster"
    ],
    "statsHP": 40,
    "satsATK": 70,
    "satsDEF": 40,
    "satsINIT": 60,
    "satsSATK": 35,
    "satsSDEF": 40
  },
  {
    "name": "lucario",
    "id": 448,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/448.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    "typ1": "fighting",
    "typ2": "steel",
    "moves": [
      "steadfast",
      "inner-focus",
      "justified"
    ],
    "statsHP": 70,
    "satsATK": 110,
    "satsDEF": 70,
    "satsINIT": 90,
    "satsSATK": 115,
    "satsSDEF": 70
  },
  {
    "name": "hippopotas",
    "id": 449,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/449.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    "typ1": "ground",
    "moves": [
      "sand-stream",
      "sand-force"
    ],
    "statsHP": 68,
    "satsATK": 72,
    "satsDEF": 78,
    "satsINIT": 32,
    "satsSATK": 38,
    "satsSDEF": 42
  },
  {
    "name": "hippowdon",
    "id": 450,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/450.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    "typ1": "ground",
    "moves": [
      "sand-stream",
      "sand-force"
    ],
    "statsHP": 108,
    "satsATK": 112,
    "satsDEF": 118,
    "satsINIT": 47,
    "satsSATK": 68,
    "satsSDEF": 72
  },
  {
    "name": "skorupi",
    "id": 451,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/451.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    "typ1": "poison",
    "typ2": "bug",
    "moves": [
      "battle-armor",
      "sniper",
      "keen-eye"
    ],
    "statsHP": 40,
    "satsATK": 50,
    "satsDEF": 90,
    "satsINIT": 65,
    "satsSATK": 30,
    "satsSDEF": 55
  },
  {
    "name": "drapion",
    "id": 452,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/452.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    "typ1": "poison",
    "typ2": "dark",
    "moves": [
      "battle-armor",
      "sniper",
      "keen-eye"
    ],
    "statsHP": 70,
    "satsATK": 90,
    "satsDEF": 110,
    "satsINIT": 95,
    "satsSATK": 60,
    "satsSDEF": 75
  },
  {
    "name": "croagunk",
    "id": 453,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/453.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    "typ1": "poison",
    "typ2": "fighting",
    "moves": [
      "anticipation",
      "dry-skin",
      "poison-touch"
    ],
    "statsHP": 48,
    "satsATK": 61,
    "satsDEF": 40,
    "satsINIT": 50,
    "satsSATK": 61,
    "satsSDEF": 40
  },
  {
    "name": "toxicroak",
    "id": 454,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/454.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    "typ1": "poison",
    "typ2": "fighting",
    "moves": [
      "anticipation",
      "dry-skin",
      "poison-touch"
    ],
    "statsHP": 83,
    "satsATK": 106,
    "satsDEF": 65,
    "satsINIT": 85,
    "satsSATK": 86,
    "satsSDEF": 65
  },
  {
    "name": "carnivine",
    "id": 455,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/455.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    "typ1": "grass",
    "moves": [
      "levitate"
    ],
    "statsHP": 74,
    "satsATK": 100,
    "satsDEF": 72,
    "satsINIT": 46,
    "satsSATK": 90,
    "satsSDEF": 72
  },
  {
    "name": "finneon",
    "id": 456,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/456.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "storm-drain",
      "water-veil"
    ],
    "statsHP": 49,
    "satsATK": 49,
    "satsDEF": 56,
    "satsINIT": 66,
    "satsSATK": 49,
    "satsSDEF": 61
  },
  {
    "name": "lumineon",
    "id": 457,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/457.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "storm-drain",
      "water-veil"
    ],
    "statsHP": 69,
    "satsATK": 69,
    "satsDEF": 76,
    "satsINIT": 91,
    "satsSATK": 69,
    "satsSDEF": 86
  },
  {
    "name": "mantyke",
    "id": 458,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/458.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "swift-swim",
      "water-absorb",
      "water-veil"
    ],
    "statsHP": 45,
    "satsATK": 20,
    "satsDEF": 50,
    "satsINIT": 50,
    "satsSATK": 60,
    "satsSDEF": 120
  },
  {
    "name": "snover",
    "id": 459,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/459.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    "typ1": "grass",
    "typ2": "ice",
    "moves": [
      "snow-warning",
      "soundproof"
    ],
    "statsHP": 60,
    "satsATK": 62,
    "satsDEF": 50,
    "satsINIT": 40,
    "satsSATK": 62,
    "satsSDEF": 60
  },
  {
    "name": "abomasnow",
    "id": 460,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/460.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    "typ1": "grass",
    "typ2": "ice",
    "moves": [
      "snow-warning",
      "soundproof"
    ],
    "statsHP": 90,
    "satsATK": 92,
    "satsDEF": 75,
    "satsINIT": 60,
    "satsSATK": 92,
    "satsSDEF": 85
  },
  {
    "name": "weavile",
    "id": 461,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/461.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    "typ1": "dark",
    "typ2": "ice",
    "moves": [
      "pressure",
      "pickpocket"
    ],
    "statsHP": 70,
    "satsATK": 120,
    "satsDEF": 65,
    "satsINIT": 125,
    "satsSATK": 45,
    "satsSDEF": 85
  },
  {
    "name": "magnezone",
    "id": 462,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/462.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    "typ1": "electric",
    "typ2": "steel",
    "moves": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ],
    "statsHP": 70,
    "satsATK": 70,
    "satsDEF": 115,
    "satsINIT": 60,
    "satsSATK": 130,
    "satsSDEF": 90
  },
  {
    "name": "lickilicky",
    "id": 463,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/463.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    "typ1": "normal",
    "moves": [
      "own-tempo",
      "oblivious",
      "cloud-nine"
    ],
    "statsHP": 110,
    "satsATK": 85,
    "satsDEF": 95,
    "satsINIT": 50,
    "satsSATK": 80,
    "satsSDEF": 95
  },
  {
    "name": "rhyperior",
    "id": 464,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/464.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    "typ1": "ground",
    "typ2": "rock",
    "moves": [
      "lightning-rod",
      "solid-rock",
      "reckless"
    ],
    "statsHP": 115,
    "satsATK": 140,
    "satsDEF": 130,
    "satsINIT": 40,
    "satsSATK": 55,
    "satsSDEF": 55
  },
  {
    "name": "tangrowth",
    "id": 465,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/465.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "leaf-guard",
      "regenerator"
    ],
    "statsHP": 100,
    "satsATK": 100,
    "satsDEF": 125,
    "satsINIT": 50,
    "satsSATK": 110,
    "satsSDEF": 50
  },
  {
    "name": "electivire",
    "id": 466,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/466.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    "typ1": "electric",
    "moves": [
      "motor-drive",
      "vital-spirit"
    ],
    "statsHP": 75,
    "satsATK": 123,
    "satsDEF": 67,
    "satsINIT": 95,
    "satsSATK": 95,
    "satsSDEF": 85
  },
  {
    "name": "magmortar",
    "id": 467,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/467.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    "typ1": "fire",
    "moves": [
      "flame-body",
      "vital-spirit"
    ],
    "statsHP": 75,
    "satsATK": 95,
    "satsDEF": 67,
    "satsINIT": 83,
    "satsSATK": 125,
    "satsSDEF": 95
  },
  {
    "name": "togekiss",
    "id": 468,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/468.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    "typ1": "fairy",
    "typ2": "flying",
    "moves": [
      "hustle",
      "serene-grace",
      "super-luck"
    ],
    "statsHP": 85,
    "satsATK": 50,
    "satsDEF": 95,
    "satsINIT": 80,
    "satsSATK": 120,
    "satsSDEF": 115
  },
  {
    "name": "yanmega",
    "id": 469,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/469.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "speed-boost",
      "tinted-lens",
      "frisk"
    ],
    "statsHP": 86,
    "satsATK": 76,
    "satsDEF": 86,
    "satsINIT": 95,
    "satsSATK": 116,
    "satsSDEF": 56
  },
  {
    "name": "leafeon",
    "id": 470,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/470.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "chlorophyll"
    ],
    "statsHP": 65,
    "satsATK": 110,
    "satsDEF": 130,
    "satsINIT": 95,
    "satsSATK": 60,
    "satsSDEF": 65
  },
  {
    "name": "glaceon",
    "id": 471,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/471.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    "typ1": "ice",
    "moves": [
      "snow-cloak",
      "ice-body"
    ],
    "statsHP": 65,
    "satsATK": 60,
    "satsDEF": 110,
    "satsINIT": 65,
    "satsSATK": 130,
    "satsSDEF": 95
  },
  {
    "name": "gliscor",
    "id": 472,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/472.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    "typ1": "ground",
    "typ2": "flying",
    "moves": [
      "hyper-cutter",
      "sand-veil",
      "poison-heal"
    ],
    "statsHP": 75,
    "satsATK": 95,
    "satsDEF": 125,
    "satsINIT": 95,
    "satsSATK": 45,
    "satsSDEF": 75
  },
  {
    "name": "mamoswine",
    "id": 473,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/473.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    "typ1": "ice",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ],
    "statsHP": 110,
    "satsATK": 130,
    "satsDEF": 80,
    "satsINIT": 80,
    "satsSATK": 70,
    "satsSDEF": 60
  },
  {
    "name": "porygon-z",
    "id": 474,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/474.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    "typ1": "normal",
    "moves": [
      "adaptability",
      "download",
      "analytic"
    ],
    "statsHP": 85,
    "satsATK": 80,
    "satsDEF": 70,
    "satsINIT": 90,
    "satsSATK": 135,
    "satsSDEF": 75
  },
  {
    "name": "gallade",
    "id": 475,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/475.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    "typ1": "psychic",
    "typ2": "fighting",
    "moves": [
      "steadfast",
      "sharpness",
      "justified"
    ],
    "statsHP": 68,
    "satsATK": 125,
    "satsDEF": 65,
    "satsINIT": 80,
    "satsSATK": 65,
    "satsSDEF": 115
  },
  {
    "name": "probopass",
    "id": 476,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/476.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    "typ1": "rock",
    "typ2": "steel",
    "moves": [
      "sturdy",
      "magnet-pull",
      "sand-force"
    ],
    "statsHP": 60,
    "satsATK": 55,
    "satsDEF": 145,
    "satsINIT": 40,
    "satsSATK": 75,
    "satsSDEF": 150
  },
  {
    "name": "dusknoir",
    "id": 477,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/477.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    "typ1": "ghost",
    "moves": [
      "pressure",
      "frisk"
    ],
    "statsHP": 45,
    "satsATK": 100,
    "satsDEF": 135,
    "satsINIT": 45,
    "satsSATK": 65,
    "satsSDEF": 135
  },
  {
    "name": "froslass",
    "id": 478,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/478.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
    "typ1": "ice",
    "typ2": "ghost",
    "moves": [
      "snow-cloak",
      "cursed-body"
    ],
    "statsHP": 70,
    "satsATK": 80,
    "satsDEF": 70,
    "satsINIT": 110,
    "satsSATK": 80,
    "satsSDEF": 70
  },
  {
    "name": "rotom",
    "id": 479,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/479.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    "typ1": "electric",
    "typ2": "ghost",
    "moves": [
      "levitate"
    ],
    "statsHP": 50,
    "satsATK": 50,
    "satsDEF": 77,
    "satsINIT": 91,
    "satsSATK": 95,
    "satsSDEF": 77
  },
  {
    "name": "uxie",
    "id": 480,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/480.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 75,
    "satsATK": 75,
    "satsDEF": 130,
    "satsINIT": 95,
    "satsSATK": 75,
    "satsSDEF": 130
  },
  {
    "name": "mesprit",
    "id": 481,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/481.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 80,
    "satsATK": 105,
    "satsDEF": 105,
    "satsINIT": 80,
    "satsSATK": 105,
    "satsSDEF": 105
  },
  {
    "name": "azelf",
    "id": 482,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/482.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 75,
    "satsATK": 125,
    "satsDEF": 70,
    "satsINIT": 115,
    "satsSATK": 125,
    "satsSDEF": 70
  },
  {
    "name": "dialga",
    "id": 483,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/483.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    "typ1": "steel",
    "typ2": "dragon",
    "moves": [
      "pressure",
      "telepathy"
    ],
    "statsHP": 100,
    "satsATK": 120,
    "satsDEF": 120,
    "satsINIT": 90,
    "satsSATK": 150,
    "satsSDEF": 100
  },
  {
    "name": "palkia",
    "id": 484,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/484.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    "typ1": "water",
    "typ2": "dragon",
    "moves": [
      "pressure",
      "telepathy"
    ],
    "statsHP": 90,
    "satsATK": 120,
    "satsDEF": 100,
    "satsINIT": 100,
    "satsSATK": 150,
    "satsSDEF": 120
  },
  {
    "name": "heatran",
    "id": 485,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/485.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    "typ1": "fire",
    "typ2": "steel",
    "moves": [
      "flash-fire",
      "flame-body"
    ],
    "statsHP": 91,
    "satsATK": 90,
    "satsDEF": 106,
    "satsINIT": 77,
    "satsSATK": 130,
    "satsSDEF": 106
  },
  {
    "name": "regigigas",
    "id": 486,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/486.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    "typ1": "normal",
    "moves": [
      "slow-start"
    ],
    "statsHP": 110,
    "satsATK": 160,
    "satsDEF": 110,
    "satsINIT": 100,
    "satsSATK": 80,
    "satsSDEF": 110
  },
  {
    "name": "giratina-altered",
    "id": 487,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/487.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    "typ1": "ghost",
    "typ2": "dragon",
    "moves": [
      "pressure",
      "telepathy"
    ],
    "statsHP": 150,
    "satsATK": 100,
    "satsDEF": 120,
    "satsINIT": 90,
    "satsSATK": 100,
    "satsSDEF": 120
  },
  {
    "name": "cresselia",
    "id": 488,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/488.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 120,
    "satsATK": 70,
    "satsDEF": 110,
    "satsINIT": 85,
    "satsSATK": 75,
    "satsSDEF": 120
  },
  {
    "name": "phione",
    "id": 489,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/489.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    "typ1": "water",
    "moves": [
      "hydration"
    ],
    "statsHP": 80,
    "satsATK": 80,
    "satsDEF": 80,
    "satsINIT": 80,
    "satsSATK": 80,
    "satsSDEF": 80
  },
  {
    "name": "manaphy",
    "id": 490,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/490.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    "typ1": "water",
    "moves": [
      "hydration"
    ],
    "statsHP": 100,
    "satsATK": 100,
    "satsDEF": 100,
    "satsINIT": 100,
    "satsSATK": 100,
    "satsSDEF": 100
  },
  {
    "name": "darkrai",
    "id": 491,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/491.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    "typ1": "dark",
    "moves": [
      "bad-dreams"
    ],
    "statsHP": 70,
    "satsATK": 90,
    "satsDEF": 90,
    "satsINIT": 125,
    "satsSATK": 135,
    "satsSDEF": 90
  },
  {
    "name": "shaymin-land",
    "id": 492,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/492.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    "typ1": "grass",
    "moves": [
      "natural-cure"
    ],
    "statsHP": 100,
    "satsATK": 100,
    "satsDEF": 100,
    "satsINIT": 100,
    "satsSATK": 100,
    "satsSDEF": 100
  },
  {
    "name": "arceus",
    "id": 493,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/493.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    "typ1": "normal",
    "moves": [
      "multitype"
    ],
    "statsHP": 120,
    "satsATK": 120,
    "satsDEF": 120,
    "satsINIT": 120,
    "satsSATK": 120,
    "satsSDEF": 120
  },
  {
    "name": "victini",
    "id": 494,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/494.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
    "typ1": "psychic",
    "typ2": "fire",
    "moves": [
      "victory-star"
    ],
    "statsHP": 100,
    "satsATK": 100,
    "satsDEF": 100,
    "satsINIT": 100,
    "satsSATK": 100,
    "satsSDEF": 100
  },
  {
    "name": "snivy",
    "id": 495,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/495.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "contrary"
    ],
    "statsHP": 45,
    "satsATK": 45,
    "satsDEF": 55,
    "satsINIT": 63,
    "satsSATK": 45,
    "satsSDEF": 55
  },
  {
    "name": "servine",
    "id": 496,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/496.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "contrary"
    ],
    "statsHP": 60,
    "satsATK": 60,
    "satsDEF": 75,
    "satsINIT": 83,
    "satsSATK": 60,
    "satsSDEF": 75
  },
  {
    "name": "serperior",
    "id": 497,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/497.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "contrary"
    ],
    "statsHP": 75,
    "satsATK": 75,
    "satsDEF": 95,
    "satsINIT": 113,
    "satsSATK": 75,
    "satsSDEF": 95
  },
  {
    "name": "tepig",
    "id": 498,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/498.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "thick-fat"
    ],
    "statsHP": 65,
    "satsATK": 63,
    "satsDEF": 45,
    "satsINIT": 45,
    "satsSATK": 45,
    "satsSDEF": 45
  },
  {
    "name": "pignite",
    "id": 499,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/499.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "thick-fat"
    ],
    "statsHP": 90,
    "satsATK": 93,
    "satsDEF": 55,
    "satsINIT": 55,
    "satsSATK": 70,
    "satsSDEF": 55
  },
  {
    "name": "emboar",
    "id": 500,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/500.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "reckless"
    ],
    "statsHP": 110,
    "satsATK": 123,
    "satsDEF": 65,
    "satsINIT": 65,
    "satsSATK": 100,
    "satsSDEF": 65
  },
  {
    "name": "oshawott",
    "id": 501,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/501.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "shell-armor"
    ],
    "statsHP": 55,
    "satsATK": 55,
    "satsDEF": 45,
    "satsINIT": 45,
    "satsSATK": 63,
    "satsSDEF": 45
  },
  {
    "name": "dewott",
    "id": 502,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/502.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "shell-armor"
    ],
    "statsHP": 75,
    "satsATK": 75,
    "satsDEF": 60,
    "satsINIT": 60,
    "satsSATK": 83,
    "satsSDEF": 60
  },
  {
    "name": "samurott",
    "id": 503,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/503.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "shell-armor"
    ],
    "statsHP": 95,
    "satsATK": 100,
    "satsDEF": 85,
    "satsINIT": 70,
    "satsSATK": 108,
    "satsSDEF": 70
  },
  {
    "name": "patrat",
    "id": 504,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/504.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "keen-eye",
      "analytic"
    ],
    "statsHP": 45,
    "satsATK": 55,
    "satsDEF": 39,
    "satsINIT": 42,
    "satsSATK": 35,
    "satsSDEF": 39
  },
  {
    "name": "watchog",
    "id": 505,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/505.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
    "typ1": "normal",
    "moves": [
      "illuminate",
      "keen-eye",
      "analytic"
    ],
    "statsHP": 60,
    "satsATK": 85,
    "satsDEF": 69,
    "satsINIT": 77,
    "satsSATK": 60,
    "satsSDEF": 69
  },
  {
    "name": "lillipup",
    "id": 506,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/506.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
    "typ1": "normal",
    "moves": [
      "vital-spirit",
      "pickup",
      "run-away"
    ],
    "statsHP": 45,
    "satsATK": 60,
    "satsDEF": 45,
    "satsINIT": 55,
    "satsSATK": 25,
    "satsSDEF": 45
  },
  {
    "name": "herdier",
    "id": 507,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/507.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
    "typ1": "normal",
    "moves": [
      "intimidate",
      "sand-rush",
      "scrappy"
    ],
    "statsHP": 65,
    "satsATK": 80,
    "satsDEF": 65,
    "satsINIT": 60,
    "satsSATK": 35,
    "satsSDEF": 65
  },
  {
    "name": "stoutland",
    "id": 508,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/508.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
    "typ1": "normal",
    "moves": [
      "intimidate",
      "sand-rush",
      "scrappy"
    ],
    "statsHP": 85,
    "satsATK": 110,
    "satsDEF": 90,
    "satsINIT": 80,
    "satsSATK": 45,
    "satsSDEF": 90
  },
  {
    "name": "purrloin",
    "id": 509,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/509.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
    "typ1": "dark",
    "moves": [
      "limber",
      "unburden",
      "prankster"
    ],
    "statsHP": 41,
    "satsATK": 50,
    "satsDEF": 37,
    "satsINIT": 66,
    "satsSATK": 50,
    "satsSDEF": 37
  },
  {
    "name": "liepard",
    "id": 510,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/510.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
    "typ1": "dark",
    "moves": [
      "limber",
      "unburden",
      "prankster"
    ],
    "statsHP": 64,
    "satsATK": 88,
    "satsDEF": 50,
    "satsINIT": 106,
    "satsSATK": 88,
    "satsSDEF": 50
  },
  {
    "name": "pansage",
    "id": 511,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/511.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
    "typ1": "grass",
    "moves": [
      "gluttony",
      "overgrow"
    ],
    "statsHP": 50,
    "satsATK": 53,
    "satsDEF": 48,
    "satsINIT": 64,
    "satsSATK": 53,
    "satsSDEF": 48
  },
  {
    "name": "simisage",
    "id": 512,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/512.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
    "typ1": "grass",
    "moves": [
      "gluttony",
      "overgrow"
    ],
    "statsHP": 75,
    "satsATK": 98,
    "satsDEF": 63,
    "satsINIT": 101,
    "satsSATK": 98,
    "satsSDEF": 63
  },
  {
    "name": "pansear",
    "id": 513,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/513.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
    "typ1": "fire",
    "moves": [
      "gluttony",
      "blaze"
    ],
    "statsHP": 50,
    "satsATK": 53,
    "satsDEF": 48,
    "satsINIT": 64,
    "satsSATK": 53,
    "satsSDEF": 48
  },
  {
    "name": "simisear",
    "id": 514,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/514.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
    "typ1": "fire",
    "moves": [
      "gluttony",
      "blaze"
    ],
    "statsHP": 75,
    "satsATK": 98,
    "satsDEF": 63,
    "satsINIT": 101,
    "satsSATK": 98,
    "satsSDEF": 63
  },
  {
    "name": "panpour",
    "id": 515,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/515.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
    "typ1": "water",
    "moves": [
      "gluttony",
      "torrent"
    ],
    "statsHP": 50,
    "satsATK": 53,
    "satsDEF": 48,
    "satsINIT": 64,
    "satsSATK": 53,
    "satsSDEF": 48
  },
  {
    "name": "simipour",
    "id": 516,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/516.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
    "typ1": "water",
    "moves": [
      "gluttony",
      "torrent"
    ],
    "statsHP": 75,
    "satsATK": 98,
    "satsDEF": 63,
    "satsINIT": 101,
    "satsSATK": 98,
    "satsSDEF": 63
  },
  {
    "name": "munna",
    "id": 517,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/517.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
    "typ1": "psychic",
    "moves": [
      "forewarn",
      "synchronize",
      "telepathy"
    ],
    "statsHP": 76,
    "satsATK": 25,
    "satsDEF": 45,
    "satsINIT": 24,
    "satsSATK": 67,
    "satsSDEF": 55
  },
  {
    "name": "musharna",
    "id": 518,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/518.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
    "typ1": "psychic",
    "moves": [
      "forewarn",
      "synchronize",
      "telepathy"
    ],
    "statsHP": 116,
    "satsATK": 55,
    "satsDEF": 85,
    "satsINIT": 29,
    "satsSATK": 107,
    "satsSDEF": 95
  },
  {
    "name": "pidove",
    "id": 519,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/519.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ],
    "statsHP": 50,
    "satsATK": 55,
    "satsDEF": 50,
    "satsINIT": 43,
    "satsSATK": 36,
    "satsSDEF": 30
  },
  {
    "name": "tranquill",
    "id": 520,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/520.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ],
    "statsHP": 62,
    "satsATK": 77,
    "satsDEF": 62,
    "satsINIT": 65,
    "satsSATK": 50,
    "satsSDEF": 42
  },
  {
    "name": "unfezant",
    "id": 521,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/521.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ],
    "statsHP": 80,
    "satsATK": 115,
    "satsDEF": 80,
    "satsINIT": 93,
    "satsSATK": 65,
    "satsSDEF": 55
  },
  {
    "name": "blitzle",
    "id": 522,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/522.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
    "typ1": "electric",
    "moves": [
      "lightning-rod",
      "motor-drive",
      "sap-sipper"
    ],
    "statsHP": 45,
    "satsATK": 60,
    "satsDEF": 32,
    "satsINIT": 76,
    "satsSATK": 50,
    "satsSDEF": 32
  },
  {
    "name": "zebstrika",
    "id": 523,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/523.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
    "typ1": "electric",
    "moves": [
      "lightning-rod",
      "motor-drive",
      "sap-sipper"
    ],
    "statsHP": 75,
    "satsATK": 100,
    "satsDEF": 63,
    "satsINIT": 116,
    "satsSATK": 80,
    "satsSDEF": 63
  },
  {
    "name": "roggenrola",
    "id": 524,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/524.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "weak-armor",
      "sand-force"
    ],
    "statsHP": 55,
    "satsATK": 75,
    "satsDEF": 85,
    "satsINIT": 15,
    "satsSATK": 25,
    "satsSDEF": 25
  },
  {
    "name": "boldore",
    "id": 525,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/525.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "weak-armor",
      "sand-force"
    ],
    "statsHP": 70,
    "satsATK": 105,
    "satsDEF": 105,
    "satsINIT": 20,
    "satsSATK": 50,
    "satsSDEF": 40
  },
  {
    "name": "gigalith",
    "id": 526,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/526.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "sand-stream",
      "sand-force"
    ],
    "statsHP": 85,
    "satsATK": 135,
    "satsDEF": 130,
    "satsINIT": 25,
    "satsSATK": 60,
    "satsSDEF": 80
  },
  {
    "name": "woobat",
    "id": 527,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/527.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "unaware",
      "klutz",
      "simple"
    ],
    "statsHP": 65,
    "satsATK": 45,
    "satsDEF": 43,
    "satsINIT": 72,
    "satsSATK": 55,
    "satsSDEF": 43
  },
  {
    "name": "swoobat",
    "id": 528,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/528.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "unaware",
      "klutz",
      "simple"
    ],
    "statsHP": 67,
    "satsATK": 57,
    "satsDEF": 55,
    "satsINIT": 114,
    "satsSATK": 77,
    "satsSDEF": 55
  },
  {
    "name": "drilbur",
    "id": 529,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/529.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
    "typ1": "ground",
    "moves": [
      "sand-rush",
      "sand-force",
      "mold-breaker"
    ],
    "statsHP": 60,
    "satsATK": 85,
    "satsDEF": 40,
    "satsINIT": 68,
    "satsSATK": 30,
    "satsSDEF": 45
  },
  {
    "name": "excadrill",
    "id": 530,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/530.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
    "typ1": "ground",
    "typ2": "steel",
    "moves": [
      "sand-rush",
      "sand-force",
      "mold-breaker"
    ],
    "statsHP": 110,
    "satsATK": 135,
    "satsDEF": 60,
    "satsINIT": 88,
    "satsSATK": 50,
    "satsSDEF": 65
  },
  {
    "name": "audino",
    "id": 531,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/531.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
    "typ1": "normal",
    "moves": [
      "healer",
      "regenerator",
      "klutz"
    ],
    "statsHP": 103,
    "satsATK": 60,
    "satsDEF": 86,
    "satsINIT": 50,
    "satsSATK": 60,
    "satsSDEF": 86
  },
  {
    "name": "timburr",
    "id": 532,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/532.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "sheer-force",
      "iron-fist"
    ],
    "statsHP": 75,
    "satsATK": 80,
    "satsDEF": 55,
    "satsINIT": 35,
    "satsSATK": 25,
    "satsSDEF": 35
  },
  {
    "name": "gurdurr",
    "id": 533,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/533.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "sheer-force",
      "iron-fist"
    ],
    "statsHP": 85,
    "satsATK": 105,
    "satsDEF": 85,
    "satsINIT": 40,
    "satsSATK": 40,
    "satsSDEF": 50
  },
  {
    "name": "conkeldurr",
    "id": 534,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/534.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "sheer-force",
      "iron-fist"
    ],
    "statsHP": 105,
    "satsATK": 140,
    "satsDEF": 95,
    "satsINIT": 45,
    "satsSATK": 55,
    "satsSDEF": 65
  },
  {
    "name": "tympole",
    "id": 535,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/535.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "hydration",
      "water-absorb"
    ],
    "statsHP": 50,
    "satsATK": 50,
    "satsDEF": 40,
    "satsINIT": 64,
    "satsSATK": 50,
    "satsSDEF": 40
  },
  {
    "name": "palpitoad",
    "id": 536,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/536.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "swift-swim",
      "hydration",
      "water-absorb"
    ],
    "statsHP": 75,
    "satsATK": 65,
    "satsDEF": 55,
    "satsINIT": 69,
    "satsSATK": 65,
    "satsSDEF": 55
  },
  {
    "name": "seismitoad",
    "id": 537,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/537.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "swift-swim",
      "poison-touch",
      "water-absorb"
    ],
    "statsHP": 105,
    "satsATK": 95,
    "satsDEF": 75,
    "satsINIT": 74,
    "satsSATK": 85,
    "satsSDEF": 75
  },
  {
    "name": "throh",
    "id": 538,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/538.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "inner-focus",
      "mold-breaker"
    ],
    "statsHP": 120,
    "satsATK": 100,
    "satsDEF": 85,
    "satsINIT": 45,
    "satsSATK": 30,
    "satsSDEF": 85
  },
  {
    "name": "sawk",
    "id": 539,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/539.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
    "typ1": "fighting",
    "moves": [
      "sturdy",
      "inner-focus",
      "mold-breaker"
    ],
    "statsHP": 75,
    "satsATK": 125,
    "satsDEF": 75,
    "satsINIT": 85,
    "satsSATK": 30,
    "satsSDEF": 75
  },
  {
    "name": "sewaddle",
    "id": 540,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/540.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "swarm",
      "chlorophyll",
      "overcoat"
    ],
    "statsHP": 45,
    "satsATK": 53,
    "satsDEF": 70,
    "satsINIT": 42,
    "satsSATK": 40,
    "satsSDEF": 60
  },
  {
    "name": "swadloon",
    "id": 541,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/541.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "leaf-guard",
      "chlorophyll",
      "overcoat"
    ],
    "statsHP": 55,
    "satsATK": 63,
    "satsDEF": 90,
    "satsINIT": 42,
    "satsSATK": 50,
    "satsSDEF": 80
  },
  {
    "name": "leavanny",
    "id": 542,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/542.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "swarm",
      "chlorophyll",
      "overcoat"
    ],
    "statsHP": 75,
    "satsATK": 103,
    "satsDEF": 80,
    "satsINIT": 92,
    "satsSATK": 70,
    "satsSDEF": 80
  },
  {
    "name": "venipede",
    "id": 543,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/543.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "poison-point",
      "swarm",
      "speed-boost"
    ],
    "statsHP": 30,
    "satsATK": 45,
    "satsDEF": 59,
    "satsINIT": 57,
    "satsSATK": 30,
    "satsSDEF": 39
  },
  {
    "name": "whirlipede",
    "id": 544,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/544.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "poison-point",
      "swarm",
      "speed-boost"
    ],
    "statsHP": 40,
    "satsATK": 55,
    "satsDEF": 99,
    "satsINIT": 47,
    "satsSATK": 40,
    "satsSDEF": 79
  },
  {
    "name": "scolipede",
    "id": 545,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/545.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "poison-point",
      "swarm",
      "speed-boost"
    ],
    "statsHP": 60,
    "satsATK": 100,
    "satsDEF": 89,
    "satsINIT": 112,
    "satsSATK": 55,
    "satsSDEF": 69
  },
  {
    "name": "cottonee",
    "id": 546,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/546.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
    "typ1": "grass",
    "typ2": "fairy",
    "moves": [
      "prankster",
      "infiltrator",
      "chlorophyll"
    ],
    "statsHP": 40,
    "satsATK": 27,
    "satsDEF": 60,
    "satsINIT": 66,
    "satsSATK": 37,
    "satsSDEF": 50
  },
  {
    "name": "whimsicott",
    "id": 547,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/547.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
    "typ1": "grass",
    "typ2": "fairy",
    "moves": [
      "prankster",
      "infiltrator",
      "chlorophyll"
    ],
    "statsHP": 60,
    "satsATK": 67,
    "satsDEF": 85,
    "satsINIT": 116,
    "satsSATK": 77,
    "satsSDEF": 75
  },
  {
    "name": "petilil",
    "id": 548,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/548.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "own-tempo",
      "leaf-guard"
    ],
    "statsHP": 45,
    "satsATK": 35,
    "satsDEF": 50,
    "satsINIT": 30,
    "satsSATK": 70,
    "satsSDEF": 50
  },
  {
    "name": "lilligant",
    "id": 549,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/549.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "own-tempo",
      "leaf-guard"
    ],
    "statsHP": 70,
    "satsATK": 60,
    "satsDEF": 75,
    "satsINIT": 90,
    "satsSATK": 110,
    "satsSDEF": 75
  },
  {
    "name": "basculin-red-striped",
    "id": 550,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/550.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
    "typ1": "water",
    "moves": [
      "reckless",
      "adaptability",
      "mold-breaker"
    ],
    "statsHP": 70,
    "satsATK": 92,
    "satsDEF": 65,
    "satsINIT": 98,
    "satsSATK": 80,
    "satsSDEF": 55
  },
  {
    "name": "sandile",
    "id": 551,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/551.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
    "typ1": "ground",
    "typ2": "dark",
    "moves": [
      "intimidate",
      "moxie",
      "anger-point"
    ],
    "statsHP": 50,
    "satsATK": 72,
    "satsDEF": 35,
    "satsINIT": 65,
    "satsSATK": 35,
    "satsSDEF": 35
  },
  {
    "name": "krokorok",
    "id": 552,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/552.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
    "typ1": "ground",
    "typ2": "dark",
    "moves": [
      "intimidate",
      "moxie",
      "anger-point"
    ],
    "statsHP": 60,
    "satsATK": 82,
    "satsDEF": 45,
    "satsINIT": 74,
    "satsSATK": 45,
    "satsSDEF": 45
  },
  {
    "name": "krookodile",
    "id": 553,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/553.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
    "typ1": "ground",
    "typ2": "dark",
    "moves": [
      "intimidate",
      "moxie",
      "anger-point"
    ],
    "statsHP": 95,
    "satsATK": 117,
    "satsDEF": 80,
    "satsINIT": 92,
    "satsSATK": 65,
    "satsSDEF": 70
  },
  {
    "name": "darumaka",
    "id": 554,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/554.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
    "typ1": "fire",
    "moves": [
      "hustle",
      "inner-focus"
    ],
    "statsHP": 70,
    "satsATK": 90,
    "satsDEF": 45,
    "satsINIT": 50,
    "satsSATK": 15,
    "satsSDEF": 45
  },
  {
    "name": "darmanitan-standard",
    "id": 555,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/555.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
    "typ1": "fire",
    "moves": [
      "sheer-force",
      "zen-mode"
    ],
    "statsHP": 105,
    "satsATK": 140,
    "satsDEF": 55,
    "satsINIT": 95,
    "satsSATK": 30,
    "satsSDEF": 55
  },
  {
    "name": "maractus",
    "id": 556,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/556.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
    "typ1": "grass",
    "moves": [
      "water-absorb",
      "chlorophyll",
      "storm-drain"
    ],
    "statsHP": 75,
    "satsATK": 86,
    "satsDEF": 67,
    "satsINIT": 60,
    "satsSATK": 106,
    "satsSDEF": 67
  },
  {
    "name": "dwebble",
    "id": 557,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/557.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
    "typ1": "bug",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "shell-armor",
      "weak-armor"
    ],
    "statsHP": 50,
    "satsATK": 65,
    "satsDEF": 85,
    "satsINIT": 55,
    "satsSATK": 35,
    "satsSDEF": 35
  },
  {
    "name": "crustle",
    "id": 558,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/558.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
    "typ1": "bug",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "shell-armor",
      "weak-armor"
    ],
    "statsHP": 70,
    "satsATK": 105,
    "satsDEF": 125,
    "satsINIT": 45,
    "satsSATK": 65,
    "satsSDEF": 75
  },
  {
    "name": "scraggy",
    "id": 559,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/559.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
    "typ1": "dark",
    "typ2": "fighting",
    "moves": [
      "shed-skin",
      "moxie",
      "intimidate"
    ],
    "statsHP": 50,
    "satsATK": 75,
    "satsDEF": 70,
    "satsINIT": 48,
    "satsSATK": 35,
    "satsSDEF": 70
  },
  {
    "name": "scrafty",
    "id": 560,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/560.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
    "typ1": "dark",
    "typ2": "fighting",
    "moves": [
      "shed-skin",
      "moxie",
      "intimidate"
    ],
    "statsHP": 65,
    "satsATK": 90,
    "satsDEF": 115,
    "satsINIT": 58,
    "satsSATK": 45,
    "satsSDEF": 115
  },
  {
    "name": "sigilyph",
    "id": 561,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/561.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "wonder-skin",
      "magic-guard",
      "tinted-lens"
    ],
    "statsHP": 72,
    "satsATK": 58,
    "satsDEF": 80,
    "satsINIT": 97,
    "satsSATK": 103,
    "satsSDEF": 80
  },
  {
    "name": "yamask",
    "id": 562,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/562.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    "typ1": "ghost",
    "moves": [
      "mummy"
    ],
    "statsHP": 38,
    "satsATK": 30,
    "satsDEF": 85,
    "satsINIT": 30,
    "satsSATK": 55,
    "satsSDEF": 65
  },
  {
    "name": "cofagrigus",
    "id": 563,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/563.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    "typ1": "ghost",
    "moves": [
      "mummy"
    ],
    "statsHP": 58,
    "satsATK": 50,
    "satsDEF": 145,
    "satsINIT": 30,
    "satsSATK": 95,
    "satsSDEF": 105
  },
  {
    "name": "tirtouga",
    "id": 564,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/564.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
    "typ1": "water",
    "typ2": "rock",
    "moves": [
      "solid-rock",
      "sturdy",
      "swift-swim"
    ],
    "statsHP": 54,
    "satsATK": 78,
    "satsDEF": 103,
    "satsINIT": 22,
    "satsSATK": 53,
    "satsSDEF": 45
  },
  {
    "name": "carracosta",
    "id": 565,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/565.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
    "typ1": "water",
    "typ2": "rock",
    "moves": [
      "solid-rock",
      "sturdy",
      "swift-swim"
    ],
    "statsHP": 74,
    "satsATK": 108,
    "satsDEF": 133,
    "satsINIT": 32,
    "satsSATK": 83,
    "satsSDEF": 65
  },
  {
    "name": "archen",
    "id": 566,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/566.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
    "typ1": "rock",
    "typ2": "flying",
    "moves": [
      "defeatist"
    ],
    "statsHP": 55,
    "satsATK": 112,
    "satsDEF": 45,
    "satsINIT": 70,
    "satsSATK": 74,
    "satsSDEF": 45
  },
  {
    "name": "archeops",
    "id": 567,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/567.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
    "typ1": "rock",
    "typ2": "flying",
    "moves": [
      "defeatist"
    ],
    "statsHP": 75,
    "satsATK": 140,
    "satsDEF": 65,
    "satsINIT": 110,
    "satsSATK": 112,
    "satsSDEF": 65
  },
  {
    "name": "trubbish",
    "id": 568,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/568.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
    "typ1": "poison",
    "moves": [
      "stench",
      "sticky-hold",
      "aftermath"
    ],
    "statsHP": 50,
    "satsATK": 50,
    "satsDEF": 62,
    "satsINIT": 65,
    "satsSATK": 40,
    "satsSDEF": 62
  },
  {
    "name": "garbodor",
    "id": 569,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/569.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
    "typ1": "poison",
    "moves": [
      "stench",
      "weak-armor",
      "aftermath"
    ],
    "statsHP": 80,
    "satsATK": 95,
    "satsDEF": 82,
    "satsINIT": 75,
    "satsSATK": 60,
    "satsSDEF": 82
  },
  {
    "name": "zorua",
    "id": 570,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/570.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
    "typ1": "dark",
    "moves": [
      "illusion"
    ],
    "statsHP": 40,
    "satsATK": 65,
    "satsDEF": 40,
    "satsINIT": 65,
    "satsSATK": 80,
    "satsSDEF": 40
  },
  {
    "name": "zoroark",
    "id": 571,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/571.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    "typ1": "dark",
    "moves": [
      "illusion"
    ],
    "statsHP": 60,
    "satsATK": 105,
    "satsDEF": 60,
    "satsINIT": 105,
    "satsSATK": 120,
    "satsSDEF": 60
  },
  {
    "name": "minccino",
    "id": 572,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/572.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    "typ1": "normal",
    "moves": [
      "cute-charm",
      "technician",
      "skill-link"
    ],
    "statsHP": 55,
    "satsATK": 50,
    "satsDEF": 40,
    "satsINIT": 75,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "cinccino",
    "id": 573,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/573.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    "typ1": "normal",
    "moves": [
      "cute-charm",
      "technician",
      "skill-link"
    ],
    "statsHP": 75,
    "satsATK": 95,
    "satsDEF": 60,
    "satsINIT": 115,
    "satsSATK": 65,
    "satsSDEF": 60
  },
  {
    "name": "gothita",
    "id": 574,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/574.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
    "typ1": "psychic",
    "moves": [
      "frisk",
      "competitive",
      "shadow-tag"
    ],
    "statsHP": 45,
    "satsATK": 30,
    "satsDEF": 50,
    "satsINIT": 45,
    "satsSATK": 55,
    "satsSDEF": 65
  },
  {
    "name": "gothorita",
    "id": 575,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/575.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
    "typ1": "psychic",
    "moves": [
      "frisk",
      "competitive",
      "shadow-tag"
    ],
    "statsHP": 60,
    "satsATK": 45,
    "satsDEF": 70,
    "satsINIT": 55,
    "satsSATK": 75,
    "satsSDEF": 85
  },
  {
    "name": "gothitelle",
    "id": 576,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/576.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
    "typ1": "psychic",
    "moves": [
      "frisk",
      "competitive",
      "shadow-tag"
    ],
    "statsHP": 70,
    "satsATK": 55,
    "satsDEF": 95,
    "satsINIT": 65,
    "satsSATK": 95,
    "satsSDEF": 110
  },
  {
    "name": "solosis",
    "id": 577,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/577.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
    "typ1": "psychic",
    "moves": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ],
    "statsHP": 45,
    "satsATK": 30,
    "satsDEF": 40,
    "satsINIT": 20,
    "satsSATK": 105,
    "satsSDEF": 50
  },
  {
    "name": "duosion",
    "id": 578,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/578.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
    "typ1": "psychic",
    "moves": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ],
    "statsHP": 65,
    "satsATK": 40,
    "satsDEF": 50,
    "satsINIT": 30,
    "satsSATK": 125,
    "satsSDEF": 60
  },
  {
    "name": "reuniclus",
    "id": 579,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/579.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
    "typ1": "psychic",
    "moves": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ],
    "statsHP": 110,
    "satsATK": 65,
    "satsDEF": 75,
    "satsINIT": 30,
    "satsSATK": 125,
    "satsSDEF": 85
  },
  {
    "name": "ducklett",
    "id": 580,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/580.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "big-pecks",
      "hydration"
    ],
    "statsHP": 62,
    "satsATK": 44,
    "satsDEF": 50,
    "satsINIT": 55,
    "satsSATK": 44,
    "satsSDEF": 50
  },
  {
    "name": "swanna",
    "id": 581,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/581.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "big-pecks",
      "hydration"
    ],
    "statsHP": 75,
    "satsATK": 87,
    "satsDEF": 63,
    "satsINIT": 98,
    "satsSATK": 87,
    "satsSDEF": 63
  },
  {
    "name": "vanillite",
    "id": 582,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/582.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
    "typ1": "ice",
    "moves": [
      "ice-body",
      "snow-cloak",
      "weak-armor"
    ],
    "statsHP": 36,
    "satsATK": 50,
    "satsDEF": 50,
    "satsINIT": 44,
    "satsSATK": 65,
    "satsSDEF": 60
  },
  {
    "name": "vanillish",
    "id": 583,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/583.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
    "typ1": "ice",
    "moves": [
      "ice-body",
      "snow-cloak",
      "weak-armor"
    ],
    "statsHP": 51,
    "satsATK": 65,
    "satsDEF": 65,
    "satsINIT": 59,
    "satsSATK": 80,
    "satsSDEF": 75
  },
  {
    "name": "vanilluxe",
    "id": 584,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/584.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
    "typ1": "ice",
    "moves": [
      "ice-body",
      "snow-warning",
      "weak-armor"
    ],
    "statsHP": 71,
    "satsATK": 95,
    "satsDEF": 85,
    "satsINIT": 79,
    "satsSATK": 110,
    "satsSDEF": 95
  },
  {
    "name": "deerling",
    "id": 585,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/585.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
    "typ1": "normal",
    "typ2": "grass",
    "moves": [
      "chlorophyll",
      "sap-sipper",
      "serene-grace"
    ],
    "statsHP": 60,
    "satsATK": 60,
    "satsDEF": 50,
    "satsINIT": 75,
    "satsSATK": 40,
    "satsSDEF": 50
  },
  {
    "name": "sawsbuck",
    "id": 586,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/586.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
    "typ1": "normal",
    "typ2": "grass",
    "moves": [
      "chlorophyll",
      "sap-sipper",
      "serene-grace"
    ],
    "statsHP": 80,
    "satsATK": 100,
    "satsDEF": 70,
    "satsINIT": 95,
    "satsSATK": 60,
    "satsSDEF": 70
  },
  {
    "name": "emolga",
    "id": 587,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/587.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
    "typ1": "electric",
    "typ2": "flying",
    "moves": [
      "static",
      "motor-drive"
    ],
    "statsHP": 55,
    "satsATK": 75,
    "satsDEF": 60,
    "satsINIT": 103,
    "satsSATK": 75,
    "satsSDEF": 60
  },
  {
    "name": "karrablast",
    "id": 588,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/588.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
    "typ1": "bug",
    "moves": [
      "swarm",
      "shed-skin",
      "no-guard"
    ],
    "statsHP": 50,
    "satsATK": 75,
    "satsDEF": 45,
    "satsINIT": 60,
    "satsSATK": 40,
    "satsSDEF": 45
  },
  {
    "name": "escavalier",
    "id": 589,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/589.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
    "typ1": "bug",
    "typ2": "steel",
    "moves": [
      "swarm",
      "shell-armor",
      "overcoat"
    ],
    "statsHP": 70,
    "satsATK": 135,
    "satsDEF": 105,
    "satsINIT": 20,
    "satsSATK": 60,
    "satsSDEF": 105
  },
  {
    "name": "foongus",
    "id": 590,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/590.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "effect-spore",
      "regenerator"
    ],
    "statsHP": 69,
    "satsATK": 55,
    "satsDEF": 45,
    "satsINIT": 15,
    "satsSATK": 55,
    "satsSDEF": 55
  },
  {
    "name": "amoonguss",
    "id": 591,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/591.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "effect-spore",
      "regenerator"
    ],
    "statsHP": 114,
    "satsATK": 85,
    "satsDEF": 70,
    "satsINIT": 30,
    "satsSATK": 85,
    "satsSDEF": 80
  },
  {
    "name": "frillish",
    "id": 592,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/592.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
    "typ1": "water",
    "typ2": "ghost",
    "moves": [
      "water-absorb",
      "cursed-body",
      "damp"
    ],
    "statsHP": 55,
    "satsATK": 40,
    "satsDEF": 50,
    "satsINIT": 40,
    "satsSATK": 65,
    "satsSDEF": 85
  },
  {
    "name": "jellicent",
    "id": 593,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/593.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
    "typ1": "water",
    "typ2": "ghost",
    "moves": [
      "water-absorb",
      "cursed-body",
      "damp"
    ],
    "statsHP": 100,
    "satsATK": 60,
    "satsDEF": 70,
    "satsINIT": 60,
    "satsSATK": 85,
    "satsSDEF": 105
  },
  {
    "name": "alomomola",
    "id": 594,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/594.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
    "typ1": "water",
    "moves": [
      "healer",
      "hydration",
      "regenerator"
    ],
    "statsHP": 165,
    "satsATK": 75,
    "satsDEF": 80,
    "satsINIT": 65,
    "satsSATK": 40,
    "satsSDEF": 45
  },
  {
    "name": "joltik",
    "id": 595,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/595.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
    "typ1": "bug",
    "typ2": "electric",
    "moves": [
      "compound-eyes",
      "unnerve",
      "swarm"
    ],
    "statsHP": 50,
    "satsATK": 47,
    "satsDEF": 50,
    "satsINIT": 65,
    "satsSATK": 57,
    "satsSDEF": 50
  },
  {
    "name": "galvantula",
    "id": 596,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/596.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
    "typ1": "bug",
    "typ2": "electric",
    "moves": [
      "compound-eyes",
      "unnerve",
      "swarm"
    ],
    "statsHP": 70,
    "satsATK": 77,
    "satsDEF": 60,
    "satsINIT": 108,
    "satsSATK": 97,
    "satsSDEF": 60
  },
  {
    "name": "ferroseed",
    "id": 597,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/597.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
    "typ1": "grass",
    "typ2": "steel",
    "moves": [
      "iron-barbs"
    ],
    "statsHP": 44,
    "satsATK": 50,
    "satsDEF": 91,
    "satsINIT": 10,
    "satsSATK": 24,
    "satsSDEF": 86
  },
  {
    "name": "ferrothorn",
    "id": 598,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/598.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    "typ1": "grass",
    "typ2": "steel",
    "moves": [
      "iron-barbs",
      "anticipation"
    ],
    "statsHP": 74,
    "satsATK": 94,
    "satsDEF": 131,
    "satsINIT": 20,
    "satsSATK": 54,
    "satsSDEF": 116
  },
  {
    "name": "klink",
    "id": 599,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/599.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
    "typ1": "steel",
    "moves": [
      "plus",
      "minus",
      "clear-body"
    ],
    "statsHP": 40,
    "satsATK": 55,
    "satsDEF": 70,
    "satsINIT": 30,
    "satsSATK": 45,
    "satsSDEF": 60
  },
  {
    "name": "klang",
    "id": 600,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/600.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
    "typ1": "steel",
    "moves": [
      "plus",
      "minus",
      "clear-body"
    ],
    "statsHP": 60,
    "satsATK": 80,
    "satsDEF": 95,
    "satsINIT": 50,
    "satsSATK": 70,
    "satsSDEF": 85
  },
  {
    "name": "klinklang",
    "id": 601,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/601.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
    "typ1": "steel",
    "moves": [
      "plus",
      "minus",
      "clear-body"
    ],
    "statsHP": 60,
    "satsATK": 100,
    "satsDEF": 115,
    "satsINIT": 90,
    "satsSATK": 70,
    "satsSDEF": 85
  },
  {
    "name": "tynamo",
    "id": 602,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/602.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
    "typ1": "electric",
    "moves": [
      "levitate"
    ],
    "statsHP": 35,
    "satsATK": 55,
    "satsDEF": 40,
    "satsINIT": 60,
    "satsSATK": 45,
    "satsSDEF": 40
  },
  {
    "name": "eelektrik",
    "id": 603,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/603.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
    "typ1": "electric",
    "moves": [
      "levitate"
    ],
    "statsHP": 65,
    "satsATK": 85,
    "satsDEF": 70,
    "satsINIT": 40,
    "satsSATK": 75,
    "satsSDEF": 70
  },
  {
    "name": "eelektross",
    "id": 604,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/604.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
    "typ1": "electric",
    "moves": [
      "levitate"
    ],
    "statsHP": 85,
    "satsATK": 115,
    "satsDEF": 80,
    "satsINIT": 50,
    "satsSATK": 105,
    "satsSDEF": 80
  },
  {
    "name": "elgyem",
    "id": 605,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/605.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
    "typ1": "psychic",
    "moves": [
      "telepathy",
      "synchronize",
      "analytic"
    ],
    "statsHP": 55,
    "satsATK": 55,
    "satsDEF": 55,
    "satsINIT": 30,
    "satsSATK": 85,
    "satsSDEF": 55
  },
  {
    "name": "beheeyem",
    "id": 606,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/606.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
    "typ1": "psychic",
    "moves": [
      "telepathy",
      "synchronize",
      "analytic"
    ],
    "statsHP": 75,
    "satsATK": 75,
    "satsDEF": 75,
    "satsINIT": 40,
    "satsSATK": 125,
    "satsSDEF": 95
  },
  {
    "name": "litwick",
    "id": 607,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/607.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    "typ1": "ghost",
    "typ2": "fire",
    "moves": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ],
    "statsHP": 50,
    "satsATK": 30,
    "satsDEF": 55,
    "satsINIT": 20,
    "satsSATK": 65,
    "satsSDEF": 55
  },
  {
    "name": "lampent",
    "id": 608,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/608.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
    "typ1": "ghost",
    "typ2": "fire",
    "moves": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ],
    "statsHP": 60,
    "satsATK": 40,
    "satsDEF": 60,
    "satsINIT": 55,
    "satsSATK": 95,
    "satsSDEF": 60
  },
  {
    "name": "chandelure",
    "id": 609,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/609.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    "typ1": "ghost",
    "typ2": "fire",
    "moves": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ],
    "statsHP": 60,
    "satsATK": 55,
    "satsDEF": 90,
    "satsINIT": 80,
    "satsSATK": 145,
    "satsSDEF": 90
  },
  {
    "name": "axew",
    "id": 610,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/610.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    "typ1": "dragon",
    "moves": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ],
    "statsHP": 46,
    "satsATK": 87,
    "satsDEF": 60,
    "satsINIT": 57,
    "satsSATK": 30,
    "satsSDEF": 40
  },
  {
    "name": "fraxure",
    "id": 611,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/611.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
    "typ1": "dragon",
    "moves": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ],
    "statsHP": 66,
    "satsATK": 117,
    "satsDEF": 70,
    "satsINIT": 67,
    "satsSATK": 40,
    "satsSDEF": 50
  },
  {
    "name": "haxorus",
    "id": 612,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/612.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    "typ1": "dragon",
    "moves": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ],
    "statsHP": 76,
    "satsATK": 147,
    "satsDEF": 90,
    "satsINIT": 97,
    "satsSATK": 60,
    "satsSDEF": 70
  },
  {
    "name": "cubchoo",
    "id": 613,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/613.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
    "typ1": "ice",
    "moves": [
      "snow-cloak",
      "slush-rush",
      "rattled"
    ],
    "statsHP": 55,
    "satsATK": 70,
    "satsDEF": 40,
    "satsINIT": 40,
    "satsSATK": 60,
    "satsSDEF": 40
  },
  {
    "name": "beartic",
    "id": 614,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/614.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
    "typ1": "ice",
    "moves": [
      "snow-cloak",
      "slush-rush",
      "swift-swim"
    ],
    "statsHP": 95,
    "satsATK": 130,
    "satsDEF": 80,
    "satsINIT": 50,
    "satsSATK": 70,
    "satsSDEF": 80
  },
  {
    "name": "cryogonal",
    "id": 615,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/615.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
    "typ1": "ice",
    "moves": [
      "levitate"
    ],
    "statsHP": 80,
    "satsATK": 50,
    "satsDEF": 50,
    "satsINIT": 105,
    "satsSATK": 95,
    "satsSDEF": 135
  },
  {
    "name": "shelmet",
    "id": 616,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/616.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
    "typ1": "bug",
    "moves": [
      "hydration",
      "shell-armor",
      "overcoat"
    ],
    "statsHP": 50,
    "satsATK": 40,
    "satsDEF": 85,
    "satsINIT": 25,
    "satsSATK": 40,
    "satsSDEF": 65
  },
  {
    "name": "accelgor",
    "id": 617,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/617.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    "typ1": "bug",
    "moves": [
      "hydration",
      "sticky-hold",
      "unburden"
    ],
    "statsHP": 80,
    "satsATK": 70,
    "satsDEF": 40,
    "satsINIT": 145,
    "satsSATK": 100,
    "satsSDEF": 60
  },
  {
    "name": "stunfisk",
    "id": 618,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/618.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
    "typ1": "ground",
    "typ2": "electric",
    "moves": [
      "static",
      "limber",
      "sand-veil"
    ],
    "statsHP": 109,
    "satsATK": 66,
    "satsDEF": 84,
    "satsINIT": 32,
    "satsSATK": 81,
    "satsSDEF": 99
  },
  {
    "name": "mienfoo",
    "id": 619,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/619.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
    "typ1": "fighting",
    "moves": [
      "inner-focus",
      "regenerator",
      "reckless"
    ],
    "statsHP": 45,
    "satsATK": 85,
    "satsDEF": 50,
    "satsINIT": 65,
    "satsSATK": 55,
    "satsSDEF": 50
  },
  {
    "name": "mienshao",
    "id": 620,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/620.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
    "typ1": "fighting",
    "moves": [
      "inner-focus",
      "regenerator",
      "reckless"
    ],
    "statsHP": 65,
    "satsATK": 125,
    "satsDEF": 60,
    "satsINIT": 105,
    "satsSATK": 95,
    "satsSDEF": 60
  },
  {
    "name": "druddigon",
    "id": 621,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/621.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
    "typ1": "dragon",
    "moves": [
      "rough-skin",
      "sheer-force",
      "mold-breaker"
    ],
    "statsHP": 77,
    "satsATK": 120,
    "satsDEF": 90,
    "satsINIT": 48,
    "satsSATK": 60,
    "satsSDEF": 90
  },
  {
    "name": "golett",
    "id": 622,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/622.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
    "typ1": "ground",
    "typ2": "ghost",
    "moves": [
      "iron-fist",
      "klutz",
      "no-guard"
    ],
    "statsHP": 59,
    "satsATK": 74,
    "satsDEF": 50,
    "satsINIT": 35,
    "satsSATK": 35,
    "satsSDEF": 50
  },
  {
    "name": "golurk",
    "id": 623,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/623.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    "typ1": "ground",
    "typ2": "ghost",
    "moves": [
      "iron-fist",
      "klutz",
      "no-guard"
    ],
    "statsHP": 89,
    "satsATK": 124,
    "satsDEF": 80,
    "satsINIT": 55,
    "satsSATK": 55,
    "satsSDEF": 80
  },
  {
    "name": "pawniard",
    "id": 624,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/624.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
    "typ1": "dark",
    "typ2": "steel",
    "moves": [
      "defiant",
      "inner-focus",
      "pressure"
    ],
    "statsHP": 45,
    "satsATK": 85,
    "satsDEF": 70,
    "satsINIT": 60,
    "satsSATK": 40,
    "satsSDEF": 40
  },
  {
    "name": "bisharp",
    "id": 625,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/625.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
    "typ1": "dark",
    "typ2": "steel",
    "moves": [
      "defiant",
      "inner-focus",
      "pressure"
    ],
    "statsHP": 65,
    "satsATK": 125,
    "satsDEF": 100,
    "satsINIT": 70,
    "satsSATK": 60,
    "satsSDEF": 70
  },
  {
    "name": "bouffalant",
    "id": 626,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/626.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
    "typ1": "normal",
    "moves": [
      "reckless",
      "sap-sipper",
      "soundproof"
    ],
    "statsHP": 95,
    "satsATK": 110,
    "satsDEF": 95,
    "satsINIT": 55,
    "satsSATK": 40,
    "satsSDEF": 95
  },
  {
    "name": "rufflet",
    "id": 627,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/627.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "sheer-force",
      "hustle"
    ],
    "statsHP": 70,
    "satsATK": 83,
    "satsDEF": 50,
    "satsINIT": 60,
    "satsSATK": 37,
    "satsSDEF": 50
  },
  {
    "name": "braviary",
    "id": 628,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/628.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "sheer-force",
      "defiant"
    ],
    "statsHP": 100,
    "satsATK": 123,
    "satsDEF": 75,
    "satsINIT": 80,
    "satsSATK": 57,
    "satsSDEF": 75
  },
  {
    "name": "vullaby",
    "id": 629,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/629.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
    "typ1": "dark",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "overcoat",
      "weak-armor"
    ],
    "statsHP": 70,
    "satsATK": 55,
    "satsDEF": 75,
    "satsINIT": 60,
    "satsSATK": 45,
    "satsSDEF": 65
  },
  {
    "name": "mandibuzz",
    "id": 630,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/630.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
    "typ1": "dark",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "overcoat",
      "weak-armor"
    ],
    "statsHP": 110,
    "satsATK": 65,
    "satsDEF": 105,
    "satsINIT": 80,
    "satsSATK": 55,
    "satsSDEF": 95
  },
  {
    "name": "heatmor",
    "id": 631,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/631.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
    "typ1": "fire",
    "moves": [
      "gluttony",
      "flash-fire",
      "white-smoke"
    ],
    "statsHP": 85,
    "satsATK": 97,
    "satsDEF": 66,
    "satsINIT": 65,
    "satsSATK": 105,
    "satsSDEF": 66
  },
  {
    "name": "durant",
    "id": 632,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/632.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
    "typ1": "bug",
    "typ2": "steel",
    "moves": [
      "swarm",
      "hustle",
      "truant"
    ],
    "statsHP": 58,
    "satsATK": 109,
    "satsDEF": 112,
    "satsINIT": 109,
    "satsSATK": 48,
    "satsSDEF": 48
  },
  {
    "name": "deino",
    "id": 633,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/633.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    "typ1": "dark",
    "typ2": "dragon",
    "moves": [
      "hustle"
    ],
    "statsHP": 52,
    "satsATK": 65,
    "satsDEF": 50,
    "satsINIT": 38,
    "satsSATK": 45,
    "satsSDEF": 50
  },
  {
    "name": "zweilous",
    "id": 634,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/634.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
    "typ1": "dark",
    "typ2": "dragon",
    "moves": [
      "hustle"
    ],
    "statsHP": 72,
    "satsATK": 85,
    "satsDEF": 70,
    "satsINIT": 58,
    "satsSATK": 65,
    "satsSDEF": 70
  },
  {
    "name": "hydreigon",
    "id": 635,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/635.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
    "typ1": "dark",
    "typ2": "dragon",
    "moves": [
      "levitate"
    ],
    "statsHP": 92,
    "satsATK": 105,
    "satsDEF": 90,
    "satsINIT": 98,
    "satsSATK": 125,
    "satsSDEF": 90
  },
  {
    "name": "larvesta",
    "id": 636,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/636.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
    "typ1": "bug",
    "typ2": "fire",
    "moves": [
      "flame-body",
      "swarm"
    ],
    "statsHP": 55,
    "satsATK": 85,
    "satsDEF": 55,
    "satsINIT": 60,
    "satsSATK": 50,
    "satsSDEF": 55
  },
  {
    "name": "volcarona",
    "id": 637,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/637.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    "typ1": "bug",
    "typ2": "fire",
    "moves": [
      "flame-body",
      "swarm"
    ],
    "statsHP": 85,
    "satsATK": 60,
    "satsDEF": 65,
    "satsINIT": 100,
    "satsSATK": 135,
    "satsSDEF": 105
  },
  {
    "name": "cobalion",
    "id": 638,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/638.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
    "typ1": "steel",
    "typ2": "fighting",
    "moves": [
      "justified"
    ],
    "statsHP": 91,
    "satsATK": 90,
    "satsDEF": 129,
    "satsINIT": 108,
    "satsSATK": 90,
    "satsSDEF": 72
  },
  {
    "name": "terrakion",
    "id": 639,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/639.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
    "typ1": "rock",
    "typ2": "fighting",
    "moves": [
      "justified"
    ],
    "statsHP": 91,
    "satsATK": 129,
    "satsDEF": 90,
    "satsINIT": 108,
    "satsSATK": 72,
    "satsSDEF": 90
  },
  {
    "name": "virizion",
    "id": 640,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/640.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
    "typ1": "grass",
    "typ2": "fighting",
    "moves": [
      "justified"
    ],
    "statsHP": 91,
    "satsATK": 90,
    "satsDEF": 72,
    "satsINIT": 108,
    "satsSATK": 90,
    "satsSDEF": 129
  },
  {
    "name": "tornadus-incarnate",
    "id": 641,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/641.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    "typ1": "flying",
    "moves": [
      "prankster",
      "defiant"
    ],
    "statsHP": 79,
    "satsATK": 115,
    "satsDEF": 70,
    "satsINIT": 111,
    "satsSATK": 125,
    "satsSDEF": 80
  },
  {
    "name": "thundurus-incarnate",
    "id": 642,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/642.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
    "typ1": "electric",
    "typ2": "flying",
    "moves": [
      "prankster",
      "defiant"
    ],
    "statsHP": 79,
    "satsATK": 115,
    "satsDEF": 70,
    "satsINIT": 111,
    "satsSATK": 125,
    "satsSDEF": 80
  },
  {
    "name": "reshiram",
    "id": 643,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/643.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    "typ1": "dragon",
    "typ2": "fire",
    "moves": [
      "turboblaze"
    ],
    "statsHP": 100,
    "satsATK": 120,
    "satsDEF": 100,
    "satsINIT": 90,
    "satsSATK": 150,
    "satsSDEF": 120
  },
  {
    "name": "zekrom",
    "id": 644,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/644.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    "typ1": "dragon",
    "typ2": "electric",
    "moves": [
      "teravolt"
    ],
    "statsHP": 100,
    "satsATK": 150,
    "satsDEF": 120,
    "satsINIT": 90,
    "satsSATK": 120,
    "satsSDEF": 100
  },
  {
    "name": "landorus-incarnate",
    "id": 645,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/645.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
    "typ1": "ground",
    "typ2": "flying",
    "moves": [
      "sand-force",
      "sheer-force"
    ],
    "statsHP": 89,
    "satsATK": 125,
    "satsDEF": 90,
    "satsINIT": 101,
    "satsSATK": 115,
    "satsSDEF": 80
  },
  {
    "name": "kyurem",
    "id": 646,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/646.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
    "typ1": "dragon",
    "typ2": "ice",
    "moves": [
      "pressure"
    ],
    "statsHP": 125,
    "satsATK": 130,
    "satsDEF": 90,
    "satsINIT": 95,
    "satsSATK": 130,
    "satsSDEF": 90
  },
  {
    "name": "keldeo-ordinary",
    "id": 647,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/647.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
    "typ1": "water",
    "typ2": "fighting",
    "moves": [
      "justified"
    ],
    "statsHP": 91,
    "satsATK": 72,
    "satsDEF": 90,
    "satsINIT": 108,
    "satsSATK": 129,
    "satsSDEF": 90
  },
  {
    "name": "meloetta-aria",
    "id": 648,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/648.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
    "typ1": "normal",
    "typ2": "psychic",
    "moves": [
      "serene-grace"
    ],
    "statsHP": 100,
    "satsATK": 77,
    "satsDEF": 77,
    "satsINIT": 90,
    "satsSATK": 128,
    "satsSDEF": 128
  },
  {
    "name": "genesect",
    "id": 649,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/649.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
    "typ1": "bug",
    "typ2": "steel",
    "moves": [
      "download"
    ],
    "statsHP": 71,
    "satsATK": 120,
    "satsDEF": 95,
    "satsINIT": 99,
    "satsSATK": 120,
    "satsSDEF": 95
  },
  {
    "name": "chespin",
    "id": 650,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/650.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "bulletproof"
    ],
    "statsHP": 56,
    "satsATK": 61,
    "satsDEF": 65,
    "satsINIT": 38,
    "satsSATK": 48,
    "satsSDEF": 45
  },
  {
    "name": "quilladin",
    "id": 651,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/651.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "bulletproof"
    ],
    "statsHP": 61,
    "satsATK": 78,
    "satsDEF": 95,
    "satsINIT": 57,
    "satsSATK": 56,
    "satsSDEF": 58
  },
  {
    "name": "chesnaught",
    "id": 652,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/652.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
    "typ1": "grass",
    "typ2": "fighting",
    "moves": [
      "overgrow",
      "bulletproof"
    ],
    "statsHP": 88,
    "satsATK": 107,
    "satsDEF": 122,
    "satsINIT": 64,
    "satsSATK": 74,
    "satsSDEF": 75
  },
  {
    "name": "fennekin",
    "id": 653,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/653.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "magician"
    ],
    "statsHP": 40,
    "satsATK": 45,
    "satsDEF": 40,
    "satsINIT": 60,
    "satsSATK": 62,
    "satsSDEF": 60
  },
  {
    "name": "braixen",
    "id": 654,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/654.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "magician"
    ],
    "statsHP": 59,
    "satsATK": 59,
    "satsDEF": 58,
    "satsINIT": 73,
    "satsSATK": 90,
    "satsSDEF": 70
  },
  {
    "name": "delphox",
    "id": 655,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/655.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    "typ1": "fire",
    "typ2": "psychic",
    "moves": [
      "blaze",
      "magician"
    ],
    "statsHP": 75,
    "satsATK": 69,
    "satsDEF": 72,
    "satsINIT": 104,
    "satsSATK": 114,
    "satsSDEF": 100
  },
  {
    "name": "froakie",
    "id": 656,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/656.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "protean"
    ],
    "statsHP": 41,
    "satsATK": 56,
    "satsDEF": 40,
    "satsINIT": 71,
    "satsSATK": 62,
    "satsSDEF": 44
  },
  {
    "name": "frogadier",
    "id": 657,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/657.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "protean"
    ],
    "statsHP": 54,
    "satsATK": 63,
    "satsDEF": 52,
    "satsINIT": 97,
    "satsSATK": 83,
    "satsSDEF": 56
  },
  {
    "name": "greninja",
    "id": 658,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/658.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    "typ1": "water",
    "typ2": "dark",
    "moves": [
      "torrent",
      "protean"
    ],
    "statsHP": 72,
    "satsATK": 95,
    "satsDEF": 67,
    "satsINIT": 122,
    "satsSATK": 103,
    "satsSDEF": 71
  },
  {
    "name": "bunnelby",
    "id": 659,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/659.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "cheek-pouch",
      "huge-power"
    ],
    "statsHP": 38,
    "satsATK": 36,
    "satsDEF": 38,
    "satsINIT": 57,
    "satsSATK": 32,
    "satsSDEF": 36
  },
  {
    "name": "diggersby",
    "id": 660,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/660.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
    "typ1": "normal",
    "typ2": "ground",
    "moves": [
      "pickup",
      "cheek-pouch",
      "huge-power"
    ],
    "statsHP": 85,
    "satsATK": 56,
    "satsDEF": 77,
    "satsINIT": 78,
    "satsSATK": 50,
    "satsSDEF": 77
  },
  {
    "name": "fletchling",
    "id": 661,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/661.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "gale-wings"
    ],
    "statsHP": 45,
    "satsATK": 50,
    "satsDEF": 43,
    "satsINIT": 62,
    "satsSATK": 40,
    "satsSDEF": 38
  },
  {
    "name": "fletchinder",
    "id": 662,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/662.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "flame-body",
      "gale-wings"
    ],
    "statsHP": 62,
    "satsATK": 73,
    "satsDEF": 55,
    "satsINIT": 84,
    "satsSATK": 56,
    "satsSDEF": 52
  },
  {
    "name": "talonflame",
    "id": 663,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/663.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "flame-body",
      "gale-wings"
    ],
    "statsHP": 78,
    "satsATK": 81,
    "satsDEF": 71,
    "satsINIT": 126,
    "satsSATK": 74,
    "satsSDEF": 69
  },
  {
    "name": "scatterbug",
    "id": 664,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/664.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
    "typ1": "bug",
    "moves": [
      "shield-dust",
      "compound-eyes",
      "friend-guard"
    ],
    "statsHP": 38,
    "satsATK": 35,
    "satsDEF": 40,
    "satsINIT": 35,
    "satsSATK": 27,
    "satsSDEF": 25
  },
  {
    "name": "spewpa",
    "id": 665,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/665.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
    "typ1": "bug",
    "moves": [
      "shed-skin",
      "friend-guard"
    ],
    "statsHP": 45,
    "satsATK": 22,
    "satsDEF": 60,
    "satsINIT": 29,
    "satsSATK": 27,
    "satsSDEF": 30
  },
  {
    "name": "vivillon",
    "id": 666,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/666.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "shield-dust",
      "compound-eyes",
      "friend-guard"
    ],
    "statsHP": 80,
    "satsATK": 52,
    "satsDEF": 50,
    "satsINIT": 89,
    "satsSATK": 90,
    "satsSDEF": 50
  },
  {
    "name": "litleo",
    "id": 667,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/667.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
    "typ1": "fire",
    "typ2": "normal",
    "moves": [
      "rivalry",
      "unnerve",
      "moxie"
    ],
    "statsHP": 62,
    "satsATK": 50,
    "satsDEF": 58,
    "satsINIT": 72,
    "satsSATK": 73,
    "satsSDEF": 54
  },
  {
    "name": "pyroar",
    "id": 668,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/668.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
    "typ1": "fire",
    "typ2": "normal",
    "moves": [
      "rivalry",
      "unnerve",
      "moxie"
    ],
    "statsHP": 86,
    "satsATK": 68,
    "satsDEF": 72,
    "satsINIT": 106,
    "satsSATK": 109,
    "satsSDEF": 66
  },
  {
    "name": "flabebe",
    "id": 669,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/669.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
    "typ1": "fairy",
    "moves": [
      "flower-veil",
      "symbiosis"
    ],
    "statsHP": 44,
    "satsATK": 38,
    "satsDEF": 39,
    "satsINIT": 42,
    "satsSATK": 61,
    "satsSDEF": 79
  },
  {
    "name": "floette",
    "id": 670,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/670.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    "typ1": "fairy",
    "moves": [
      "flower-veil",
      "symbiosis"
    ],
    "statsHP": 54,
    "satsATK": 45,
    "satsDEF": 47,
    "satsINIT": 52,
    "satsSATK": 75,
    "satsSDEF": 98
  },
  {
    "name": "florges",
    "id": 671,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/671.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    "typ1": "fairy",
    "moves": [
      "flower-veil",
      "symbiosis"
    ],
    "statsHP": 78,
    "satsATK": 65,
    "satsDEF": 68,
    "satsINIT": 75,
    "satsSATK": 112,
    "satsSDEF": 154
  },
  {
    "name": "skiddo",
    "id": 672,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/672.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
    "typ1": "grass",
    "moves": [
      "sap-sipper",
      "grass-pelt"
    ],
    "statsHP": 66,
    "satsATK": 65,
    "satsDEF": 48,
    "satsINIT": 52,
    "satsSATK": 62,
    "satsSDEF": 57
  },
  {
    "name": "gogoat",
    "id": 673,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/673.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
    "typ1": "grass",
    "moves": [
      "sap-sipper",
      "grass-pelt"
    ],
    "statsHP": 123,
    "satsATK": 100,
    "satsDEF": 62,
    "satsINIT": 68,
    "satsSATK": 97,
    "satsSDEF": 81
  },
  {
    "name": "pancham",
    "id": 674,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/674.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
    "typ1": "fighting",
    "moves": [
      "iron-fist",
      "mold-breaker",
      "scrappy"
    ],
    "statsHP": 67,
    "satsATK": 82,
    "satsDEF": 62,
    "satsINIT": 43,
    "satsSATK": 46,
    "satsSDEF": 48
  },
  {
    "name": "pangoro",
    "id": 675,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/675.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
    "typ1": "fighting",
    "typ2": "dark",
    "moves": [
      "iron-fist",
      "mold-breaker",
      "scrappy"
    ],
    "statsHP": 95,
    "satsATK": 124,
    "satsDEF": 78,
    "satsINIT": 58,
    "satsSATK": 69,
    "satsSDEF": 71
  },
  {
    "name": "furfrou",
    "id": 676,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/676.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
    "typ1": "normal",
    "moves": [
      "fur-coat"
    ],
    "statsHP": 75,
    "satsATK": 80,
    "satsDEF": 60,
    "satsINIT": 102,
    "satsSATK": 65,
    "satsSDEF": 90
  },
  {
    "name": "espurr",
    "id": 677,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/677.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
    "typ1": "psychic",
    "moves": [
      "keen-eye",
      "infiltrator",
      "own-tempo"
    ],
    "statsHP": 62,
    "satsATK": 48,
    "satsDEF": 54,
    "satsINIT": 68,
    "satsSATK": 63,
    "satsSDEF": 60
  },
  {
    "name": "meowstic-male",
    "id": 678,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/678.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
    "typ1": "psychic",
    "moves": [
      "keen-eye",
      "infiltrator",
      "prankster"
    ],
    "statsHP": 74,
    "satsATK": 48,
    "satsDEF": 76,
    "satsINIT": 104,
    "satsSATK": 83,
    "satsSDEF": 81
  },
  {
    "name": "honedge",
    "id": 679,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/679.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
    "typ1": "steel",
    "typ2": "ghost",
    "moves": [
      "no-guard"
    ],
    "statsHP": 45,
    "satsATK": 80,
    "satsDEF": 100,
    "satsINIT": 28,
    "satsSATK": 35,
    "satsSDEF": 37
  },
  {
    "name": "doublade",
    "id": 680,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/680.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
    "typ1": "steel",
    "typ2": "ghost",
    "moves": [
      "no-guard"
    ],
    "statsHP": 59,
    "satsATK": 110,
    "satsDEF": 150,
    "satsINIT": 35,
    "satsSATK": 45,
    "satsSDEF": 49
  },
  {
    "name": "aegislash-shield",
    "id": 681,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/681.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
    "typ1": "steel",
    "typ2": "ghost",
    "moves": [
      "stance-change"
    ],
    "statsHP": 60,
    "satsATK": 50,
    "satsDEF": 140,
    "satsINIT": 60,
    "satsSATK": 50,
    "satsSDEF": 140
  },
  {
    "name": "spritzee",
    "id": 682,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/682.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
    "typ1": "fairy",
    "moves": [
      "healer",
      "aroma-veil"
    ],
    "statsHP": 78,
    "satsATK": 52,
    "satsDEF": 60,
    "satsINIT": 23,
    "satsSATK": 63,
    "satsSDEF": 65
  },
  {
    "name": "aromatisse",
    "id": 683,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/683.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
    "typ1": "fairy",
    "moves": [
      "healer",
      "aroma-veil"
    ],
    "statsHP": 101,
    "satsATK": 72,
    "satsDEF": 72,
    "satsINIT": 29,
    "satsSATK": 99,
    "satsSDEF": 89
  },
  {
    "name": "swirlix",
    "id": 684,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/684.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
    "typ1": "fairy",
    "moves": [
      "sweet-veil",
      "unburden"
    ],
    "statsHP": 62,
    "satsATK": 48,
    "satsDEF": 66,
    "satsINIT": 49,
    "satsSATK": 59,
    "satsSDEF": 57
  },
  {
    "name": "slurpuff",
    "id": 685,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/685.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
    "typ1": "fairy",
    "moves": [
      "sweet-veil",
      "unburden"
    ],
    "statsHP": 82,
    "satsATK": 80,
    "satsDEF": 86,
    "satsINIT": 72,
    "satsSATK": 85,
    "satsSDEF": 75
  },
  {
    "name": "inkay",
    "id": 686,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/686.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    "typ1": "dark",
    "typ2": "psychic",
    "moves": [
      "contrary",
      "suction-cups",
      "infiltrator"
    ],
    "statsHP": 53,
    "satsATK": 54,
    "satsDEF": 53,
    "satsINIT": 45,
    "satsSATK": 37,
    "satsSDEF": 46
  },
  {
    "name": "malamar",
    "id": 687,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/687.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
    "typ1": "dark",
    "typ2": "psychic",
    "moves": [
      "contrary",
      "suction-cups",
      "infiltrator"
    ],
    "statsHP": 86,
    "satsATK": 92,
    "satsDEF": 88,
    "satsINIT": 73,
    "satsSATK": 68,
    "satsSDEF": 75
  },
  {
    "name": "binacle",
    "id": 688,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/688.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "tough-claws",
      "sniper",
      "pickpocket"
    ],
    "statsHP": 42,
    "satsATK": 52,
    "satsDEF": 67,
    "satsINIT": 50,
    "satsSATK": 39,
    "satsSDEF": 56
  },
  {
    "name": "barbaracle",
    "id": 689,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/689.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "tough-claws",
      "sniper",
      "pickpocket"
    ],
    "statsHP": 72,
    "satsATK": 105,
    "satsDEF": 115,
    "satsINIT": 68,
    "satsSATK": 54,
    "satsSDEF": 86
  },
  {
    "name": "skrelp",
    "id": 690,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/690.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
    "typ1": "poison",
    "typ2": "water",
    "moves": [
      "poison-point",
      "poison-touch",
      "adaptability"
    ],
    "statsHP": 50,
    "satsATK": 60,
    "satsDEF": 60,
    "satsINIT": 30,
    "satsSATK": 60,
    "satsSDEF": 60
  },
  {
    "name": "dragalge",
    "id": 691,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/691.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
    "typ1": "poison",
    "typ2": "dragon",
    "moves": [
      "poison-point",
      "poison-touch",
      "adaptability"
    ],
    "statsHP": 65,
    "satsATK": 75,
    "satsDEF": 90,
    "satsINIT": 44,
    "satsSATK": 97,
    "satsSDEF": 123
  },
  {
    "name": "clauncher",
    "id": 692,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/692.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
    "typ1": "water",
    "moves": [
      "mega-launcher"
    ],
    "statsHP": 50,
    "satsATK": 53,
    "satsDEF": 62,
    "satsINIT": 44,
    "satsSATK": 58,
    "satsSDEF": 63
  },
  {
    "name": "clawitzer",
    "id": 693,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/693.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
    "typ1": "water",
    "moves": [
      "mega-launcher"
    ],
    "statsHP": 71,
    "satsATK": 73,
    "satsDEF": 88,
    "satsINIT": 59,
    "satsSATK": 120,
    "satsSDEF": 89
  },
  {
    "name": "helioptile",
    "id": 694,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/694.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    "typ1": "electric",
    "typ2": "normal",
    "moves": [
      "dry-skin",
      "sand-veil",
      "solar-power"
    ],
    "statsHP": 44,
    "satsATK": 38,
    "satsDEF": 33,
    "satsINIT": 70,
    "satsSATK": 61,
    "satsSDEF": 43
  },
  {
    "name": "heliolisk",
    "id": 695,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/695.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
    "typ1": "electric",
    "typ2": "normal",
    "moves": [
      "dry-skin",
      "sand-veil",
      "solar-power"
    ],
    "statsHP": 62,
    "satsATK": 55,
    "satsDEF": 52,
    "satsINIT": 109,
    "satsSATK": 109,
    "satsSDEF": 94
  },
  {
    "name": "tyrunt",
    "id": 696,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/696.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    "typ1": "rock",
    "typ2": "dragon",
    "moves": [
      "strong-jaw",
      "sturdy"
    ],
    "statsHP": 58,
    "satsATK": 89,
    "satsDEF": 77,
    "satsINIT": 48,
    "satsSATK": 45,
    "satsSDEF": 45
  },
  {
    "name": "tyrantrum",
    "id": 697,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/697.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
    "typ1": "rock",
    "typ2": "dragon",
    "moves": [
      "strong-jaw",
      "rock-head"
    ],
    "statsHP": 82,
    "satsATK": 121,
    "satsDEF": 119,
    "satsINIT": 71,
    "satsSATK": 69,
    "satsSDEF": 59
  },
  {
    "name": "amaura",
    "id": 698,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/698.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    "typ1": "rock",
    "typ2": "ice",
    "moves": [
      "refrigerate",
      "snow-warning"
    ],
    "statsHP": 77,
    "satsATK": 59,
    "satsDEF": 50,
    "satsINIT": 46,
    "satsSATK": 67,
    "satsSDEF": 63
  },
  {
    "name": "aurorus",
    "id": 699,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/699.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
    "typ1": "rock",
    "typ2": "ice",
    "moves": [
      "refrigerate",
      "snow-warning"
    ],
    "statsHP": 123,
    "satsATK": 77,
    "satsDEF": 72,
    "satsINIT": 58,
    "satsSATK": 99,
    "satsSDEF": 92
  },
  {
    "name": "sylveon",
    "id": 700,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/700.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    "typ1": "fairy",
    "moves": [
      "cute-charm",
      "pixilate"
    ],
    "statsHP": 95,
    "satsATK": 65,
    "satsDEF": 65,
    "satsINIT": 60,
    "satsSATK": 110,
    "satsSDEF": 130
  },
  {
    "name": "hawlucha",
    "id": 701,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/701.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
    "typ1": "fighting",
    "typ2": "flying",
    "moves": [
      "limber",
      "unburden",
      "mold-breaker"
    ],
    "statsHP": 78,
    "satsATK": 92,
    "satsDEF": 75,
    "satsINIT": 118,
    "satsSATK": 74,
    "satsSDEF": 63
  },
  {
    "name": "dedenne",
    "id": 702,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/702.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
    "typ1": "electric",
    "typ2": "fairy",
    "moves": [
      "cheek-pouch",
      "pickup",
      "plus"
    ],
    "statsHP": 67,
    "satsATK": 58,
    "satsDEF": 57,
    "satsINIT": 101,
    "satsSATK": 81,
    "satsSDEF": 67
  },
  {
    "name": "carbink",
    "id": 703,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/703.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
    "typ1": "rock",
    "typ2": "fairy",
    "moves": [
      "clear-body",
      "sturdy"
    ],
    "statsHP": 50,
    "satsATK": 50,
    "satsDEF": 150,
    "satsINIT": 50,
    "satsSATK": 50,
    "satsSDEF": 150
  },
  {
    "name": "goomy",
    "id": 704,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/704.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
    "typ1": "dragon",
    "moves": [
      "sap-sipper",
      "hydration",
      "gooey"
    ],
    "statsHP": 45,
    "satsATK": 50,
    "satsDEF": 35,
    "satsINIT": 40,
    "satsSATK": 55,
    "satsSDEF": 75
  },
  {
    "name": "sliggoo",
    "id": 705,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/705.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
    "typ1": "dragon",
    "moves": [
      "sap-sipper",
      "hydration",
      "gooey"
    ],
    "statsHP": 68,
    "satsATK": 75,
    "satsDEF": 53,
    "satsINIT": 60,
    "satsSATK": 83,
    "satsSDEF": 113
  },
  {
    "name": "goodra",
    "id": 706,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/706.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    "typ1": "dragon",
    "moves": [
      "sap-sipper",
      "hydration",
      "gooey"
    ],
    "statsHP": 90,
    "satsATK": 100,
    "satsDEF": 70,
    "satsINIT": 80,
    "satsSATK": 110,
    "satsSDEF": 150
  },
  {
    "name": "klefki",
    "id": 707,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/707.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
    "typ1": "steel",
    "typ2": "fairy",
    "moves": [
      "prankster",
      "magician"
    ],
    "statsHP": 57,
    "satsATK": 80,
    "satsDEF": 91,
    "satsINIT": 75,
    "satsSATK": 80,
    "satsSDEF": 87
  },
  {
    "name": "phantump",
    "id": 708,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/708.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    "typ1": "ghost",
    "typ2": "grass",
    "moves": [
      "natural-cure",
      "frisk",
      "harvest"
    ],
    "statsHP": 43,
    "satsATK": 70,
    "satsDEF": 48,
    "satsINIT": 38,
    "satsSATK": 50,
    "satsSDEF": 60
  },
  {
    "name": "trevenant",
    "id": 709,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/709.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
    "typ1": "ghost",
    "typ2": "grass",
    "moves": [
      "natural-cure",
      "frisk",
      "harvest"
    ],
    "statsHP": 85,
    "satsATK": 110,
    "satsDEF": 76,
    "satsINIT": 56,
    "satsSATK": 65,
    "satsSDEF": 82
  },
  {
    "name": "pumpkaboo-average",
    "id": 710,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/710.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
    "typ1": "ghost",
    "typ2": "grass",
    "moves": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "statsHP": 49,
    "satsATK": 66,
    "satsDEF": 70,
    "satsINIT": 51,
    "satsSATK": 44,
    "satsSDEF": 55
  },
  {
    "name": "gourgeist-average",
    "id": 711,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/711.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
    "typ1": "ghost",
    "typ2": "grass",
    "moves": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "statsHP": 65,
    "satsATK": 90,
    "satsDEF": 122,
    "satsINIT": 84,
    "satsSATK": 58,
    "satsSDEF": 75
  },
  {
    "name": "bergmite",
    "id": 712,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/712.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
    "typ1": "ice",
    "moves": [
      "own-tempo",
      "ice-body",
      "sturdy"
    ],
    "statsHP": 55,
    "satsATK": 69,
    "satsDEF": 85,
    "satsINIT": 28,
    "satsSATK": 32,
    "satsSDEF": 35
  },
  {
    "name": "avalugg",
    "id": 713,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/713.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
    "typ1": "ice",
    "moves": [
      "own-tempo",
      "ice-body",
      "sturdy"
    ],
    "statsHP": 95,
    "satsATK": 117,
    "satsDEF": 184,
    "satsINIT": 28,
    "satsSATK": 44,
    "satsSDEF": 46
  },
  {
    "name": "noibat",
    "id": 714,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/714.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    "typ1": "flying",
    "typ2": "dragon",
    "moves": [
      "frisk",
      "infiltrator",
      "telepathy"
    ],
    "statsHP": 40,
    "satsATK": 30,
    "satsDEF": 35,
    "satsINIT": 55,
    "satsSATK": 45,
    "satsSDEF": 40
  },
  {
    "name": "noivern",
    "id": 715,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/715.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    "typ1": "flying",
    "typ2": "dragon",
    "moves": [
      "frisk",
      "infiltrator",
      "telepathy"
    ],
    "statsHP": 85,
    "satsATK": 70,
    "satsDEF": 80,
    "satsINIT": 123,
    "satsSATK": 97,
    "satsSDEF": 80
  },
  {
    "name": "xerneas",
    "id": 716,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/716.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    "typ1": "fairy",
    "moves": [
      "fairy-aura"
    ],
    "statsHP": 126,
    "satsATK": 131,
    "satsDEF": 95,
    "satsINIT": 99,
    "satsSATK": 131,
    "satsSDEF": 98
  },
  {
    "name": "yveltal",
    "id": 717,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/717.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    "typ1": "dark",
    "typ2": "flying",
    "moves": [
      "dark-aura"
    ],
    "statsHP": 126,
    "satsATK": 131,
    "satsDEF": 95,
    "satsINIT": 99,
    "satsSATK": 131,
    "satsSDEF": 98
  },
  {
    "name": "zygarde-50",
    "id": 718,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/718.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
    "typ1": "dragon",
    "typ2": "ground",
    "moves": [
      "aura-break"
    ],
    "statsHP": 108,
    "satsATK": 100,
    "satsDEF": 121,
    "satsINIT": 95,
    "satsSATK": 81,
    "satsSDEF": 95
  },
  {
    "name": "diancie",
    "id": 719,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/719.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    "typ1": "rock",
    "typ2": "fairy",
    "moves": [
      "clear-body"
    ],
    "statsHP": 50,
    "satsATK": 100,
    "satsDEF": 150,
    "satsINIT": 50,
    "satsSATK": 100,
    "satsSDEF": 150
  },
  {
    "name": "hoopa",
    "id": 720,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/720.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
    "typ1": "psychic",
    "typ2": "ghost",
    "moves": [
      "magician"
    ],
    "statsHP": 80,
    "satsATK": 110,
    "satsDEF": 60,
    "satsINIT": 70,
    "satsSATK": 150,
    "satsSDEF": 130
  },
  {
    "name": "volcanion",
    "id": 721,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/721.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
    "typ1": "fire",
    "typ2": "water",
    "moves": [
      "water-absorb"
    ],
    "statsHP": 80,
    "satsATK": 110,
    "satsDEF": 120,
    "satsINIT": 70,
    "satsSATK": 130,
    "satsSDEF": 90
  },
  {
    "name": "rowlet",
    "id": 722,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/722.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "overgrow",
      "long-reach"
    ],
    "statsHP": 68,
    "satsATK": 55,
    "satsDEF": 55,
    "satsINIT": 42,
    "satsSATK": 50,
    "satsSDEF": 50
  },
  {
    "name": "dartrix",
    "id": 723,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/723.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "overgrow",
      "long-reach"
    ],
    "statsHP": 78,
    "satsATK": 75,
    "satsDEF": 75,
    "satsINIT": 52,
    "satsSATK": 70,
    "satsSDEF": 70
  },
  {
    "name": "decidueye",
    "id": 724,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/724.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    "typ1": "grass",
    "typ2": "ghost",
    "moves": [
      "overgrow",
      "long-reach"
    ],
    "statsHP": 78,
    "satsATK": 107,
    "satsDEF": 75,
    "satsINIT": 70,
    "satsSATK": 100,
    "satsSDEF": 100
  },
  {
    "name": "litten",
    "id": 725,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/725.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "intimidate"
    ],
    "statsHP": 45,
    "satsATK": 65,
    "satsDEF": 40,
    "satsINIT": 70,
    "satsSATK": 60,
    "satsSDEF": 40
  },
  {
    "name": "torracat",
    "id": 726,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/726.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "intimidate"
    ],
    "statsHP": 65,
    "satsATK": 85,
    "satsDEF": 50,
    "satsINIT": 90,
    "satsSATK": 80,
    "satsSDEF": 50
  },
  {
    "name": "incineroar",
    "id": 727,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/727.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    "typ1": "fire",
    "typ2": "dark",
    "moves": [
      "blaze",
      "intimidate"
    ],
    "statsHP": 95,
    "satsATK": 115,
    "satsDEF": 90,
    "satsINIT": 60,
    "satsSATK": 80,
    "satsSDEF": 90
  },
  {
    "name": "popplio",
    "id": 728,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/728.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "liquid-voice"
    ],
    "statsHP": 50,
    "satsATK": 54,
    "satsDEF": 54,
    "satsINIT": 40,
    "satsSATK": 66,
    "satsSDEF": 56
  },
  {
    "name": "brionne",
    "id": 729,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/729.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "liquid-voice"
    ],
    "statsHP": 60,
    "satsATK": 69,
    "satsDEF": 69,
    "satsINIT": 50,
    "satsSATK": 91,
    "satsSDEF": 81
  },
  {
    "name": "primarina",
    "id": 730,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/730.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    "typ1": "water",
    "typ2": "fairy",
    "moves": [
      "torrent",
      "liquid-voice"
    ],
    "statsHP": 80,
    "satsATK": 74,
    "satsDEF": 74,
    "satsINIT": 60,
    "satsSATK": 126,
    "satsSDEF": 116
  },
  {
    "name": "pikipek",
    "id": 731,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/731.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "skill-link",
      "pickup"
    ],
    "statsHP": 35,
    "satsATK": 75,
    "satsDEF": 30,
    "satsINIT": 65,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "trumbeak",
    "id": 732,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/732.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "skill-link",
      "pickup"
    ],
    "statsHP": 55,
    "satsATK": 85,
    "satsDEF": 50,
    "satsINIT": 75,
    "satsSATK": 40,
    "satsSDEF": 50
  },
  {
    "name": "toucannon",
    "id": 733,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/733.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "skill-link",
      "sheer-force"
    ],
    "statsHP": 80,
    "satsATK": 120,
    "satsDEF": 75,
    "satsINIT": 60,
    "satsSATK": 75,
    "satsSDEF": 75
  },
  {
    "name": "yungoos",
    "id": 734,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/734.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    "typ1": "normal",
    "moves": [
      "stakeout",
      "strong-jaw",
      "adaptability"
    ],
    "statsHP": 48,
    "satsATK": 70,
    "satsDEF": 30,
    "satsINIT": 45,
    "satsSATK": 30,
    "satsSDEF": 30
  },
  {
    "name": "gumshoos",
    "id": 735,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/735.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
    "typ1": "normal",
    "moves": [
      "stakeout",
      "strong-jaw",
      "adaptability"
    ],
    "statsHP": 88,
    "satsATK": 110,
    "satsDEF": 60,
    "satsINIT": 45,
    "satsSATK": 55,
    "satsSDEF": 60
  },
  {
    "name": "grubbin",
    "id": 736,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/736.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    "typ1": "bug",
    "moves": [
      "swarm"
    ],
    "statsHP": 47,
    "satsATK": 62,
    "satsDEF": 45,
    "satsINIT": 46,
    "satsSATK": 55,
    "satsSDEF": 45
  },
  {
    "name": "charjabug",
    "id": 737,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/737.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
    "typ1": "bug",
    "typ2": "electric",
    "moves": [
      "battery"
    ],
    "statsHP": 57,
    "satsATK": 82,
    "satsDEF": 95,
    "satsINIT": 36,
    "satsSATK": 55,
    "satsSDEF": 75
  },
  {
    "name": "vikavolt",
    "id": 738,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/738.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
    "typ1": "bug",
    "typ2": "electric",
    "moves": [
      "levitate"
    ],
    "statsHP": 77,
    "satsATK": 70,
    "satsDEF": 90,
    "satsINIT": 43,
    "satsSATK": 145,
    "satsSDEF": 75
  },
  {
    "name": "crabrawler",
    "id": 739,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/739.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
    "typ1": "fighting",
    "moves": [
      "hyper-cutter",
      "iron-fist",
      "anger-point"
    ],
    "statsHP": 47,
    "satsATK": 82,
    "satsDEF": 57,
    "satsINIT": 63,
    "satsSATK": 42,
    "satsSDEF": 47
  },
  {
    "name": "crabominable",
    "id": 740,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/740.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
    "typ1": "fighting",
    "typ2": "ice",
    "moves": [
      "hyper-cutter",
      "iron-fist",
      "anger-point"
    ],
    "statsHP": 97,
    "satsATK": 132,
    "satsDEF": 77,
    "satsINIT": 43,
    "satsSATK": 62,
    "satsSDEF": 67
  },
  {
    "name": "oricorio-baile",
    "id": 741,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/741.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "dancer"
    ],
    "statsHP": 75,
    "satsATK": 70,
    "satsDEF": 70,
    "satsINIT": 93,
    "satsSATK": 98,
    "satsSDEF": 70
  },
  {
    "name": "cutiefly",
    "id": 742,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/742.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    "typ1": "bug",
    "typ2": "fairy",
    "moves": [
      "honey-gather",
      "shield-dust",
      "sweet-veil"
    ],
    "statsHP": 40,
    "satsATK": 45,
    "satsDEF": 40,
    "satsINIT": 84,
    "satsSATK": 55,
    "satsSDEF": 40
  },
  {
    "name": "ribombee",
    "id": 743,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/743.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
    "typ1": "bug",
    "typ2": "fairy",
    "moves": [
      "honey-gather",
      "shield-dust",
      "sweet-veil"
    ],
    "statsHP": 60,
    "satsATK": 55,
    "satsDEF": 60,
    "satsINIT": 124,
    "satsSATK": 95,
    "satsSDEF": 70
  },
  {
    "name": "rockruff",
    "id": 744,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/744.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
    "typ1": "rock",
    "moves": [
      "keen-eye",
      "vital-spirit",
      "steadfast"
    ],
    "statsHP": 45,
    "satsATK": 65,
    "satsDEF": 40,
    "satsINIT": 60,
    "satsSATK": 30,
    "satsSDEF": 40
  },
  {
    "name": "lycanroc-midday",
    "id": 745,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/745.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
    "typ1": "rock",
    "moves": [
      "keen-eye",
      "sand-rush",
      "steadfast"
    ],
    "statsHP": 75,
    "satsATK": 115,
    "satsDEF": 65,
    "satsINIT": 112,
    "satsSATK": 55,
    "satsSDEF": 65
  },
  {
    "name": "wishiwashi-solo",
    "id": 746,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/746.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
    "typ1": "water",
    "moves": [
      "schooling"
    ],
    "statsHP": 45,
    "satsATK": 20,
    "satsDEF": 20,
    "satsINIT": 40,
    "satsSATK": 25,
    "satsSDEF": 25
  },
  {
    "name": "mareanie",
    "id": 747,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/747.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
    "typ1": "poison",
    "typ2": "water",
    "moves": [
      "merciless",
      "limber",
      "regenerator"
    ],
    "statsHP": 50,
    "satsATK": 53,
    "satsDEF": 62,
    "satsINIT": 45,
    "satsSATK": 43,
    "satsSDEF": 52
  },
  {
    "name": "toxapex",
    "id": 748,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/748.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    "typ1": "poison",
    "typ2": "water",
    "moves": [
      "merciless",
      "limber",
      "regenerator"
    ],
    "statsHP": 50,
    "satsATK": 63,
    "satsDEF": 152,
    "satsINIT": 35,
    "satsSATK": 53,
    "satsSDEF": 142
  },
  {
    "name": "mudbray",
    "id": 749,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/749.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
    "typ1": "ground",
    "moves": [
      "own-tempo",
      "stamina",
      "inner-focus"
    ],
    "statsHP": 70,
    "satsATK": 100,
    "satsDEF": 70,
    "satsINIT": 45,
    "satsSATK": 45,
    "satsSDEF": 55
  },
  {
    "name": "mudsdale",
    "id": 750,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/750.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
    "typ1": "ground",
    "moves": [
      "own-tempo",
      "stamina",
      "inner-focus"
    ],
    "statsHP": 100,
    "satsATK": 125,
    "satsDEF": 100,
    "satsINIT": 35,
    "satsSATK": 55,
    "satsSDEF": 85
  },
  {
    "name": "dewpider",
    "id": 751,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/751.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    "typ1": "water",
    "typ2": "bug",
    "moves": [
      "water-bubble",
      "water-absorb"
    ],
    "statsHP": 38,
    "satsATK": 40,
    "satsDEF": 52,
    "satsINIT": 27,
    "satsSATK": 40,
    "satsSDEF": 72
  },
  {
    "name": "araquanid",
    "id": 752,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/752.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
    "typ1": "water",
    "typ2": "bug",
    "moves": [
      "water-bubble",
      "water-absorb"
    ],
    "statsHP": 68,
    "satsATK": 70,
    "satsDEF": 92,
    "satsINIT": 42,
    "satsSATK": 50,
    "satsSDEF": 132
  },
  {
    "name": "fomantis",
    "id": 753,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/753.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "contrary"
    ],
    "statsHP": 40,
    "satsATK": 55,
    "satsDEF": 35,
    "satsINIT": 35,
    "satsSATK": 50,
    "satsSDEF": 35
  },
  {
    "name": "lurantis",
    "id": 754,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/754.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "contrary"
    ],
    "statsHP": 70,
    "satsATK": 105,
    "satsDEF": 90,
    "satsINIT": 45,
    "satsSATK": 80,
    "satsSDEF": 90
  },
  {
    "name": "morelull",
    "id": 755,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/755.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
    "typ1": "grass",
    "typ2": "fairy",
    "moves": [
      "illuminate",
      "effect-spore",
      "rain-dish"
    ],
    "statsHP": 40,
    "satsATK": 35,
    "satsDEF": 55,
    "satsINIT": 15,
    "satsSATK": 65,
    "satsSDEF": 75
  },
  {
    "name": "shiinotic",
    "id": 756,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/756.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
    "typ1": "grass",
    "typ2": "fairy",
    "moves": [
      "illuminate",
      "effect-spore",
      "rain-dish"
    ],
    "statsHP": 60,
    "satsATK": 45,
    "satsDEF": 80,
    "satsINIT": 30,
    "satsSATK": 90,
    "satsSDEF": 100
  },
  {
    "name": "salandit",
    "id": 757,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/757.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
    "typ1": "poison",
    "typ2": "fire",
    "moves": [
      "corrosion",
      "oblivious"
    ],
    "statsHP": 48,
    "satsATK": 44,
    "satsDEF": 40,
    "satsINIT": 77,
    "satsSATK": 71,
    "satsSDEF": 40
  },
  {
    "name": "salazzle",
    "id": 758,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/758.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
    "typ1": "poison",
    "typ2": "fire",
    "moves": [
      "corrosion",
      "oblivious"
    ],
    "statsHP": 68,
    "satsATK": 64,
    "satsDEF": 60,
    "satsINIT": 117,
    "satsSATK": 111,
    "satsSDEF": 60
  },
  {
    "name": "stufful",
    "id": 759,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/759.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
    "typ1": "normal",
    "typ2": "fighting",
    "moves": [
      "fluffy",
      "klutz",
      "cute-charm"
    ],
    "statsHP": 70,
    "satsATK": 75,
    "satsDEF": 50,
    "satsINIT": 50,
    "satsSATK": 45,
    "satsSDEF": 50
  },
  {
    "name": "bewear",
    "id": 760,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/760.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
    "typ1": "normal",
    "typ2": "fighting",
    "moves": [
      "fluffy",
      "klutz",
      "unnerve"
    ],
    "statsHP": 120,
    "satsATK": 125,
    "satsDEF": 80,
    "satsINIT": 60,
    "satsSATK": 55,
    "satsSDEF": 60
  },
  {
    "name": "bounsweet",
    "id": 761,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/761.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "oblivious",
      "sweet-veil"
    ],
    "statsHP": 42,
    "satsATK": 30,
    "satsDEF": 38,
    "satsINIT": 32,
    "satsSATK": 30,
    "satsSDEF": 38
  },
  {
    "name": "steenee",
    "id": 762,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/762.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "oblivious",
      "sweet-veil"
    ],
    "statsHP": 52,
    "satsATK": 40,
    "satsDEF": 48,
    "satsINIT": 62,
    "satsSATK": 40,
    "satsSDEF": 48
  },
  {
    "name": "tsareena",
    "id": 763,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/763.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "queenly-majesty",
      "sweet-veil"
    ],
    "statsHP": 72,
    "satsATK": 120,
    "satsDEF": 98,
    "satsINIT": 72,
    "satsSATK": 50,
    "satsSDEF": 98
  },
  {
    "name": "comfey",
    "id": 764,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/764.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
    "typ1": "fairy",
    "moves": [
      "flower-veil",
      "triage",
      "natural-cure"
    ],
    "statsHP": 51,
    "satsATK": 52,
    "satsDEF": 90,
    "satsINIT": 100,
    "satsSATK": 82,
    "satsSDEF": 110
  },
  {
    "name": "oranguru",
    "id": 765,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/765.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
    "typ1": "normal",
    "typ2": "psychic",
    "moves": [
      "inner-focus",
      "telepathy",
      "symbiosis"
    ],
    "statsHP": 90,
    "satsATK": 60,
    "satsDEF": 80,
    "satsINIT": 60,
    "satsSATK": 90,
    "satsSDEF": 110
  },
  {
    "name": "passimian",
    "id": 766,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/766.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
    "typ1": "fighting",
    "moves": [
      "receiver",
      "defiant"
    ],
    "statsHP": 100,
    "satsATK": 120,
    "satsDEF": 90,
    "satsINIT": 80,
    "satsSATK": 40,
    "satsSDEF": 60
  },
  {
    "name": "wimpod",
    "id": 767,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/767.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
    "typ1": "bug",
    "typ2": "water",
    "moves": [
      "wimp-out"
    ],
    "statsHP": 25,
    "satsATK": 35,
    "satsDEF": 40,
    "satsINIT": 80,
    "satsSATK": 20,
    "satsSDEF": 30
  },
  {
    "name": "golisopod",
    "id": 768,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/768.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
    "typ1": "bug",
    "typ2": "water",
    "moves": [
      "emergency-exit"
    ],
    "statsHP": 75,
    "satsATK": 125,
    "satsDEF": 140,
    "satsINIT": 40,
    "satsSATK": 60,
    "satsSDEF": 90
  },
  {
    "name": "sandygast",
    "id": 769,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/769.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
    "typ1": "ghost",
    "typ2": "ground",
    "moves": [
      "water-compaction",
      "sand-veil"
    ],
    "statsHP": 55,
    "satsATK": 55,
    "satsDEF": 80,
    "satsINIT": 15,
    "satsSATK": 70,
    "satsSDEF": 45
  },
  {
    "name": "palossand",
    "id": 770,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/770.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
    "typ1": "ghost",
    "typ2": "ground",
    "moves": [
      "water-compaction",
      "sand-veil"
    ],
    "statsHP": 85,
    "satsATK": 75,
    "satsDEF": 110,
    "satsINIT": 35,
    "satsSATK": 100,
    "satsSDEF": 75
  },
  {
    "name": "pyukumuku",
    "id": 771,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/771.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
    "typ1": "water",
    "moves": [
      "innards-out",
      "unaware"
    ],
    "statsHP": 55,
    "satsATK": 60,
    "satsDEF": 130,
    "satsINIT": 5,
    "satsSATK": 30,
    "satsSDEF": 130
  },
  {
    "name": "type-null",
    "id": 772,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/772.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
    "typ1": "normal",
    "moves": [
      "battle-armor"
    ],
    "statsHP": 95,
    "satsATK": 95,
    "satsDEF": 95,
    "satsINIT": 59,
    "satsSATK": 95,
    "satsSDEF": 95
  },
  {
    "name": "silvally",
    "id": 773,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/773.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
    "typ1": "normal",
    "moves": [
      "rks-system"
    ],
    "statsHP": 95,
    "satsATK": 95,
    "satsDEF": 95,
    "satsINIT": 95,
    "satsSATK": 95,
    "satsSDEF": 95
  },
  {
    "name": "minior-red-meteor",
    "id": 774,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/774.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
    "typ1": "rock",
    "typ2": "flying",
    "moves": [
      "shields-down"
    ],
    "statsHP": 60,
    "satsATK": 60,
    "satsDEF": 100,
    "satsINIT": 60,
    "satsSATK": 60,
    "satsSDEF": 100
  },
  {
    "name": "komala",
    "id": 775,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/775.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
    "typ1": "normal",
    "moves": [
      "comatose"
    ],
    "statsHP": 65,
    "satsATK": 115,
    "satsDEF": 65,
    "satsINIT": 65,
    "satsSATK": 75,
    "satsSDEF": 95
  },
  {
    "name": "turtonator",
    "id": 776,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/776.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
    "typ1": "fire",
    "typ2": "dragon",
    "moves": [
      "shell-armor"
    ],
    "statsHP": 60,
    "satsATK": 78,
    "satsDEF": 135,
    "satsINIT": 36,
    "satsSATK": 91,
    "satsSDEF": 85
  },
  {
    "name": "togedemaru",
    "id": 777,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/777.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
    "typ1": "electric",
    "typ2": "steel",
    "moves": [
      "iron-barbs",
      "lightning-rod",
      "sturdy"
    ],
    "statsHP": 65,
    "satsATK": 98,
    "satsDEF": 63,
    "satsINIT": 96,
    "satsSATK": 40,
    "satsSDEF": 73
  },
  {
    "name": "mimikyu-disguised",
    "id": 778,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/778.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    "typ1": "ghost",
    "typ2": "fairy",
    "moves": [
      "disguise"
    ],
    "statsHP": 55,
    "satsATK": 90,
    "satsDEF": 80,
    "satsINIT": 96,
    "satsSATK": 50,
    "satsSDEF": 105
  },
  {
    "name": "bruxish",
    "id": 779,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/779.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
    "typ1": "water",
    "typ2": "psychic",
    "moves": [
      "dazzling",
      "strong-jaw",
      "wonder-skin"
    ],
    "statsHP": 68,
    "satsATK": 105,
    "satsDEF": 70,
    "satsINIT": 92,
    "satsSATK": 70,
    "satsSDEF": 70
  },
  {
    "name": "drampa",
    "id": 780,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/780.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
    "typ1": "normal",
    "typ2": "dragon",
    "moves": [
      "berserk",
      "sap-sipper",
      "cloud-nine"
    ],
    "statsHP": 78,
    "satsATK": 60,
    "satsDEF": 85,
    "satsINIT": 36,
    "satsSATK": 135,
    "satsSDEF": 91
  },
  {
    "name": "dhelmise",
    "id": 781,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/781.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
    "typ1": "ghost",
    "typ2": "grass",
    "moves": [
      "steelworker"
    ],
    "statsHP": 70,
    "satsATK": 131,
    "satsDEF": 100,
    "satsINIT": 40,
    "satsSATK": 86,
    "satsSDEF": 90
  },
  {
    "name": "jangmo-o",
    "id": 782,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/782.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
    "typ1": "dragon",
    "moves": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "statsHP": 45,
    "satsATK": 55,
    "satsDEF": 65,
    "satsINIT": 45,
    "satsSATK": 45,
    "satsSDEF": 45
  },
  {
    "name": "hakamo-o",
    "id": 783,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/783.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
    "typ1": "dragon",
    "typ2": "fighting",
    "moves": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "statsHP": 55,
    "satsATK": 75,
    "satsDEF": 90,
    "satsINIT": 65,
    "satsSATK": 65,
    "satsSDEF": 70
  },
  {
    "name": "kommo-o",
    "id": 784,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/784.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
    "typ1": "dragon",
    "typ2": "fighting",
    "moves": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "statsHP": 75,
    "satsATK": 110,
    "satsDEF": 125,
    "satsINIT": 85,
    "satsSATK": 100,
    "satsSDEF": 105
  },
  {
    "name": "tapu-koko",
    "id": 785,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/785.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
    "typ1": "electric",
    "typ2": "fairy",
    "moves": [
      "electric-surge",
      "telepathy"
    ],
    "statsHP": 70,
    "satsATK": 115,
    "satsDEF": 85,
    "satsINIT": 130,
    "satsSATK": 95,
    "satsSDEF": 75
  },
  {
    "name": "tapu-lele",
    "id": 786,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/786.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "psychic-surge",
      "telepathy"
    ],
    "statsHP": 70,
    "satsATK": 85,
    "satsDEF": 75,
    "satsINIT": 95,
    "satsSATK": 130,
    "satsSDEF": 115
  },
  {
    "name": "tapu-bulu",
    "id": 787,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/787.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
    "typ1": "grass",
    "typ2": "fairy",
    "moves": [
      "grassy-surge",
      "telepathy"
    ],
    "statsHP": 70,
    "satsATK": 130,
    "satsDEF": 115,
    "satsINIT": 75,
    "satsSATK": 85,
    "satsSDEF": 95
  },
  {
    "name": "tapu-fini",
    "id": 788,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/788.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
    "typ1": "water",
    "typ2": "fairy",
    "moves": [
      "misty-surge",
      "telepathy"
    ],
    "statsHP": 70,
    "satsATK": 75,
    "satsDEF": 115,
    "satsINIT": 85,
    "satsSATK": 95,
    "satsSDEF": 130
  },
  {
    "name": "cosmog",
    "id": 789,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/789.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
    "typ1": "psychic",
    "moves": [
      "unaware"
    ],
    "statsHP": 43,
    "satsATK": 29,
    "satsDEF": 31,
    "satsINIT": 37,
    "satsSATK": 29,
    "satsSDEF": 31
  },
  {
    "name": "cosmoem",
    "id": 790,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/790.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
    "typ1": "psychic",
    "moves": [
      "sturdy"
    ],
    "statsHP": 43,
    "satsATK": 29,
    "satsDEF": 131,
    "satsINIT": 37,
    "satsSATK": 29,
    "satsSDEF": 131
  },
  {
    "name": "solgaleo",
    "id": 791,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/791.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
    "typ1": "psychic",
    "typ2": "steel",
    "moves": [
      "full-metal-body"
    ],
    "statsHP": 137,
    "satsATK": 137,
    "satsDEF": 107,
    "satsINIT": 97,
    "satsSATK": 113,
    "satsSDEF": 89
  },
  {
    "name": "lunala",
    "id": 792,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/792.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
    "typ1": "psychic",
    "typ2": "ghost",
    "moves": [
      "shadow-shield"
    ],
    "statsHP": 137,
    "satsATK": 113,
    "satsDEF": 89,
    "satsINIT": 97,
    "satsSATK": 137,
    "satsSDEF": 107
  },
  {
    "name": "nihilego",
    "id": 793,
    "img1": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/793.png",
    "img2": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
    "typ1": "rock",
    "typ2": "poison",
    "moves": [
      "beast-boost"
    ],
    "statsHP": 109,
    "satsATK": 53,
    "satsDEF": 47,
    "satsINIT": 103,
    "satsSATK": 127,
    "satsSDEF": 131
  }
]]