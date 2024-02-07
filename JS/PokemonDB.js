const allPokemon = [
  {
    "name": "bulbasaur",
    "id": 1,
    "img1": "../IMG/DexImg/bulbasaur_home.png",
    "img2": "../IMG/DexImg/bulbasaur_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "overgrow",
      "chlorophyll"
    ],
    "statsHP": 45,
    "statsATK": 49,
    "statsDEF": 49,
    "statsINIT": 45,
    "statsSATK": 65,
    "statsSDEF": 65
  },
  {
    "name": "ivysaur",
    "id": 2,
    "img1": "../IMG/DexImg/ivysaur_home.png",
    "img2": "../IMG/DexImg/ivysaur_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "overgrow",
      "chlorophyll"
    ],
    "statsHP": 60,
    "statsATK": 62,
    "statsDEF": 63,
    "statsINIT": 60,
    "statsSATK": 80,
    "statsSDEF": 80
  },
  {
    "name": "venusaur",
    "id": 3,
    "img1": "../IMG/DexImg/venusaur_home.png",
    "img2": "../IMG/DexImg/venusaur_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "overgrow",
      "chlorophyll"
    ],
    "statsHP": 80,
    "statsATK": 82,
    "statsDEF": 83,
    "statsINIT": 80,
    "statsSATK": 100,
    "statsSDEF": 100
  },
  {
    "name": "charmander",
    "id": 4,
    "img1": "../IMG/DexImg/charmander_home.png",
    "img2": "../IMG/DexImg/charmander_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "solar-power"
    ],
    "statsHP": 39,
    "statsATK": 52,
    "statsDEF": 43,
    "statsINIT": 65,
    "statsSATK": 60,
    "statsSDEF": 50
  },
  {
    "name": "charmeleon",
    "id": 5,
    "img1": "../IMG/DexImg/charmeleon_home.png",
    "img2": "../IMG/DexImg/charmeleon_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "solar-power"
    ],
    "statsHP": 58,
    "statsATK": 64,
    "statsDEF": 58,
    "statsINIT": 80,
    "statsSATK": 80,
    "statsSDEF": 65
  },
  {
    "name": "charizard",
    "id": 6,
    "img1": "../IMG/DexImg/charizard_home.png",
    "img2": "../IMG/DexImg/charizard_classic.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "blaze",
      "solar-power"
    ],
    "statsHP": 78,
    "statsATK": 84,
    "statsDEF": 78,
    "statsINIT": 100,
    "statsSATK": 109,
    "statsSDEF": 85
  },
  {
    "name": "squirtle",
    "id": 7,
    "img1": "../IMG/DexImg/squirtle_home.png",
    "img2": "../IMG/DexImg/squirtle_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "rain-dish"
    ],
    "statsHP": 44,
    "statsATK": 48,
    "statsDEF": 65,
    "statsINIT": 43,
    "statsSATK": 50,
    "statsSDEF": 64
  },
  {
    "name": "wartortle",
    "id": 8,
    "img1": "../IMG/DexImg/wartortle_home.png",
    "img2": "../IMG/DexImg/wartortle_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "rain-dish"
    ],
    "statsHP": 59,
    "statsATK": 63,
    "statsDEF": 80,
    "statsINIT": 58,
    "statsSATK": 65,
    "statsSDEF": 80
  },
  {
    "name": "blastoise",
    "id": 9,
    "img1": "../IMG/DexImg/blastoise_home.png",
    "img2": "../IMG/DexImg/blastoise_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "rain-dish"
    ],
    "statsHP": 79,
    "statsATK": 83,
    "statsDEF": 100,
    "statsINIT": 78,
    "statsSATK": 85,
    "statsSDEF": 105
  },
  {
    "name": "caterpie",
    "id": 10,
    "img1": "../IMG/DexImg/caterpie_home.png",
    "img2": "../IMG/DexImg/caterpie_classic.png",
    "typ1": "bug",
    "moves": [
      "shield-dust",
      "run-away"
    ],
    "statsHP": 45,
    "statsATK": 30,
    "statsDEF": 35,
    "statsINIT": 45,
    "statsSATK": 20,
    "statsSDEF": 20
  },
  {
    "name": "metapod",
    "id": 11,
    "img1": "../IMG/DexImg/metapod_home.png",
    "img2": "../IMG/DexImg/metapod_classic.png",
    "typ1": "bug",
    "moves": [
      "shed-skin"
    ],
    "statsHP": 50,
    "statsATK": 20,
    "statsDEF": 55,
    "statsINIT": 30,
    "statsSATK": 25,
    "statsSDEF": 25
  },
  {
    "name": "butterfree",
    "id": 12,
    "img1": "../IMG/DexImg/butterfree_home.png",
    "img2": "../IMG/DexImg/butterfree_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "compound-eyes",
      "tinted-lens"
    ],
    "statsHP": 60,
    "statsATK": 45,
    "statsDEF": 50,
    "statsINIT": 70,
    "statsSATK": 90,
    "statsSDEF": 80
  },
  {
    "name": "weedle",
    "id": 13,
    "img1": "../IMG/DexImg/weedle_home.png",
    "img2": "../IMG/DexImg/weedle_classic.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "shield-dust",
      "run-away"
    ],
    "statsHP": 40,
    "statsATK": 35,
    "statsDEF": 30,
    "statsINIT": 50,
    "statsSATK": 20,
    "statsSDEF": 20
  },
  {
    "name": "kakuna",
    "id": 14,
    "img1": "../IMG/DexImg/kakuna_home.png",
    "img2": "../IMG/DexImg/kakuna_classic.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "shed-skin"
    ],
    "statsHP": 45,
    "statsATK": 25,
    "statsDEF": 50,
    "statsINIT": 35,
    "statsSATK": 25,
    "statsSDEF": 25
  },
  {
    "name": "beedrill",
    "id": 15,
    "img1": "../IMG/DexImg/beedrill_home.png",
    "img2": "../IMG/DexImg/beedrill_classic.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "swarm",
      "sniper"
    ],
    "statsHP": 65,
    "statsATK": 90,
    "statsDEF": 40,
    "statsINIT": 75,
    "statsSATK": 45,
    "statsSDEF": 80
  },
  {
    "name": "pidgey",
    "id": 16,
    "img1": "../IMG/DexImg/pidgey_home.png",
    "img2": "../IMG/DexImg/pidgey_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "statsHP": 40,
    "statsATK": 45,
    "statsDEF": 40,
    "statsINIT": 56,
    "statsSATK": 35,
    "statsSDEF": 35
  },
  {
    "name": "pidgeotto",
    "id": 17,
    "img1": "../IMG/DexImg/pidgeotto_home.png",
    "img2": "../IMG/DexImg/pidgeotto_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "statsHP": 63,
    "statsATK": 60,
    "statsDEF": 55,
    "statsINIT": 71,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "pidgeot",
    "id": 18,
    "img1": "../IMG/DexImg/pidgeot_home.png",
    "img2": "../IMG/DexImg/pidgeot_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "statsHP": 83,
    "statsATK": 80,
    "statsDEF": 75,
    "statsINIT": 101,
    "statsSATK": 70,
    "statsSDEF": 70
  },
  {
    "name": "rattata",
    "id": 19,
    "img1": "../IMG/DexImg/rattata_home.png",
    "img2": "../IMG/DexImg/rattata_classic.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "guts",
      "hustle"
    ],
    "statsHP": 30,
    "statsATK": 56,
    "statsDEF": 35,
    "statsINIT": 72,
    "statsSATK": 25,
    "statsSDEF": 35
  },
  {
    "name": "raticate",
    "id": 20,
    "img1": "../IMG/DexImg/raticate_home.png",
    "img2": "../IMG/DexImg/raticate_classic.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "guts",
      "hustle"
    ],
    "statsHP": 55,
    "statsATK": 81,
    "statsDEF": 60,
    "statsINIT": 97,
    "statsSATK": 50,
    "statsSDEF": 70
  },
  {
    "name": "spearow",
    "id": 21,
    "img1": "../IMG/DexImg/spearow_home.png",
    "img2": "../IMG/DexImg/spearow_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "sniper"
    ],
    "statsHP": 40,
    "statsATK": 60,
    "statsDEF": 30,
    "statsINIT": 70,
    "statsSATK": 31,
    "statsSDEF": 31
  },
  {
    "name": "fearow",
    "id": 22,
    "img1": "../IMG/DexImg/fearow_home.png",
    "img2": "../IMG/DexImg/fearow_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "sniper"
    ],
    "statsHP": 65,
    "statsATK": 90,
    "statsDEF": 65,
    "statsINIT": 100,
    "statsSATK": 61,
    "statsSDEF": 61
  },
  {
    "name": "ekans",
    "id": 23,
    "img1": "../IMG/DexImg/ekans_home.png",
    "img2": "../IMG/DexImg/ekans_classic.png",
    "typ1": "poison",
    "moves": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "statsHP": 35,
    "statsATK": 60,
    "statsDEF": 44,
    "statsINIT": 55,
    "statsSATK": 40,
    "statsSDEF": 54
  },
  {
    "name": "arbok",
    "id": 24,
    "img1": "../IMG/DexImg/arbok_home.png",
    "img2": "../IMG/DexImg/arbok_classic.png",
    "typ1": "poison",
    "moves": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "statsHP": 60,
    "statsATK": 95,
    "statsDEF": 69,
    "statsINIT": 80,
    "statsSATK": 65,
    "statsSDEF": 79
  },
  {
    "name": "pikachu",
    "id": 25,
    "img1": "../IMG/DexImg/pikachu_home.png",
    "img2": "../IMG/DexImg/pikachu_classic.png",
    "typ1": "electric",
    "moves": [
      "static",
      "lightning-rod"
    ],
    "statsHP": 35,
    "statsATK": 55,
    "statsDEF": 40,
    "statsINIT": 90,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "raichu",
    "id": 26,
    "img1": "../IMG/DexImg/raichu_home.png",
    "img2": "../IMG/DexImg/raichu_classic.png",
    "typ1": "electric",
    "moves": [
      "static",
      "lightning-rod"
    ],
    "statsHP": 60,
    "statsATK": 90,
    "statsDEF": 55,
    "statsINIT": 110,
    "statsSATK": 90,
    "statsSDEF": 80
  },
  {
    "name": "sandshrew",
    "id": 27,
    "img1": "../IMG/DexImg/sandshrew_home.png",
    "img2": "../IMG/DexImg/sandshrew_classic.png",
    "typ1": "ground",
    "moves": [
      "sand-veil",
      "sand-rush"
    ],
    "statsHP": 50,
    "statsATK": 75,
    "statsDEF": 85,
    "statsINIT": 40,
    "statsSATK": 20,
    "statsSDEF": 30
  },
  {
    "name": "sandslash",
    "id": 28,
    "img1": "../IMG/DexImg/sandslash_home.png",
    "img2": "../IMG/DexImg/sandslash_classic.png",
    "typ1": "ground",
    "moves": [
      "sand-veil",
      "sand-rush"
    ],
    "statsHP": 75,
    "statsATK": 100,
    "statsDEF": 110,
    "statsINIT": 65,
    "statsSATK": 45,
    "statsSDEF": 55
  },
  {
    "name": "nidoran-f",
    "id": 29,
    "img1": "../IMG/DexImg/nidoran-f_home.png",
    "img2": "../IMG/DexImg/nidoran-f_classic.png",
    "typ1": "poison",
    "moves": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "statsHP": 55,
    "statsATK": 47,
    "statsDEF": 52,
    "statsINIT": 41,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "nidorina",
    "id": 30,
    "img1": "../IMG/DexImg/nidorina_home.png",
    "img2": "../IMG/DexImg/nidorina_classic.png",
    "typ1": "poison",
    "moves": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "statsHP": 70,
    "statsATK": 62,
    "statsDEF": 67,
    "statsINIT": 56,
    "statsSATK": 55,
    "statsSDEF": 55
  },
  {
    "name": "nidoqueen",
    "id": 31,
    "img1": "../IMG/DexImg/nidoqueen_home.png",
    "img2": "../IMG/DexImg/nidoqueen_classic.png",
    "typ1": "poison",
    "typ2": "ground",
    "moves": [
      "poison-point",
      "rivalry",
      "sheer-force"
    ],
    "statsHP": 90,
    "statsATK": 92,
    "statsDEF": 87,
    "statsINIT": 76,
    "statsSATK": 75,
    "statsSDEF": 85
  },
  {
    "name": "nidoran-m",
    "id": 32,
    "img1": "../IMG/DexImg/nidoran-m_home.png",
    "img2": "../IMG/DexImg/nidoran-m_classic.png",
    "typ1": "poison",
    "moves": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "statsHP": 46,
    "statsATK": 57,
    "statsDEF": 40,
    "statsINIT": 50,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "nidorino",
    "id": 33,
    "img1": "../IMG/DexImg/nidorino_home.png",
    "img2": "../IMG/DexImg/nidorino_classic.png",
    "typ1": "poison",
    "moves": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "statsHP": 61,
    "statsATK": 72,
    "statsDEF": 57,
    "statsINIT": 65,
    "statsSATK": 55,
    "statsSDEF": 55
  },
  {
    "name": "nidoking",
    "id": 34,
    "img1": "../IMG/DexImg/nidoking_home.png",
    "img2": "../IMG/DexImg/nidoking_classic.png",
    "typ1": "poison",
    "typ2": "ground",
    "moves": [
      "poison-point",
      "rivalry",
      "sheer-force"
    ],
    "statsHP": 81,
    "statsATK": 102,
    "statsDEF": 77,
    "statsINIT": 85,
    "statsSATK": 85,
    "statsSDEF": 75
  },
  {
    "name": "clefairy",
    "id": 35,
    "img1": "../IMG/DexImg/clefairy_home.png",
    "img2": "../IMG/DexImg/clefairy_classic.png",
    "typ1": "fairy",
    "moves": [
      "cute-charm",
      "magic-guard",
      "friend-guard"
    ],
    "statsHP": 70,
    "statsATK": 45,
    "statsDEF": 48,
    "statsINIT": 35,
    "statsSATK": 60,
    "statsSDEF": 65
  },
  {
    "name": "clefable",
    "id": 36,
    "img1": "../IMG/DexImg/clefable_home.png",
    "img2": "../IMG/DexImg/clefable_classic.png",
    "typ1": "fairy",
    "moves": [
      "cute-charm",
      "magic-guard",
      "unaware"
    ],
    "statsHP": 95,
    "statsATK": 70,
    "statsDEF": 73,
    "statsINIT": 60,
    "statsSATK": 95,
    "statsSDEF": 90
  },
  {
    "name": "vulpix",
    "id": 37,
    "img1": "../IMG/DexImg/vulpix_home.png",
    "img2": "../IMG/DexImg/vulpix_classic.png",
    "typ1": "fire",
    "moves": [
      "flash-fire",
      "drought"
    ],
    "statsHP": 38,
    "statsATK": 41,
    "statsDEF": 40,
    "statsINIT": 65,
    "statsSATK": 50,
    "statsSDEF": 65
  },
  {
    "name": "ninetales",
    "id": 38,
    "img1": "../IMG/DexImg/ninetales_home.png",
    "img2": "../IMG/DexImg/ninetales_classic.png",
    "typ1": "fire",
    "moves": [
      "flash-fire",
      "drought"
    ],
    "statsHP": 73,
    "statsATK": 76,
    "statsDEF": 75,
    "statsINIT": 100,
    "statsSATK": 81,
    "statsSDEF": 100
  },
  {
    "name": "jigglypuff",
    "id": 39,
    "img1": "../IMG/DexImg/jigglypuff_home.png",
    "img2": "../IMG/DexImg/jigglypuff_classic.png",
    "typ1": "normal",
    "typ2": "fairy",
    "moves": [
      "cute-charm",
      "competitive",
      "friend-guard"
    ],
    "statsHP": 115,
    "statsATK": 45,
    "statsDEF": 20,
    "statsINIT": 20,
    "statsSATK": 45,
    "statsSDEF": 25
  },
  {
    "name": "wigglytuff",
    "id": 40,
    "img1": "../IMG/DexImg/wigglytuff_home.png",
    "img2": "../IMG/DexImg/wigglytuff_classic.png",
    "typ1": "normal",
    "typ2": "fairy",
    "moves": [
      "cute-charm",
      "competitive",
      "frisk"
    ],
    "statsHP": 140,
    "statsATK": 70,
    "statsDEF": 45,
    "statsINIT": 45,
    "statsSATK": 85,
    "statsSDEF": 50
  },
  {
    "name": "zubat",
    "id": 41,
    "img1": "../IMG/DexImg/zubat_home.png",
    "img2": "../IMG/DexImg/zubat_classic.png",
    "typ1": "poison",
    "typ2": "flying",
    "moves": [
      "inner-focus",
      "infiltrator"
    ],
    "statsHP": 40,
    "statsATK": 45,
    "statsDEF": 35,
    "statsINIT": 55,
    "statsSATK": 30,
    "statsSDEF": 40
  },
  {
    "name": "golbat",
    "id": 42,
    "img1": "../IMG/DexImg/golbat_home.png",
    "img2": "../IMG/DexImg/golbat_classic.png",
    "typ1": "poison",
    "typ2": "flying",
    "moves": [
      "inner-focus",
      "infiltrator"
    ],
    "statsHP": 75,
    "statsATK": 80,
    "statsDEF": 70,
    "statsINIT": 90,
    "statsSATK": 65,
    "statsSDEF": 75
  },
  {
    "name": "oddish",
    "id": 43,
    "img1": "../IMG/DexImg/oddish_home.png",
    "img2": "../IMG/DexImg/oddish_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "run-away"
    ],
    "statsHP": 45,
    "statsATK": 50,
    "statsDEF": 55,
    "statsINIT": 30,
    "statsSATK": 75,
    "statsSDEF": 65
  },
  {
    "name": "gloom",
    "id": 44,
    "img1": "../IMG/DexImg/gloom_home.png",
    "img2": "../IMG/DexImg/gloom_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "stench"
    ],
    "statsHP": 60,
    "statsATK": 65,
    "statsDEF": 70,
    "statsINIT": 40,
    "statsSATK": 85,
    "statsSDEF": 75
  },
  {
    "name": "vileplume",
    "id": 45,
    "img1": "../IMG/DexImg/vileplume_home.png",
    "img2": "../IMG/DexImg/vileplume_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "effect-spore"
    ],
    "statsHP": 75,
    "statsATK": 80,
    "statsDEF": 85,
    "statsINIT": 50,
    "statsSATK": 110,
    "statsSDEF": 90
  },
  {
    "name": "paras",
    "id": 46,
    "img1": "../IMG/DexImg/paras_home.png",
    "img2": "../IMG/DexImg/paras_classic.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "effect-spore",
      "dry-skin",
      "damp"
    ],
    "statsHP": 35,
    "statsATK": 70,
    "statsDEF": 55,
    "statsINIT": 25,
    "statsSATK": 45,
    "statsSDEF": 55
  },
  {
    "name": "parasect",
    "id": 47,
    "img1": "../IMG/DexImg/parasect_home.png",
    "img2": "../IMG/DexImg/parasect_classic.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "effect-spore",
      "dry-skin",
      "damp"
    ],
    "statsHP": 60,
    "statsATK": 95,
    "statsDEF": 80,
    "statsINIT": 30,
    "statsSATK": 60,
    "statsSDEF": 80
  },
  {
    "name": "venonat",
    "id": 48,
    "img1": "../IMG/DexImg/venonat_home.png",
    "img2": "../IMG/DexImg/venonat_classic.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "compound-eyes",
      "tinted-lens",
      "run-away"
    ],
    "statsHP": 60,
    "statsATK": 55,
    "statsDEF": 50,
    "statsINIT": 45,
    "statsSATK": 40,
    "statsSDEF": 55
  },
  {
    "name": "venomoth",
    "id": 49,
    "img1": "../IMG/DexImg/venomoth_home.png",
    "img2": "../IMG/DexImg/venomoth_classic.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "shield-dust",
      "tinted-lens",
      "wonder-skin"
    ],
    "statsHP": 70,
    "statsATK": 65,
    "statsDEF": 60,
    "statsINIT": 90,
    "statsSATK": 90,
    "statsSDEF": 75
  },
  {
    "name": "diglett",
    "id": 50,
    "img1": "../IMG/DexImg/diglett_home.png",
    "img2": "../IMG/DexImg/diglett_classic.png",
    "typ1": "ground",
    "moves": [
      "sand-veil",
      "arena-trap",
      "sand-force"
    ],
    "statsHP": 10,
    "statsATK": 55,
    "statsDEF": 25,
    "statsINIT": 95,
    "statsSATK": 35,
    "statsSDEF": 45
  },
  {
    "name": "dugtrio",
    "id": 51,
    "img1": "../IMG/DexImg/dugtrio_home.png",
    "img2": "../IMG/DexImg/dugtrio_classic.png",
    "typ1": "ground",
    "moves": [
      "sand-veil",
      "arena-trap",
      "sand-force"
    ],
    "statsHP": 35,
    "statsATK": 100,
    "statsDEF": 50,
    "statsINIT": 120,
    "statsSATK": 50,
    "statsSDEF": 70
  },
  {
    "name": "meowth",
    "id": 52,
    "img1": "../IMG/DexImg/meowth_home.png",
    "img2": "../IMG/DexImg/meowth_classic.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "technician",
      "unnerve"
    ],
    "statsHP": 40,
    "statsATK": 45,
    "statsDEF": 35,
    "statsINIT": 90,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "persian",
    "id": 53,
    "img1": "../IMG/DexImg/persian_home.png",
    "img2": "../IMG/DexImg/persian_classic.png",
    "typ1": "normal",
    "moves": [
      "limber",
      "technician",
      "unnerve"
    ],
    "statsHP": 65,
    "statsATK": 70,
    "statsDEF": 60,
    "statsINIT": 115,
    "statsSATK": 65,
    "statsSDEF": 65
  },
  {
    "name": "psyduck",
    "id": 54,
    "img1": "../IMG/DexImg/psyduck_home.png",
    "img2": "../IMG/DexImg/psyduck_classic.png",
    "typ1": "water",
    "moves": [
      "damp",
      "cloud-nine",
      "swift-swim"
    ],
    "statsHP": 50,
    "statsATK": 52,
    "statsDEF": 48,
    "statsINIT": 55,
    "statsSATK": 65,
    "statsSDEF": 50
  },
  {
    "name": "golduck",
    "id": 55,
    "img1": "../IMG/DexImg/golduck_home.png",
    "img2": "../IMG/DexImg/golduck_classic.png",
    "typ1": "water",
    "moves": [
      "damp",
      "cloud-nine",
      "swift-swim"
    ],
    "statsHP": 80,
    "statsATK": 82,
    "statsDEF": 78,
    "statsINIT": 85,
    "statsSATK": 95,
    "statsSDEF": 80
  },
  {
    "name": "mankey",
    "id": 56,
    "img1": "../IMG/DexImg/mankey_home.png",
    "img2": "../IMG/DexImg/mankey_classic.png",
    "typ1": "fighting",
    "moves": [
      "vital-spirit",
      "anger-point",
      "defiant"
    ],
    "statsHP": 40,
    "statsATK": 80,
    "statsDEF": 35,
    "statsINIT": 70,
    "statsSATK": 35,
    "statsSDEF": 45
  },
  {
    "name": "primeape",
    "id": 57,
    "img1": "../IMG/DexImg/primeape_home.png",
    "img2": "../IMG/DexImg/primeape_classic.png",
    "typ1": "fighting",
    "moves": [
      "vital-spirit",
      "anger-point",
      "defiant"
    ],
    "statsHP": 65,
    "statsATK": 105,
    "statsDEF": 60,
    "statsINIT": 95,
    "statsSATK": 60,
    "statsSDEF": 70
  },
  {
    "name": "growlithe",
    "id": 58,
    "img1": "../IMG/DexImg/growlithe_home.png",
    "img2": "../IMG/DexImg/growlithe_classic.png",
    "typ1": "fire",
    "moves": [
      "intimidate",
      "flash-fire",
      "justified"
    ],
    "statsHP": 55,
    "statsATK": 70,
    "statsDEF": 45,
    "statsINIT": 60,
    "statsSATK": 70,
    "statsSDEF": 50
  },
  {
    "name": "arcanine",
    "id": 59,
    "img1": "../IMG/DexImg/arcanine_home.png",
    "img2": "../IMG/DexImg/arcanine_classic.png",
    "typ1": "fire",
    "moves": [
      "intimidate",
      "flash-fire",
      "justified"
    ],
    "statsHP": 90,
    "statsATK": 110,
    "statsDEF": 80,
    "statsINIT": 95,
    "statsSATK": 100,
    "statsSDEF": 80
  },
  {
    "name": "poliwag",
    "id": 60,
    "img1": "../IMG/DexImg/poliwag_home.png",
    "img2": "../IMG/DexImg/poliwag_classic.png",
    "typ1": "water",
    "moves": [
      "water-absorb",
      "damp",
      "swift-swim"
    ],
    "statsHP": 40,
    "statsATK": 50,
    "statsDEF": 40,
    "statsINIT": 90,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "poliwhirl",
    "id": 61,
    "img1": "../IMG/DexImg/poliwhirl_home.png",
    "img2": "../IMG/DexImg/poliwhirl_classic.png",
    "typ1": "water",
    "moves": [
      "water-absorb",
      "damp",
      "swift-swim"
    ],
    "statsHP": 65,
    "statsATK": 65,
    "statsDEF": 65,
    "statsINIT": 90,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "poliwrath",
    "id": 62,
    "img1": "../IMG/DexImg/poliwrath_home.png",
    "img2": "../IMG/DexImg/poliwrath_classic.png",
    "typ1": "water",
    "typ2": "fighting",
    "moves": [
      "water-absorb",
      "damp",
      "swift-swim"
    ],
    "statsHP": 90,
    "statsATK": 95,
    "statsDEF": 95,
    "statsINIT": 70,
    "statsSATK": 70,
    "statsSDEF": 90
  },
  {
    "name": "abra",
    "id": 63,
    "img1": "../IMG/DexImg/abra_home.png",
    "img2": "../IMG/DexImg/abra_classic.png",
    "typ1": "psychic",
    "moves": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ],
    "statsHP": 25,
    "statsATK": 20,
    "statsDEF": 15,
    "statsINIT": 90,
    "statsSATK": 105,
    "statsSDEF": 55
  },
  {
    "name": "kadabra",
    "id": 64,
    "img1": "../IMG/DexImg/kadabra_home.png",
    "img2": "../IMG/DexImg/kadabra_classic.png",
    "typ1": "psychic",
    "moves": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ],
    "statsHP": 40,
    "statsATK": 35,
    "statsDEF": 30,
    "statsINIT": 105,
    "statsSATK": 120,
    "statsSDEF": 70
  },
  {
    "name": "alakazam",
    "id": 65,
    "img1": "../IMG/DexImg/alakazam_home.png",
    "img2": "../IMG/DexImg/alakazam_classic.png",
    "typ1": "psychic",
    "moves": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ],
    "statsHP": 55,
    "statsATK": 50,
    "statsDEF": 45,
    "statsINIT": 120,
    "statsSATK": 135,
    "statsSDEF": 95
  },
  {
    "name": "machop",
    "id": 66,
    "img1": "../IMG/DexImg/machop_home.png",
    "img2": "../IMG/DexImg/machop_classic.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "statsHP": 70,
    "statsATK": 80,
    "statsDEF": 50,
    "statsINIT": 35,
    "statsSATK": 35,
    "statsSDEF": 35
  },
  {
    "name": "machoke",
    "id": 67,
    "img1": "../IMG/DexImg/machoke_home.png",
    "img2": "../IMG/DexImg/machoke_classic.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "statsHP": 80,
    "statsATK": 100,
    "statsDEF": 70,
    "statsINIT": 45,
    "statsSATK": 50,
    "statsSDEF": 60
  },
  {
    "name": "machamp",
    "id": 68,
    "img1": "../IMG/DexImg/machamp_home.png",
    "img2": "../IMG/DexImg/machamp_classic.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "statsHP": 90,
    "statsATK": 130,
    "statsDEF": 80,
    "statsINIT": 55,
    "statsSATK": 65,
    "statsSDEF": 85
  },
  {
    "name": "bellsprout",
    "id": 69,
    "img1": "../IMG/DexImg/bellsprout_home.png",
    "img2": "../IMG/DexImg/bellsprout_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "gluttony"
    ],
    "statsHP": 50,
    "statsATK": 75,
    "statsDEF": 35,
    "statsINIT": 40,
    "statsSATK": 70,
    "statsSDEF": 30
  },
  {
    "name": "weepinbell",
    "id": 70,
    "img1": "../IMG/DexImg/weepinbell_home.png",
    "img2": "../IMG/DexImg/weepinbell_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "gluttony"
    ],
    "statsHP": 65,
    "statsATK": 90,
    "statsDEF": 50,
    "statsINIT": 55,
    "statsSATK": 85,
    "statsSDEF": 45
  },
  {
    "name": "victreebel",
    "id": 71,
    "img1": "../IMG/DexImg/victreebel_home.png",
    "img2": "../IMG/DexImg/victreebel_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "chlorophyll",
      "gluttony"
    ],
    "statsHP": 80,
    "statsATK": 105,
    "statsDEF": 65,
    "statsINIT": 70,
    "statsSATK": 100,
    "statsSDEF": 70
  },
  {
    "name": "tentacool",
    "id": 72,
    "img1": "../IMG/DexImg/tentacool_home.png",
    "img2": "../IMG/DexImg/tentacool_classic.png",
    "typ1": "water",
    "typ2": "poison",
    "moves": [
      "clear-body",
      "liquid-ooze",
      "rain-dish"
    ],
    "statsHP": 40,
    "statsATK": 40,
    "statsDEF": 35,
    "statsINIT": 70,
    "statsSATK": 50,
    "statsSDEF": 100
  },
  {
    "name": "tentacruel",
    "id": 73,
    "img1": "../IMG/DexImg/tentacruel_home.png",
    "img2": "../IMG/DexImg/tentacruel_classic.png",
    "typ1": "water",
    "typ2": "poison",
    "moves": [
      "clear-body",
      "liquid-ooze",
      "rain-dish"
    ],
    "statsHP": 80,
    "statsATK": 70,
    "statsDEF": 65,
    "statsINIT": 100,
    "statsSATK": 80,
    "statsSDEF": 120
  },
  {
    "name": "geodude",
    "id": 74,
    "img1": "../IMG/DexImg/geodude_home.png",
    "img2": "../IMG/DexImg/geodude_classic.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ],
    "statsHP": 40,
    "statsATK": 80,
    "statsDEF": 100,
    "statsINIT": 20,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "graveler",
    "id": 75,
    "img1": "../IMG/DexImg/graveler_home.png",
    "img2": "../IMG/DexImg/graveler_classic.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ],
    "statsHP": 55,
    "statsATK": 95,
    "statsDEF": 115,
    "statsINIT": 35,
    "statsSATK": 45,
    "statsSDEF": 45
  },
  {
    "name": "golem",
    "id": 76,
    "img1": "../IMG/DexImg/golem_home.png",
    "img2": "../IMG/DexImg/golem_classic.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ],
    "statsHP": 80,
    "statsATK": 120,
    "statsDEF": 130,
    "statsINIT": 45,
    "statsSATK": 55,
    "statsSDEF": 65
  },
  {
    "name": "ponyta",
    "id": 77,
    "img1": "../IMG/DexImg/ponyta_home.png",
    "img2": "../IMG/DexImg/ponyta_classic.png",
    "typ1": "fire",
    "moves": [
      "run-away",
      "flash-fire",
      "flame-body"
    ],
    "statsHP": 50,
    "statsATK": 85,
    "statsDEF": 55,
    "statsINIT": 90,
    "statsSATK": 65,
    "statsSDEF": 65
  },
  {
    "name": "rapidash",
    "id": 78,
    "img1": "../IMG/DexImg/rapidash_home.png",
    "img2": "../IMG/DexImg/rapidash_classic.png",
    "typ1": "fire",
    "moves": [
      "run-away",
      "flash-fire",
      "flame-body"
    ],
    "statsHP": 65,
    "statsATK": 100,
    "statsDEF": 70,
    "statsINIT": 105,
    "statsSATK": 80,
    "statsSDEF": 80
  },
  {
    "name": "slowpoke",
    "id": 79,
    "img1": "../IMG/DexImg/slowpoke_home.png",
    "img2": "../IMG/DexImg/slowpoke_classic.png",
    "typ1": "water",
    "typ2": "psychic",
    "moves": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "statsHP": 90,
    "statsATK": 65,
    "statsDEF": 65,
    "statsINIT": 15,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "slowbro",
    "id": 80,
    "img1": "../IMG/DexImg/slowbro_home.png",
    "img2": "../IMG/DexImg/slowbro_classic.png",
    "typ1": "water",
    "typ2": "psychic",
    "moves": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "statsHP": 95,
    "statsATK": 75,
    "statsDEF": 110,
    "statsINIT": 30,
    "statsSATK": 100,
    "statsSDEF": 80
  },
  {
    "name": "magnemite",
    "id": 81,
    "img1": "../IMG/DexImg/magnemite_home.png",
    "img2": "../IMG/DexImg/magnemite_classic.png",
    "typ1": "electric",
    "typ2": "steel",
    "moves": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ],
    "statsHP": 25,
    "statsATK": 35,
    "statsDEF": 70,
    "statsINIT": 45,
    "statsSATK": 95,
    "statsSDEF": 55
  },
  {
    "name": "magneton",
    "id": 82,
    "img1": "../IMG/DexImg/magneton_home.png",
    "img2": "../IMG/DexImg/magneton_classic.png",
    "typ1": "electric",
    "typ2": "steel",
    "moves": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ],
    "statsHP": 50,
    "statsATK": 60,
    "statsDEF": 95,
    "statsINIT": 70,
    "statsSATK": 120,
    "statsSDEF": 70
  },
  {
    "name": "farfetchd",
    "id": 83,
    "img1": "../IMG/DexImg/farfetchd_home.png",
    "img2": "../IMG/DexImg/farfetchd_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "inner-focus",
      "defiant"
    ],
    "statsHP": 52,
    "statsATK": 90,
    "statsDEF": 55,
    "statsINIT": 60,
    "statsSATK": 58,
    "statsSDEF": 62
  },
  {
    "name": "doduo",
    "id": 84,
    "img1": "../IMG/DexImg/doduo_home.png",
    "img2": "../IMG/DexImg/doduo_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "run-away",
      "early-bird",
      "tangled-feet"
    ],
    "statsHP": 35,
    "statsATK": 85,
    "statsDEF": 45,
    "statsINIT": 75,
    "statsSATK": 35,
    "statsSDEF": 35
  },
  {
    "name": "dodrio",
    "id": 85,
    "img1": "../IMG/DexImg/dodrio_home.png",
    "img2": "../IMG/DexImg/dodrio_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "run-away",
      "early-bird",
      "tangled-feet"
    ],
    "statsHP": 60,
    "statsATK": 110,
    "statsDEF": 70,
    "statsINIT": 110,
    "statsSATK": 60,
    "statsSDEF": 60
  },
  {
    "name": "seel",
    "id": 86,
    "img1": "../IMG/DexImg/seel_home.png",
    "img2": "../IMG/DexImg/seel_classic.png",
    "typ1": "water",
    "moves": [
      "thick-fat",
      "hydration",
      "ice-body"
    ],
    "statsHP": 65,
    "statsATK": 45,
    "statsDEF": 55,
    "statsINIT": 45,
    "statsSATK": 45,
    "statsSDEF": 70
  },
  {
    "name": "dewgong",
    "id": 87,
    "img1": "../IMG/DexImg/dewgong_home.png",
    "img2": "../IMG/DexImg/dewgong_classic.png",
    "typ1": "water",
    "typ2": "ice",
    "moves": [
      "thick-fat",
      "hydration",
      "ice-body"
    ],
    "statsHP": 90,
    "statsATK": 70,
    "statsDEF": 80,
    "statsINIT": 70,
    "statsSATK": 70,
    "statsSDEF": 95
  },
  {
    "name": "grimer",
    "id": 88,
    "img1": "../IMG/DexImg/grimer_home.png",
    "img2": "../IMG/DexImg/grimer_classic.png",
    "typ1": "poison",
    "moves": [
      "stench",
      "sticky-hold",
      "poison-touch"
    ],
    "statsHP": 80,
    "statsATK": 80,
    "statsDEF": 50,
    "statsINIT": 25,
    "statsSATK": 40,
    "statsSDEF": 50
  },
  {
    "name": "muk",
    "id": 89,
    "img1": "../IMG/DexImg/muk_home.png",
    "img2": "../IMG/DexImg/muk_classic.png",
    "typ1": "poison",
    "moves": [
      "stench",
      "sticky-hold",
      "poison-touch"
    ],
    "statsHP": 105,
    "statsATK": 105,
    "statsDEF": 75,
    "statsINIT": 50,
    "statsSATK": 65,
    "statsSDEF": 100
  },
  {
    "name": "shellder",
    "id": 90,
    "img1": "../IMG/DexImg/shellder_home.png",
    "img2": "../IMG/DexImg/shellder_classic.png",
    "typ1": "water",
    "moves": [
      "shell-armor",
      "skill-link",
      "overcoat"
    ],
    "statsHP": 30,
    "statsATK": 65,
    "statsDEF": 100,
    "statsINIT": 40,
    "statsSATK": 45,
    "statsSDEF": 25
  },
  {
    "name": "cloyster",
    "id": 91,
    "img1": "../IMG/DexImg/cloyster_home.png",
    "img2": "../IMG/DexImg/cloyster_classic.png",
    "typ1": "water",
    "typ2": "ice",
    "moves": [
      "shell-armor",
      "skill-link",
      "overcoat"
    ],
    "statsHP": 50,
    "statsATK": 95,
    "statsDEF": 180,
    "statsINIT": 70,
    "statsSATK": 85,
    "statsSDEF": 45
  },
  {
    "name": "gastly",
    "id": 92,
    "img1": "../IMG/DexImg/gastly_home.png",
    "img2": "../IMG/DexImg/gastly_classic.png",
    "typ1": "ghost",
    "typ2": "poison",
    "moves": [
      "levitate"
    ],
    "statsHP": 30,
    "statsATK": 35,
    "statsDEF": 30,
    "statsINIT": 80,
    "statsSATK": 100,
    "statsSDEF": 35
  },
  {
    "name": "haunter",
    "id": 93,
    "img1": "../IMG/DexImg/haunter_home.png",
    "img2": "../IMG/DexImg/haunter_classic.png",
    "typ1": "ghost",
    "typ2": "poison",
    "moves": [
      "levitate"
    ],
    "statsHP": 45,
    "statsATK": 50,
    "statsDEF": 45,
    "statsINIT": 95,
    "statsSATK": 115,
    "statsSDEF": 55
  },
  {
    "name": "gengar",
    "id": 94,
    "img1": "../IMG/DexImg/gengar_home.png",
    "img2": "../IMG/DexImg/gengar_classic.png",
    "typ1": "ghost",
    "typ2": "poison",
    "moves": [
      "cursed-body"
    ],
    "statsHP": 60,
    "statsATK": 65,
    "statsDEF": 60,
    "statsINIT": 110,
    "statsSATK": 130,
    "statsSDEF": 75
  },
  {
    "name": "onix",
    "id": 95,
    "img1": "../IMG/DexImg/onix_home.png",
    "img2": "../IMG/DexImg/onix_classic.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "rock-head",
      "sturdy",
      "weak-armor"
    ],
    "statsHP": 35,
    "statsATK": 45,
    "statsDEF": 160,
    "statsINIT": 70,
    "statsSATK": 30,
    "statsSDEF": 45
  },
  {
    "name": "drowzee",
    "id": 96,
    "img1": "../IMG/DexImg/drowzee_home.png",
    "img2": "../IMG/DexImg/drowzee_classic.png",
    "typ1": "psychic",
    "moves": [
      "insomnia",
      "forewarn",
      "inner-focus"
    ],
    "statsHP": 60,
    "statsATK": 48,
    "statsDEF": 45,
    "statsINIT": 42,
    "statsSATK": 43,
    "statsSDEF": 90
  },
  {
    "name": "hypno",
    "id": 97,
    "img1": "../IMG/DexImg/hypno_home.png",
    "img2": "../IMG/DexImg/hypno_classic.png",
    "typ1": "psychic",
    "moves": [
      "insomnia",
      "forewarn",
      "inner-focus"
    ],
    "statsHP": 85,
    "statsATK": 73,
    "statsDEF": 70,
    "statsINIT": 67,
    "statsSATK": 73,
    "statsSDEF": 115
  },
  {
    "name": "krabby",
    "id": 98,
    "img1": "../IMG/DexImg/krabby_home.png",
    "img2": "../IMG/DexImg/krabby_classic.png",
    "typ1": "water",
    "moves": [
      "hyper-cutter",
      "shell-armor",
      "sheer-force"
    ],
    "statsHP": 30,
    "statsATK": 105,
    "statsDEF": 90,
    "statsINIT": 50,
    "statsSATK": 25,
    "statsSDEF": 25
  },
  {
    "name": "kingler",
    "id": 99,
    "img1": "../IMG/DexImg/kingler_home.png",
    "img2": "../IMG/DexImg/kingler_classic.png",
    "typ1": "water",
    "moves": [
      "hyper-cutter",
      "shell-armor",
      "sheer-force"
    ],
    "statsHP": 55,
    "statsATK": 130,
    "statsDEF": 115,
    "statsINIT": 75,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "voltorb",
    "id": 100,
    "img1": "../IMG/DexImg/voltorb_home.png",
    "img2": "../IMG/DexImg/voltorb_classic.png",
    "typ1": "electric",
    "moves": [
      "soundproof",
      "static",
      "aftermath"
    ],
    "statsHP": 40,
    "statsATK": 30,
    "statsDEF": 50,
    "statsINIT": 100,
    "statsSATK": 55,
    "statsSDEF": 55
  },
  {
    "name": "electrode",
    "id": 101,
    "img1": "../IMG/DexImg/electrode_home.png",
    "img2": "../IMG/DexImg/electrode_classic.png",
    "typ1": "electric",
    "moves": [
      "soundproof",
      "static",
      "aftermath"
    ],
    "statsHP": 60,
    "statsATK": 50,
    "statsDEF": 70,
    "statsINIT": 150,
    "statsSATK": 80,
    "statsSDEF": 80
  },
  {
    "name": "exeggcute",
    "id": 102,
    "img1": "../IMG/DexImg/exeggcute_home.png",
    "img2": "../IMG/DexImg/exeggcute_classic.png",
    "typ1": "grass",
    "typ2": "psychic",
    "moves": [
      "chlorophyll",
      "harvest"
    ],
    "statsHP": 60,
    "statsATK": 40,
    "statsDEF": 80,
    "statsINIT": 40,
    "statsSATK": 60,
    "statsSDEF": 45
  },
  {
    "name": "exeggutor",
    "id": 103,
    "img1": "../IMG/DexImg/exeggutor_home.png",
    "img2": "../IMG/DexImg/exeggutor_classic.png",
    "typ1": "grass",
    "typ2": "psychic",
    "moves": [
      "chlorophyll",
      "harvest"
    ],
    "statsHP": 95,
    "statsATK": 95,
    "statsDEF": 85,
    "statsINIT": 55,
    "statsSATK": 125,
    "statsSDEF": 75
  },
  {
    "name": "cubone",
    "id": 104,
    "img1": "../IMG/DexImg/cubone_home.png",
    "img2": "../IMG/DexImg/cubone_classic.png",
    "typ1": "ground",
    "moves": [
      "rock-head",
      "lightning-rod",
      "battle-armor"
    ],
    "statsHP": 50,
    "statsATK": 50,
    "statsDEF": 95,
    "statsINIT": 35,
    "statsSATK": 40,
    "statsSDEF": 50
  },
  {
    "name": "marowak",
    "id": 105,
    "img1": "../IMG/DexImg/marowak_home.png",
    "img2": "../IMG/DexImg/marowak_classic.png",
    "typ1": "ground",
    "moves": [
      "rock-head",
      "lightning-rod",
      "battle-armor"
    ],
    "statsHP": 60,
    "statsATK": 80,
    "statsDEF": 110,
    "statsINIT": 45,
    "statsSATK": 50,
    "statsSDEF": 80
  },
  {
    "name": "hitmonlee",
    "id": 106,
    "img1": "../IMG/DexImg/hitmonlee_home.png",
    "img2": "../IMG/DexImg/hitmonlee_classic.png",
    "typ1": "fighting",
    "moves": [
      "limber",
      "reckless",
      "unburden"
    ],
    "statsHP": 50,
    "statsATK": 120,
    "statsDEF": 53,
    "statsINIT": 87,
    "statsSATK": 35,
    "statsSDEF": 110
  },
  {
    "name": "hitmonchan",
    "id": 107,
    "img1": "../IMG/DexImg/hitmonchan_home.png",
    "img2": "../IMG/DexImg/hitmonchan_classic.png",
    "typ1": "fighting",
    "moves": [
      "keen-eye",
      "iron-fist",
      "inner-focus"
    ],
    "statsHP": 50,
    "statsATK": 105,
    "statsDEF": 79,
    "statsINIT": 76,
    "statsSATK": 35,
    "statsSDEF": 110
  },
  {
    "name": "lickitung",
    "id": 108,
    "img1": "../IMG/DexImg/lickitung_home.png",
    "img2": "../IMG/DexImg/lickitung_classic.png",
    "typ1": "normal",
    "moves": [
      "own-tempo",
      "oblivious",
      "cloud-nine"
    ],
    "statsHP": 90,
    "statsATK": 55,
    "statsDEF": 75,
    "statsINIT": 30,
    "statsSATK": 60,
    "statsSDEF": 75
  },
  {
    "name": "koffing",
    "id": 109,
    "img1": "../IMG/DexImg/koffing_home.png",
    "img2": "../IMG/DexImg/koffing_classic.png",
    "typ1": "poison",
    "moves": [
      "levitate",
      "neutralizing-gas",
      "stench"
    ],
    "statsHP": 40,
    "statsATK": 65,
    "statsDEF": 95,
    "statsINIT": 35,
    "statsSATK": 60,
    "statsSDEF": 45
  },
  {
    "name": "weezing",
    "id": 110,
    "img1": "../IMG/DexImg/weezing_home.png",
    "img2": "../IMG/DexImg/weezing_classic.png",
    "typ1": "poison",
    "moves": [
      "levitate",
      "neutralizing-gas",
      "stench"
    ],
    "statsHP": 65,
    "statsATK": 90,
    "statsDEF": 120,
    "statsINIT": 60,
    "statsSATK": 85,
    "statsSDEF": 70
  },
  {
    "name": "rhyhorn",
    "id": 111,
    "img1": "../IMG/DexImg/rhyhorn_home.png",
    "img2": "../IMG/DexImg/rhyhorn_classic.png",
    "typ1": "ground",
    "typ2": "rock",
    "moves": [
      "lightning-rod",
      "rock-head",
      "reckless"
    ],
    "statsHP": 80,
    "statsATK": 85,
    "statsDEF": 95,
    "statsINIT": 25,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "rhydon",
    "id": 112,
    "img1": "../IMG/DexImg/rhydon_home.png",
    "img2": "../IMG/DexImg/rhydon_classic.png",
    "typ1": "ground",
    "typ2": "rock",
    "moves": [
      "lightning-rod",
      "rock-head",
      "reckless"
    ],
    "statsHP": 105,
    "statsATK": 130,
    "statsDEF": 120,
    "statsINIT": 40,
    "statsSATK": 45,
    "statsSDEF": 45
  },
  {
    "name": "chansey",
    "id": 113,
    "img1": "../IMG/DexImg/chansey_home.png",
    "img2": "../IMG/DexImg/chansey_classic.png",
    "typ1": "normal",
    "moves": [
      "natural-cure",
      "serene-grace",
      "healer"
    ],
    "statsHP": 250,
    "statsATK": 5,
    "statsDEF": 5,
    "statsINIT": 50,
    "statsSATK": 35,
    "statsSDEF": 105
  },
  {
    "name": "tangela",
    "id": 114,
    "img1": "../IMG/DexImg/tangela_home.png",
    "img2": "../IMG/DexImg/tangela_classic.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "leaf-guard",
      "regenerator"
    ],
    "statsHP": 65,
    "statsATK": 55,
    "statsDEF": 115,
    "statsINIT": 60,
    "statsSATK": 100,
    "statsSDEF": 40
  },
  {
    "name": "kangaskhan",
    "id": 115,
    "img1": "../IMG/DexImg/kangaskhan_home.png",
    "img2": "../IMG/DexImg/kangaskhan_classic.png",
    "typ1": "normal",
    "moves": [
      "early-bird",
      "scrappy",
      "inner-focus"
    ],
    "statsHP": 105,
    "statsATK": 95,
    "statsDEF": 80,
    "statsINIT": 90,
    "statsSATK": 40,
    "statsSDEF": 80
  },
  {
    "name": "horsea",
    "id": 116,
    "img1": "../IMG/DexImg/horsea_home.png",
    "img2": "../IMG/DexImg/horsea_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "sniper",
      "damp"
    ],
    "statsHP": 30,
    "statsATK": 40,
    "statsDEF": 70,
    "statsINIT": 60,
    "statsSATK": 70,
    "statsSDEF": 25
  },
  {
    "name": "seadra",
    "id": 117,
    "img1": "../IMG/DexImg/seadra_home.png",
    "img2": "../IMG/DexImg/seadra_classic.png",
    "typ1": "water",
    "moves": [
      "poison-point",
      "sniper",
      "damp"
    ],
    "statsHP": 55,
    "statsATK": 65,
    "statsDEF": 95,
    "statsINIT": 85,
    "statsSATK": 95,
    "statsSDEF": 45
  },
  {
    "name": "goldeen",
    "id": 118,
    "img1": "../IMG/DexImg/goldeen_home.png",
    "img2": "../IMG/DexImg/goldeen_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "water-veil",
      "lightning-rod"
    ],
    "statsHP": 45,
    "statsATK": 67,
    "statsDEF": 60,
    "statsINIT": 63,
    "statsSATK": 35,
    "statsSDEF": 50
  },
  {
    "name": "seaking",
    "id": 119,
    "img1": "../IMG/DexImg/seaking_home.png",
    "img2": "../IMG/DexImg/seaking_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "water-veil",
      "lightning-rod"
    ],
    "statsHP": 80,
    "statsATK": 92,
    "statsDEF": 65,
    "statsINIT": 68,
    "statsSATK": 65,
    "statsSDEF": 80
  },
  {
    "name": "staryu",
    "id": 120,
    "img1": "../IMG/DexImg/staryu_home.png",
    "img2": "../IMG/DexImg/staryu_classic.png",
    "typ1": "water",
    "moves": [
      "illuminate",
      "natural-cure",
      "analytic"
    ],
    "statsHP": 30,
    "statsATK": 45,
    "statsDEF": 55,
    "statsINIT": 85,
    "statsSATK": 70,
    "statsSDEF": 55
  },
  {
    "name": "starmie",
    "id": 121,
    "img1": "../IMG/DexImg/starmie_home.png",
    "img2": "../IMG/DexImg/starmie_classic.png",
    "typ1": "water",
    "typ2": "psychic",
    "moves": [
      "illuminate",
      "natural-cure",
      "analytic"
    ],
    "statsHP": 60,
    "statsATK": 75,
    "statsDEF": 85,
    "statsINIT": 115,
    "statsSATK": 100,
    "statsSDEF": 85
  },
  {
    "name": "mr-mime",
    "id": 122,
    "img1": "../IMG/DexImg/mr-mime_home.png",
    "img2": "../IMG/DexImg/mr-mime_classic.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "soundproof",
      "filter",
      "technician"
    ],
    "statsHP": 40,
    "statsATK": 45,
    "statsDEF": 65,
    "statsINIT": 90,
    "statsSATK": 100,
    "statsSDEF": 120
  },
  {
    "name": "scyther",
    "id": 123,
    "img1": "../IMG/DexImg/scyther_home.png",
    "img2": "../IMG/DexImg/scyther_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "swarm",
      "technician",
      "steadfast"
    ],
    "statsHP": 70,
    "statsATK": 110,
    "statsDEF": 80,
    "statsINIT": 105,
    "statsSATK": 55,
    "statsSDEF": 80
  },
  {
    "name": "jynx",
    "id": 124,
    "img1": "../IMG/DexImg/jynx_home.png",
    "img2": "../IMG/DexImg/jynx_classic.png",
    "typ1": "ice",
    "typ2": "psychic",
    "moves": [
      "oblivious",
      "forewarn",
      "dry-skin"
    ],
    "statsHP": 65,
    "statsATK": 50,
    "statsDEF": 35,
    "statsINIT": 95,
    "statsSATK": 115,
    "statsSDEF": 95
  },
  {
    "name": "electabuzz",
    "id": 125,
    "img1": "../IMG/DexImg/electabuzz_home.png",
    "img2": "../IMG/DexImg/electabuzz_classic.png",
    "typ1": "electric",
    "moves": [
      "static",
      "vital-spirit"
    ],
    "statsHP": 65,
    "statsATK": 83,
    "statsDEF": 57,
    "statsINIT": 105,
    "statsSATK": 95,
    "statsSDEF": 85
  },
  {
    "name": "magmar",
    "id": 126,
    "img1": "../IMG/DexImg/magmar_home.png",
    "img2": "../IMG/DexImg/magmar_classic.png",
    "typ1": "fire",
    "moves": [
      "flame-body",
      "vital-spirit"
    ],
    "statsHP": 65,
    "statsATK": 95,
    "statsDEF": 57,
    "statsINIT": 93,
    "statsSATK": 100,
    "statsSDEF": 85
  },
  {
    "name": "pinsir",
    "id": 127,
    "img1": "../IMG/DexImg/pinsir_home.png",
    "img2": "../IMG/DexImg/pinsir_classic.png",
    "typ1": "bug",
    "moves": [
      "hyper-cutter",
      "mold-breaker",
      "moxie"
    ],
    "statsHP": 65,
    "statsATK": 125,
    "statsDEF": 100,
    "statsINIT": 85,
    "statsSATK": 55,
    "statsSDEF": 70
  },
  {
    "name": "tauros",
    "id": 128,
    "img1": "../IMG/DexImg/tauros_home.png",
    "img2": "../IMG/DexImg/tauros_classic.png",
    "typ1": "normal",
    "moves": [
      "intimidate",
      "anger-point",
      "sheer-force"
    ],
    "statsHP": 75,
    "statsATK": 100,
    "statsDEF": 95,
    "statsINIT": 110,
    "statsSATK": 40,
    "statsSDEF": 70
  },
  {
    "name": "magikarp",
    "id": 129,
    "img1": "../IMG/DexImg/magikarp_home.png",
    "img2": "../IMG/DexImg/magikarp_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "rattled"
    ],
    "statsHP": 20,
    "statsATK": 10,
    "statsDEF": 55,
    "statsINIT": 80,
    "statsSATK": 15,
    "statsSDEF": 20
  },
  {
    "name": "gyarados",
    "id": 130,
    "img1": "../IMG/DexImg/gyarados_home.png",
    "img2": "../IMG/DexImg/gyarados_classic.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "intimidate",
      "moxie"
    ],
    "statsHP": 95,
    "statsATK": 125,
    "statsDEF": 79,
    "statsINIT": 81,
    "statsSATK": 60,
    "statsSDEF": 100
  },
  {
    "name": "lapras",
    "id": 131,
    "img1": "../IMG/DexImg/lapras_home.png",
    "img2": "../IMG/DexImg/lapras_classic.png",
    "typ1": "water",
    "typ2": "ice",
    "moves": [
      "water-absorb",
      "shell-armor",
      "hydration"
    ],
    "statsHP": 130,
    "statsATK": 85,
    "statsDEF": 80,
    "statsINIT": 60,
    "statsSATK": 85,
    "statsSDEF": 95
  },
  {
    "name": "ditto",
    "id": 132,
    "img1": "../IMG/DexImg/ditto_home.png",
    "img2": "../IMG/DexImg/ditto_classic.png",
    "typ1": "normal",
    "moves": [
      "limber",
      "imposter"
    ],
    "statsHP": 48,
    "statsATK": 48,
    "statsDEF": 48,
    "statsINIT": 48,
    "statsSATK": 48,
    "statsSDEF": 48
  },
  {
    "name": "eevee",
    "id": 133,
    "img1": "../IMG/DexImg/eevee_home.png",
    "img2": "../IMG/DexImg/eevee_classic.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "adaptability",
      "anticipation"
    ],
    "statsHP": 55,
    "statsATK": 55,
    "statsDEF": 50,
    "statsINIT": 55,
    "statsSATK": 45,
    "statsSDEF": 65
  },
  {
    "name": "vaporeon",
    "id": 134,
    "img1": "../IMG/DexImg/vaporeon_home.png",
    "img2": "../IMG/DexImg/vaporeon_classic.png",
    "typ1": "water",
    "moves": [
      "water-absorb",
      "hydration"
    ],
    "statsHP": 130,
    "statsATK": 65,
    "statsDEF": 60,
    "statsINIT": 65,
    "statsSATK": 110,
    "statsSDEF": 95
  },
  {
    "name": "jolteon",
    "id": 135,
    "img1": "../IMG/DexImg/jolteon_home.png",
    "img2": "../IMG/DexImg/jolteon_classic.png",
    "typ1": "electric",
    "moves": [
      "volt-absorb",
      "quick-feet"
    ],
    "statsHP": 65,
    "statsATK": 65,
    "statsDEF": 60,
    "statsINIT": 130,
    "statsSATK": 110,
    "statsSDEF": 95
  },
  {
    "name": "flareon",
    "id": 136,
    "img1": "../IMG/DexImg/flareon_home.png",
    "img2": "../IMG/DexImg/flareon_classic.png",
    "typ1": "fire",
    "moves": [
      "flash-fire",
      "guts"
    ],
    "statsHP": 65,
    "statsATK": 130,
    "statsDEF": 60,
    "statsINIT": 65,
    "statsSATK": 95,
    "statsSDEF": 110
  },
  {
    "name": "porygon",
    "id": 137,
    "img1": "../IMG/DexImg/porygon_home.png",
    "img2": "../IMG/DexImg/porygon_classic.png",
    "typ1": "normal",
    "moves": [
      "trace",
      "download",
      "analytic"
    ],
    "statsHP": 65,
    "statsATK": 60,
    "statsDEF": 70,
    "statsINIT": 40,
    "statsSATK": 85,
    "statsSDEF": 75
  },
  {
    "name": "omanyte",
    "id": 138,
    "img1": "../IMG/DexImg/omanyte_home.png",
    "img2": "../IMG/DexImg/omanyte_classic.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "swift-swim",
      "shell-armor",
      "weak-armor"
    ],
    "statsHP": 35,
    "statsATK": 40,
    "statsDEF": 100,
    "statsINIT": 35,
    "statsSATK": 90,
    "statsSDEF": 55
  },
  {
    "name": "omastar",
    "id": 139,
    "img1": "../IMG/DexImg/omastar_home.png",
    "img2": "../IMG/DexImg/omastar_classic.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "swift-swim",
      "shell-armor",
      "weak-armor"
    ],
    "statsHP": 70,
    "statsATK": 60,
    "statsDEF": 125,
    "statsINIT": 55,
    "statsSATK": 115,
    "statsSDEF": 70
  },
  {
    "name": "kabuto",
    "id": 140,
    "img1": "../IMG/DexImg/kabuto_home.png",
    "img2": "../IMG/DexImg/kabuto_classic.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "swift-swim",
      "battle-armor",
      "weak-armor"
    ],
    "statsHP": 30,
    "statsATK": 80,
    "statsDEF": 90,
    "statsINIT": 55,
    "statsSATK": 55,
    "statsSDEF": 45
  },
  {
    "name": "kabutops",
    "id": 141,
    "img1": "../IMG/DexImg/kabutops_home.png",
    "img2": "../IMG/DexImg/kabutops_classic.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "swift-swim",
      "battle-armor",
      "weak-armor"
    ],
    "statsHP": 60,
    "statsATK": 115,
    "statsDEF": 105,
    "statsINIT": 80,
    "statsSATK": 65,
    "statsSDEF": 70
  },
  {
    "name": "aerodactyl",
    "id": 142,
    "img1": "../IMG/DexImg/aerodactyl_home.png",
    "img2": "../IMG/DexImg/aerodactyl_classic.png",
    "typ1": "rock",
    "typ2": "flying",
    "moves": [
      "rock-head",
      "pressure",
      "unnerve"
    ],
    "statsHP": 80,
    "statsATK": 105,
    "statsDEF": 65,
    "statsINIT": 130,
    "statsSATK": 60,
    "statsSDEF": 75
  },
  {
    "name": "snorlax",
    "id": 143,
    "img1": "../IMG/DexImg/snorlax_home.png",
    "img2": "../IMG/DexImg/snorlax_classic.png",
    "typ1": "normal",
    "moves": [
      "immunity",
      "thick-fat",
      "gluttony"
    ],
    "statsHP": 160,
    "statsATK": 110,
    "statsDEF": 65,
    "statsINIT": 30,
    "statsSATK": 65,
    "statsSDEF": 110
  },
  {
    "name": "articuno",
    "id": 144,
    "img1": "../IMG/DexImg/articuno_home.png",
    "img2": "../IMG/DexImg/articuno_classic.png",
    "typ1": "ice",
    "typ2": "flying",
    "moves": [
      "pressure",
      "snow-cloak"
    ],
    "statsHP": 90,
    "statsATK": 85,
    "statsDEF": 100,
    "statsINIT": 85,
    "statsSATK": 95,
    "statsSDEF": 125
  },
  {
    "name": "zapdos",
    "id": 145,
    "img1": "../IMG/DexImg/zapdos_home.png",
    "img2": "../IMG/DexImg/zapdos_classic.png",
    "typ1": "electric",
    "typ2": "flying",
    "moves": [
      "pressure",
      "static"
    ],
    "statsHP": 90,
    "statsATK": 90,
    "statsDEF": 85,
    "statsINIT": 100,
    "statsSATK": 125,
    "statsSDEF": 90
  },
  {
    "name": "moltres",
    "id": 146,
    "img1": "../IMG/DexImg/moltres_home.png",
    "img2": "../IMG/DexImg/moltres_classic.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "pressure",
      "flame-body"
    ],
    "statsHP": 90,
    "statsATK": 100,
    "statsDEF": 90,
    "statsINIT": 90,
    "statsSATK": 125,
    "statsSDEF": 85
  },
  {
    "name": "dratini",
    "id": 147,
    "img1": "../IMG/DexImg/dratini_home.png",
    "img2": "../IMG/DexImg/dratini_classic.png",
    "typ1": "dragon",
    "moves": [
      "shed-skin",
      "marvel-scale"
    ],
    "statsHP": 41,
    "statsATK": 64,
    "statsDEF": 45,
    "statsINIT": 50,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "dragonair",
    "id": 148,
    "img1": "../IMG/DexImg/dragonair_home.png",
    "img2": "../IMG/DexImg/dragonair_classic.png",
    "typ1": "dragon",
    "moves": [
      "shed-skin",
      "marvel-scale"
    ],
    "statsHP": 61,
    "statsATK": 84,
    "statsDEF": 65,
    "statsINIT": 70,
    "statsSATK": 70,
    "statsSDEF": 70
  },
  {
    "name": "dragonite",
    "id": 149,
    "img1": "../IMG/DexImg/dragonite_home.png",
    "img2": "../IMG/DexImg/dragonite_classic.png",
    "typ1": "dragon",
    "typ2": "flying",
    "moves": [
      "inner-focus",
      "multiscale"
    ],
    "statsHP": 91,
    "statsATK": 134,
    "statsDEF": 95,
    "statsINIT": 80,
    "statsSATK": 100,
    "statsSDEF": 100
  },
  {
    "name": "mewtwo",
    "id": 150,
    "img1": "../IMG/DexImg/mewtwo_home.png",
    "img2": "../IMG/DexImg/mewtwo_classic.png",
    "typ1": "psychic",
    "moves": [
      "pressure",
      "unnerve"
    ],
    "statsHP": 106,
    "statsATK": 110,
    "statsDEF": 90,
    "statsINIT": 130,
    "statsSATK": 154,
    "statsSDEF": 90
  },
  {
    "name": "mew",
    "id": 151,
    "img1": "../IMG/DexImg/mew_home.png",
    "img2": "../IMG/DexImg/mew_classic.png",
    "typ1": "psychic",
    "moves": [
      "synchronize"
    ],
    "statsHP": 100,
    "statsATK": 100,
    "statsDEF": 100,
    "statsINIT": 100,
    "statsSATK": 100,
    "statsSDEF": 100
  },
  {
    "name": "chikorita",
    "id": 152,
    "img1": "../IMG/DexImg/chikorita_home.png",
    "img2": "../IMG/DexImg/chikorita_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "leaf-guard"
    ],
    "statsHP": 45,
    "statsATK": 49,
    "statsDEF": 65,
    "statsINIT": 45,
    "statsSATK": 49,
    "statsSDEF": 65
  },
  {
    "name": "bayleef",
    "id": 153,
    "img1": "../IMG/DexImg/bayleef_home.png",
    "img2": "../IMG/DexImg/bayleef_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "leaf-guard"
    ],
    "statsHP": 60,
    "statsATK": 62,
    "statsDEF": 80,
    "statsINIT": 60,
    "statsSATK": 63,
    "statsSDEF": 80
  },
  {
    "name": "meganium",
    "id": 154,
    "img1": "../IMG/DexImg/meganium_home.png",
    "img2": "../IMG/DexImg/meganium_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "leaf-guard"
    ],
    "statsHP": 80,
    "statsATK": 82,
    "statsDEF": 100,
    "statsINIT": 80,
    "statsSATK": 83,
    "statsSDEF": 100
  },
  {
    "name": "cyndaquil",
    "id": 155,
    "img1": "../IMG/DexImg/cyndaquil_home.png",
    "img2": "../IMG/DexImg/cyndaquil_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "flash-fire"
    ],
    "statsHP": 39,
    "statsATK": 52,
    "statsDEF": 43,
    "statsINIT": 65,
    "statsSATK": 60,
    "statsSDEF": 50
  },
  {
    "name": "quilava",
    "id": 156,
    "img1": "../IMG/DexImg/quilava_home.png",
    "img2": "../IMG/DexImg/quilava_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "flash-fire"
    ],
    "statsHP": 58,
    "statsATK": 64,
    "statsDEF": 58,
    "statsINIT": 80,
    "statsSATK": 80,
    "statsSDEF": 65
  },
  {
    "name": "typhlosion",
    "id": 157,
    "img1": "../IMG/DexImg/typhlosion_home.png",
    "img2": "../IMG/DexImg/typhlosion_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "flash-fire"
    ],
    "statsHP": 78,
    "statsATK": 84,
    "statsDEF": 78,
    "statsINIT": 100,
    "statsSATK": 109,
    "statsSDEF": 85
  },
  {
    "name": "totodile",
    "id": 158,
    "img1": "../IMG/DexImg/totodile_home.png",
    "img2": "../IMG/DexImg/totodile_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "sheer-force"
    ],
    "statsHP": 50,
    "statsATK": 65,
    "statsDEF": 64,
    "statsINIT": 43,
    "statsSATK": 44,
    "statsSDEF": 48
  },
  {
    "name": "croconaw",
    "id": 159,
    "img1": "../IMG/DexImg/croconaw_home.png",
    "img2": "../IMG/DexImg/croconaw_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "sheer-force"
    ],
    "statsHP": 65,
    "statsATK": 80,
    "statsDEF": 80,
    "statsINIT": 58,
    "statsSATK": 59,
    "statsSDEF": 63
  },
  {
    "name": "feraligatr",
    "id": 160,
    "img1": "../IMG/DexImg/feraligatr_home.png",
    "img2": "../IMG/DexImg/feraligatr_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "sheer-force"
    ],
    "statsHP": 85,
    "statsATK": 105,
    "statsDEF": 100,
    "statsINIT": 78,
    "statsSATK": 79,
    "statsSDEF": 83
  },
  {
    "name": "sentret",
    "id": 161,
    "img1": "../IMG/DexImg/sentret_home.png",
    "img2": "../IMG/DexImg/sentret_classic.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "keen-eye",
      "frisk"
    ],
    "statsHP": 35,
    "statsATK": 46,
    "statsDEF": 34,
    "statsINIT": 20,
    "statsSATK": 35,
    "statsSDEF": 45
  },
  {
    "name": "furret",
    "id": 162,
    "img1": "../IMG/DexImg/furret_home.png",
    "img2": "../IMG/DexImg/furret_classic.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "keen-eye",
      "frisk"
    ],
    "statsHP": 85,
    "statsATK": 76,
    "statsDEF": 64,
    "statsINIT": 90,
    "statsSATK": 45,
    "statsSDEF": 55
  },
  {
    "name": "hoothoot",
    "id": 163,
    "img1": "../IMG/DexImg/hoothoot_home.png",
    "img2": "../IMG/DexImg/hoothoot_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "insomnia",
      "keen-eye",
      "tinted-lens"
    ],
    "statsHP": 60,
    "statsATK": 30,
    "statsDEF": 30,
    "statsINIT": 50,
    "statsSATK": 36,
    "statsSDEF": 56
  },
  {
    "name": "noctowl",
    "id": 164,
    "img1": "../IMG/DexImg/noctowl_home.png",
    "img2": "../IMG/DexImg/noctowl_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "insomnia",
      "keen-eye",
      "tinted-lens"
    ],
    "statsHP": 100,
    "statsATK": 50,
    "statsDEF": 50,
    "statsINIT": 70,
    "statsSATK": 86,
    "statsSDEF": 96
  },
  {
    "name": "ledyba",
    "id": 165,
    "img1": "../IMG/DexImg/ledyba_home.png",
    "img2": "../IMG/DexImg/ledyba_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "swarm",
      "early-bird",
      "rattled"
    ],
    "statsHP": 40,
    "statsATK": 20,
    "statsDEF": 30,
    "statsINIT": 55,
    "statsSATK": 40,
    "statsSDEF": 80
  },
  {
    "name": "ledian",
    "id": 166,
    "img1": "../IMG/DexImg/ledian_home.png",
    "img2": "../IMG/DexImg/ledian_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "swarm",
      "early-bird",
      "iron-fist"
    ],
    "statsHP": 55,
    "statsATK": 35,
    "statsDEF": 50,
    "statsINIT": 85,
    "statsSATK": 55,
    "statsSDEF": 110
  },
  {
    "name": "spinarak",
    "id": 167,
    "img1": "../IMG/DexImg/spinarak_home.png",
    "img2": "../IMG/DexImg/spinarak_classic.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "swarm",
      "insomnia",
      "sniper"
    ],
    "statsHP": 40,
    "statsATK": 60,
    "statsDEF": 40,
    "statsINIT": 30,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "ariados",
    "id": 168,
    "img1": "../IMG/DexImg/ariados_home.png",
    "img2": "../IMG/DexImg/ariados_classic.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "swarm",
      "insomnia",
      "sniper"
    ],
    "statsHP": 70,
    "statsATK": 90,
    "statsDEF": 70,
    "statsINIT": 40,
    "statsSATK": 60,
    "statsSDEF": 70
  },
  {
    "name": "crobat",
    "id": 169,
    "img1": "../IMG/DexImg/crobat_home.png",
    "img2": "../IMG/DexImg/crobat_classic.png",
    "typ1": "poison",
    "typ2": "flying",
    "moves": [
      "inner-focus",
      "infiltrator"
    ],
    "statsHP": 85,
    "statsATK": 90,
    "statsDEF": 80,
    "statsINIT": 130,
    "statsSATK": 70,
    "statsSDEF": 80
  },
  {
    "name": "chinchou",
    "id": 170,
    "img1": "../IMG/DexImg/chinchou_home.png",
    "img2": "../IMG/DexImg/chinchou_classic.png",
    "typ1": "water",
    "typ2": "electric",
    "moves": [
      "volt-absorb",
      "illuminate",
      "water-absorb"
    ],
    "statsHP": 75,
    "statsATK": 38,
    "statsDEF": 38,
    "statsINIT": 67,
    "statsSATK": 56,
    "statsSDEF": 56
  },
  {
    "name": "lanturn",
    "id": 171,
    "img1": "../IMG/DexImg/lanturn_home.png",
    "img2": "../IMG/DexImg/lanturn_classic.png",
    "typ1": "water",
    "typ2": "electric",
    "moves": [
      "volt-absorb",
      "illuminate",
      "water-absorb"
    ],
    "statsHP": 125,
    "statsATK": 58,
    "statsDEF": 58,
    "statsINIT": 67,
    "statsSATK": 76,
    "statsSDEF": 76
  },
  {
    "name": "pichu",
    "id": 172,
    "img1": "../IMG/DexImg/pichu_home.png",
    "img2": "../IMG/DexImg/pichu_classic.png",
    "typ1": "electric",
    "moves": [
      "static",
      "lightning-rod"
    ],
    "statsHP": 20,
    "statsATK": 40,
    "statsDEF": 15,
    "statsINIT": 60,
    "statsSATK": 35,
    "statsSDEF": 35
  },
  {
    "name": "cleffa",
    "id": 173,
    "img1": "../IMG/DexImg/cleffa_home.png",
    "img2": "../IMG/DexImg/cleffa_classic.png",
    "typ1": "fairy",
    "moves": [
      "cute-charm",
      "magic-guard",
      "friend-guard"
    ],
    "statsHP": 50,
    "statsATK": 25,
    "statsDEF": 28,
    "statsINIT": 15,
    "statsSATK": 45,
    "statsSDEF": 55
  },
  {
    "name": "igglybuff",
    "id": 174,
    "img1": "../IMG/DexImg/igglybuff_home.png",
    "img2": "../IMG/DexImg/igglybuff_classic.png",
    "typ1": "normal",
    "typ2": "fairy",
    "moves": [
      "cute-charm",
      "competitive",
      "friend-guard"
    ],
    "statsHP": 90,
    "statsATK": 30,
    "statsDEF": 15,
    "statsINIT": 15,
    "statsSATK": 40,
    "statsSDEF": 20
  },
  {
    "name": "togepi",
    "id": 175,
    "img1": "../IMG/DexImg/togepi_home.png",
    "img2": "../IMG/DexImg/togepi_classic.png",
    "typ1": "fairy",
    "moves": [
      "hustle",
      "serene-grace",
      "super-luck"
    ],
    "statsHP": 35,
    "statsATK": 20,
    "statsDEF": 65,
    "statsINIT": 20,
    "statsSATK": 40,
    "statsSDEF": 65
  },
  {
    "name": "togetic",
    "id": 176,
    "img1": "../IMG/DexImg/togetic_home.png",
    "img2": "../IMG/DexImg/togetic_classic.png",
    "typ1": "fairy",
    "typ2": "flying",
    "moves": [
      "hustle",
      "serene-grace",
      "super-luck"
    ],
    "statsHP": 55,
    "statsATK": 40,
    "statsDEF": 85,
    "statsINIT": 40,
    "statsSATK": 80,
    "statsSDEF": 105
  },
  {
    "name": "natu",
    "id": 177,
    "img1": "../IMG/DexImg/natu_home.png",
    "img2": "../IMG/DexImg/natu_classic.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "synchronize",
      "early-bird",
      "magic-bounce"
    ],
    "statsHP": 40,
    "statsATK": 50,
    "statsDEF": 45,
    "statsINIT": 70,
    "statsSATK": 70,
    "statsSDEF": 45
  },
  {
    "name": "xatu",
    "id": 178,
    "img1": "../IMG/DexImg/xatu_home.png",
    "img2": "../IMG/DexImg/xatu_classic.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "synchronize",
      "early-bird",
      "magic-bounce"
    ],
    "statsHP": 65,
    "statsATK": 75,
    "statsDEF": 70,
    "statsINIT": 95,
    "statsSATK": 95,
    "statsSDEF": 70
  },
  {
    "name": "mareep",
    "id": 179,
    "img1": "../IMG/DexImg/mareep_home.png",
    "img2": "../IMG/DexImg/mareep_classic.png",
    "typ1": "electric",
    "moves": [
      "static",
      "plus"
    ],
    "statsHP": 55,
    "statsATK": 40,
    "statsDEF": 40,
    "statsINIT": 35,
    "statsSATK": 65,
    "statsSDEF": 45
  },
  {
    "name": "flaaffy",
    "id": 180,
    "img1": "../IMG/DexImg/flaaffy_home.png",
    "img2": "../IMG/DexImg/flaaffy_classic.png",
    "typ1": "electric",
    "moves": [
      "static",
      "plus"
    ],
    "statsHP": 70,
    "statsATK": 55,
    "statsDEF": 55,
    "statsINIT": 45,
    "statsSATK": 80,
    "statsSDEF": 60
  },
  {
    "name": "ampharos",
    "id": 181,
    "img1": "../IMG/DexImg/ampharos_home.png",
    "img2": "../IMG/DexImg/ampharos_classic.png",
    "typ1": "electric",
    "moves": [
      "static",
      "plus"
    ],
    "statsHP": 90,
    "statsATK": 75,
    "statsDEF": 85,
    "statsINIT": 55,
    "statsSATK": 115,
    "statsSDEF": 90
  },
  {
    "name": "bellossom",
    "id": 182,
    "img1": "../IMG/DexImg/bellossom_home.png",
    "img2": "../IMG/DexImg/bellossom_classic.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "healer"
    ],
    "statsHP": 75,
    "statsATK": 80,
    "statsDEF": 95,
    "statsINIT": 50,
    "statsSATK": 90,
    "statsSDEF": 100
  },
  {
    "name": "marill",
    "id": 183,
    "img1": "../IMG/DexImg/marill_home.png",
    "img2": "../IMG/DexImg/marill_classic.png",
    "typ1": "water",
    "typ2": "fairy",
    "moves": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ],
    "statsHP": 70,
    "statsATK": 20,
    "statsDEF": 50,
    "statsINIT": 40,
    "statsSATK": 20,
    "statsSDEF": 50
  },
  {
    "name": "azumarill",
    "id": 184,
    "img1": "../IMG/DexImg/azumarill_home.png",
    "img2": "../IMG/DexImg/azumarill_classic.png",
    "typ1": "water",
    "typ2": "fairy",
    "moves": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ],
    "statsHP": 100,
    "statsATK": 50,
    "statsDEF": 80,
    "statsINIT": 50,
    "statsSATK": 60,
    "statsSDEF": 80
  },
  {
    "name": "sudowoodo",
    "id": 185,
    "img1": "../IMG/DexImg/sudowoodo_home.png",
    "img2": "../IMG/DexImg/sudowoodo_classic.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "rock-head",
      "rattled"
    ],
    "statsHP": 70,
    "statsATK": 100,
    "statsDEF": 115,
    "statsINIT": 30,
    "statsSATK": 30,
    "statsSDEF": 65
  },
  {
    "name": "politoed",
    "id": 186,
    "img1": "../IMG/DexImg/politoed_home.png",
    "img2": "../IMG/DexImg/politoed_classic.png",
    "typ1": "water",
    "moves": [
      "water-absorb",
      "damp",
      "drizzle"
    ],
    "statsHP": 90,
    "statsATK": 75,
    "statsDEF": 75,
    "statsINIT": 70,
    "statsSATK": 90,
    "statsSDEF": 100
  },
  {
    "name": "hoppip",
    "id": 187,
    "img1": "../IMG/DexImg/hoppip_home.png",
    "img2": "../IMG/DexImg/hoppip_classic.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ],
    "statsHP": 35,
    "statsATK": 35,
    "statsDEF": 40,
    "statsINIT": 50,
    "statsSATK": 35,
    "statsSDEF": 55
  },
  {
    "name": "skiploom",
    "id": 188,
    "img1": "../IMG/DexImg/skiploom_home.png",
    "img2": "../IMG/DexImg/skiploom_classic.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ],
    "statsHP": 55,
    "statsATK": 45,
    "statsDEF": 50,
    "statsINIT": 80,
    "statsSATK": 45,
    "statsSDEF": 65
  },
  {
    "name": "jumpluff",
    "id": 189,
    "img1": "../IMG/DexImg/jumpluff_home.png",
    "img2": "../IMG/DexImg/jumpluff_classic.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ],
    "statsHP": 75,
    "statsATK": 55,
    "statsDEF": 70,
    "statsINIT": 110,
    "statsSATK": 55,
    "statsSDEF": 95
  },
  {
    "name": "aipom",
    "id": 190,
    "img1": "../IMG/DexImg/aipom_home.png",
    "img2": "../IMG/DexImg/aipom_classic.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "pickup",
      "skill-link"
    ],
    "statsHP": 55,
    "statsATK": 70,
    "statsDEF": 55,
    "statsINIT": 85,
    "statsSATK": 40,
    "statsSDEF": 55
  },
  {
    "name": "sunkern",
    "id": 191,
    "img1": "../IMG/DexImg/sunkern_home.png",
    "img2": "../IMG/DexImg/sunkern_classic.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "solar-power",
      "early-bird"
    ],
    "statsHP": 30,
    "statsATK": 30,
    "statsDEF": 30,
    "statsINIT": 30,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "sunflora",
    "id": 192,
    "img1": "../IMG/DexImg/sunflora_home.png",
    "img2": "../IMG/DexImg/sunflora_classic.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "solar-power",
      "early-bird"
    ],
    "statsHP": 75,
    "statsATK": 75,
    "statsDEF": 55,
    "statsINIT": 30,
    "statsSATK": 105,
    "statsSDEF": 85
  },
  {
    "name": "yanma",
    "id": 193,
    "img1": "../IMG/DexImg/yanma_home.png",
    "img2": "../IMG/DexImg/yanma_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "speed-boost",
      "compound-eyes",
      "frisk"
    ],
    "statsHP": 65,
    "statsATK": 65,
    "statsDEF": 45,
    "statsINIT": 95,
    "statsSATK": 75,
    "statsSDEF": 45
  },
  {
    "name": "wooper",
    "id": 194,
    "img1": "../IMG/DexImg/wooper_home.png",
    "img2": "../IMG/DexImg/wooper_classic.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "damp",
      "water-absorb",
      "unaware"
    ],
    "statsHP": 55,
    "statsATK": 45,
    "statsDEF": 45,
    "statsINIT": 15,
    "statsSATK": 25,
    "statsSDEF": 25
  },
  {
    "name": "quagsire",
    "id": 195,
    "img1": "../IMG/DexImg/quagsire_home.png",
    "img2": "../IMG/DexImg/quagsire_classic.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "damp",
      "water-absorb",
      "unaware"
    ],
    "statsHP": 95,
    "statsATK": 85,
    "statsDEF": 85,
    "statsINIT": 35,
    "statsSATK": 65,
    "statsSDEF": 65
  },
  {
    "name": "espeon",
    "id": 196,
    "img1": "../IMG/DexImg/espeon_home.png",
    "img2": "../IMG/DexImg/espeon_classic.png",
    "typ1": "psychic",
    "moves": [
      "synchronize",
      "magic-bounce"
    ],
    "statsHP": 65,
    "statsATK": 65,
    "statsDEF": 60,
    "statsINIT": 110,
    "statsSATK": 130,
    "statsSDEF": 95
  },
  {
    "name": "umbreon",
    "id": 197,
    "img1": "../IMG/DexImg/umbreon_home.png",
    "img2": "../IMG/DexImg/umbreon_classic.png",
    "typ1": "dark",
    "moves": [
      "synchronize",
      "inner-focus"
    ],
    "statsHP": 95,
    "statsATK": 65,
    "statsDEF": 110,
    "statsINIT": 65,
    "statsSATK": 60,
    "statsSDEF": 130
  },
  {
    "name": "murkrow",
    "id": 198,
    "img1": "../IMG/DexImg/murkrow_home.png",
    "img2": "../IMG/DexImg/murkrow_classic.png",
    "typ1": "dark",
    "typ2": "flying",
    "moves": [
      "insomnia",
      "super-luck",
      "prankster"
    ],
    "statsHP": 60,
    "statsATK": 85,
    "statsDEF": 42,
    "statsINIT": 91,
    "statsSATK": 85,
    "statsSDEF": 42
  },
  {
    "name": "slowking",
    "id": 199,
    "img1": "../IMG/DexImg/slowking_home.png",
    "img2": "../IMG/DexImg/slowking_classic.png",
    "typ1": "water",
    "typ2": "psychic",
    "moves": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "statsHP": 95,
    "statsATK": 75,
    "statsDEF": 80,
    "statsINIT": 30,
    "statsSATK": 100,
    "statsSDEF": 110
  },
  {
    "name": "misdreavus",
    "id": 200,
    "img1": "../IMG/DexImg/misdreavus_home.png",
    "img2": "../IMG/DexImg/misdreavus_classic.png",
    "typ1": "ghost",
    "moves": [
      "levitate"
    ],
    "statsHP": 60,
    "statsATK": 60,
    "statsDEF": 60,
    "statsINIT": 85,
    "statsSATK": 85,
    "statsSDEF": 85
  },
  {
    "name": "unown",
    "id": 201,
    "img1": "../IMG/DexImg/unown_home.png",
    "img2": "../IMG/DexImg/unown_classic.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 48,
    "statsATK": 72,
    "statsDEF": 48,
    "statsINIT": 48,
    "statsSATK": 72,
    "statsSDEF": 48
  },
  {
    "name": "wobbuffet",
    "id": 202,
    "img1": "../IMG/DexImg/wobbuffet_home.png",
    "img2": "../IMG/DexImg/wobbuffet_classic.png",
    "typ1": "psychic",
    "moves": [
      "shadow-tag",
      "telepathy"
    ],
    "statsHP": 190,
    "statsATK": 33,
    "statsDEF": 58,
    "statsINIT": 33,
    "statsSATK": 33,
    "statsSDEF": 58
  },
  {
    "name": "girafarig",
    "id": 203,
    "img1": "../IMG/DexImg/girafarig_home.png",
    "img2": "../IMG/DexImg/girafarig_classic.png",
    "typ1": "normal",
    "typ2": "psychic",
    "moves": [
      "inner-focus",
      "early-bird",
      "sap-sipper"
    ],
    "statsHP": 70,
    "statsATK": 80,
    "statsDEF": 65,
    "statsINIT": 85,
    "statsSATK": 90,
    "statsSDEF": 65
  },
  {
    "name": "pineco",
    "id": 204,
    "img1": "../IMG/DexImg/pineco_home.png",
    "img2": "../IMG/DexImg/pineco_classic.png",
    "typ1": "bug",
    "moves": [
      "sturdy",
      "overcoat"
    ],
    "statsHP": 50,
    "statsATK": 65,
    "statsDEF": 90,
    "statsINIT": 15,
    "statsSATK": 35,
    "statsSDEF": 35
  },
  {
    "name": "forretress",
    "id": 205,
    "img1": "../IMG/DexImg/forretress_home.png",
    "img2": "../IMG/DexImg/forretress_classic.png",
    "typ1": "bug",
    "typ2": "steel",
    "moves": [
      "sturdy",
      "overcoat"
    ],
    "statsHP": 75,
    "statsATK": 90,
    "statsDEF": 140,
    "statsINIT": 40,
    "statsSATK": 60,
    "statsSDEF": 60
  },
  {
    "name": "dunsparce",
    "id": 206,
    "img1": "../IMG/DexImg/dunsparce_home.png",
    "img2": "../IMG/DexImg/dunsparce_classic.png",
    "typ1": "normal",
    "moves": [
      "serene-grace",
      "run-away",
      "rattled"
    ],
    "statsHP": 100,
    "statsATK": 70,
    "statsDEF": 70,
    "statsINIT": 45,
    "statsSATK": 65,
    "statsSDEF": 65
  },
  {
    "name": "gligar",
    "id": 207,
    "img1": "../IMG/DexImg/gligar_home.png",
    "img2": "../IMG/DexImg/gligar_classic.png",
    "typ1": "ground",
    "typ2": "flying",
    "moves": [
      "hyper-cutter",
      "sand-veil",
      "immunity"
    ],
    "statsHP": 65,
    "statsATK": 75,
    "statsDEF": 105,
    "statsINIT": 85,
    "statsSATK": 35,
    "statsSDEF": 65
  },
  {
    "name": "steelix",
    "id": 208,
    "img1": "../IMG/DexImg/steelix_home.png",
    "img2": "../IMG/DexImg/steelix_classic.png",
    "typ1": "steel",
    "typ2": "ground",
    "moves": [
      "rock-head",
      "sturdy",
      "sheer-force"
    ],
    "statsHP": 75,
    "statsATK": 85,
    "statsDEF": 200,
    "statsINIT": 30,
    "statsSATK": 55,
    "statsSDEF": 65
  },
  {
    "name": "snubbull",
    "id": 209,
    "img1": "../IMG/DexImg/snubbull_home.png",
    "img2": "../IMG/DexImg/snubbull_classic.png",
    "typ1": "fairy",
    "moves": [
      "intimidate",
      "run-away",
      "rattled"
    ],
    "statsHP": 60,
    "statsATK": 80,
    "statsDEF": 50,
    "statsINIT": 30,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "granbull",
    "id": 210,
    "img1": "../IMG/DexImg/granbull_home.png",
    "img2": "../IMG/DexImg/granbull_classic.png",
    "typ1": "fairy",
    "moves": [
      "intimidate",
      "quick-feet",
      "rattled"
    ],
    "statsHP": 90,
    "statsATK": 120,
    "statsDEF": 75,
    "statsINIT": 45,
    "statsSATK": 60,
    "statsSDEF": 60
  },
  {
    "name": "qwilfish",
    "id": 211,
    "img1": "../IMG/DexImg/qwilfish_home.png",
    "img2": "../IMG/DexImg/qwilfish_classic.png",
    "typ1": "water",
    "typ2": "poison",
    "moves": [
      "poison-point",
      "swift-swim",
      "intimidate"
    ],
    "statsHP": 65,
    "statsATK": 95,
    "statsDEF": 85,
    "statsINIT": 85,
    "statsSATK": 55,
    "statsSDEF": 55
  },
  {
    "name": "scizor",
    "id": 212,
    "img1": "../IMG/DexImg/scizor_home.png",
    "img2": "../IMG/DexImg/scizor_classic.png",
    "typ1": "bug",
    "typ2": "steel",
    "moves": [
      "swarm",
      "technician",
      "light-metal"
    ],
    "statsHP": 70,
    "statsATK": 130,
    "statsDEF": 100,
    "statsINIT": 65,
    "statsSATK": 55,
    "statsSDEF": 80
  },
  {
    "name": "shuckle",
    "id": 213,
    "img1": "../IMG/DexImg/shuckle_home.png",
    "img2": "../IMG/DexImg/shuckle_classic.png",
    "typ1": "bug",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "gluttony",
      "contrary"
    ],
    "statsHP": 20,
    "statsATK": 10,
    "statsDEF": 230,
    "statsINIT": 5,
    "statsSATK": 10,
    "statsSDEF": 230
  },
  {
    "name": "heracross",
    "id": 214,
    "img1": "../IMG/DexImg/heracross_home.png",
    "img2": "../IMG/DexImg/heracross_classic.png",
    "typ1": "bug",
    "typ2": "fighting",
    "moves": [
      "swarm",
      "guts",
      "moxie"
    ],
    "statsHP": 80,
    "statsATK": 125,
    "statsDEF": 75,
    "statsINIT": 85,
    "statsSATK": 40,
    "statsSDEF": 95
  },
  {
    "name": "sneasel",
    "id": 215,
    "img1": "../IMG/DexImg/sneasel_home.png",
    "img2": "../IMG/DexImg/sneasel_classic.png",
    "typ1": "dark",
    "typ2": "ice",
    "moves": [
      "inner-focus",
      "keen-eye",
      "pickpocket"
    ],
    "statsHP": 55,
    "statsATK": 95,
    "statsDEF": 55,
    "statsINIT": 115,
    "statsSATK": 35,
    "statsSDEF": 75
  },
  {
    "name": "teddiursa",
    "id": 216,
    "img1": "../IMG/DexImg/teddiursa_home.png",
    "img2": "../IMG/DexImg/teddiursa_classic.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "quick-feet",
      "honey-gather"
    ],
    "statsHP": 60,
    "statsATK": 80,
    "statsDEF": 50,
    "statsINIT": 40,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "ursaring",
    "id": 217,
    "img1": "../IMG/DexImg/ursaring_home.png",
    "img2": "../IMG/DexImg/ursaring_classic.png",
    "typ1": "normal",
    "moves": [
      "guts",
      "quick-feet",
      "unnerve"
    ],
    "statsHP": 90,
    "statsATK": 130,
    "statsDEF": 75,
    "statsINIT": 55,
    "statsSATK": 75,
    "statsSDEF": 75
  },
  {
    "name": "slugma",
    "id": 218,
    "img1": "../IMG/DexImg/slugma_home.png",
    "img2": "../IMG/DexImg/slugma_classic.png",
    "typ1": "fire",
    "moves": [
      "magma-armor",
      "flame-body",
      "weak-armor"
    ],
    "statsHP": 40,
    "statsATK": 40,
    "statsDEF": 40,
    "statsINIT": 20,
    "statsSATK": 70,
    "statsSDEF": 40
  },
  {
    "name": "magcargo",
    "id": 219,
    "img1": "../IMG/DexImg/magcargo_home.png",
    "img2": "../IMG/DexImg/magcargo_classic.png",
    "typ1": "fire",
    "typ2": "rock",
    "moves": [
      "magma-armor",
      "flame-body",
      "weak-armor"
    ],
    "statsHP": 60,
    "statsATK": 50,
    "statsDEF": 120,
    "statsINIT": 30,
    "statsSATK": 90,
    "statsSDEF": 80
  },
  {
    "name": "swinub",
    "id": 220,
    "img1": "../IMG/DexImg/swinub_home.png",
    "img2": "../IMG/DexImg/swinub_classic.png",
    "typ1": "ice",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ],
    "statsHP": 50,
    "statsATK": 50,
    "statsDEF": 40,
    "statsINIT": 50,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "piloswine",
    "id": 221,
    "img1": "../IMG/DexImg/piloswine_home.png",
    "img2": "../IMG/DexImg/piloswine_classic.png",
    "typ1": "ice",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ],
    "statsHP": 100,
    "statsATK": 100,
    "statsDEF": 80,
    "statsINIT": 50,
    "statsSATK": 60,
    "statsSDEF": 60
  },
  {
    "name": "corsola",
    "id": 222,
    "img1": "../IMG/DexImg/corsola_home.png",
    "img2": "../IMG/DexImg/corsola_classic.png",
    "typ1": "water",
    "typ2": "rock",
    "moves": [
      "hustle",
      "natural-cure",
      "regenerator"
    ],
    "statsHP": 65,
    "statsATK": 55,
    "statsDEF": 95,
    "statsINIT": 35,
    "statsSATK": 65,
    "statsSDEF": 95
  },
  {
    "name": "remoraid",
    "id": 223,
    "img1": "../IMG/DexImg/remoraid_home.png",
    "img2": "../IMG/DexImg/remoraid_classic.png",
    "typ1": "water",
    "moves": [
      "hustle",
      "sniper",
      "moody"
    ],
    "statsHP": 35,
    "statsATK": 65,
    "statsDEF": 35,
    "statsINIT": 65,
    "statsSATK": 65,
    "statsSDEF": 35
  },
  {
    "name": "octillery",
    "id": 224,
    "img1": "../IMG/DexImg/octillery_home.png",
    "img2": "../IMG/DexImg/octillery_classic.png",
    "typ1": "water",
    "moves": [
      "suction-cups",
      "sniper",
      "moody"
    ],
    "statsHP": 75,
    "statsATK": 105,
    "statsDEF": 75,
    "statsINIT": 45,
    "statsSATK": 105,
    "statsSDEF": 75
  },
  {
    "name": "delibird",
    "id": 225,
    "img1": "../IMG/DexImg/delibird_home.png",
    "img2": "../IMG/DexImg/delibird_classic.png",
    "typ1": "ice",
    "typ2": "flying",
    "moves": [
      "vital-spirit",
      "hustle",
      "insomnia"
    ],
    "statsHP": 45,
    "statsATK": 55,
    "statsDEF": 45,
    "statsINIT": 75,
    "statsSATK": 65,
    "statsSDEF": 45
  },
  {
    "name": "mantine",
    "id": 226,
    "img1": "../IMG/DexImg/mantine_home.png",
    "img2": "../IMG/DexImg/mantine_classic.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "swift-swim",
      "water-absorb",
      "water-veil"
    ],
    "statsHP": 85,
    "statsATK": 40,
    "statsDEF": 70,
    "statsINIT": 70,
    "statsSATK": 80,
    "statsSDEF": 140
  },
  {
    "name": "skarmory",
    "id": 227,
    "img1": "../IMG/DexImg/skarmory_home.png",
    "img2": "../IMG/DexImg/skarmory_classic.png",
    "typ1": "steel",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "sturdy",
      "weak-armor"
    ],
    "statsHP": 65,
    "statsATK": 80,
    "statsDEF": 140,
    "statsINIT": 70,
    "statsSATK": 40,
    "statsSDEF": 70
  },
  {
    "name": "houndour",
    "id": 228,
    "img1": "../IMG/DexImg/houndour_home.png",
    "img2": "../IMG/DexImg/houndour_classic.png",
    "typ1": "dark",
    "typ2": "fire",
    "moves": [
      "early-bird",
      "flash-fire",
      "unnerve"
    ],
    "statsHP": 45,
    "statsATK": 60,
    "statsDEF": 30,
    "statsINIT": 65,
    "statsSATK": 80,
    "statsSDEF": 50
  },
  {
    "name": "houndoom",
    "id": 229,
    "img1": "../IMG/DexImg/houndoom_home.png",
    "img2": "../IMG/DexImg/houndoom_classic.png",
    "typ1": "dark",
    "typ2": "fire",
    "moves": [
      "early-bird",
      "flash-fire",
      "unnerve"
    ],
    "statsHP": 75,
    "statsATK": 90,
    "statsDEF": 50,
    "statsINIT": 95,
    "statsSATK": 110,
    "statsSDEF": 80
  },
  {
    "name": "kingdra",
    "id": 230,
    "img1": "../IMG/DexImg/kingdra_home.png",
    "img2": "../IMG/DexImg/kingdra_classic.png",
    "typ1": "water",
    "typ2": "dragon",
    "moves": [
      "swift-swim",
      "sniper",
      "damp"
    ],
    "statsHP": 75,
    "statsATK": 95,
    "statsDEF": 95,
    "statsINIT": 85,
    "statsSATK": 95,
    "statsSDEF": 95
  },
  {
    "name": "phanpy",
    "id": 231,
    "img1": "../IMG/DexImg/phanpy_home.png",
    "img2": "../IMG/DexImg/phanpy_classic.png",
    "typ1": "ground",
    "moves": [
      "pickup",
      "sand-veil"
    ],
    "statsHP": 90,
    "statsATK": 60,
    "statsDEF": 60,
    "statsINIT": 40,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "donphan",
    "id": 232,
    "img1": "../IMG/DexImg/donphan_home.png",
    "img2": "../IMG/DexImg/donphan_classic.png",
    "typ1": "ground",
    "moves": [
      "sturdy",
      "sand-veil"
    ],
    "statsHP": 90,
    "statsATK": 120,
    "statsDEF": 120,
    "statsINIT": 50,
    "statsSATK": 60,
    "statsSDEF": 60
  },
  {
    "name": "porygon2",
    "id": 233,
    "img1": "../IMG/DexImg/porygon2_home.png",
    "img2": "../IMG/DexImg/porygon2_classic.png",
    "typ1": "normal",
    "moves": [
      "trace",
      "download",
      "analytic"
    ],
    "statsHP": 85,
    "statsATK": 80,
    "statsDEF": 90,
    "statsINIT": 60,
    "statsSATK": 105,
    "statsSDEF": 95
  },
  {
    "name": "stantler",
    "id": 234,
    "img1": "../IMG/DexImg/stantler_home.png",
    "img2": "../IMG/DexImg/stantler_classic.png",
    "typ1": "normal",
    "moves": [
      "intimidate",
      "frisk",
      "sap-sipper"
    ],
    "statsHP": 73,
    "statsATK": 95,
    "statsDEF": 62,
    "statsINIT": 85,
    "statsSATK": 85,
    "statsSDEF": 65
  },
  {
    "name": "smeargle",
    "id": 235,
    "img1": "../IMG/DexImg/smeargle_home.png",
    "img2": "../IMG/DexImg/smeargle_classic.png",
    "typ1": "normal",
    "moves": [
      "own-tempo",
      "technician",
      "moody"
    ],
    "statsHP": 55,
    "statsATK": 20,
    "statsDEF": 35,
    "statsINIT": 75,
    "statsSATK": 20,
    "statsSDEF": 45
  },
  {
    "name": "tyrogue",
    "id": 236,
    "img1": "../IMG/DexImg/tyrogue_home.png",
    "img2": "../IMG/DexImg/tyrogue_classic.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "steadfast",
      "vital-spirit"
    ],
    "statsHP": 35,
    "statsATK": 35,
    "statsDEF": 35,
    "statsINIT": 35,
    "statsSATK": 35,
    "statsSDEF": 35
  },
  {
    "name": "hitmontop",
    "id": 237,
    "img1": "../IMG/DexImg/hitmontop_home.png",
    "img2": "../IMG/DexImg/hitmontop_classic.png",
    "typ1": "fighting",
    "moves": [
      "intimidate",
      "technician",
      "steadfast"
    ],
    "statsHP": 50,
    "statsATK": 95,
    "statsDEF": 95,
    "statsINIT": 70,
    "statsSATK": 35,
    "statsSDEF": 110
  },
  {
    "name": "smoochum",
    "id": 238,
    "img1": "../IMG/DexImg/smoochum_home.png",
    "img2": "../IMG/DexImg/smoochum_classic.png",
    "typ1": "ice",
    "typ2": "psychic",
    "moves": [
      "oblivious",
      "forewarn",
      "hydration"
    ],
    "statsHP": 45,
    "statsATK": 30,
    "statsDEF": 15,
    "statsINIT": 65,
    "statsSATK": 85,
    "statsSDEF": 65
  },
  {
    "name": "elekid",
    "id": 239,
    "img1": "../IMG/DexImg/elekid_home.png",
    "img2": "../IMG/DexImg/elekid_classic.png",
    "typ1": "electric",
    "moves": [
      "static",
      "vital-spirit"
    ],
    "statsHP": 45,
    "statsATK": 63,
    "statsDEF": 37,
    "statsINIT": 95,
    "statsSATK": 65,
    "statsSDEF": 55
  },
  {
    "name": "magby",
    "id": 240,
    "img1": "../IMG/DexImg/magby_home.png",
    "img2": "../IMG/DexImg/magby_classic.png",
    "typ1": "fire",
    "moves": [
      "flame-body",
      "vital-spirit"
    ],
    "statsHP": 45,
    "statsATK": 75,
    "statsDEF": 37,
    "statsINIT": 83,
    "statsSATK": 70,
    "statsSDEF": 55
  },
  {
    "name": "miltank",
    "id": 241,
    "img1": "../IMG/DexImg/miltank_home.png",
    "img2": "../IMG/DexImg/miltank_classic.png",
    "typ1": "normal",
    "moves": [
      "thick-fat",
      "scrappy",
      "sap-sipper"
    ],
    "statsHP": 95,
    "statsATK": 80,
    "statsDEF": 105,
    "statsINIT": 100,
    "statsSATK": 40,
    "statsSDEF": 70
  },
  {
    "name": "blissey",
    "id": 242,
    "img1": "../IMG/DexImg/blissey_home.png",
    "img2": "../IMG/DexImg/blissey_classic.png",
    "typ1": "normal",
    "moves": [
      "natural-cure",
      "serene-grace",
      "healer"
    ],
    "statsHP": 255,
    "statsATK": 10,
    "statsDEF": 10,
    "statsINIT": 55,
    "statsSATK": 75,
    "statsSDEF": 135
  },
  {
    "name": "raikou",
    "id": 243,
    "img1": "../IMG/DexImg/raikou_home.png",
    "img2": "../IMG/DexImg/raikou_classic.png",
    "typ1": "electric",
    "moves": [
      "pressure",
      "inner-focus"
    ],
    "statsHP": 90,
    "statsATK": 85,
    "statsDEF": 75,
    "statsINIT": 115,
    "statsSATK": 115,
    "statsSDEF": 100
  },
  {
    "name": "entei",
    "id": 244,
    "img1": "../IMG/DexImg/entei_home.png",
    "img2": "../IMG/DexImg/entei_classic.png",
    "typ1": "fire",
    "moves": [
      "pressure",
      "inner-focus"
    ],
    "statsHP": 115,
    "statsATK": 115,
    "statsDEF": 85,
    "statsINIT": 100,
    "statsSATK": 90,
    "statsSDEF": 75
  },
  {
    "name": "suicune",
    "id": 245,
    "img1": "../IMG/DexImg/suicune_home.png",
    "img2": "../IMG/DexImg/suicune_classic.png",
    "typ1": "water",
    "moves": [
      "pressure",
      "inner-focus"
    ],
    "statsHP": 100,
    "statsATK": 75,
    "statsDEF": 115,
    "statsINIT": 85,
    "statsSATK": 90,
    "statsSDEF": 115
  },
  {
    "name": "larvitar",
    "id": 246,
    "img1": "../IMG/DexImg/larvitar_home.png",
    "img2": "../IMG/DexImg/larvitar_classic.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "guts",
      "sand-veil"
    ],
    "statsHP": 50,
    "statsATK": 64,
    "statsDEF": 50,
    "statsINIT": 41,
    "statsSATK": 45,
    "statsSDEF": 50
  },
  {
    "name": "pupitar",
    "id": 247,
    "img1": "../IMG/DexImg/pupitar_home.png",
    "img2": "../IMG/DexImg/pupitar_classic.png",
    "typ1": "rock",
    "typ2": "ground",
    "moves": [
      "shed-skin"
    ],
    "statsHP": 70,
    "statsATK": 84,
    "statsDEF": 70,
    "statsINIT": 51,
    "statsSATK": 65,
    "statsSDEF": 70
  },
  {
    "name": "tyranitar",
    "id": 248,
    "img1": "../IMG/DexImg/tyranitar_home.png",
    "img2": "../IMG/DexImg/tyranitar_classic.png",
    "typ1": "rock",
    "typ2": "dark",
    "moves": [
      "sand-stream",
      "unnerve"
    ],
    "statsHP": 100,
    "statsATK": 134,
    "statsDEF": 110,
    "statsINIT": 61,
    "statsSATK": 95,
    "statsSDEF": 100
  },
  {
    "name": "lugia",
    "id": 249,
    "img1": "../IMG/DexImg/lugia_home.png",
    "img2": "../IMG/DexImg/lugia_classic.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "pressure",
      "multiscale"
    ],
    "statsHP": 106,
    "statsATK": 90,
    "statsDEF": 130,
    "statsINIT": 110,
    "statsSATK": 90,
    "statsSDEF": 154
  },
  {
    "name": "ho-oh",
    "id": 250,
    "img1": "../IMG/DexImg/ho-oh_home.png",
    "img2": "../IMG/DexImg/ho-oh_classic.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "pressure",
      "regenerator"
    ],
    "statsHP": 106,
    "statsATK": 130,
    "statsDEF": 90,
    "statsINIT": 90,
    "statsSATK": 110,
    "statsSDEF": 154
  },
  {
    "name": "celebi",
    "id": 251,
    "img1": "../IMG/DexImg/celebi_home.png",
    "img2": "../IMG/DexImg/celebi_classic.png",
    "typ1": "psychic",
    "typ2": "grass",
    "moves": [
      "natural-cure"
    ],
    "statsHP": 100,
    "statsATK": 100,
    "statsDEF": 100,
    "statsINIT": 100,
    "statsSATK": 100,
    "statsSDEF": 100
  },
  {
    "name": "treecko",
    "id": 252,
    "img1": "../IMG/DexImg/treecko_home.png",
    "img2": "../IMG/DexImg/treecko_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "unburden"
    ],
    "statsHP": 40,
    "statsATK": 45,
    "statsDEF": 35,
    "statsINIT": 70,
    "statsSATK": 65,
    "statsSDEF": 55
  },
  {
    "name": "grovyle",
    "id": 253,
    "img1": "../IMG/DexImg/grovyle_home.png",
    "img2": "../IMG/DexImg/grovyle_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "unburden"
    ],
    "statsHP": 50,
    "statsATK": 65,
    "statsDEF": 45,
    "statsINIT": 95,
    "statsSATK": 85,
    "statsSDEF": 65
  },
  {
    "name": "sceptile",
    "id": 254,
    "img1": "../IMG/DexImg/sceptile_home.png",
    "img2": "../IMG/DexImg/sceptile_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "unburden"
    ],
    "statsHP": 70,
    "statsATK": 85,
    "statsDEF": 65,
    "statsINIT": 120,
    "statsSATK": 105,
    "statsSDEF": 85
  },
  {
    "name": "torchic",
    "id": 255,
    "img1": "../IMG/DexImg/torchic_home.png",
    "img2": "../IMG/DexImg/torchic_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "speed-boost"
    ],
    "statsHP": 45,
    "statsATK": 60,
    "statsDEF": 40,
    "statsINIT": 45,
    "statsSATK": 70,
    "statsSDEF": 50
  },
  {
    "name": "combusken",
    "id": 256,
    "img1": "../IMG/DexImg/combusken_home.png",
    "img2": "../IMG/DexImg/combusken_classic.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "speed-boost"
    ],
    "statsHP": 60,
    "statsATK": 85,
    "statsDEF": 60,
    "statsINIT": 55,
    "statsSATK": 85,
    "statsSDEF": 60
  },
  {
    "name": "blaziken",
    "id": 257,
    "img1": "../IMG/DexImg/blaziken_home.png",
    "img2": "../IMG/DexImg/blaziken_classic.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "speed-boost"
    ],
    "statsHP": 80,
    "statsATK": 120,
    "statsDEF": 70,
    "statsINIT": 80,
    "statsSATK": 110,
    "statsSDEF": 70
  },
  {
    "name": "mudkip",
    "id": 258,
    "img1": "../IMG/DexImg/mudkip_home.png",
    "img2": "../IMG/DexImg/mudkip_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "damp"
    ],
    "statsHP": 50,
    "statsATK": 70,
    "statsDEF": 50,
    "statsINIT": 40,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "marshtomp",
    "id": 259,
    "img1": "../IMG/DexImg/marshtomp_home.png",
    "img2": "../IMG/DexImg/marshtomp_classic.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "torrent",
      "damp"
    ],
    "statsHP": 70,
    "statsATK": 85,
    "statsDEF": 70,
    "statsINIT": 50,
    "statsSATK": 60,
    "statsSDEF": 70
  },
  {
    "name": "swampert",
    "id": 260,
    "img1": "../IMG/DexImg/swampert_home.png",
    "img2": "../IMG/DexImg/swampert_classic.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "torrent",
      "damp"
    ],
    "statsHP": 100,
    "statsATK": 110,
    "statsDEF": 90,
    "statsINIT": 60,
    "statsSATK": 85,
    "statsSDEF": 90
  },
  {
    "name": "poochyena",
    "id": 261,
    "img1": "../IMG/DexImg/poochyena_home.png",
    "img2": "../IMG/DexImg/poochyena_classic.png",
    "typ1": "dark",
    "moves": [
      "run-away",
      "quick-feet",
      "rattled"
    ],
    "statsHP": 35,
    "statsATK": 55,
    "statsDEF": 35,
    "statsINIT": 35,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "mightyena",
    "id": 262,
    "img1": "../IMG/DexImg/mightyena_home.png",
    "img2": "../IMG/DexImg/mightyena_classic.png",
    "typ1": "dark",
    "moves": [
      "intimidate",
      "quick-feet",
      "moxie"
    ],
    "statsHP": 70,
    "statsATK": 90,
    "statsDEF": 70,
    "statsINIT": 70,
    "statsSATK": 60,
    "statsSDEF": 60
  },
  {
    "name": "zigzagoon",
    "id": 263,
    "img1": "../IMG/DexImg/zigzagoon_home.png",
    "img2": "../IMG/DexImg/zigzagoon_classic.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "gluttony",
      "quick-feet"
    ],
    "statsHP": 38,
    "statsATK": 30,
    "statsDEF": 41,
    "statsINIT": 60,
    "statsSATK": 30,
    "statsSDEF": 41
  },
  {
    "name": "linoone",
    "id": 264,
    "img1": "../IMG/DexImg/linoone_home.png",
    "img2": "../IMG/DexImg/linoone_classic.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "gluttony",
      "quick-feet"
    ],
    "statsHP": 78,
    "statsATK": 70,
    "statsDEF": 61,
    "statsINIT": 100,
    "statsSATK": 50,
    "statsSDEF": 61
  },
  {
    "name": "wurmple",
    "id": 265,
    "img1": "../IMG/DexImg/wurmple_home.png",
    "img2": "../IMG/DexImg/wurmple_classic.png",
    "typ1": "bug",
    "moves": [
      "shield-dust",
      "run-away"
    ],
    "statsHP": 45,
    "statsATK": 45,
    "statsDEF": 35,
    "statsINIT": 20,
    "statsSATK": 20,
    "statsSDEF": 30
  },
  {
    "name": "silcoon",
    "id": 266,
    "img1": "../IMG/DexImg/silcoon_home.png",
    "img2": "../IMG/DexImg/silcoon_classic.png",
    "typ1": "bug",
    "moves": [
      "shed-skin"
    ],
    "statsHP": 50,
    "statsATK": 35,
    "statsDEF": 55,
    "statsINIT": 15,
    "statsSATK": 25,
    "statsSDEF": 25
  },
  {
    "name": "beautifly",
    "id": 267,
    "img1": "../IMG/DexImg/beautifly_home.png",
    "img2": "../IMG/DexImg/beautifly_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "swarm",
      "rivalry"
    ],
    "statsHP": 60,
    "statsATK": 70,
    "statsDEF": 50,
    "statsINIT": 65,
    "statsSATK": 100,
    "statsSDEF": 50
  },
  {
    "name": "cascoon",
    "id": 268,
    "img1": "../IMG/DexImg/cascoon_home.png",
    "img2": "../IMG/DexImg/cascoon_classic.png",
    "typ1": "bug",
    "moves": [
      "shed-skin"
    ],
    "statsHP": 50,
    "statsATK": 35,
    "statsDEF": 55,
    "statsINIT": 15,
    "statsSATK": 25,
    "statsSDEF": 25
  },
  {
    "name": "dustox",
    "id": 269,
    "img1": "../IMG/DexImg/dustox_home.png",
    "img2": "../IMG/DexImg/dustox_classic.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "shield-dust",
      "compound-eyes"
    ],
    "statsHP": 60,
    "statsATK": 50,
    "statsDEF": 70,
    "statsINIT": 65,
    "statsSATK": 50,
    "statsSDEF": 90
  },
  {
    "name": "lotad",
    "id": 270,
    "img1": "../IMG/DexImg/lotad_home.png",
    "img2": "../IMG/DexImg/lotad_classic.png",
    "typ1": "water",
    "typ2": "grass",
    "moves": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ],
    "statsHP": 40,
    "statsATK": 30,
    "statsDEF": 30,
    "statsINIT": 30,
    "statsSATK": 40,
    "statsSDEF": 50
  },
  {
    "name": "lombre",
    "id": 271,
    "img1": "../IMG/DexImg/lombre_home.png",
    "img2": "../IMG/DexImg/lombre_classic.png",
    "typ1": "water",
    "typ2": "grass",
    "moves": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ],
    "statsHP": 60,
    "statsATK": 50,
    "statsDEF": 50,
    "statsINIT": 50,
    "statsSATK": 60,
    "statsSDEF": 70
  },
  {
    "name": "ludicolo",
    "id": 272,
    "img1": "../IMG/DexImg/ludicolo_home.png",
    "img2": "../IMG/DexImg/ludicolo_classic.png",
    "typ1": "water",
    "typ2": "grass",
    "moves": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ],
    "statsHP": 80,
    "statsATK": 70,
    "statsDEF": 70,
    "statsINIT": 70,
    "statsSATK": 90,
    "statsSDEF": 100
  },
  {
    "name": "seedot",
    "id": 273,
    "img1": "../IMG/DexImg/seedot_home.png",
    "img2": "../IMG/DexImg/seedot_classic.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "early-bird",
      "pickpocket"
    ],
    "statsHP": 40,
    "statsATK": 40,
    "statsDEF": 50,
    "statsINIT": 30,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "nuzleaf",
    "id": 274,
    "img1": "../IMG/DexImg/nuzleaf_home.png",
    "img2": "../IMG/DexImg/nuzleaf_classic.png",
    "typ1": "grass",
    "typ2": "dark",
    "moves": [
      "chlorophyll",
      "early-bird",
      "pickpocket"
    ],
    "statsHP": 70,
    "statsATK": 70,
    "statsDEF": 40,
    "statsINIT": 60,
    "statsSATK": 60,
    "statsSDEF": 40
  },
  {
    "name": "shiftry",
    "id": 275,
    "img1": "../IMG/DexImg/shiftry_home.png",
    "img2": "../IMG/DexImg/shiftry_classic.png",
    "typ1": "grass",
    "typ2": "dark",
    "moves": [
      "chlorophyll",
      "wind-rider",
      "pickpocket"
    ],
    "statsHP": 90,
    "statsATK": 100,
    "statsDEF": 60,
    "statsINIT": 80,
    "statsSATK": 90,
    "statsSDEF": 60
  },
  {
    "name": "taillow",
    "id": 276,
    "img1": "../IMG/DexImg/taillow_home.png",
    "img2": "../IMG/DexImg/taillow_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "guts",
      "scrappy"
    ],
    "statsHP": 40,
    "statsATK": 55,
    "statsDEF": 30,
    "statsINIT": 85,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "swellow",
    "id": 277,
    "img1": "../IMG/DexImg/swellow_home.png",
    "img2": "../IMG/DexImg/swellow_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "guts",
      "scrappy"
    ],
    "statsHP": 60,
    "statsATK": 85,
    "statsDEF": 60,
    "statsINIT": 125,
    "statsSATK": 75,
    "statsSDEF": 50
  },
  {
    "name": "wingull",
    "id": 278,
    "img1": "../IMG/DexImg/wingull_home.png",
    "img2": "../IMG/DexImg/wingull_classic.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "hydration",
      "rain-dish"
    ],
    "statsHP": 40,
    "statsATK": 30,
    "statsDEF": 30,
    "statsINIT": 85,
    "statsSATK": 55,
    "statsSDEF": 30
  },
  {
    "name": "pelipper",
    "id": 279,
    "img1": "../IMG/DexImg/pelipper_home.png",
    "img2": "../IMG/DexImg/pelipper_classic.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "drizzle",
      "rain-dish"
    ],
    "statsHP": 60,
    "statsATK": 50,
    "statsDEF": 100,
    "statsINIT": 65,
    "statsSATK": 95,
    "statsSDEF": 70
  },
  {
    "name": "ralts",
    "id": 280,
    "img1": "../IMG/DexImg/ralts_home.png",
    "img2": "../IMG/DexImg/ralts_classic.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "synchronize",
      "trace",
      "telepathy"
    ],
    "statsHP": 28,
    "statsATK": 25,
    "statsDEF": 25,
    "statsINIT": 40,
    "statsSATK": 45,
    "statsSDEF": 35
  },
  {
    "name": "kirlia",
    "id": 281,
    "img1": "../IMG/DexImg/kirlia_home.png",
    "img2": "../IMG/DexImg/kirlia_classic.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "synchronize",
      "trace",
      "telepathy"
    ],
    "statsHP": 38,
    "statsATK": 35,
    "statsDEF": 35,
    "statsINIT": 50,
    "statsSATK": 65,
    "statsSDEF": 55
  },
  {
    "name": "gardevoir",
    "id": 282,
    "img1": "../IMG/DexImg/gardevoir_home.png",
    "img2": "../IMG/DexImg/gardevoir_classic.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "synchronize",
      "trace",
      "telepathy"
    ],
    "statsHP": 68,
    "statsATK": 65,
    "statsDEF": 65,
    "statsINIT": 80,
    "statsSATK": 125,
    "statsSDEF": 115
  },
  {
    "name": "surskit",
    "id": 283,
    "img1": "../IMG/DexImg/surskit_home.png",
    "img2": "../IMG/DexImg/surskit_classic.png",
    "typ1": "bug",
    "typ2": "water",
    "moves": [
      "swift-swim",
      "rain-dish"
    ],
    "statsHP": 40,
    "statsATK": 30,
    "statsDEF": 32,
    "statsINIT": 65,
    "statsSATK": 50,
    "statsSDEF": 52
  },
  {
    "name": "masquerain",
    "id": 284,
    "img1": "../IMG/DexImg/masquerain_home.png",
    "img2": "../IMG/DexImg/masquerain_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "intimidate",
      "unnerve"
    ],
    "statsHP": 70,
    "statsATK": 60,
    "statsDEF": 62,
    "statsINIT": 80,
    "statsSATK": 100,
    "statsSDEF": 82
  },
  {
    "name": "shroomish",
    "id": 285,
    "img1": "../IMG/DexImg/shroomish_home.png",
    "img2": "../IMG/DexImg/shroomish_classic.png",
    "typ1": "grass",
    "moves": [
      "effect-spore",
      "poison-heal",
      "quick-feet"
    ],
    "statsHP": 60,
    "statsATK": 40,
    "statsDEF": 60,
    "statsINIT": 35,
    "statsSATK": 40,
    "statsSDEF": 60
  },
  {
    "name": "breloom",
    "id": 286,
    "img1": "../IMG/DexImg/breloom_home.png",
    "img2": "../IMG/DexImg/breloom_classic.png",
    "typ1": "grass",
    "typ2": "fighting",
    "moves": [
      "effect-spore",
      "poison-heal",
      "technician"
    ],
    "statsHP": 60,
    "statsATK": 130,
    "statsDEF": 80,
    "statsINIT": 70,
    "statsSATK": 60,
    "statsSDEF": 60
  },
  {
    "name": "slakoth",
    "id": 287,
    "img1": "../IMG/DexImg/slakoth_home.png",
    "img2": "../IMG/DexImg/slakoth_classic.png",
    "typ1": "normal",
    "moves": [
      "truant"
    ],
    "statsHP": 60,
    "statsATK": 60,
    "statsDEF": 60,
    "statsINIT": 30,
    "statsSATK": 35,
    "statsSDEF": 35
  },
  {
    "name": "vigoroth",
    "id": 288,
    "img1": "../IMG/DexImg/vigoroth_home.png",
    "img2": "../IMG/DexImg/vigoroth_classic.png",
    "typ1": "normal",
    "moves": [
      "vital-spirit"
    ],
    "statsHP": 80,
    "statsATK": 80,
    "statsDEF": 80,
    "statsINIT": 90,
    "statsSATK": 55,
    "statsSDEF": 55
  },
  {
    "name": "slaking",
    "id": 289,
    "img1": "../IMG/DexImg/slaking_home.png",
    "img2": "../IMG/DexImg/slaking_classic.png",
    "typ1": "normal",
    "moves": [
      "truant"
    ],
    "statsHP": 150,
    "statsATK": 160,
    "statsDEF": 100,
    "statsINIT": 100,
    "statsSATK": 95,
    "statsSDEF": 65
  },
  {
    "name": "nincada",
    "id": 290,
    "img1": "../IMG/DexImg/nincada_home.png",
    "img2": "../IMG/DexImg/nincada_classic.png",
    "typ1": "bug",
    "typ2": "ground",
    "moves": [
      "compound-eyes",
      "run-away"
    ],
    "statsHP": 31,
    "statsATK": 45,
    "statsDEF": 90,
    "statsINIT": 40,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "ninjask",
    "id": 291,
    "img1": "../IMG/DexImg/ninjask_home.png",
    "img2": "../IMG/DexImg/ninjask_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "speed-boost",
      "infiltrator"
    ],
    "statsHP": 61,
    "statsATK": 90,
    "statsDEF": 45,
    "statsINIT": 160,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "shedinja",
    "id": 292,
    "img1": "../IMG/DexImg/shedinja_home.png",
    "img2": "../IMG/DexImg/shedinja_classic.png",
    "typ1": "bug",
    "typ2": "ghost",
    "moves": [
      "wonder-guard"
    ],
    "statsHP": 1,
    "statsATK": 90,
    "statsDEF": 45,
    "statsINIT": 40,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "whismur",
    "id": 293,
    "img1": "../IMG/DexImg/whismur_home.png",
    "img2": "../IMG/DexImg/whismur_classic.png",
    "typ1": "normal",
    "moves": [
      "soundproof",
      "rattled"
    ],
    "statsHP": 64,
    "statsATK": 51,
    "statsDEF": 23,
    "statsINIT": 28,
    "statsSATK": 51,
    "statsSDEF": 23
  },
  {
    "name": "loudred",
    "id": 294,
    "img1": "../IMG/DexImg/loudred_home.png",
    "img2": "../IMG/DexImg/loudred_classic.png",
    "typ1": "normal",
    "moves": [
      "soundproof",
      "scrappy"
    ],
    "statsHP": 84,
    "statsATK": 71,
    "statsDEF": 43,
    "statsINIT": 48,
    "statsSATK": 71,
    "statsSDEF": 43
  },
  {
    "name": "exploud",
    "id": 295,
    "img1": "../IMG/DexImg/exploud_home.png",
    "img2": "../IMG/DexImg/exploud_classic.png",
    "typ1": "normal",
    "moves": [
      "soundproof",
      "scrappy"
    ],
    "statsHP": 104,
    "statsATK": 91,
    "statsDEF": 63,
    "statsINIT": 68,
    "statsSATK": 91,
    "statsSDEF": 73
  },
  {
    "name": "makuhita",
    "id": 296,
    "img1": "../IMG/DexImg/makuhita_home.png",
    "img2": "../IMG/DexImg/makuhita_classic.png",
    "typ1": "fighting",
    "moves": [
      "thick-fat",
      "guts",
      "sheer-force"
    ],
    "statsHP": 72,
    "statsATK": 60,
    "statsDEF": 30,
    "statsINIT": 25,
    "statsSATK": 20,
    "statsSDEF": 30
  },
  {
    "name": "hariyama",
    "id": 297,
    "img1": "../IMG/DexImg/hariyama_home.png",
    "img2": "../IMG/DexImg/hariyama_classic.png",
    "typ1": "fighting",
    "moves": [
      "thick-fat",
      "guts",
      "sheer-force"
    ],
    "statsHP": 144,
    "statsATK": 120,
    "statsDEF": 60,
    "statsINIT": 50,
    "statsSATK": 40,
    "statsSDEF": 60
  },
  {
    "name": "azurill",
    "id": 298,
    "img1": "../IMG/DexImg/azurill_home.png",
    "img2": "../IMG/DexImg/azurill_classic.png",
    "typ1": "normal",
    "typ2": "fairy",
    "moves": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ],
    "statsHP": 50,
    "statsATK": 20,
    "statsDEF": 40,
    "statsINIT": 20,
    "statsSATK": 20,
    "statsSDEF": 40
  },
  {
    "name": "nosepass",
    "id": 299,
    "img1": "../IMG/DexImg/nosepass_home.png",
    "img2": "../IMG/DexImg/nosepass_classic.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "magnet-pull",
      "sand-force"
    ],
    "statsHP": 30,
    "statsATK": 45,
    "statsDEF": 135,
    "statsINIT": 30,
    "statsSATK": 45,
    "statsSDEF": 90
  },
  {
    "name": "skitty",
    "id": 300,
    "img1": "../IMG/DexImg/skitty_home.png",
    "img2": "../IMG/DexImg/skitty_classic.png",
    "typ1": "normal",
    "moves": [
      "cute-charm",
      "normalize",
      "wonder-skin"
    ],
    "statsHP": 50,
    "statsATK": 45,
    "statsDEF": 45,
    "statsINIT": 50,
    "statsSATK": 35,
    "statsSDEF": 35
  },
  {
    "name": "delcatty",
    "id": 301,
    "img1": "../IMG/DexImg/delcatty_home.png",
    "img2": "../IMG/DexImg/delcatty_classic.png",
    "typ1": "normal",
    "moves": [
      "cute-charm",
      "normalize",
      "wonder-skin"
    ],
    "statsHP": 70,
    "statsATK": 65,
    "statsDEF": 65,
    "statsINIT": 90,
    "statsSATK": 55,
    "statsSDEF": 55
  },
  {
    "name": "sableye",
    "id": 302,
    "img1": "../IMG/DexImg/sableye_home.png",
    "img2": "../IMG/DexImg/sableye_classic.png",
    "typ1": "dark",
    "typ2": "ghost",
    "moves": [
      "keen-eye",
      "stall",
      "prankster"
    ],
    "statsHP": 50,
    "statsATK": 75,
    "statsDEF": 75,
    "statsINIT": 50,
    "statsSATK": 65,
    "statsSDEF": 65
  },
  {
    "name": "mawile",
    "id": 303,
    "img1": "../IMG/DexImg/mawile_home.png",
    "img2": "../IMG/DexImg/mawile_classic.png",
    "typ1": "steel",
    "typ2": "fairy",
    "moves": [
      "hyper-cutter",
      "intimidate",
      "sheer-force"
    ],
    "statsHP": 50,
    "statsATK": 85,
    "statsDEF": 85,
    "statsINIT": 50,
    "statsSATK": 55,
    "statsSDEF": 55
  },
  {
    "name": "aron",
    "id": 304,
    "img1": "../IMG/DexImg/aron_home.png",
    "img2": "../IMG/DexImg/aron_classic.png",
    "typ1": "steel",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ],
    "statsHP": 50,
    "statsATK": 70,
    "statsDEF": 100,
    "statsINIT": 30,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "lairon",
    "id": 305,
    "img1": "../IMG/DexImg/lairon_home.png",
    "img2": "../IMG/DexImg/lairon_classic.png",
    "typ1": "steel",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ],
    "statsHP": 60,
    "statsATK": 90,
    "statsDEF": 140,
    "statsINIT": 40,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "aggron",
    "id": 306,
    "img1": "../IMG/DexImg/aggron_home.png",
    "img2": "../IMG/DexImg/aggron_classic.png",
    "typ1": "steel",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ],
    "statsHP": 70,
    "statsATK": 110,
    "statsDEF": 180,
    "statsINIT": 50,
    "statsSATK": 60,
    "statsSDEF": 60
  },
  {
    "name": "meditite",
    "id": 307,
    "img1": "../IMG/DexImg/meditite_home.png",
    "img2": "../IMG/DexImg/meditite_classic.png",
    "typ1": "fighting",
    "typ2": "psychic",
    "moves": [
      "pure-power",
      "telepathy"
    ],
    "statsHP": 30,
    "statsATK": 40,
    "statsDEF": 55,
    "statsINIT": 60,
    "statsSATK": 40,
    "statsSDEF": 55
  },
  {
    "name": "medicham",
    "id": 308,
    "img1": "../IMG/DexImg/medicham_home.png",
    "img2": "../IMG/DexImg/medicham_classic.png",
    "typ1": "fighting",
    "typ2": "psychic",
    "moves": [
      "pure-power",
      "telepathy"
    ],
    "statsHP": 60,
    "statsATK": 60,
    "statsDEF": 75,
    "statsINIT": 80,
    "statsSATK": 60,
    "statsSDEF": 75
  },
  {
    "name": "electrike",
    "id": 309,
    "img1": "../IMG/DexImg/electrike_home.png",
    "img2": "../IMG/DexImg/electrike_classic.png",
    "typ1": "electric",
    "moves": [
      "static",
      "lightning-rod",
      "minus"
    ],
    "statsHP": 40,
    "statsATK": 45,
    "statsDEF": 40,
    "statsINIT": 65,
    "statsSATK": 65,
    "statsSDEF": 40
  },
  {
    "name": "manectric",
    "id": 310,
    "img1": "../IMG/DexImg/manectric_home.png",
    "img2": "../IMG/DexImg/manectric_classic.png",
    "typ1": "electric",
    "moves": [
      "static",
      "lightning-rod",
      "minus"
    ],
    "statsHP": 70,
    "statsATK": 75,
    "statsDEF": 60,
    "statsINIT": 105,
    "statsSATK": 105,
    "statsSDEF": 60
  },
  {
    "name": "plusle",
    "id": 311,
    "img1": "../IMG/DexImg/plusle_home.png",
    "img2": "../IMG/DexImg/plusle_classic.png",
    "typ1": "electric",
    "moves": [
      "plus",
      "lightning-rod"
    ],
    "statsHP": 60,
    "statsATK": 50,
    "statsDEF": 40,
    "statsINIT": 95,
    "statsSATK": 85,
    "statsSDEF": 75
  },
  {
    "name": "minun",
    "id": 312,
    "img1": "../IMG/DexImg/minun_home.png",
    "img2": "../IMG/DexImg/minun_classic.png",
    "typ1": "electric",
    "moves": [
      "minus",
      "volt-absorb"
    ],
    "statsHP": 60,
    "statsATK": 40,
    "statsDEF": 50,
    "statsINIT": 95,
    "statsSATK": 75,
    "statsSDEF": 85
  },
  {
    "name": "volbeat",
    "id": 313,
    "img1": "../IMG/DexImg/volbeat_home.png",
    "img2": "../IMG/DexImg/volbeat_classic.png",
    "typ1": "bug",
    "moves": [
      "illuminate",
      "swarm",
      "prankster"
    ],
    "statsHP": 65,
    "statsATK": 73,
    "statsDEF": 75,
    "statsINIT": 85,
    "statsSATK": 47,
    "statsSDEF": 85
  },
  {
    "name": "illumise",
    "id": 314,
    "img1": "../IMG/DexImg/illumise_home.png",
    "img2": "../IMG/DexImg/illumise_classic.png",
    "typ1": "bug",
    "moves": [
      "oblivious",
      "tinted-lens",
      "prankster"
    ],
    "statsHP": 65,
    "statsATK": 47,
    "statsDEF": 75,
    "statsINIT": 85,
    "statsSATK": 73,
    "statsSDEF": 85
  },
  {
    "name": "roselia",
    "id": 315,
    "img1": "../IMG/DexImg/roselia_home.png",
    "img2": "../IMG/DexImg/roselia_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "natural-cure",
      "poison-point",
      "leaf-guard"
    ],
    "statsHP": 50,
    "statsATK": 60,
    "statsDEF": 45,
    "statsINIT": 65,
    "statsSATK": 100,
    "statsSDEF": 80
  },
  {
    "name": "gulpin",
    "id": 316,
    "img1": "../IMG/DexImg/gulpin_home.png",
    "img2": "../IMG/DexImg/gulpin_classic.png",
    "typ1": "poison",
    "moves": [
      "liquid-ooze",
      "sticky-hold",
      "gluttony"
    ],
    "statsHP": 70,
    "statsATK": 43,
    "statsDEF": 53,
    "statsINIT": 40,
    "statsSATK": 43,
    "statsSDEF": 53
  },
  {
    "name": "swalot",
    "id": 317,
    "img1": "../IMG/DexImg/swalot_home.png",
    "img2": "../IMG/DexImg/swalot_classic.png",
    "typ1": "poison",
    "moves": [
      "liquid-ooze",
      "sticky-hold",
      "gluttony"
    ],
    "statsHP": 100,
    "statsATK": 73,
    "statsDEF": 83,
    "statsINIT": 55,
    "statsSATK": 73,
    "statsSDEF": 83
  },
  {
    "name": "carvanha",
    "id": 318,
    "img1": "../IMG/DexImg/carvanha_home.png",
    "img2": "../IMG/DexImg/carvanha_classic.png",
    "typ1": "water",
    "typ2": "dark",
    "moves": [
      "rough-skin",
      "speed-boost"
    ],
    "statsHP": 45,
    "statsATK": 90,
    "statsDEF": 20,
    "statsINIT": 65,
    "statsSATK": 65,
    "statsSDEF": 20
  },
  {
    "name": "sharpedo",
    "id": 319,
    "img1": "../IMG/DexImg/sharpedo_home.png",
    "img2": "../IMG/DexImg/sharpedo_classic.png",
    "typ1": "water",
    "typ2": "dark",
    "moves": [
      "rough-skin",
      "speed-boost"
    ],
    "statsHP": 70,
    "statsATK": 120,
    "statsDEF": 40,
    "statsINIT": 95,
    "statsSATK": 95,
    "statsSDEF": 40
  },
  {
    "name": "wailmer",
    "id": 320,
    "img1": "../IMG/DexImg/wailmer_home.png",
    "img2": "../IMG/DexImg/wailmer_classic.png",
    "typ1": "water",
    "moves": [
      "water-veil",
      "oblivious",
      "pressure"
    ],
    "statsHP": 130,
    "statsATK": 70,
    "statsDEF": 35,
    "statsINIT": 60,
    "statsSATK": 70,
    "statsSDEF": 35
  },
  {
    "name": "wailord",
    "id": 321,
    "img1": "../IMG/DexImg/wailord_home.png",
    "img2": "../IMG/DexImg/wailord_classic.png",
    "typ1": "water",
    "moves": [
      "water-veil",
      "oblivious",
      "pressure"
    ],
    "statsHP": 170,
    "statsATK": 90,
    "statsDEF": 45,
    "statsINIT": 60,
    "statsSATK": 90,
    "statsSDEF": 45
  },
  {
    "name": "numel",
    "id": 322,
    "img1": "../IMG/DexImg/numel_home.png",
    "img2": "../IMG/DexImg/numel_classic.png",
    "typ1": "fire",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "simple",
      "own-tempo"
    ],
    "statsHP": 60,
    "statsATK": 60,
    "statsDEF": 40,
    "statsINIT": 35,
    "statsSATK": 65,
    "statsSDEF": 45
  },
  {
    "name": "camerupt",
    "id": 323,
    "img1": "../IMG/DexImg/camerupt_home.png",
    "img2": "../IMG/DexImg/camerupt_classic.png",
    "typ1": "fire",
    "typ2": "ground",
    "moves": [
      "magma-armor",
      "solid-rock",
      "anger-point"
    ],
    "statsHP": 70,
    "statsATK": 100,
    "statsDEF": 70,
    "statsINIT": 40,
    "statsSATK": 105,
    "statsSDEF": 75
  },
  {
    "name": "torkoal",
    "id": 324,
    "img1": "../IMG/DexImg/torkoal_home.png",
    "img2": "../IMG/DexImg/torkoal_classic.png",
    "typ1": "fire",
    "moves": [
      "white-smoke",
      "drought",
      "shell-armor"
    ],
    "statsHP": 70,
    "statsATK": 85,
    "statsDEF": 140,
    "statsINIT": 20,
    "statsSATK": 85,
    "statsSDEF": 70
  },
  {
    "name": "spoink",
    "id": 325,
    "img1": "../IMG/DexImg/spoink_home.png",
    "img2": "../IMG/DexImg/spoink_classic.png",
    "typ1": "psychic",
    "moves": [
      "thick-fat",
      "own-tempo",
      "gluttony"
    ],
    "statsHP": 60,
    "statsATK": 25,
    "statsDEF": 35,
    "statsINIT": 60,
    "statsSATK": 70,
    "statsSDEF": 80
  },
  {
    "name": "grumpig",
    "id": 326,
    "img1": "../IMG/DexImg/grumpig_home.png",
    "img2": "../IMG/DexImg/grumpig_classic.png",
    "typ1": "psychic",
    "moves": [
      "thick-fat",
      "own-tempo",
      "gluttony"
    ],
    "statsHP": 80,
    "statsATK": 45,
    "statsDEF": 65,
    "statsINIT": 80,
    "statsSATK": 90,
    "statsSDEF": 110
  },
  {
    "name": "spinda",
    "id": 327,
    "img1": "../IMG/DexImg/spinda_home.png",
    "img2": "../IMG/DexImg/spinda_classic.png",
    "typ1": "normal",
    "moves": [
      "own-tempo",
      "tangled-feet",
      "contrary"
    ],
    "statsHP": 60,
    "statsATK": 60,
    "statsDEF": 60,
    "statsINIT": 60,
    "statsSATK": 60,
    "statsSDEF": 60
  },
  {
    "name": "trapinch",
    "id": 328,
    "img1": "../IMG/DexImg/trapinch_home.png",
    "img2": "../IMG/DexImg/trapinch_classic.png",
    "typ1": "ground",
    "moves": [
      "hyper-cutter",
      "arena-trap",
      "sheer-force"
    ],
    "statsHP": 45,
    "statsATK": 100,
    "statsDEF": 45,
    "statsINIT": 10,
    "statsSATK": 45,
    "statsSDEF": 45
  },
  {
    "name": "vibrava",
    "id": 329,
    "img1": "../IMG/DexImg/vibrava_home.png",
    "img2": "../IMG/DexImg/vibrava_classic.png",
    "typ1": "ground",
    "typ2": "dragon",
    "moves": [
      "levitate"
    ],
    "statsHP": 50,
    "statsATK": 70,
    "statsDEF": 50,
    "statsINIT": 70,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "flygon",
    "id": 330,
    "img1": "../IMG/DexImg/flygon_home.png",
    "img2": "../IMG/DexImg/flygon_classic.png",
    "typ1": "ground",
    "typ2": "dragon",
    "moves": [
      "levitate"
    ],
    "statsHP": 80,
    "statsATK": 100,
    "statsDEF": 80,
    "statsINIT": 100,
    "statsSATK": 80,
    "statsSDEF": 80
  },
  {
    "name": "cacnea",
    "id": 331,
    "img1": "../IMG/DexImg/cacnea_home.png",
    "img2": "../IMG/DexImg/cacnea_classic.png",
    "typ1": "grass",
    "moves": [
      "sand-veil",
      "water-absorb"
    ],
    "statsHP": 50,
    "statsATK": 85,
    "statsDEF": 40,
    "statsINIT": 35,
    "statsSATK": 85,
    "statsSDEF": 40
  },
  {
    "name": "cacturne",
    "id": 332,
    "img1": "../IMG/DexImg/cacturne_home.png",
    "img2": "../IMG/DexImg/cacturne_classic.png",
    "typ1": "grass",
    "typ2": "dark",
    "moves": [
      "sand-veil",
      "water-absorb"
    ],
    "statsHP": 70,
    "statsATK": 115,
    "statsDEF": 60,
    "statsINIT": 55,
    "statsSATK": 115,
    "statsSDEF": 60
  },
  {
    "name": "swablu",
    "id": 333,
    "img1": "../IMG/DexImg/swablu_home.png",
    "img2": "../IMG/DexImg/swablu_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "natural-cure",
      "cloud-nine"
    ],
    "statsHP": 45,
    "statsATK": 40,
    "statsDEF": 60,
    "statsINIT": 50,
    "statsSATK": 40,
    "statsSDEF": 75
  },
  {
    "name": "altaria",
    "id": 334,
    "img1": "../IMG/DexImg/altaria_home.png",
    "img2": "../IMG/DexImg/altaria_classic.png",
    "typ1": "dragon",
    "typ2": "flying",
    "moves": [
      "natural-cure",
      "cloud-nine"
    ],
    "statsHP": 75,
    "statsATK": 70,
    "statsDEF": 90,
    "statsINIT": 80,
    "statsSATK": 70,
    "statsSDEF": 105
  },
  {
    "name": "zangoose",
    "id": 335,
    "img1": "../IMG/DexImg/zangoose_home.png",
    "img2": "../IMG/DexImg/zangoose_classic.png",
    "typ1": "normal",
    "moves": [
      "immunity",
      "toxic-boost"
    ],
    "statsHP": 73,
    "statsATK": 115,
    "statsDEF": 60,
    "statsINIT": 90,
    "statsSATK": 60,
    "statsSDEF": 60
  },
  {
    "name": "seviper",
    "id": 336,
    "img1": "../IMG/DexImg/seviper_home.png",
    "img2": "../IMG/DexImg/seviper_classic.png",
    "typ1": "poison",
    "moves": [
      "shed-skin",
      "infiltrator"
    ],
    "statsHP": 73,
    "statsATK": 100,
    "statsDEF": 60,
    "statsINIT": 65,
    "statsSATK": 100,
    "statsSDEF": 60
  },
  {
    "name": "lunatone",
    "id": 337,
    "img1": "../IMG/DexImg/lunatone_home.png",
    "img2": "../IMG/DexImg/lunatone_classic.png",
    "typ1": "rock",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 90,
    "statsATK": 55,
    "statsDEF": 65,
    "statsINIT": 70,
    "statsSATK": 95,
    "statsSDEF": 85
  },
  {
    "name": "solrock",
    "id": 338,
    "img1": "../IMG/DexImg/solrock_home.png",
    "img2": "../IMG/DexImg/solrock_classic.png",
    "typ1": "rock",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 90,
    "statsATK": 95,
    "statsDEF": 85,
    "statsINIT": 70,
    "statsSATK": 55,
    "statsSDEF": 65
  },
  {
    "name": "barboach",
    "id": 339,
    "img1": "../IMG/DexImg/barboach_home.png",
    "img2": "../IMG/DexImg/barboach_classic.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "anticipation",
      "hydration"
    ],
    "statsHP": 50,
    "statsATK": 48,
    "statsDEF": 43,
    "statsINIT": 60,
    "statsSATK": 46,
    "statsSDEF": 41
  },
  {
    "name": "whiscash",
    "id": 340,
    "img1": "../IMG/DexImg/whiscash_home.png",
    "img2": "../IMG/DexImg/whiscash_classic.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "anticipation",
      "hydration"
    ],
    "statsHP": 110,
    "statsATK": 78,
    "statsDEF": 73,
    "statsINIT": 60,
    "statsSATK": 76,
    "statsSDEF": 71
  },
  {
    "name": "corphish",
    "id": 341,
    "img1": "../IMG/DexImg/corphish_home.png",
    "img2": "../IMG/DexImg/corphish_classic.png",
    "typ1": "water",
    "moves": [
      "hyper-cutter",
      "shell-armor",
      "adaptability"
    ],
    "statsHP": 43,
    "statsATK": 80,
    "statsDEF": 65,
    "statsINIT": 35,
    "statsSATK": 50,
    "statsSDEF": 35
  },
  {
    "name": "crawdaunt",
    "id": 342,
    "img1": "../IMG/DexImg/crawdaunt_home.png",
    "img2": "../IMG/DexImg/crawdaunt_classic.png",
    "typ1": "water",
    "typ2": "dark",
    "moves": [
      "hyper-cutter",
      "shell-armor",
      "adaptability"
    ],
    "statsHP": 63,
    "statsATK": 120,
    "statsDEF": 85,
    "statsINIT": 55,
    "statsSATK": 90,
    "statsSDEF": 55
  },
  {
    "name": "baltoy",
    "id": 343,
    "img1": "../IMG/DexImg/baltoy_home.png",
    "img2": "../IMG/DexImg/baltoy_classic.png",
    "typ1": "ground",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 40,
    "statsATK": 40,
    "statsDEF": 55,
    "statsINIT": 55,
    "statsSATK": 40,
    "statsSDEF": 70
  },
  {
    "name": "claydol",
    "id": 344,
    "img1": "../IMG/DexImg/claydol_home.png",
    "img2": "../IMG/DexImg/claydol_classic.png",
    "typ1": "ground",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 60,
    "statsATK": 70,
    "statsDEF": 105,
    "statsINIT": 75,
    "statsSATK": 70,
    "statsSDEF": 120
  },
  {
    "name": "lileep",
    "id": 345,
    "img1": "../IMG/DexImg/lileep_home.png",
    "img2": "../IMG/DexImg/lileep_classic.png",
    "typ1": "rock",
    "typ2": "grass",
    "moves": [
      "suction-cups",
      "storm-drain"
    ],
    "statsHP": 66,
    "statsATK": 41,
    "statsDEF": 77,
    "statsINIT": 23,
    "statsSATK": 61,
    "statsSDEF": 87
  },
  {
    "name": "cradily",
    "id": 346,
    "img1": "../IMG/DexImg/cradily_home.png",
    "img2": "../IMG/DexImg/cradily_classic.png",
    "typ1": "rock",
    "typ2": "grass",
    "moves": [
      "suction-cups",
      "storm-drain"
    ],
    "statsHP": 86,
    "statsATK": 81,
    "statsDEF": 97,
    "statsINIT": 43,
    "statsSATK": 81,
    "statsSDEF": 107
  },
  {
    "name": "anorith",
    "id": 347,
    "img1": "../IMG/DexImg/anorith_home.png",
    "img2": "../IMG/DexImg/anorith_classic.png",
    "typ1": "rock",
    "typ2": "bug",
    "moves": [
      "battle-armor",
      "swift-swim"
    ],
    "statsHP": 45,
    "statsATK": 95,
    "statsDEF": 50,
    "statsINIT": 75,
    "statsSATK": 40,
    "statsSDEF": 50
  },
  {
    "name": "armaldo",
    "id": 348,
    "img1": "../IMG/DexImg/armaldo_home.png",
    "img2": "../IMG/DexImg/armaldo_classic.png",
    "typ1": "rock",
    "typ2": "bug",
    "moves": [
      "battle-armor",
      "swift-swim"
    ],
    "statsHP": 75,
    "statsATK": 125,
    "statsDEF": 100,
    "statsINIT": 45,
    "statsSATK": 70,
    "statsSDEF": 80
  },
  {
    "name": "feebas",
    "id": 349,
    "img1": "../IMG/DexImg/feebas_home.png",
    "img2": "../IMG/DexImg/feebas_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "oblivious",
      "adaptability"
    ],
    "statsHP": 20,
    "statsATK": 15,
    "statsDEF": 20,
    "statsINIT": 80,
    "statsSATK": 10,
    "statsSDEF": 55
  },
  {
    "name": "milotic",
    "id": 350,
    "img1": "../IMG/DexImg/milotic_home.png",
    "img2": "../IMG/DexImg/milotic_classic.png",
    "typ1": "water",
    "moves": [
      "marvel-scale",
      "competitive",
      "cute-charm"
    ],
    "statsHP": 95,
    "statsATK": 60,
    "statsDEF": 79,
    "statsINIT": 81,
    "statsSATK": 100,
    "statsSDEF": 125
  },
  {
    "name": "castform",
    "id": 351,
    "img1": "../IMG/DexImg/castform_home.png",
    "img2": "../IMG/DexImg/castform_classic.png",
    "typ1": "normal",
    "moves": [
      "forecast"
    ],
    "statsHP": 70,
    "statsATK": 70,
    "statsDEF": 70,
    "statsINIT": 70,
    "statsSATK": 70,
    "statsSDEF": 70
  },
  {
    "name": "kecleon",
    "id": 352,
    "img1": "../IMG/DexImg/kecleon_home.png",
    "img2": "../IMG/DexImg/kecleon_classic.png",
    "typ1": "normal",
    "moves": [
      "color-change",
      "protean"
    ],
    "statsHP": 60,
    "statsATK": 90,
    "statsDEF": 70,
    "statsINIT": 40,
    "statsSATK": 60,
    "statsSDEF": 120
  },
  {
    "name": "shuppet",
    "id": 353,
    "img1": "../IMG/DexImg/shuppet_home.png",
    "img2": "../IMG/DexImg/shuppet_classic.png",
    "typ1": "ghost",
    "moves": [
      "insomnia",
      "frisk",
      "cursed-body"
    ],
    "statsHP": 44,
    "statsATK": 75,
    "statsDEF": 35,
    "statsINIT": 45,
    "statsSATK": 63,
    "statsSDEF": 33
  },
  {
    "name": "banette",
    "id": 354,
    "img1": "../IMG/DexImg/banette_home.png",
    "img2": "../IMG/DexImg/banette_classic.png",
    "typ1": "ghost",
    "moves": [
      "insomnia",
      "frisk",
      "cursed-body"
    ],
    "statsHP": 64,
    "statsATK": 115,
    "statsDEF": 65,
    "statsINIT": 65,
    "statsSATK": 83,
    "statsSDEF": 63
  },
  {
    "name": "duskull",
    "id": 355,
    "img1": "../IMG/DexImg/duskull_home.png",
    "img2": "../IMG/DexImg/duskull_classic.png",
    "typ1": "ghost",
    "moves": [
      "levitate",
      "frisk"
    ],
    "statsHP": 20,
    "statsATK": 40,
    "statsDEF": 90,
    "statsINIT": 25,
    "statsSATK": 30,
    "statsSDEF": 90
  },
  {
    "name": "dusclops",
    "id": 356,
    "img1": "../IMG/DexImg/dusclops_home.png",
    "img2": "../IMG/DexImg/dusclops_classic.png",
    "typ1": "ghost",
    "moves": [
      "pressure",
      "frisk"
    ],
    "statsHP": 40,
    "statsATK": 70,
    "statsDEF": 130,
    "statsINIT": 25,
    "statsSATK": 60,
    "statsSDEF": 130
  },
  {
    "name": "tropius",
    "id": 357,
    "img1": "../IMG/DexImg/tropius_home.png",
    "img2": "../IMG/DexImg/tropius_classic.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "chlorophyll",
      "solar-power",
      "harvest"
    ],
    "statsHP": 99,
    "statsATK": 68,
    "statsDEF": 83,
    "statsINIT": 51,
    "statsSATK": 72,
    "statsSDEF": 87
  },
  {
    "name": "chimecho",
    "id": 358,
    "img1": "../IMG/DexImg/chimecho_home.png",
    "img2": "../IMG/DexImg/chimecho_classic.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 75,
    "statsATK": 50,
    "statsDEF": 80,
    "statsINIT": 65,
    "statsSATK": 95,
    "statsSDEF": 90
  },
  {
    "name": "absol",
    "id": 359,
    "img1": "../IMG/DexImg/absol_home.png",
    "img2": "../IMG/DexImg/absol_classic.png",
    "typ1": "dark",
    "moves": [
      "pressure",
      "super-luck",
      "justified"
    ],
    "statsHP": 65,
    "statsATK": 130,
    "statsDEF": 60,
    "statsINIT": 75,
    "statsSATK": 75,
    "statsSDEF": 60
  },
  {
    "name": "wynaut",
    "id": 360,
    "img1": "../IMG/DexImg/wynaut_home.png",
    "img2": "../IMG/DexImg/wynaut_classic.png",
    "typ1": "psychic",
    "moves": [
      "shadow-tag",
      "telepathy"
    ],
    "statsHP": 95,
    "statsATK": 23,
    "statsDEF": 48,
    "statsINIT": 23,
    "statsSATK": 23,
    "statsSDEF": 48
  },
  {
    "name": "snorunt",
    "id": 361,
    "img1": "../IMG/DexImg/snorunt_home.png",
    "img2": "../IMG/DexImg/snorunt_classic.png",
    "typ1": "ice",
    "moves": [
      "inner-focus",
      "ice-body",
      "moody"
    ],
    "statsHP": 50,
    "statsATK": 50,
    "statsDEF": 50,
    "statsINIT": 50,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "glalie",
    "id": 362,
    "img1": "../IMG/DexImg/glalie_home.png",
    "img2": "../IMG/DexImg/glalie_classic.png",
    "typ1": "ice",
    "moves": [
      "inner-focus",
      "ice-body",
      "moody"
    ],
    "statsHP": 80,
    "statsATK": 80,
    "statsDEF": 80,
    "statsINIT": 80,
    "statsSATK": 80,
    "statsSDEF": 80
  },
  {
    "name": "spheal",
    "id": 363,
    "img1": "../IMG/DexImg/spheal_home.png",
    "img2": "../IMG/DexImg/spheal_classic.png",
    "typ1": "ice",
    "typ2": "water",
    "moves": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ],
    "statsHP": 70,
    "statsATK": 40,
    "statsDEF": 50,
    "statsINIT": 25,
    "statsSATK": 55,
    "statsSDEF": 50
  },
  {
    "name": "sealeo",
    "id": 364,
    "img1": "../IMG/DexImg/sealeo_home.png",
    "img2": "../IMG/DexImg/sealeo_classic.png",
    "typ1": "ice",
    "typ2": "water",
    "moves": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ],
    "statsHP": 90,
    "statsATK": 60,
    "statsDEF": 70,
    "statsINIT": 45,
    "statsSATK": 75,
    "statsSDEF": 70
  },
  {
    "name": "walrein",
    "id": 365,
    "img1": "../IMG/DexImg/walrein_home.png",
    "img2": "../IMG/DexImg/walrein_classic.png",
    "typ1": "ice",
    "typ2": "water",
    "moves": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ],
    "statsHP": 110,
    "statsATK": 80,
    "statsDEF": 90,
    "statsINIT": 65,
    "statsSATK": 95,
    "statsSDEF": 90
  },
  {
    "name": "clamperl",
    "id": 366,
    "img1": "../IMG/DexImg/clamperl_home.png",
    "img2": "../IMG/DexImg/clamperl_classic.png",
    "typ1": "water",
    "moves": [
      "shell-armor",
      "rattled"
    ],
    "statsHP": 35,
    "statsATK": 64,
    "statsDEF": 85,
    "statsINIT": 32,
    "statsSATK": 74,
    "statsSDEF": 55
  },
  {
    "name": "huntail",
    "id": 367,
    "img1": "../IMG/DexImg/huntail_home.png",
    "img2": "../IMG/DexImg/huntail_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "water-veil"
    ],
    "statsHP": 55,
    "statsATK": 104,
    "statsDEF": 105,
    "statsINIT": 52,
    "statsSATK": 94,
    "statsSDEF": 75
  },
  {
    "name": "gorebyss",
    "id": 368,
    "img1": "../IMG/DexImg/gorebyss_home.png",
    "img2": "../IMG/DexImg/gorebyss_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "hydration"
    ],
    "statsHP": 55,
    "statsATK": 84,
    "statsDEF": 105,
    "statsINIT": 52,
    "statsSATK": 114,
    "statsSDEF": 75
  },
  {
    "name": "relicanth",
    "id": 369,
    "img1": "../IMG/DexImg/relicanth_home.png",
    "img2": "../IMG/DexImg/relicanth_classic.png",
    "typ1": "water",
    "typ2": "rock",
    "moves": [
      "swift-swim",
      "rock-head",
      "sturdy"
    ],
    "statsHP": 100,
    "statsATK": 90,
    "statsDEF": 130,
    "statsINIT": 55,
    "statsSATK": 45,
    "statsSDEF": 65
  },
  {
    "name": "luvdisc",
    "id": 370,
    "img1": "../IMG/DexImg/luvdisc_home.png",
    "img2": "../IMG/DexImg/luvdisc_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "hydration"
    ],
    "statsHP": 43,
    "statsATK": 30,
    "statsDEF": 55,
    "statsINIT": 97,
    "statsSATK": 40,
    "statsSDEF": 65
  },
  {
    "name": "bagon",
    "id": 371,
    "img1": "../IMG/DexImg/bagon_home.png",
    "img2": "../IMG/DexImg/bagon_classic.png",
    "typ1": "dragon",
    "moves": [
      "rock-head",
      "sheer-force"
    ],
    "statsHP": 45,
    "statsATK": 75,
    "statsDEF": 60,
    "statsINIT": 50,
    "statsSATK": 40,
    "statsSDEF": 30
  },
  {
    "name": "shelgon",
    "id": 372,
    "img1": "../IMG/DexImg/shelgon_home.png",
    "img2": "../IMG/DexImg/shelgon_classic.png",
    "typ1": "dragon",
    "moves": [
      "rock-head",
      "overcoat"
    ],
    "statsHP": 65,
    "statsATK": 95,
    "statsDEF": 100,
    "statsINIT": 50,
    "statsSATK": 60,
    "statsSDEF": 50
  },
  {
    "name": "salamence",
    "id": 373,
    "img1": "../IMG/DexImg/salamence_home.png",
    "img2": "../IMG/DexImg/salamence_classic.png",
    "typ1": "dragon",
    "typ2": "flying",
    "moves": [
      "intimidate",
      "moxie"
    ],
    "statsHP": 95,
    "statsATK": 135,
    "statsDEF": 80,
    "statsINIT": 100,
    "statsSATK": 110,
    "statsSDEF": 80
  },
  {
    "name": "beldum",
    "id": 374,
    "img1": "../IMG/DexImg/beldum_home.png",
    "img2": "../IMG/DexImg/beldum_classic.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "clear-body",
      "light-metal"
    ],
    "statsHP": 40,
    "statsATK": 55,
    "statsDEF": 80,
    "statsINIT": 30,
    "statsSATK": 35,
    "statsSDEF": 60
  },
  {
    "name": "metang",
    "id": 375,
    "img1": "../IMG/DexImg/metang_home.png",
    "img2": "../IMG/DexImg/metang_classic.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "clear-body",
      "light-metal"
    ],
    "statsHP": 60,
    "statsATK": 75,
    "statsDEF": 100,
    "statsINIT": 50,
    "statsSATK": 55,
    "statsSDEF": 80
  },
  {
    "name": "metagross",
    "id": 376,
    "img1": "../IMG/DexImg/metagross_home.png",
    "img2": "../IMG/DexImg/metagross_classic.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "clear-body",
      "light-metal"
    ],
    "statsHP": 80,
    "statsATK": 135,
    "statsDEF": 130,
    "statsINIT": 70,
    "statsSATK": 95,
    "statsSDEF": 90
  },
  {
    "name": "regirock",
    "id": 377,
    "img1": "../IMG/DexImg/regirock_home.png",
    "img2": "../IMG/DexImg/regirock_classic.png",
    "typ1": "rock",
    "moves": [
      "clear-body",
      "sturdy"
    ],
    "statsHP": 80,
    "statsATK": 100,
    "statsDEF": 200,
    "statsINIT": 50,
    "statsSATK": 50,
    "statsSDEF": 100
  },
  {
    "name": "regice",
    "id": 378,
    "img1": "../IMG/DexImg/regice_home.png",
    "img2": "../IMG/DexImg/regice_classic.png",
    "typ1": "ice",
    "moves": [
      "clear-body",
      "ice-body"
    ],
    "statsHP": 80,
    "statsATK": 50,
    "statsDEF": 100,
    "statsINIT": 50,
    "statsSATK": 100,
    "statsSDEF": 200
  },
  {
    "name": "registeel",
    "id": 379,
    "img1": "../IMG/DexImg/registeel_home.png",
    "img2": "../IMG/DexImg/registeel_classic.png",
    "typ1": "steel",
    "moves": [
      "clear-body",
      "light-metal"
    ],
    "statsHP": 80,
    "statsATK": 75,
    "statsDEF": 150,
    "statsINIT": 50,
    "statsSATK": 75,
    "statsSDEF": 150
  },
  {
    "name": "latias",
    "id": 380,
    "img1": "../IMG/DexImg/latias_home.png",
    "img2": "../IMG/DexImg/latias_classic.png",
    "typ1": "dragon",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 80,
    "statsATK": 80,
    "statsDEF": 90,
    "statsINIT": 110,
    "statsSATK": 110,
    "statsSDEF": 130
  },
  {
    "name": "latios",
    "id": 381,
    "img1": "../IMG/DexImg/latios_home.png",
    "img2": "../IMG/DexImg/latios_classic.png",
    "typ1": "dragon",
    "typ2": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 80,
    "statsATK": 90,
    "statsDEF": 80,
    "statsINIT": 110,
    "statsSATK": 130,
    "statsSDEF": 110
  },
  {
    "name": "kyogre",
    "id": 382,
    "img1": "../IMG/DexImg/kyogre_home.png",
    "img2": "../IMG/DexImg/kyogre_classic.png",
    "typ1": "water",
    "moves": [
      "drizzle"
    ],
    "statsHP": 100,
    "statsATK": 100,
    "statsDEF": 90,
    "statsINIT": 90,
    "statsSATK": 150,
    "statsSDEF": 140
  },
  {
    "name": "groudon",
    "id": 383,
    "img1": "../IMG/DexImg/groudon_home.png",
    "img2": "../IMG/DexImg/groudon_classic.png",
    "typ1": "ground",
    "moves": [
      "drought"
    ],
    "statsHP": 100,
    "statsATK": 150,
    "statsDEF": 140,
    "statsINIT": 90,
    "statsSATK": 100,
    "statsSDEF": 90
  },
  {
    "name": "rayquaza",
    "id": 384,
    "img1": "../IMG/DexImg/rayquaza_home.png",
    "img2": "../IMG/DexImg/rayquaza_classic.png",
    "typ1": "dragon",
    "typ2": "flying",
    "moves": [
      "air-lock"
    ],
    "statsHP": 105,
    "statsATK": 150,
    "statsDEF": 90,
    "statsINIT": 95,
    "statsSATK": 150,
    "statsSDEF": 90
  },
  {
    "name": "jirachi",
    "id": 385,
    "img1": "../IMG/DexImg/jirachi_home.png",
    "img2": "../IMG/DexImg/jirachi_classic.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "serene-grace"
    ],
    "statsHP": 100,
    "statsATK": 100,
    "statsDEF": 100,
    "statsINIT": 100,
    "statsSATK": 100,
    "statsSDEF": 100
  },
  {
    "name": "deoxys-normal",
    "id": 386,
    "img1": "../IMG/DexImg/deoxys-normal_home.png",
    "img2": "../IMG/DexImg/deoxys-normal_classic.png",
    "typ1": "psychic",
    "moves": [
      "pressure"
    ],
    "statsHP": 50,
    "statsATK": 150,
    "statsDEF": 50,
    "statsINIT": 150,
    "statsSATK": 150,
    "statsSDEF": 50
  },
  {
    "name": "turtwig",
    "id": 387,
    "img1": "../IMG/DexImg/turtwig_home.png",
    "img2": "../IMG/DexImg/turtwig_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "shell-armor"
    ],
    "statsHP": 55,
    "statsATK": 68,
    "statsDEF": 64,
    "statsINIT": 31,
    "statsSATK": 45,
    "statsSDEF": 55
  },
  {
    "name": "grotle",
    "id": 388,
    "img1": "../IMG/DexImg/grotle_home.png",
    "img2": "../IMG/DexImg/grotle_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "shell-armor"
    ],
    "statsHP": 75,
    "statsATK": 89,
    "statsDEF": 85,
    "statsINIT": 36,
    "statsSATK": 55,
    "statsSDEF": 65
  },
  {
    "name": "torterra",
    "id": 389,
    "img1": "../IMG/DexImg/torterra_home.png",
    "img2": "../IMG/DexImg/torterra_classic.png",
    "typ1": "grass",
    "typ2": "ground",
    "moves": [
      "overgrow",
      "shell-armor"
    ],
    "statsHP": 95,
    "statsATK": 109,
    "statsDEF": 105,
    "statsINIT": 56,
    "statsSATK": 75,
    "statsSDEF": 85
  },
  {
    "name": "chimchar",
    "id": 390,
    "img1": "../IMG/DexImg/chimchar_home.png",
    "img2": "../IMG/DexImg/chimchar_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "iron-fist"
    ],
    "statsHP": 44,
    "statsATK": 58,
    "statsDEF": 44,
    "statsINIT": 61,
    "statsSATK": 58,
    "statsSDEF": 44
  },
  {
    "name": "monferno",
    "id": 391,
    "img1": "../IMG/DexImg/monferno_home.png",
    "img2": "../IMG/DexImg/monferno_classic.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "iron-fist"
    ],
    "statsHP": 64,
    "statsATK": 78,
    "statsDEF": 52,
    "statsINIT": 81,
    "statsSATK": 78,
    "statsSDEF": 52
  },
  {
    "name": "infernape",
    "id": 392,
    "img1": "../IMG/DexImg/infernape_home.png",
    "img2": "../IMG/DexImg/infernape_classic.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "iron-fist"
    ],
    "statsHP": 76,
    "statsATK": 104,
    "statsDEF": 71,
    "statsINIT": 108,
    "statsSATK": 104,
    "statsSDEF": 71
  },
  {
    "name": "piplup",
    "id": 393,
    "img1": "../IMG/DexImg/piplup_home.png",
    "img2": "../IMG/DexImg/piplup_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "competitive"
    ],
    "statsHP": 53,
    "statsATK": 51,
    "statsDEF": 53,
    "statsINIT": 40,
    "statsSATK": 61,
    "statsSDEF": 56
  },
  {
    "name": "prinplup",
    "id": 394,
    "img1": "../IMG/DexImg/prinplup_home.png",
    "img2": "../IMG/DexImg/prinplup_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "competitive"
    ],
    "statsHP": 64,
    "statsATK": 66,
    "statsDEF": 68,
    "statsINIT": 50,
    "statsSATK": 81,
    "statsSDEF": 76
  },
  {
    "name": "empoleon",
    "id": 395,
    "img1": "../IMG/DexImg/empoleon_home.png",
    "img2": "../IMG/DexImg/empoleon_classic.png",
    "typ1": "water",
    "typ2": "steel",
    "moves": [
      "torrent",
      "competitive"
    ],
    "statsHP": 84,
    "statsATK": 86,
    "statsDEF": 88,
    "statsINIT": 60,
    "statsSATK": 111,
    "statsSDEF": 101
  },
  {
    "name": "starly",
    "id": 396,
    "img1": "../IMG/DexImg/starly_home.png",
    "img2": "../IMG/DexImg/starly_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "reckless"
    ],
    "statsHP": 40,
    "statsATK": 55,
    "statsDEF": 30,
    "statsINIT": 60,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "staravia",
    "id": 397,
    "img1": "../IMG/DexImg/staravia_home.png",
    "img2": "../IMG/DexImg/staravia_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "intimidate",
      "reckless"
    ],
    "statsHP": 55,
    "statsATK": 75,
    "statsDEF": 50,
    "statsINIT": 80,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "staraptor",
    "id": 398,
    "img1": "../IMG/DexImg/staraptor_home.png",
    "img2": "../IMG/DexImg/staraptor_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "intimidate",
      "reckless"
    ],
    "statsHP": 85,
    "statsATK": 120,
    "statsDEF": 70,
    "statsINIT": 100,
    "statsSATK": 50,
    "statsSDEF": 60
  },
  {
    "name": "bidoof",
    "id": 399,
    "img1": "../IMG/DexImg/bidoof_home.png",
    "img2": "../IMG/DexImg/bidoof_classic.png",
    "typ1": "normal",
    "moves": [
      "simple",
      "unaware",
      "moody"
    ],
    "statsHP": 59,
    "statsATK": 45,
    "statsDEF": 40,
    "statsINIT": 31,
    "statsSATK": 35,
    "statsSDEF": 40
  },
  {
    "name": "bibarel",
    "id": 400,
    "img1": "../IMG/DexImg/bibarel_home.png",
    "img2": "../IMG/DexImg/bibarel_classic.png",
    "typ1": "normal",
    "typ2": "water",
    "moves": [
      "simple",
      "unaware",
      "moody"
    ],
    "statsHP": 79,
    "statsATK": 85,
    "statsDEF": 60,
    "statsINIT": 71,
    "statsSATK": 55,
    "statsSDEF": 60
  },
  {
    "name": "kricketot",
    "id": 401,
    "img1": "../IMG/DexImg/kricketot_home.png",
    "img2": "../IMG/DexImg/kricketot_classic.png",
    "typ1": "bug",
    "moves": [
      "shed-skin",
      "run-away"
    ],
    "statsHP": 37,
    "statsATK": 25,
    "statsDEF": 41,
    "statsINIT": 25,
    "statsSATK": 25,
    "statsSDEF": 41
  },
  {
    "name": "kricketune",
    "id": 402,
    "img1": "../IMG/DexImg/kricketune_home.png",
    "img2": "../IMG/DexImg/kricketune_classic.png",
    "typ1": "bug",
    "moves": [
      "swarm",
      "technician"
    ],
    "statsHP": 77,
    "statsATK": 85,
    "statsDEF": 51,
    "statsINIT": 65,
    "statsSATK": 55,
    "statsSDEF": 51
  },
  {
    "name": "shinx",
    "id": 403,
    "img1": "../IMG/DexImg/shinx_home.png",
    "img2": "../IMG/DexImg/shinx_classic.png",
    "typ1": "electric",
    "moves": [
      "rivalry",
      "intimidate",
      "guts"
    ],
    "statsHP": 45,
    "statsATK": 65,
    "statsDEF": 34,
    "statsINIT": 45,
    "statsSATK": 40,
    "statsSDEF": 34
  },
  {
    "name": "luxio",
    "id": 404,
    "img1": "../IMG/DexImg/luxio_home.png",
    "img2": "../IMG/DexImg/luxio_classic.png",
    "typ1": "electric",
    "moves": [
      "rivalry",
      "intimidate",
      "guts"
    ],
    "statsHP": 60,
    "statsATK": 85,
    "statsDEF": 49,
    "statsINIT": 60,
    "statsSATK": 60,
    "statsSDEF": 49
  },
  {
    "name": "luxray",
    "id": 405,
    "img1": "../IMG/DexImg/luxray_home.png",
    "img2": "../IMG/DexImg/luxray_classic.png",
    "typ1": "electric",
    "moves": [
      "rivalry",
      "intimidate",
      "guts"
    ],
    "statsHP": 80,
    "statsATK": 120,
    "statsDEF": 79,
    "statsINIT": 70,
    "statsSATK": 95,
    "statsSDEF": 79
  },
  {
    "name": "budew",
    "id": 406,
    "img1": "../IMG/DexImg/budew_home.png",
    "img2": "../IMG/DexImg/budew_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "natural-cure",
      "poison-point",
      "leaf-guard"
    ],
    "statsHP": 40,
    "statsATK": 30,
    "statsDEF": 35,
    "statsINIT": 55,
    "statsSATK": 50,
    "statsSDEF": 70
  },
  {
    "name": "roserade",
    "id": 407,
    "img1": "../IMG/DexImg/roserade_home.png",
    "img2": "../IMG/DexImg/roserade_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "natural-cure",
      "poison-point",
      "technician"
    ],
    "statsHP": 60,
    "statsATK": 70,
    "statsDEF": 65,
    "statsINIT": 90,
    "statsSATK": 125,
    "statsSDEF": 105
  },
  {
    "name": "cranidos",
    "id": 408,
    "img1": "../IMG/DexImg/cranidos_home.png",
    "img2": "../IMG/DexImg/cranidos_classic.png",
    "typ1": "rock",
    "moves": [
      "mold-breaker",
      "sheer-force"
    ],
    "statsHP": 67,
    "statsATK": 125,
    "statsDEF": 40,
    "statsINIT": 58,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "rampardos",
    "id": 409,
    "img1": "../IMG/DexImg/rampardos_home.png",
    "img2": "../IMG/DexImg/rampardos_classic.png",
    "typ1": "rock",
    "moves": [
      "mold-breaker",
      "sheer-force"
    ],
    "statsHP": 97,
    "statsATK": 165,
    "statsDEF": 60,
    "statsINIT": 58,
    "statsSATK": 65,
    "statsSDEF": 50
  },
  {
    "name": "shieldon",
    "id": 410,
    "img1": "../IMG/DexImg/shieldon_home.png",
    "img2": "../IMG/DexImg/shieldon_classic.png",
    "typ1": "rock",
    "typ2": "steel",
    "moves": [
      "sturdy",
      "soundproof"
    ],
    "statsHP": 30,
    "statsATK": 42,
    "statsDEF": 118,
    "statsINIT": 30,
    "statsSATK": 42,
    "statsSDEF": 88
  },
  {
    "name": "bastiodon",
    "id": 411,
    "img1": "../IMG/DexImg/bastiodon_home.png",
    "img2": "../IMG/DexImg/bastiodon_classic.png",
    "typ1": "rock",
    "typ2": "steel",
    "moves": [
      "sturdy",
      "soundproof"
    ],
    "statsHP": 60,
    "statsATK": 52,
    "statsDEF": 168,
    "statsINIT": 30,
    "statsSATK": 47,
    "statsSDEF": 138
  },
  {
    "name": "burmy",
    "id": 412,
    "img1": "../IMG/DexImg/burmy_home.png",
    "img2": "../IMG/DexImg/burmy_classic.png",
    "typ1": "bug",
    "moves": [
      "shed-skin",
      "overcoat"
    ],
    "statsHP": 40,
    "statsATK": 29,
    "statsDEF": 45,
    "statsINIT": 36,
    "statsSATK": 29,
    "statsSDEF": 45
  },
  {
    "name": "wormadam-plant",
    "id": 413,
    "img1": "../IMG/DexImg/wormadam-plant_home.png",
    "img2": "../IMG/DexImg/wormadam-plant_classic.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "anticipation",
      "overcoat"
    ],
    "statsHP": 60,
    "statsATK": 59,
    "statsDEF": 85,
    "statsINIT": 36,
    "statsSATK": 79,
    "statsSDEF": 105
  },
  {
    "name": "mothim",
    "id": 414,
    "img1": "../IMG/DexImg/mothim_home.png",
    "img2": "../IMG/DexImg/mothim_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "swarm",
      "tinted-lens"
    ],
    "statsHP": 70,
    "statsATK": 94,
    "statsDEF": 50,
    "statsINIT": 66,
    "statsSATK": 94,
    "statsSDEF": 50
  },
  {
    "name": "combee",
    "id": 415,
    "img1": "../IMG/DexImg/combee_home.png",
    "img2": "../IMG/DexImg/combee_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "honey-gather",
      "hustle"
    ],
    "statsHP": 30,
    "statsATK": 30,
    "statsDEF": 42,
    "statsINIT": 70,
    "statsSATK": 30,
    "statsSDEF": 42
  },
  {
    "name": "vespiquen",
    "id": 416,
    "img1": "../IMG/DexImg/vespiquen_home.png",
    "img2": "../IMG/DexImg/vespiquen_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "pressure",
      "unnerve"
    ],
    "statsHP": 70,
    "statsATK": 80,
    "statsDEF": 102,
    "statsINIT": 40,
    "statsSATK": 80,
    "statsSDEF": 102
  },
  {
    "name": "pachirisu",
    "id": 417,
    "img1": "../IMG/DexImg/pachirisu_home.png",
    "img2": "../IMG/DexImg/pachirisu_classic.png",
    "typ1": "electric",
    "moves": [
      "run-away",
      "pickup",
      "volt-absorb"
    ],
    "statsHP": 60,
    "statsATK": 45,
    "statsDEF": 70,
    "statsINIT": 95,
    "statsSATK": 45,
    "statsSDEF": 90
  },
  {
    "name": "buizel",
    "id": 418,
    "img1": "../IMG/DexImg/buizel_home.png",
    "img2": "../IMG/DexImg/buizel_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "water-veil"
    ],
    "statsHP": 55,
    "statsATK": 65,
    "statsDEF": 35,
    "statsINIT": 85,
    "statsSATK": 60,
    "statsSDEF": 30
  },
  {
    "name": "floatzel",
    "id": 419,
    "img1": "../IMG/DexImg/floatzel_home.png",
    "img2": "../IMG/DexImg/floatzel_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "water-veil"
    ],
    "statsHP": 85,
    "statsATK": 105,
    "statsDEF": 55,
    "statsINIT": 115,
    "statsSATK": 85,
    "statsSDEF": 50
  },
  {
    "name": "cherubi",
    "id": 420,
    "img1": "../IMG/DexImg/cherubi_home.png",
    "img2": "../IMG/DexImg/cherubi_classic.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll"
    ],
    "statsHP": 45,
    "statsATK": 35,
    "statsDEF": 45,
    "statsINIT": 35,
    "statsSATK": 62,
    "statsSDEF": 53
  },
  {
    "name": "cherrim",
    "id": 421,
    "img1": "../IMG/DexImg/cherrim_home.png",
    "img2": "../IMG/DexImg/cherrim_classic.png",
    "typ1": "grass",
    "moves": [
      "flower-gift"
    ],
    "statsHP": 70,
    "statsATK": 60,
    "statsDEF": 70,
    "statsINIT": 85,
    "statsSATK": 87,
    "statsSDEF": 78
  },
  {
    "name": "shellos",
    "id": 422,
    "img1": "../IMG/DexImg/shellos_home.png",
    "img2": "../IMG/DexImg/shellos_classic.png",
    "typ1": "water",
    "moves": [
      "sticky-hold",
      "storm-drain",
      "sand-force"
    ],
    "statsHP": 76,
    "statsATK": 48,
    "statsDEF": 48,
    "statsINIT": 34,
    "statsSATK": 57,
    "statsSDEF": 62
  },
  {
    "name": "gastrodon",
    "id": 423,
    "img1": "../IMG/DexImg/gastrodon_home.png",
    "img2": "../IMG/DexImg/gastrodon_classic.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "sticky-hold",
      "storm-drain",
      "sand-force"
    ],
    "statsHP": 111,
    "statsATK": 83,
    "statsDEF": 68,
    "statsINIT": 39,
    "statsSATK": 92,
    "statsSDEF": 82
  },
  {
    "name": "ambipom",
    "id": 424,
    "img1": "../IMG/DexImg/ambipom_home.png",
    "img2": "../IMG/DexImg/ambipom_classic.png",
    "typ1": "normal",
    "moves": [
      "technician",
      "pickup",
      "skill-link"
    ],
    "statsHP": 75,
    "statsATK": 100,
    "statsDEF": 66,
    "statsINIT": 115,
    "statsSATK": 60,
    "statsSDEF": 66
  },
  {
    "name": "drifloon",
    "id": 425,
    "img1": "../IMG/DexImg/drifloon_home.png",
    "img2": "../IMG/DexImg/drifloon_classic.png",
    "typ1": "ghost",
    "typ2": "flying",
    "moves": [
      "aftermath",
      "unburden",
      "flare-boost"
    ],
    "statsHP": 90,
    "statsATK": 50,
    "statsDEF": 34,
    "statsINIT": 70,
    "statsSATK": 60,
    "statsSDEF": 44
  },
  {
    "name": "drifblim",
    "id": 426,
    "img1": "../IMG/DexImg/drifblim_home.png",
    "img2": "../IMG/DexImg/drifblim_classic.png",
    "typ1": "ghost",
    "typ2": "flying",
    "moves": [
      "aftermath",
      "unburden",
      "flare-boost"
    ],
    "statsHP": 150,
    "statsATK": 80,
    "statsDEF": 44,
    "statsINIT": 80,
    "statsSATK": 90,
    "statsSDEF": 54
  },
  {
    "name": "buneary",
    "id": 427,
    "img1": "../IMG/DexImg/buneary_home.png",
    "img2": "../IMG/DexImg/buneary_classic.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "klutz",
      "limber"
    ],
    "statsHP": 55,
    "statsATK": 66,
    "statsDEF": 44,
    "statsINIT": 85,
    "statsSATK": 44,
    "statsSDEF": 56
  },
  {
    "name": "lopunny",
    "id": 428,
    "img1": "../IMG/DexImg/lopunny_home.png",
    "img2": "../IMG/DexImg/lopunny_classic.png",
    "typ1": "normal",
    "moves": [
      "cute-charm",
      "klutz",
      "limber"
    ],
    "statsHP": 65,
    "statsATK": 76,
    "statsDEF": 84,
    "statsINIT": 105,
    "statsSATK": 54,
    "statsSDEF": 96
  },
  {
    "name": "mismagius",
    "id": 429,
    "img1": "../IMG/DexImg/mismagius_home.png",
    "img2": "../IMG/DexImg/mismagius_classic.png",
    "typ1": "ghost",
    "moves": [
      "levitate"
    ],
    "statsHP": 60,
    "statsATK": 60,
    "statsDEF": 60,
    "statsINIT": 105,
    "statsSATK": 105,
    "statsSDEF": 105
  },
  {
    "name": "honchkrow",
    "id": 430,
    "img1": "../IMG/DexImg/honchkrow_home.png",
    "img2": "../IMG/DexImg/honchkrow_classic.png",
    "typ1": "dark",
    "typ2": "flying",
    "moves": [
      "insomnia",
      "super-luck",
      "moxie"
    ],
    "statsHP": 100,
    "statsATK": 125,
    "statsDEF": 52,
    "statsINIT": 71,
    "statsSATK": 105,
    "statsSDEF": 52
  },
  {
    "name": "glameow",
    "id": 431,
    "img1": "../IMG/DexImg/glameow_home.png",
    "img2": "../IMG/DexImg/glameow_classic.png",
    "typ1": "normal",
    "moves": [
      "limber",
      "own-tempo",
      "keen-eye"
    ],
    "statsHP": 49,
    "statsATK": 55,
    "statsDEF": 42,
    "statsINIT": 85,
    "statsSATK": 42,
    "statsSDEF": 37
  },
  {
    "name": "purugly",
    "id": 432,
    "img1": "../IMG/DexImg/purugly_home.png",
    "img2": "../IMG/DexImg/purugly_classic.png",
    "typ1": "normal",
    "moves": [
      "thick-fat",
      "own-tempo",
      "defiant"
    ],
    "statsHP": 71,
    "statsATK": 82,
    "statsDEF": 64,
    "statsINIT": 112,
    "statsSATK": 64,
    "statsSDEF": 59
  },
  {
    "name": "chingling",
    "id": 433,
    "img1": "../IMG/DexImg/chingling_home.png",
    "img2": "../IMG/DexImg/chingling_classic.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 45,
    "statsATK": 30,
    "statsDEF": 50,
    "statsINIT": 45,
    "statsSATK": 65,
    "statsSDEF": 50
  },
  {
    "name": "stunky",
    "id": 434,
    "img1": "../IMG/DexImg/stunky_home.png",
    "img2": "../IMG/DexImg/stunky_classic.png",
    "typ1": "poison",
    "typ2": "dark",
    "moves": [
      "stench",
      "aftermath",
      "keen-eye"
    ],
    "statsHP": 63,
    "statsATK": 63,
    "statsDEF": 47,
    "statsINIT": 74,
    "statsSATK": 41,
    "statsSDEF": 41
  },
  {
    "name": "skuntank",
    "id": 435,
    "img1": "../IMG/DexImg/skuntank_home.png",
    "img2": "../IMG/DexImg/skuntank_classic.png",
    "typ1": "poison",
    "typ2": "dark",
    "moves": [
      "stench",
      "aftermath",
      "keen-eye"
    ],
    "statsHP": 103,
    "statsATK": 93,
    "statsDEF": 67,
    "statsINIT": 84,
    "statsSATK": 71,
    "statsSDEF": 61
  },
  {
    "name": "bronzor",
    "id": 436,
    "img1": "../IMG/DexImg/bronzor_home.png",
    "img2": "../IMG/DexImg/bronzor_classic.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "levitate",
      "heatproof",
      "heavy-metal"
    ],
    "statsHP": 57,
    "statsATK": 24,
    "statsDEF": 86,
    "statsINIT": 23,
    "statsSATK": 24,
    "statsSDEF": 86
  },
  {
    "name": "bronzong",
    "id": 437,
    "img1": "../IMG/DexImg/bronzong_home.png",
    "img2": "../IMG/DexImg/bronzong_classic.png",
    "typ1": "steel",
    "typ2": "psychic",
    "moves": [
      "levitate",
      "heatproof",
      "heavy-metal"
    ],
    "statsHP": 67,
    "statsATK": 89,
    "statsDEF": 116,
    "statsINIT": 33,
    "statsSATK": 79,
    "statsSDEF": 116
  },
  {
    "name": "bonsly",
    "id": 438,
    "img1": "../IMG/DexImg/bonsly_home.png",
    "img2": "../IMG/DexImg/bonsly_classic.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "rock-head",
      "rattled"
    ],
    "statsHP": 50,
    "statsATK": 80,
    "statsDEF": 95,
    "statsINIT": 10,
    "statsSATK": 10,
    "statsSDEF": 45
  },
  {
    "name": "mime-jr",
    "id": 439,
    "img1": "../IMG/DexImg/mime-jr_home.png",
    "img2": "../IMG/DexImg/mime-jr_classic.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "soundproof",
      "filter",
      "technician"
    ],
    "statsHP": 20,
    "statsATK": 25,
    "statsDEF": 45,
    "statsINIT": 60,
    "statsSATK": 70,
    "statsSDEF": 90
  },
  {
    "name": "happiny",
    "id": 440,
    "img1": "../IMG/DexImg/happiny_home.png",
    "img2": "../IMG/DexImg/happiny_classic.png",
    "typ1": "normal",
    "moves": [
      "natural-cure",
      "serene-grace",
      "friend-guard"
    ],
    "statsHP": 100,
    "statsATK": 5,
    "statsDEF": 5,
    "statsINIT": 30,
    "statsSATK": 15,
    "statsSDEF": 65
  },
  {
    "name": "chatot",
    "id": 441,
    "img1": "../IMG/DexImg/chatot_home.png",
    "img2": "../IMG/DexImg/chatot_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "statsHP": 76,
    "statsATK": 65,
    "statsDEF": 45,
    "statsINIT": 91,
    "statsSATK": 92,
    "statsSDEF": 42
  },
  {
    "name": "spiritomb",
    "id": 442,
    "img1": "../IMG/DexImg/spiritomb_home.png",
    "img2": "../IMG/DexImg/spiritomb_classic.png",
    "typ1": "ghost",
    "typ2": "dark",
    "moves": [
      "pressure",
      "infiltrator"
    ],
    "statsHP": 50,
    "statsATK": 92,
    "statsDEF": 108,
    "statsINIT": 35,
    "statsSATK": 92,
    "statsSDEF": 108
  },
  {
    "name": "gible",
    "id": 443,
    "img1": "../IMG/DexImg/gible_home.png",
    "img2": "../IMG/DexImg/gible_classic.png",
    "typ1": "dragon",
    "typ2": "ground",
    "moves": [
      "sand-veil",
      "rough-skin"
    ],
    "statsHP": 58,
    "statsATK": 70,
    "statsDEF": 45,
    "statsINIT": 42,
    "statsSATK": 40,
    "statsSDEF": 45
  },
  {
    "name": "gabite",
    "id": 444,
    "img1": "../IMG/DexImg/gabite_home.png",
    "img2": "../IMG/DexImg/gabite_classic.png",
    "typ1": "dragon",
    "typ2": "ground",
    "moves": [
      "sand-veil",
      "rough-skin"
    ],
    "statsHP": 68,
    "statsATK": 90,
    "statsDEF": 65,
    "statsINIT": 82,
    "statsSATK": 50,
    "statsSDEF": 55
  },
  {
    "name": "garchomp",
    "id": 445,
    "img1": "../IMG/DexImg/garchomp_home.png",
    "img2": "../IMG/DexImg/garchomp_classic.png",
    "typ1": "dragon",
    "typ2": "ground",
    "moves": [
      "sand-veil",
      "rough-skin"
    ],
    "statsHP": 108,
    "statsATK": 130,
    "statsDEF": 95,
    "statsINIT": 102,
    "statsSATK": 80,
    "statsSDEF": 85
  },
  {
    "name": "munchlax",
    "id": 446,
    "img1": "../IMG/DexImg/munchlax_home.png",
    "img2": "../IMG/DexImg/munchlax_classic.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "thick-fat",
      "gluttony"
    ],
    "statsHP": 135,
    "statsATK": 85,
    "statsDEF": 40,
    "statsINIT": 5,
    "statsSATK": 40,
    "statsSDEF": 85
  },
  {
    "name": "riolu",
    "id": 447,
    "img1": "../IMG/DexImg/riolu_home.png",
    "img2": "../IMG/DexImg/riolu_classic.png",
    "typ1": "fighting",
    "moves": [
      "steadfast",
      "inner-focus",
      "prankster"
    ],
    "statsHP": 40,
    "statsATK": 70,
    "statsDEF": 40,
    "statsINIT": 60,
    "statsSATK": 35,
    "statsSDEF": 40
  },
  {
    "name": "lucario",
    "id": 448,
    "img1": "../IMG/DexImg/lucario_home.png",
    "img2": "../IMG/DexImg/lucario_classic.png",
    "typ1": "fighting",
    "typ2": "steel",
    "moves": [
      "steadfast",
      "inner-focus",
      "justified"
    ],
    "statsHP": 70,
    "statsATK": 110,
    "statsDEF": 70,
    "statsINIT": 90,
    "statsSATK": 115,
    "statsSDEF": 70
  },
  {
    "name": "hippopotas",
    "id": 449,
    "img1": "../IMG/DexImg/hippopotas_home.png",
    "img2": "../IMG/DexImg/hippopotas_classic.png",
    "typ1": "ground",
    "moves": [
      "sand-stream",
      "sand-force"
    ],
    "statsHP": 68,
    "statsATK": 72,
    "statsDEF": 78,
    "statsINIT": 32,
    "statsSATK": 38,
    "statsSDEF": 42
  },
  {
    "name": "hippowdon",
    "id": 450,
    "img1": "../IMG/DexImg/hippowdon_home.png",
    "img2": "../IMG/DexImg/hippowdon_classic.png",
    "typ1": "ground",
    "moves": [
      "sand-stream",
      "sand-force"
    ],
    "statsHP": 108,
    "statsATK": 112,
    "statsDEF": 118,
    "statsINIT": 47,
    "statsSATK": 68,
    "statsSDEF": 72
  },
  {
    "name": "skorupi",
    "id": 451,
    "img1": "../IMG/DexImg/skorupi_home.png",
    "img2": "../IMG/DexImg/skorupi_classic.png",
    "typ1": "poison",
    "typ2": "bug",
    "moves": [
      "battle-armor",
      "sniper",
      "keen-eye"
    ],
    "statsHP": 40,
    "statsATK": 50,
    "statsDEF": 90,
    "statsINIT": 65,
    "statsSATK": 30,
    "statsSDEF": 55
  },
  {
    "name": "drapion",
    "id": 452,
    "img1": "../IMG/DexImg/drapion_home.png",
    "img2": "../IMG/DexImg/drapion_classic.png",
    "typ1": "poison",
    "typ2": "dark",
    "moves": [
      "battle-armor",
      "sniper",
      "keen-eye"
    ],
    "statsHP": 70,
    "statsATK": 90,
    "statsDEF": 110,
    "statsINIT": 95,
    "statsSATK": 60,
    "statsSDEF": 75
  },
  {
    "name": "croagunk",
    "id": 453,
    "img1": "../IMG/DexImg/croagunk_home.png",
    "img2": "../IMG/DexImg/croagunk_classic.png",
    "typ1": "poison",
    "typ2": "fighting",
    "moves": [
      "anticipation",
      "dry-skin",
      "poison-touch"
    ],
    "statsHP": 48,
    "statsATK": 61,
    "statsDEF": 40,
    "statsINIT": 50,
    "statsSATK": 61,
    "statsSDEF": 40
  },
  {
    "name": "toxicroak",
    "id": 454,
    "img1": "../IMG/DexImg/toxicroak_home.png",
    "img2": "../IMG/DexImg/toxicroak_classic.png",
    "typ1": "poison",
    "typ2": "fighting",
    "moves": [
      "anticipation",
      "dry-skin",
      "poison-touch"
    ],
    "statsHP": 83,
    "statsATK": 106,
    "statsDEF": 65,
    "statsINIT": 85,
    "statsSATK": 86,
    "statsSDEF": 65
  },
  {
    "name": "carnivine",
    "id": 455,
    "img1": "../IMG/DexImg/carnivine_home.png",
    "img2": "../IMG/DexImg/carnivine_classic.png",
    "typ1": "grass",
    "moves": [
      "levitate"
    ],
    "statsHP": 74,
    "statsATK": 100,
    "statsDEF": 72,
    "statsINIT": 46,
    "statsSATK": 90,
    "statsSDEF": 72
  },
  {
    "name": "finneon",
    "id": 456,
    "img1": "../IMG/DexImg/finneon_home.png",
    "img2": "../IMG/DexImg/finneon_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "storm-drain",
      "water-veil"
    ],
    "statsHP": 49,
    "statsATK": 49,
    "statsDEF": 56,
    "statsINIT": 66,
    "statsSATK": 49,
    "statsSDEF": 61
  },
  {
    "name": "lumineon",
    "id": 457,
    "img1": "../IMG/DexImg/lumineon_home.png",
    "img2": "../IMG/DexImg/lumineon_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "storm-drain",
      "water-veil"
    ],
    "statsHP": 69,
    "statsATK": 69,
    "statsDEF": 76,
    "statsINIT": 91,
    "statsSATK": 69,
    "statsSDEF": 86
  },
  {
    "name": "mantyke",
    "id": 458,
    "img1": "../IMG/DexImg/mantyke_home.png",
    "img2": "../IMG/DexImg/mantyke_classic.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "swift-swim",
      "water-absorb",
      "water-veil"
    ],
    "statsHP": 45,
    "statsATK": 20,
    "statsDEF": 50,
    "statsINIT": 50,
    "statsSATK": 60,
    "statsSDEF": 120
  },
  {
    "name": "snover",
    "id": 459,
    "img1": "../IMG/DexImg/snover_home.png",
    "img2": "../IMG/DexImg/snover_classic.png",
    "typ1": "grass",
    "typ2": "ice",
    "moves": [
      "snow-warning",
      "soundproof"
    ],
    "statsHP": 60,
    "statsATK": 62,
    "statsDEF": 50,
    "statsINIT": 40,
    "statsSATK": 62,
    "statsSDEF": 60
  },
  {
    "name": "abomasnow",
    "id": 460,
    "img1": "../IMG/DexImg/abomasnow_home.png",
    "img2": "../IMG/DexImg/abomasnow_classic.png",
    "typ1": "grass",
    "typ2": "ice",
    "moves": [
      "snow-warning",
      "soundproof"
    ],
    "statsHP": 90,
    "statsATK": 92,
    "statsDEF": 75,
    "statsINIT": 60,
    "statsSATK": 92,
    "statsSDEF": 85
  },
  {
    "name": "weavile",
    "id": 461,
    "img1": "../IMG/DexImg/weavile_home.png",
    "img2": "../IMG/DexImg/weavile_classic.png",
    "typ1": "dark",
    "typ2": "ice",
    "moves": [
      "pressure",
      "pickpocket"
    ],
    "statsHP": 70,
    "statsATK": 120,
    "statsDEF": 65,
    "statsINIT": 125,
    "statsSATK": 45,
    "statsSDEF": 85
  },
  {
    "name": "magnezone",
    "id": 462,
    "img1": "../IMG/DexImg/magnezone_home.png",
    "img2": "../IMG/DexImg/magnezone_classic.png",
    "typ1": "electric",
    "typ2": "steel",
    "moves": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ],
    "statsHP": 70,
    "statsATK": 70,
    "statsDEF": 115,
    "statsINIT": 60,
    "statsSATK": 130,
    "statsSDEF": 90
  },
  {
    "name": "lickilicky",
    "id": 463,
    "img1": "../IMG/DexImg/lickilicky_home.png",
    "img2": "../IMG/DexImg/lickilicky_classic.png",
    "typ1": "normal",
    "moves": [
      "own-tempo",
      "oblivious",
      "cloud-nine"
    ],
    "statsHP": 110,
    "statsATK": 85,
    "statsDEF": 95,
    "statsINIT": 50,
    "statsSATK": 80,
    "statsSDEF": 95
  },
  {
    "name": "rhyperior",
    "id": 464,
    "img1": "../IMG/DexImg/rhyperior_home.png",
    "img2": "../IMG/DexImg/rhyperior_classic.png",
    "typ1": "ground",
    "typ2": "rock",
    "moves": [
      "lightning-rod",
      "solid-rock",
      "reckless"
    ],
    "statsHP": 115,
    "statsATK": 140,
    "statsDEF": 130,
    "statsINIT": 40,
    "statsSATK": 55,
    "statsSDEF": 55
  },
  {
    "name": "tangrowth",
    "id": 465,
    "img1": "../IMG/DexImg/tangrowth_home.png",
    "img2": "../IMG/DexImg/tangrowth_classic.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "leaf-guard",
      "regenerator"
    ],
    "statsHP": 100,
    "statsATK": 100,
    "statsDEF": 125,
    "statsINIT": 50,
    "statsSATK": 110,
    "statsSDEF": 50
  },
  {
    "name": "electivire",
    "id": 466,
    "img1": "../IMG/DexImg/electivire_home.png",
    "img2": "../IMG/DexImg/electivire_classic.png",
    "typ1": "electric",
    "moves": [
      "motor-drive",
      "vital-spirit"
    ],
    "statsHP": 75,
    "statsATK": 123,
    "statsDEF": 67,
    "statsINIT": 95,
    "statsSATK": 95,
    "statsSDEF": 85
  },
  {
    "name": "magmortar",
    "id": 467,
    "img1": "../IMG/DexImg/magmortar_home.png",
    "img2": "../IMG/DexImg/magmortar_classic.png",
    "typ1": "fire",
    "moves": [
      "flame-body",
      "vital-spirit"
    ],
    "statsHP": 75,
    "statsATK": 95,
    "statsDEF": 67,
    "statsINIT": 83,
    "statsSATK": 125,
    "statsSDEF": 95
  },
  {
    "name": "togekiss",
    "id": 468,
    "img1": "../IMG/DexImg/togekiss_home.png",
    "img2": "../IMG/DexImg/togekiss_classic.png",
    "typ1": "fairy",
    "typ2": "flying",
    "moves": [
      "hustle",
      "serene-grace",
      "super-luck"
    ],
    "statsHP": 85,
    "statsATK": 50,
    "statsDEF": 95,
    "statsINIT": 80,
    "statsSATK": 120,
    "statsSDEF": 115
  },
  {
    "name": "yanmega",
    "id": 469,
    "img1": "../IMG/DexImg/yanmega_home.png",
    "img2": "../IMG/DexImg/yanmega_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "speed-boost",
      "tinted-lens",
      "frisk"
    ],
    "statsHP": 86,
    "statsATK": 76,
    "statsDEF": 86,
    "statsINIT": 95,
    "statsSATK": 116,
    "statsSDEF": 56
  },
  {
    "name": "leafeon",
    "id": 470,
    "img1": "../IMG/DexImg/leafeon_home.png",
    "img2": "../IMG/DexImg/leafeon_classic.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "chlorophyll"
    ],
    "statsHP": 65,
    "statsATK": 110,
    "statsDEF": 130,
    "statsINIT": 95,
    "statsSATK": 60,
    "statsSDEF": 65
  },
  {
    "name": "glaceon",
    "id": 471,
    "img1": "../IMG/DexImg/glaceon_home.png",
    "img2": "../IMG/DexImg/glaceon_classic.png",
    "typ1": "ice",
    "moves": [
      "snow-cloak",
      "ice-body"
    ],
    "statsHP": 65,
    "statsATK": 60,
    "statsDEF": 110,
    "statsINIT": 65,
    "statsSATK": 130,
    "statsSDEF": 95
  },
  {
    "name": "gliscor",
    "id": 472,
    "img1": "../IMG/DexImg/gliscor_home.png",
    "img2": "../IMG/DexImg/gliscor_classic.png",
    "typ1": "ground",
    "typ2": "flying",
    "moves": [
      "hyper-cutter",
      "sand-veil",
      "poison-heal"
    ],
    "statsHP": 75,
    "statsATK": 95,
    "statsDEF": 125,
    "statsINIT": 95,
    "statsSATK": 45,
    "statsSDEF": 75
  },
  {
    "name": "mamoswine",
    "id": 473,
    "img1": "../IMG/DexImg/mamoswine_home.png",
    "img2": "../IMG/DexImg/mamoswine_classic.png",
    "typ1": "ice",
    "typ2": "ground",
    "moves": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ],
    "statsHP": 110,
    "statsATK": 130,
    "statsDEF": 80,
    "statsINIT": 80,
    "statsSATK": 70,
    "statsSDEF": 60
  },
  {
    "name": "porygon-z",
    "id": 474,
    "img1": "../IMG/DexImg/porygon-z_home.png",
    "img2": "../IMG/DexImg/porygon-z_classic.png",
    "typ1": "normal",
    "moves": [
      "adaptability",
      "download",
      "analytic"
    ],
    "statsHP": 85,
    "statsATK": 80,
    "statsDEF": 70,
    "statsINIT": 90,
    "statsSATK": 135,
    "statsSDEF": 75
  },
  {
    "name": "gallade",
    "id": 475,
    "img1": "../IMG/DexImg/gallade_home.png",
    "img2": "../IMG/DexImg/gallade_classic.png",
    "typ1": "psychic",
    "typ2": "fighting",
    "moves": [
      "steadfast",
      "sharpness",
      "justified"
    ],
    "statsHP": 68,
    "statsATK": 125,
    "statsDEF": 65,
    "statsINIT": 80,
    "statsSATK": 65,
    "statsSDEF": 115
  },
  {
    "name": "probopass",
    "id": 476,
    "img1": "../IMG/DexImg/probopass_home.png",
    "img2": "../IMG/DexImg/probopass_classic.png",
    "typ1": "rock",
    "typ2": "steel",
    "moves": [
      "sturdy",
      "magnet-pull",
      "sand-force"
    ],
    "statsHP": 60,
    "statsATK": 55,
    "statsDEF": 145,
    "statsINIT": 40,
    "statsSATK": 75,
    "statsSDEF": 150
  },
  {
    "name": "dusknoir",
    "id": 477,
    "img1": "../IMG/DexImg/dusknoir_home.png",
    "img2": "../IMG/DexImg/dusknoir_classic.png",
    "typ1": "ghost",
    "moves": [
      "pressure",
      "frisk"
    ],
    "statsHP": 45,
    "statsATK": 100,
    "statsDEF": 135,
    "statsINIT": 45,
    "statsSATK": 65,
    "statsSDEF": 135
  },
  {
    "name": "froslass",
    "id": 478,
    "img1": "../IMG/DexImg/froslass_home.png",
    "img2": "../IMG/DexImg/froslass_classic.png",
    "typ1": "ice",
    "typ2": "ghost",
    "moves": [
      "snow-cloak",
      "cursed-body"
    ],
    "statsHP": 70,
    "statsATK": 80,
    "statsDEF": 70,
    "statsINIT": 110,
    "statsSATK": 80,
    "statsSDEF": 70
  },
  {
    "name": "rotom",
    "id": 479,
    "img1": "../IMG/DexImg/rotom_home.png",
    "img2": "../IMG/DexImg/rotom_classic.png",
    "typ1": "electric",
    "typ2": "ghost",
    "moves": [
      "levitate"
    ],
    "statsHP": 50,
    "statsATK": 50,
    "statsDEF": 77,
    "statsINIT": 91,
    "statsSATK": 95,
    "statsSDEF": 77
  },
  {
    "name": "uxie",
    "id": 480,
    "img1": "../IMG/DexImg/uxie_home.png",
    "img2": "../IMG/DexImg/uxie_classic.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 75,
    "statsATK": 75,
    "statsDEF": 130,
    "statsINIT": 95,
    "statsSATK": 75,
    "statsSDEF": 130
  },
  {
    "name": "mesprit",
    "id": 481,
    "img1": "../IMG/DexImg/mesprit_home.png",
    "img2": "../IMG/DexImg/mesprit_classic.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 80,
    "statsATK": 105,
    "statsDEF": 105,
    "statsINIT": 80,
    "statsSATK": 105,
    "statsSDEF": 105
  },
  {
    "name": "azelf",
    "id": 482,
    "img1": "../IMG/DexImg/azelf_home.png",
    "img2": "../IMG/DexImg/azelf_classic.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 75,
    "statsATK": 125,
    "statsDEF": 70,
    "statsINIT": 115,
    "statsSATK": 125,
    "statsSDEF": 70
  },
  {
    "name": "dialga",
    "id": 483,
    "img1": "../IMG/DexImg/dialga_home.png",
    "img2": "../IMG/DexImg/dialga_classic.png",
    "typ1": "steel",
    "typ2": "dragon",
    "moves": [
      "pressure",
      "telepathy"
    ],
    "statsHP": 100,
    "statsATK": 120,
    "statsDEF": 120,
    "statsINIT": 90,
    "statsSATK": 150,
    "statsSDEF": 100
  },
  {
    "name": "palkia",
    "id": 484,
    "img1": "../IMG/DexImg/palkia_home.png",
    "img2": "../IMG/DexImg/palkia_classic.png",
    "typ1": "water",
    "typ2": "dragon",
    "moves": [
      "pressure",
      "telepathy"
    ],
    "statsHP": 90,
    "statsATK": 120,
    "statsDEF": 100,
    "statsINIT": 100,
    "statsSATK": 150,
    "statsSDEF": 120
  },
  {
    "name": "heatran",
    "id": 485,
    "img1": "../IMG/DexImg/heatran_home.png",
    "img2": "../IMG/DexImg/heatran_classic.png",
    "typ1": "fire",
    "typ2": "steel",
    "moves": [
      "flash-fire",
      "flame-body"
    ],
    "statsHP": 91,
    "statsATK": 90,
    "statsDEF": 106,
    "statsINIT": 77,
    "statsSATK": 130,
    "statsSDEF": 106
  },
  {
    "name": "regigigas",
    "id": 486,
    "img1": "../IMG/DexImg/regigigas_home.png",
    "img2": "../IMG/DexImg/regigigas_classic.png",
    "typ1": "normal",
    "moves": [
      "slow-start"
    ],
    "statsHP": 110,
    "statsATK": 160,
    "statsDEF": 110,
    "statsINIT": 100,
    "statsSATK": 80,
    "statsSDEF": 110
  },
  {
    "name": "giratina-altered",
    "id": 487,
    "img1": "../IMG/DexImg/giratina-altered_home.png",
    "img2": "../IMG/DexImg/giratina-altered_classic.png",
    "typ1": "ghost",
    "typ2": "dragon",
    "moves": [
      "pressure",
      "telepathy"
    ],
    "statsHP": 150,
    "statsATK": 100,
    "statsDEF": 120,
    "statsINIT": 90,
    "statsSATK": 100,
    "statsSDEF": 120
  },
  {
    "name": "cresselia",
    "id": 488,
    "img1": "../IMG/DexImg/cresselia_home.png",
    "img2": "../IMG/DexImg/cresselia_classic.png",
    "typ1": "psychic",
    "moves": [
      "levitate"
    ],
    "statsHP": 120,
    "statsATK": 70,
    "statsDEF": 110,
    "statsINIT": 85,
    "statsSATK": 75,
    "statsSDEF": 120
  },
  {
    "name": "phione",
    "id": 489,
    "img1": "../IMG/DexImg/phione_home.png",
    "img2": "../IMG/DexImg/phione_classic.png",
    "typ1": "water",
    "moves": [
      "hydration"
    ],
    "statsHP": 80,
    "statsATK": 80,
    "statsDEF": 80,
    "statsINIT": 80,
    "statsSATK": 80,
    "statsSDEF": 80
  },
  {
    "name": "manaphy",
    "id": 490,
    "img1": "../IMG/DexImg/manaphy_home.png",
    "img2": "../IMG/DexImg/manaphy_classic.png",
    "typ1": "water",
    "moves": [
      "hydration"
    ],
    "statsHP": 100,
    "statsATK": 100,
    "statsDEF": 100,
    "statsINIT": 100,
    "statsSATK": 100,
    "statsSDEF": 100
  },
  {
    "name": "darkrai",
    "id": 491,
    "img1": "../IMG/DexImg/darkrai_home.png",
    "img2": "../IMG/DexImg/darkrai_classic.png",
    "typ1": "dark",
    "moves": [
      "bad-dreams"
    ],
    "statsHP": 70,
    "statsATK": 90,
    "statsDEF": 90,
    "statsINIT": 125,
    "statsSATK": 135,
    "statsSDEF": 90
  },
  {
    "name": "shaymin-land",
    "id": 492,
    "img1": "../IMG/DexImg/shaymin-land_home.png",
    "img2": "../IMG/DexImg/shaymin-land_classic.png",
    "typ1": "grass",
    "moves": [
      "natural-cure"
    ],
    "statsHP": 100,
    "statsATK": 100,
    "statsDEF": 100,
    "statsINIT": 100,
    "statsSATK": 100,
    "statsSDEF": 100
  },
  {
    "name": "arceus",
    "id": 493,
    "img1": "../IMG/DexImg/arceus_home.png",
    "img2": "../IMG/DexImg/arceus_classic.png",
    "typ1": "normal",
    "moves": [
      "multitype"
    ],
    "statsHP": 120,
    "statsATK": 120,
    "statsDEF": 120,
    "statsINIT": 120,
    "statsSATK": 120,
    "statsSDEF": 120
  },
  {
    "name": "victini",
    "id": 494,
    "img1": "../IMG/DexImg/victini_home.png",
    "img2": "../IMG/DexImg/victini_classic.png",
    "typ1": "psychic",
    "typ2": "fire",
    "moves": [
      "victory-star"
    ],
    "statsHP": 100,
    "statsATK": 100,
    "statsDEF": 100,
    "statsINIT": 100,
    "statsSATK": 100,
    "statsSDEF": 100
  },
  {
    "name": "snivy",
    "id": 495,
    "img1": "../IMG/DexImg/snivy_home.png",
    "img2": "../IMG/DexImg/snivy_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "contrary"
    ],
    "statsHP": 45,
    "statsATK": 45,
    "statsDEF": 55,
    "statsINIT": 63,
    "statsSATK": 45,
    "statsSDEF": 55
  },
  {
    "name": "servine",
    "id": 496,
    "img1": "../IMG/DexImg/servine_home.png",
    "img2": "../IMG/DexImg/servine_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "contrary"
    ],
    "statsHP": 60,
    "statsATK": 60,
    "statsDEF": 75,
    "statsINIT": 83,
    "statsSATK": 60,
    "statsSDEF": 75
  },
  {
    "name": "serperior",
    "id": 497,
    "img1": "../IMG/DexImg/serperior_home.png",
    "img2": "../IMG/DexImg/serperior_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "contrary"
    ],
    "statsHP": 75,
    "statsATK": 75,
    "statsDEF": 95,
    "statsINIT": 113,
    "statsSATK": 75,
    "statsSDEF": 95
  },
  {
    "name": "tepig",
    "id": 498,
    "img1": "../IMG/DexImg/tepig_home.png",
    "img2": "../IMG/DexImg/tepig_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "thick-fat"
    ],
    "statsHP": 65,
    "statsATK": 63,
    "statsDEF": 45,
    "statsINIT": 45,
    "statsSATK": 45,
    "statsSDEF": 45
  },
  {
    "name": "pignite",
    "id": 499,
    "img1": "../IMG/DexImg/pignite_home.png",
    "img2": "../IMG/DexImg/pignite_classic.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "thick-fat"
    ],
    "statsHP": 90,
    "statsATK": 93,
    "statsDEF": 55,
    "statsINIT": 55,
    "statsSATK": 70,
    "statsSDEF": 55
  },
  {
    "name": "emboar",
    "id": 500,
    "img1": "../IMG/DexImg/emboar_home.png",
    "img2": "../IMG/DexImg/emboar_classic.png",
    "typ1": "fire",
    "typ2": "fighting",
    "moves": [
      "blaze",
      "reckless"
    ],
    "statsHP": 110,
    "statsATK": 123,
    "statsDEF": 65,
    "statsINIT": 65,
    "statsSATK": 100,
    "statsSDEF": 65
  },
  {
    "name": "oshawott",
    "id": 501,
    "img1": "../IMG/DexImg/oshawott_home.png",
    "img2": "../IMG/DexImg/oshawott_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "shell-armor"
    ],
    "statsHP": 55,
    "statsATK": 55,
    "statsDEF": 45,
    "statsINIT": 45,
    "statsSATK": 63,
    "statsSDEF": 45
  },
  {
    "name": "dewott",
    "id": 502,
    "img1": "../IMG/DexImg/dewott_home.png",
    "img2": "../IMG/DexImg/dewott_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "shell-armor"
    ],
    "statsHP": 75,
    "statsATK": 75,
    "statsDEF": 60,
    "statsINIT": 60,
    "statsSATK": 83,
    "statsSDEF": 60
  },
  {
    "name": "samurott",
    "id": 503,
    "img1": "../IMG/DexImg/samurott_home.png",
    "img2": "../IMG/DexImg/samurott_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "shell-armor"
    ],
    "statsHP": 95,
    "statsATK": 100,
    "statsDEF": 85,
    "statsINIT": 70,
    "statsSATK": 108,
    "statsSDEF": 70
  },
  {
    "name": "patrat",
    "id": 504,
    "img1": "../IMG/DexImg/patrat_home.png",
    "img2": "../IMG/DexImg/patrat_classic.png",
    "typ1": "normal",
    "moves": [
      "run-away",
      "keen-eye",
      "analytic"
    ],
    "statsHP": 45,
    "statsATK": 55,
    "statsDEF": 39,
    "statsINIT": 42,
    "statsSATK": 35,
    "statsSDEF": 39
  },
  {
    "name": "watchog",
    "id": 505,
    "img1": "../IMG/DexImg/watchog_home.png",
    "img2": "../IMG/DexImg/watchog_classic.png",
    "typ1": "normal",
    "moves": [
      "illuminate",
      "keen-eye",
      "analytic"
    ],
    "statsHP": 60,
    "statsATK": 85,
    "statsDEF": 69,
    "statsINIT": 77,
    "statsSATK": 60,
    "statsSDEF": 69
  },
  {
    "name": "lillipup",
    "id": 506,
    "img1": "../IMG/DexImg/lillipup_home.png",
    "img2": "../IMG/DexImg/lillipup_classic.png",
    "typ1": "normal",
    "moves": [
      "vital-spirit",
      "pickup",
      "run-away"
    ],
    "statsHP": 45,
    "statsATK": 60,
    "statsDEF": 45,
    "statsINIT": 55,
    "statsSATK": 25,
    "statsSDEF": 45
  },
  {
    "name": "herdier",
    "id": 507,
    "img1": "../IMG/DexImg/herdier_home.png",
    "img2": "../IMG/DexImg/herdier_classic.png",
    "typ1": "normal",
    "moves": [
      "intimidate",
      "sand-rush",
      "scrappy"
    ],
    "statsHP": 65,
    "statsATK": 80,
    "statsDEF": 65,
    "statsINIT": 60,
    "statsSATK": 35,
    "statsSDEF": 65
  },
  {
    "name": "stoutland",
    "id": 508,
    "img1": "../IMG/DexImg/stoutland_home.png",
    "img2": "../IMG/DexImg/stoutland_classic.png",
    "typ1": "normal",
    "moves": [
      "intimidate",
      "sand-rush",
      "scrappy"
    ],
    "statsHP": 85,
    "statsATK": 110,
    "statsDEF": 90,
    "statsINIT": 80,
    "statsSATK": 45,
    "statsSDEF": 90
  },
  {
    "name": "purrloin",
    "id": 509,
    "img1": "../IMG/DexImg/purrloin_home.png",
    "img2": "../IMG/DexImg/purrloin_classic.png",
    "typ1": "dark",
    "moves": [
      "limber",
      "unburden",
      "prankster"
    ],
    "statsHP": 41,
    "statsATK": 50,
    "statsDEF": 37,
    "statsINIT": 66,
    "statsSATK": 50,
    "statsSDEF": 37
  },
  {
    "name": "liepard",
    "id": 510,
    "img1": "../IMG/DexImg/liepard_home.png",
    "img2": "../IMG/DexImg/liepard_classic.png",
    "typ1": "dark",
    "moves": [
      "limber",
      "unburden",
      "prankster"
    ],
    "statsHP": 64,
    "statsATK": 88,
    "statsDEF": 50,
    "statsINIT": 106,
    "statsSATK": 88,
    "statsSDEF": 50
  },
  {
    "name": "pansage",
    "id": 511,
    "img1": "../IMG/DexImg/pansage_home.png",
    "img2": "../IMG/DexImg/pansage_classic.png",
    "typ1": "grass",
    "moves": [
      "gluttony",
      "overgrow"
    ],
    "statsHP": 50,
    "statsATK": 53,
    "statsDEF": 48,
    "statsINIT": 64,
    "statsSATK": 53,
    "statsSDEF": 48
  },
  {
    "name": "simisage",
    "id": 512,
    "img1": "../IMG/DexImg/simisage_home.png",
    "img2": "../IMG/DexImg/simisage_classic.png",
    "typ1": "grass",
    "moves": [
      "gluttony",
      "overgrow"
    ],
    "statsHP": 75,
    "statsATK": 98,
    "statsDEF": 63,
    "statsINIT": 101,
    "statsSATK": 98,
    "statsSDEF": 63
  },
  {
    "name": "pansear",
    "id": 513,
    "img1": "../IMG/DexImg/pansear_home.png",
    "img2": "../IMG/DexImg/pansear_classic.png",
    "typ1": "fire",
    "moves": [
      "gluttony",
      "blaze"
    ],
    "statsHP": 50,
    "statsATK": 53,
    "statsDEF": 48,
    "statsINIT": 64,
    "statsSATK": 53,
    "statsSDEF": 48
  },
  {
    "name": "simisear",
    "id": 514,
    "img1": "../IMG/DexImg/simisear_home.png",
    "img2": "../IMG/DexImg/simisear_classic.png",
    "typ1": "fire",
    "moves": [
      "gluttony",
      "blaze"
    ],
    "statsHP": 75,
    "statsATK": 98,
    "statsDEF": 63,
    "statsINIT": 101,
    "statsSATK": 98,
    "statsSDEF": 63
  },
  {
    "name": "panpour",
    "id": 515,
    "img1": "../IMG/DexImg/panpour_home.png",
    "img2": "../IMG/DexImg/panpour_classic.png",
    "typ1": "water",
    "moves": [
      "gluttony",
      "torrent"
    ],
    "statsHP": 50,
    "statsATK": 53,
    "statsDEF": 48,
    "statsINIT": 64,
    "statsSATK": 53,
    "statsSDEF": 48
  },
  {
    "name": "simipour",
    "id": 516,
    "img1": "../IMG/DexImg/simipour_home.png",
    "img2": "../IMG/DexImg/simipour_classic.png",
    "typ1": "water",
    "moves": [
      "gluttony",
      "torrent"
    ],
    "statsHP": 75,
    "statsATK": 98,
    "statsDEF": 63,
    "statsINIT": 101,
    "statsSATK": 98,
    "statsSDEF": 63
  },
  {
    "name": "munna",
    "id": 517,
    "img1": "../IMG/DexImg/munna_home.png",
    "img2": "../IMG/DexImg/munna_classic.png",
    "typ1": "psychic",
    "moves": [
      "forewarn",
      "synchronize",
      "telepathy"
    ],
    "statsHP": 76,
    "statsATK": 25,
    "statsDEF": 45,
    "statsINIT": 24,
    "statsSATK": 67,
    "statsSDEF": 55
  },
  {
    "name": "musharna",
    "id": 518,
    "img1": "../IMG/DexImg/musharna_home.png",
    "img2": "../IMG/DexImg/musharna_classic.png",
    "typ1": "psychic",
    "moves": [
      "forewarn",
      "synchronize",
      "telepathy"
    ],
    "statsHP": 116,
    "statsATK": 55,
    "statsDEF": 85,
    "statsINIT": 29,
    "statsSATK": 107,
    "statsSDEF": 95
  },
  {
    "name": "pidove",
    "id": 519,
    "img1": "../IMG/DexImg/pidove_home.png",
    "img2": "../IMG/DexImg/pidove_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ],
    "statsHP": 50,
    "statsATK": 55,
    "statsDEF": 50,
    "statsINIT": 43,
    "statsSATK": 36,
    "statsSDEF": 30
  },
  {
    "name": "tranquill",
    "id": 520,
    "img1": "../IMG/DexImg/tranquill_home.png",
    "img2": "../IMG/DexImg/tranquill_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ],
    "statsHP": 62,
    "statsATK": 77,
    "statsDEF": 62,
    "statsINIT": 65,
    "statsSATK": 50,
    "statsSDEF": 42
  },
  {
    "name": "unfezant",
    "id": 521,
    "img1": "../IMG/DexImg/unfezant_home.png",
    "img2": "../IMG/DexImg/unfezant_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ],
    "statsHP": 80,
    "statsATK": 115,
    "statsDEF": 80,
    "statsINIT": 93,
    "statsSATK": 65,
    "statsSDEF": 55
  },
  {
    "name": "blitzle",
    "id": 522,
    "img1": "../IMG/DexImg/blitzle_home.png",
    "img2": "../IMG/DexImg/blitzle_classic.png",
    "typ1": "electric",
    "moves": [
      "lightning-rod",
      "motor-drive",
      "sap-sipper"
    ],
    "statsHP": 45,
    "statsATK": 60,
    "statsDEF": 32,
    "statsINIT": 76,
    "statsSATK": 50,
    "statsSDEF": 32
  },
  {
    "name": "zebstrika",
    "id": 523,
    "img1": "../IMG/DexImg/zebstrika_home.png",
    "img2": "../IMG/DexImg/zebstrika_classic.png",
    "typ1": "electric",
    "moves": [
      "lightning-rod",
      "motor-drive",
      "sap-sipper"
    ],
    "statsHP": 75,
    "statsATK": 100,
    "statsDEF": 63,
    "statsINIT": 116,
    "statsSATK": 80,
    "statsSDEF": 63
  },
  {
    "name": "roggenrola",
    "id": 524,
    "img1": "../IMG/DexImg/roggenrola_home.png",
    "img2": "../IMG/DexImg/roggenrola_classic.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "weak-armor",
      "sand-force"
    ],
    "statsHP": 55,
    "statsATK": 75,
    "statsDEF": 85,
    "statsINIT": 15,
    "statsSATK": 25,
    "statsSDEF": 25
  },
  {
    "name": "boldore",
    "id": 525,
    "img1": "../IMG/DexImg/boldore_home.png",
    "img2": "../IMG/DexImg/boldore_classic.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "weak-armor",
      "sand-force"
    ],
    "statsHP": 70,
    "statsATK": 105,
    "statsDEF": 105,
    "statsINIT": 20,
    "statsSATK": 50,
    "statsSDEF": 40
  },
  {
    "name": "gigalith",
    "id": 526,
    "img1": "../IMG/DexImg/gigalith_home.png",
    "img2": "../IMG/DexImg/gigalith_classic.png",
    "typ1": "rock",
    "moves": [
      "sturdy",
      "sand-stream",
      "sand-force"
    ],
    "statsHP": 85,
    "statsATK": 135,
    "statsDEF": 130,
    "statsINIT": 25,
    "statsSATK": 60,
    "statsSDEF": 80
  },
  {
    "name": "woobat",
    "id": 527,
    "img1": "../IMG/DexImg/woobat_home.png",
    "img2": "../IMG/DexImg/woobat_classic.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "unaware",
      "klutz",
      "simple"
    ],
    "statsHP": 65,
    "statsATK": 45,
    "statsDEF": 43,
    "statsINIT": 72,
    "statsSATK": 55,
    "statsSDEF": 43
  },
  {
    "name": "swoobat",
    "id": 528,
    "img1": "../IMG/DexImg/swoobat_home.png",
    "img2": "../IMG/DexImg/swoobat_classic.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "unaware",
      "klutz",
      "simple"
    ],
    "statsHP": 67,
    "statsATK": 57,
    "statsDEF": 55,
    "statsINIT": 114,
    "statsSATK": 77,
    "statsSDEF": 55
  },
  {
    "name": "drilbur",
    "id": 529,
    "img1": "../IMG/DexImg/drilbur_home.png",
    "img2": "../IMG/DexImg/drilbur_classic.png",
    "typ1": "ground",
    "moves": [
      "sand-rush",
      "sand-force",
      "mold-breaker"
    ],
    "statsHP": 60,
    "statsATK": 85,
    "statsDEF": 40,
    "statsINIT": 68,
    "statsSATK": 30,
    "statsSDEF": 45
  },
  {
    "name": "excadrill",
    "id": 530,
    "img1": "../IMG/DexImg/excadrill_home.png",
    "img2": "../IMG/DexImg/excadrill_classic.png",
    "typ1": "ground",
    "typ2": "steel",
    "moves": [
      "sand-rush",
      "sand-force",
      "mold-breaker"
    ],
    "statsHP": 110,
    "statsATK": 135,
    "statsDEF": 60,
    "statsINIT": 88,
    "statsSATK": 50,
    "statsSDEF": 65
  },
  {
    "name": "audino",
    "id": 531,
    "img1": "../IMG/DexImg/audino_home.png",
    "img2": "../IMG/DexImg/audino_classic.png",
    "typ1": "normal",
    "moves": [
      "healer",
      "regenerator",
      "klutz"
    ],
    "statsHP": 103,
    "statsATK": 60,
    "statsDEF": 86,
    "statsINIT": 50,
    "statsSATK": 60,
    "statsSDEF": 86
  },
  {
    "name": "timburr",
    "id": 532,
    "img1": "../IMG/DexImg/timburr_home.png",
    "img2": "../IMG/DexImg/timburr_classic.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "sheer-force",
      "iron-fist"
    ],
    "statsHP": 75,
    "statsATK": 80,
    "statsDEF": 55,
    "statsINIT": 35,
    "statsSATK": 25,
    "statsSDEF": 35
  },
  {
    "name": "gurdurr",
    "id": 533,
    "img1": "../IMG/DexImg/gurdurr_home.png",
    "img2": "../IMG/DexImg/gurdurr_classic.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "sheer-force",
      "iron-fist"
    ],
    "statsHP": 85,
    "statsATK": 105,
    "statsDEF": 85,
    "statsINIT": 40,
    "statsSATK": 40,
    "statsSDEF": 50
  },
  {
    "name": "conkeldurr",
    "id": 534,
    "img1": "../IMG/DexImg/conkeldurr_home.png",
    "img2": "../IMG/DexImg/conkeldurr_classic.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "sheer-force",
      "iron-fist"
    ],
    "statsHP": 105,
    "statsATK": 140,
    "statsDEF": 95,
    "statsINIT": 45,
    "statsSATK": 55,
    "statsSDEF": 65
  },
  {
    "name": "tympole",
    "id": 535,
    "img1": "../IMG/DexImg/tympole_home.png",
    "img2": "../IMG/DexImg/tympole_classic.png",
    "typ1": "water",
    "moves": [
      "swift-swim",
      "hydration",
      "water-absorb"
    ],
    "statsHP": 50,
    "statsATK": 50,
    "statsDEF": 40,
    "statsINIT": 64,
    "statsSATK": 50,
    "statsSDEF": 40
  },
  {
    "name": "palpitoad",
    "id": 536,
    "img1": "../IMG/DexImg/palpitoad_home.png",
    "img2": "../IMG/DexImg/palpitoad_classic.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "swift-swim",
      "hydration",
      "water-absorb"
    ],
    "statsHP": 75,
    "statsATK": 65,
    "statsDEF": 55,
    "statsINIT": 69,
    "statsSATK": 65,
    "statsSDEF": 55
  },
  {
    "name": "seismitoad",
    "id": 537,
    "img1": "../IMG/DexImg/seismitoad_home.png",
    "img2": "../IMG/DexImg/seismitoad_classic.png",
    "typ1": "water",
    "typ2": "ground",
    "moves": [
      "swift-swim",
      "poison-touch",
      "water-absorb"
    ],
    "statsHP": 105,
    "statsATK": 95,
    "statsDEF": 75,
    "statsINIT": 74,
    "statsSATK": 85,
    "statsSDEF": 75
  },
  {
    "name": "throh",
    "id": 538,
    "img1": "../IMG/DexImg/throh_home.png",
    "img2": "../IMG/DexImg/throh_classic.png",
    "typ1": "fighting",
    "moves": [
      "guts",
      "inner-focus",
      "mold-breaker"
    ],
    "statsHP": 120,
    "statsATK": 100,
    "statsDEF": 85,
    "statsINIT": 45,
    "statsSATK": 30,
    "statsSDEF": 85
  },
  {
    "name": "sawk",
    "id": 539,
    "img1": "../IMG/DexImg/sawk_home.png",
    "img2": "../IMG/DexImg/sawk_classic.png",
    "typ1": "fighting",
    "moves": [
      "sturdy",
      "inner-focus",
      "mold-breaker"
    ],
    "statsHP": 75,
    "statsATK": 125,
    "statsDEF": 75,
    "statsINIT": 85,
    "statsSATK": 30,
    "statsSDEF": 75
  },
  {
    "name": "sewaddle",
    "id": 540,
    "img1": "../IMG/DexImg/sewaddle_home.png",
    "img2": "../IMG/DexImg/sewaddle_classic.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "swarm",
      "chlorophyll",
      "overcoat"
    ],
    "statsHP": 45,
    "statsATK": 53,
    "statsDEF": 70,
    "statsINIT": 42,
    "statsSATK": 40,
    "statsSDEF": 60
  },
  {
    "name": "swadloon",
    "id": 541,
    "img1": "../IMG/DexImg/swadloon_home.png",
    "img2": "../IMG/DexImg/swadloon_classic.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "leaf-guard",
      "chlorophyll",
      "overcoat"
    ],
    "statsHP": 55,
    "statsATK": 63,
    "statsDEF": 90,
    "statsINIT": 42,
    "statsSATK": 50,
    "statsSDEF": 80
  },
  {
    "name": "leavanny",
    "id": 542,
    "img1": "../IMG/DexImg/leavanny_home.png",
    "img2": "../IMG/DexImg/leavanny_classic.png",
    "typ1": "bug",
    "typ2": "grass",
    "moves": [
      "swarm",
      "chlorophyll",
      "overcoat"
    ],
    "statsHP": 75,
    "statsATK": 103,
    "statsDEF": 80,
    "statsINIT": 92,
    "statsSATK": 70,
    "statsSDEF": 80
  },
  {
    "name": "venipede",
    "id": 543,
    "img1": "../IMG/DexImg/venipede_home.png",
    "img2": "../IMG/DexImg/venipede_classic.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "poison-point",
      "swarm",
      "speed-boost"
    ],
    "statsHP": 30,
    "statsATK": 45,
    "statsDEF": 59,
    "statsINIT": 57,
    "statsSATK": 30,
    "statsSDEF": 39
  },
  {
    "name": "whirlipede",
    "id": 544,
    "img1": "../IMG/DexImg/whirlipede_home.png",
    "img2": "../IMG/DexImg/whirlipede_classic.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "poison-point",
      "swarm",
      "speed-boost"
    ],
    "statsHP": 40,
    "statsATK": 55,
    "statsDEF": 99,
    "statsINIT": 47,
    "statsSATK": 40,
    "statsSDEF": 79
  },
  {
    "name": "scolipede",
    "id": 545,
    "img1": "../IMG/DexImg/scolipede_home.png",
    "img2": "../IMG/DexImg/scolipede_classic.png",
    "typ1": "bug",
    "typ2": "poison",
    "moves": [
      "poison-point",
      "swarm",
      "speed-boost"
    ],
    "statsHP": 60,
    "statsATK": 100,
    "statsDEF": 89,
    "statsINIT": 112,
    "statsSATK": 55,
    "statsSDEF": 69
  },
  {
    "name": "cottonee",
    "id": 546,
    "img1": "../IMG/DexImg/cottonee_home.png",
    "img2": "../IMG/DexImg/cottonee_classic.png",
    "typ1": "grass",
    "typ2": "fairy",
    "moves": [
      "prankster",
      "infiltrator",
      "chlorophyll"
    ],
    "statsHP": 40,
    "statsATK": 27,
    "statsDEF": 60,
    "statsINIT": 66,
    "statsSATK": 37,
    "statsSDEF": 50
  },
  {
    "name": "whimsicott",
    "id": 547,
    "img1": "../IMG/DexImg/whimsicott_home.png",
    "img2": "../IMG/DexImg/whimsicott_classic.png",
    "typ1": "grass",
    "typ2": "fairy",
    "moves": [
      "prankster",
      "infiltrator",
      "chlorophyll"
    ],
    "statsHP": 60,
    "statsATK": 67,
    "statsDEF": 85,
    "statsINIT": 116,
    "statsSATK": 77,
    "statsSDEF": 75
  },
  {
    "name": "petilil",
    "id": 548,
    "img1": "../IMG/DexImg/petilil_home.png",
    "img2": "../IMG/DexImg/petilil_classic.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "own-tempo",
      "leaf-guard"
    ],
    "statsHP": 45,
    "statsATK": 35,
    "statsDEF": 50,
    "statsINIT": 30,
    "statsSATK": 70,
    "statsSDEF": 50
  },
  {
    "name": "lilligant",
    "id": 549,
    "img1": "../IMG/DexImg/lilligant_home.png",
    "img2": "../IMG/DexImg/lilligant_classic.png",
    "typ1": "grass",
    "moves": [
      "chlorophyll",
      "own-tempo",
      "leaf-guard"
    ],
    "statsHP": 70,
    "statsATK": 60,
    "statsDEF": 75,
    "statsINIT": 90,
    "statsSATK": 110,
    "statsSDEF": 75
  },
  {
    "name": "basculin-red-striped",
    "id": 550,
    "img1": "../IMG/DexImg/basculin-red-striped_home.png",
    "img2": "../IMG/DexImg/basculin-red-striped_classic.png",
    "typ1": "water",
    "moves": [
      "reckless",
      "adaptability",
      "mold-breaker"
    ],
    "statsHP": 70,
    "statsATK": 92,
    "statsDEF": 65,
    "statsINIT": 98,
    "statsSATK": 80,
    "statsSDEF": 55
  },
  {
    "name": "sandile",
    "id": 551,
    "img1": "../IMG/DexImg/sandile_home.png",
    "img2": "../IMG/DexImg/sandile_classic.png",
    "typ1": "ground",
    "typ2": "dark",
    "moves": [
      "intimidate",
      "moxie",
      "anger-point"
    ],
    "statsHP": 50,
    "statsATK": 72,
    "statsDEF": 35,
    "statsINIT": 65,
    "statsSATK": 35,
    "statsSDEF": 35
  },
  {
    "name": "krokorok",
    "id": 552,
    "img1": "../IMG/DexImg/krokorok_home.png",
    "img2": "../IMG/DexImg/krokorok_classic.png",
    "typ1": "ground",
    "typ2": "dark",
    "moves": [
      "intimidate",
      "moxie",
      "anger-point"
    ],
    "statsHP": 60,
    "statsATK": 82,
    "statsDEF": 45,
    "statsINIT": 74,
    "statsSATK": 45,
    "statsSDEF": 45
  },
  {
    "name": "krookodile",
    "id": 553,
    "img1": "../IMG/DexImg/krookodile_home.png",
    "img2": "../IMG/DexImg/krookodile_classic.png",
    "typ1": "ground",
    "typ2": "dark",
    "moves": [
      "intimidate",
      "moxie",
      "anger-point"
    ],
    "statsHP": 95,
    "statsATK": 117,
    "statsDEF": 80,
    "statsINIT": 92,
    "statsSATK": 65,
    "statsSDEF": 70
  },
  {
    "name": "darumaka",
    "id": 554,
    "img1": "../IMG/DexImg/darumaka_home.png",
    "img2": "../IMG/DexImg/darumaka_classic.png",
    "typ1": "fire",
    "moves": [
      "hustle",
      "inner-focus"
    ],
    "statsHP": 70,
    "statsATK": 90,
    "statsDEF": 45,
    "statsINIT": 50,
    "statsSATK": 15,
    "statsSDEF": 45
  },
  {
    "name": "darmanitan-standard",
    "id": 555,
    "img1": "../IMG/DexImg/darmanitan-standard_home.png",
    "img2": "../IMG/DexImg/darmanitan-standard_classic.png",
    "typ1": "fire",
    "moves": [
      "sheer-force",
      "zen-mode"
    ],
    "statsHP": 105,
    "statsATK": 140,
    "statsDEF": 55,
    "statsINIT": 95,
    "statsSATK": 30,
    "statsSDEF": 55
  },
  {
    "name": "maractus",
    "id": 556,
    "img1": "../IMG/DexImg/maractus_home.png",
    "img2": "../IMG/DexImg/maractus_classic.png",
    "typ1": "grass",
    "moves": [
      "water-absorb",
      "chlorophyll",
      "storm-drain"
    ],
    "statsHP": 75,
    "statsATK": 86,
    "statsDEF": 67,
    "statsINIT": 60,
    "statsSATK": 106,
    "statsSDEF": 67
  },
  {
    "name": "dwebble",
    "id": 557,
    "img1": "../IMG/DexImg/dwebble_home.png",
    "img2": "../IMG/DexImg/dwebble_classic.png",
    "typ1": "bug",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "shell-armor",
      "weak-armor"
    ],
    "statsHP": 50,
    "statsATK": 65,
    "statsDEF": 85,
    "statsINIT": 55,
    "statsSATK": 35,
    "statsSDEF": 35
  },
  {
    "name": "crustle",
    "id": 558,
    "img1": "../IMG/DexImg/crustle_home.png",
    "img2": "../IMG/DexImg/crustle_classic.png",
    "typ1": "bug",
    "typ2": "rock",
    "moves": [
      "sturdy",
      "shell-armor",
      "weak-armor"
    ],
    "statsHP": 70,
    "statsATK": 105,
    "statsDEF": 125,
    "statsINIT": 45,
    "statsSATK": 65,
    "statsSDEF": 75
  },
  {
    "name": "scraggy",
    "id": 559,
    "img1": "../IMG/DexImg/scraggy_home.png",
    "img2": "../IMG/DexImg/scraggy_classic.png",
    "typ1": "dark",
    "typ2": "fighting",
    "moves": [
      "shed-skin",
      "moxie",
      "intimidate"
    ],
    "statsHP": 50,
    "statsATK": 75,
    "statsDEF": 70,
    "statsINIT": 48,
    "statsSATK": 35,
    "statsSDEF": 70
  },
  {
    "name": "scrafty",
    "id": 560,
    "img1": "../IMG/DexImg/scrafty_home.png",
    "img2": "../IMG/DexImg/scrafty_classic.png",
    "typ1": "dark",
    "typ2": "fighting",
    "moves": [
      "shed-skin",
      "moxie",
      "intimidate"
    ],
    "statsHP": 65,
    "statsATK": 90,
    "statsDEF": 115,
    "statsINIT": 58,
    "statsSATK": 45,
    "statsSDEF": 115
  },
  {
    "name": "sigilyph",
    "id": 561,
    "img1": "../IMG/DexImg/sigilyph_home.png",
    "img2": "../IMG/DexImg/sigilyph_classic.png",
    "typ1": "psychic",
    "typ2": "flying",
    "moves": [
      "wonder-skin",
      "magic-guard",
      "tinted-lens"
    ],
    "statsHP": 72,
    "statsATK": 58,
    "statsDEF": 80,
    "statsINIT": 97,
    "statsSATK": 103,
    "statsSDEF": 80
  },
  {
    "name": "yamask",
    "id": 562,
    "img1": "../IMG/DexImg/yamask_home.png",
    "img2": "../IMG/DexImg/yamask_classic.png",
    "typ1": "ghost",
    "moves": [
      "mummy"
    ],
    "statsHP": 38,
    "statsATK": 30,
    "statsDEF": 85,
    "statsINIT": 30,
    "statsSATK": 55,
    "statsSDEF": 65
  },
  {
    "name": "cofagrigus",
    "id": 563,
    "img1": "../IMG/DexImg/cofagrigus_home.png",
    "img2": "../IMG/DexImg/cofagrigus_classic.png",
    "typ1": "ghost",
    "moves": [
      "mummy"
    ],
    "statsHP": 58,
    "statsATK": 50,
    "statsDEF": 145,
    "statsINIT": 30,
    "statsSATK": 95,
    "statsSDEF": 105
  },
  {
    "name": "tirtouga",
    "id": 564,
    "img1": "../IMG/DexImg/tirtouga_home.png",
    "img2": "../IMG/DexImg/tirtouga_classic.png",
    "typ1": "water",
    "typ2": "rock",
    "moves": [
      "solid-rock",
      "sturdy",
      "swift-swim"
    ],
    "statsHP": 54,
    "statsATK": 78,
    "statsDEF": 103,
    "statsINIT": 22,
    "statsSATK": 53,
    "statsSDEF": 45
  },
  {
    "name": "carracosta",
    "id": 565,
    "img1": "../IMG/DexImg/carracosta_home.png",
    "img2": "../IMG/DexImg/carracosta_classic.png",
    "typ1": "water",
    "typ2": "rock",
    "moves": [
      "solid-rock",
      "sturdy",
      "swift-swim"
    ],
    "statsHP": 74,
    "statsATK": 108,
    "statsDEF": 133,
    "statsINIT": 32,
    "statsSATK": 83,
    "statsSDEF": 65
  },
  {
    "name": "archen",
    "id": 566,
    "img1": "../IMG/DexImg/archen_home.png",
    "img2": "../IMG/DexImg/archen_classic.png",
    "typ1": "rock",
    "typ2": "flying",
    "moves": [
      "defeatist"
    ],
    "statsHP": 55,
    "statsATK": 112,
    "statsDEF": 45,
    "statsINIT": 70,
    "statsSATK": 74,
    "statsSDEF": 45
  },
  {
    "name": "archeops",
    "id": 567,
    "img1": "../IMG/DexImg/archeops_home.png",
    "img2": "../IMG/DexImg/archeops_classic.png",
    "typ1": "rock",
    "typ2": "flying",
    "moves": [
      "defeatist"
    ],
    "statsHP": 75,
    "statsATK": 140,
    "statsDEF": 65,
    "statsINIT": 110,
    "statsSATK": 112,
    "statsSDEF": 65
  },
  {
    "name": "trubbish",
    "id": 568,
    "img1": "../IMG/DexImg/trubbish_home.png",
    "img2": "../IMG/DexImg/trubbish_classic.png",
    "typ1": "poison",
    "moves": [
      "stench",
      "sticky-hold",
      "aftermath"
    ],
    "statsHP": 50,
    "statsATK": 50,
    "statsDEF": 62,
    "statsINIT": 65,
    "statsSATK": 40,
    "statsSDEF": 62
  },
  {
    "name": "garbodor",
    "id": 569,
    "img1": "../IMG/DexImg/garbodor_home.png",
    "img2": "../IMG/DexImg/garbodor_classic.png",
    "typ1": "poison",
    "moves": [
      "stench",
      "weak-armor",
      "aftermath"
    ],
    "statsHP": 80,
    "statsATK": 95,
    "statsDEF": 82,
    "statsINIT": 75,
    "statsSATK": 60,
    "statsSDEF": 82
  },
  {
    "name": "zorua",
    "id": 570,
    "img1": "../IMG/DexImg/zorua_home.png",
    "img2": "../IMG/DexImg/zorua_classic.png",
    "typ1": "dark",
    "moves": [
      "illusion"
    ],
    "statsHP": 40,
    "statsATK": 65,
    "statsDEF": 40,
    "statsINIT": 65,
    "statsSATK": 80,
    "statsSDEF": 40
  },
  {
    "name": "zoroark",
    "id": 571,
    "img1": "../IMG/DexImg/zoroark_home.png",
    "img2": "../IMG/DexImg/zoroark_classic.png",
    "typ1": "dark",
    "moves": [
      "illusion"
    ],
    "statsHP": 60,
    "statsATK": 105,
    "statsDEF": 60,
    "statsINIT": 105,
    "statsSATK": 120,
    "statsSDEF": 60
  },
  {
    "name": "minccino",
    "id": 572,
    "img1": "../IMG/DexImg/minccino_home.png",
    "img2": "../IMG/DexImg/minccino_classic.png",
    "typ1": "normal",
    "moves": [
      "cute-charm",
      "technician",
      "skill-link"
    ],
    "statsHP": 55,
    "statsATK": 50,
    "statsDEF": 40,
    "statsINIT": 75,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "cinccino",
    "id": 573,
    "img1": "../IMG/DexImg/cinccino_home.png",
    "img2": "../IMG/DexImg/cinccino_classic.png",
    "typ1": "normal",
    "moves": [
      "cute-charm",
      "technician",
      "skill-link"
    ],
    "statsHP": 75,
    "statsATK": 95,
    "statsDEF": 60,
    "statsINIT": 115,
    "statsSATK": 65,
    "statsSDEF": 60
  },
  {
    "name": "gothita",
    "id": 574,
    "img1": "../IMG/DexImg/gothita_home.png",
    "img2": "../IMG/DexImg/gothita_classic.png",
    "typ1": "psychic",
    "moves": [
      "frisk",
      "competitive",
      "shadow-tag"
    ],
    "statsHP": 45,
    "statsATK": 30,
    "statsDEF": 50,
    "statsINIT": 45,
    "statsSATK": 55,
    "statsSDEF": 65
  },
  {
    "name": "gothorita",
    "id": 575,
    "img1": "../IMG/DexImg/gothorita_home.png",
    "img2": "../IMG/DexImg/gothorita_classic.png",
    "typ1": "psychic",
    "moves": [
      "frisk",
      "competitive",
      "shadow-tag"
    ],
    "statsHP": 60,
    "statsATK": 45,
    "statsDEF": 70,
    "statsINIT": 55,
    "statsSATK": 75,
    "statsSDEF": 85
  },
  {
    "name": "gothitelle",
    "id": 576,
    "img1": "../IMG/DexImg/gothitelle_home.png",
    "img2": "../IMG/DexImg/gothitelle_classic.png",
    "typ1": "psychic",
    "moves": [
      "frisk",
      "competitive",
      "shadow-tag"
    ],
    "statsHP": 70,
    "statsATK": 55,
    "statsDEF": 95,
    "statsINIT": 65,
    "statsSATK": 95,
    "statsSDEF": 110
  },
  {
    "name": "solosis",
    "id": 577,
    "img1": "../IMG/DexImg/solosis_home.png",
    "img2": "../IMG/DexImg/solosis_classic.png",
    "typ1": "psychic",
    "moves": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ],
    "statsHP": 45,
    "statsATK": 30,
    "statsDEF": 40,
    "statsINIT": 20,
    "statsSATK": 105,
    "statsSDEF": 50
  },
  {
    "name": "duosion",
    "id": 578,
    "img1": "../IMG/DexImg/duosion_home.png",
    "img2": "../IMG/DexImg/duosion_classic.png",
    "typ1": "psychic",
    "moves": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ],
    "statsHP": 65,
    "statsATK": 40,
    "statsDEF": 50,
    "statsINIT": 30,
    "statsSATK": 125,
    "statsSDEF": 60
  },
  {
    "name": "reuniclus",
    "id": 579,
    "img1": "../IMG/DexImg/reuniclus_home.png",
    "img2": "../IMG/DexImg/reuniclus_classic.png",
    "typ1": "psychic",
    "moves": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ],
    "statsHP": 110,
    "statsATK": 65,
    "statsDEF": 75,
    "statsINIT": 30,
    "statsSATK": 125,
    "statsSDEF": 85
  },
  {
    "name": "ducklett",
    "id": 580,
    "img1": "../IMG/DexImg/ducklett_home.png",
    "img2": "../IMG/DexImg/ducklett_classic.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "big-pecks",
      "hydration"
    ],
    "statsHP": 62,
    "statsATK": 44,
    "statsDEF": 50,
    "statsINIT": 55,
    "statsSATK": 44,
    "statsSDEF": 50
  },
  {
    "name": "swanna",
    "id": 581,
    "img1": "../IMG/DexImg/swanna_home.png",
    "img2": "../IMG/DexImg/swanna_classic.png",
    "typ1": "water",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "big-pecks",
      "hydration"
    ],
    "statsHP": 75,
    "statsATK": 87,
    "statsDEF": 63,
    "statsINIT": 98,
    "statsSATK": 87,
    "statsSDEF": 63
  },
  {
    "name": "vanillite",
    "id": 582,
    "img1": "../IMG/DexImg/vanillite_home.png",
    "img2": "../IMG/DexImg/vanillite_classic.png",
    "typ1": "ice",
    "moves": [
      "ice-body",
      "snow-cloak",
      "weak-armor"
    ],
    "statsHP": 36,
    "statsATK": 50,
    "statsDEF": 50,
    "statsINIT": 44,
    "statsSATK": 65,
    "statsSDEF": 60
  },
  {
    "name": "vanillish",
    "id": 583,
    "img1": "../IMG/DexImg/vanillish_home.png",
    "img2": "../IMG/DexImg/vanillish_classic.png",
    "typ1": "ice",
    "moves": [
      "ice-body",
      "snow-cloak",
      "weak-armor"
    ],
    "statsHP": 51,
    "statsATK": 65,
    "statsDEF": 65,
    "statsINIT": 59,
    "statsSATK": 80,
    "statsSDEF": 75
  },
  {
    "name": "vanilluxe",
    "id": 584,
    "img1": "../IMG/DexImg/vanilluxe_home.png",
    "img2": "../IMG/DexImg/vanilluxe_classic.png",
    "typ1": "ice",
    "moves": [
      "ice-body",
      "snow-warning",
      "weak-armor"
    ],
    "statsHP": 71,
    "statsATK": 95,
    "statsDEF": 85,
    "statsINIT": 79,
    "statsSATK": 110,
    "statsSDEF": 95
  },
  {
    "name": "deerling",
    "id": 585,
    "img1": "../IMG/DexImg/deerling_home.png",
    "img2": "../IMG/DexImg/deerling_classic.png",
    "typ1": "normal",
    "typ2": "grass",
    "moves": [
      "chlorophyll",
      "sap-sipper",
      "serene-grace"
    ],
    "statsHP": 60,
    "statsATK": 60,
    "statsDEF": 50,
    "statsINIT": 75,
    "statsSATK": 40,
    "statsSDEF": 50
  },
  {
    "name": "sawsbuck",
    "id": 586,
    "img1": "../IMG/DexImg/sawsbuck_home.png",
    "img2": "../IMG/DexImg/sawsbuck_classic.png",
    "typ1": "normal",
    "typ2": "grass",
    "moves": [
      "chlorophyll",
      "sap-sipper",
      "serene-grace"
    ],
    "statsHP": 80,
    "statsATK": 100,
    "statsDEF": 70,
    "statsINIT": 95,
    "statsSATK": 60,
    "statsSDEF": 70
  },
  {
    "name": "emolga",
    "id": 587,
    "img1": "../IMG/DexImg/emolga_home.png",
    "img2": "../IMG/DexImg/emolga_classic.png",
    "typ1": "electric",
    "typ2": "flying",
    "moves": [
      "static",
      "motor-drive"
    ],
    "statsHP": 55,
    "statsATK": 75,
    "statsDEF": 60,
    "statsINIT": 103,
    "statsSATK": 75,
    "statsSDEF": 60
  },
  {
    "name": "karrablast",
    "id": 588,
    "img1": "../IMG/DexImg/karrablast_home.png",
    "img2": "../IMG/DexImg/karrablast_classic.png",
    "typ1": "bug",
    "moves": [
      "swarm",
      "shed-skin",
      "no-guard"
    ],
    "statsHP": 50,
    "statsATK": 75,
    "statsDEF": 45,
    "statsINIT": 60,
    "statsSATK": 40,
    "statsSDEF": 45
  },
  {
    "name": "escavalier",
    "id": 589,
    "img1": "../IMG/DexImg/escavalier_home.png",
    "img2": "../IMG/DexImg/escavalier_classic.png",
    "typ1": "bug",
    "typ2": "steel",
    "moves": [
      "swarm",
      "shell-armor",
      "overcoat"
    ],
    "statsHP": 70,
    "statsATK": 135,
    "statsDEF": 105,
    "statsINIT": 20,
    "statsSATK": 60,
    "statsSDEF": 105
  },
  {
    "name": "foongus",
    "id": 590,
    "img1": "../IMG/DexImg/foongus_home.png",
    "img2": "../IMG/DexImg/foongus_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "effect-spore",
      "regenerator"
    ],
    "statsHP": 69,
    "statsATK": 55,
    "statsDEF": 45,
    "statsINIT": 15,
    "statsSATK": 55,
    "statsSDEF": 55
  },
  {
    "name": "amoonguss",
    "id": 591,
    "img1": "../IMG/DexImg/amoonguss_home.png",
    "img2": "../IMG/DexImg/amoonguss_classic.png",
    "typ1": "grass",
    "typ2": "poison",
    "moves": [
      "effect-spore",
      "regenerator"
    ],
    "statsHP": 114,
    "statsATK": 85,
    "statsDEF": 70,
    "statsINIT": 30,
    "statsSATK": 85,
    "statsSDEF": 80
  },
  {
    "name": "frillish",
    "id": 592,
    "img1": "../IMG/DexImg/frillish_home.png",
    "img2": "../IMG/DexImg/frillish_classic.png",
    "typ1": "water",
    "typ2": "ghost",
    "moves": [
      "water-absorb",
      "cursed-body",
      "damp"
    ],
    "statsHP": 55,
    "statsATK": 40,
    "statsDEF": 50,
    "statsINIT": 40,
    "statsSATK": 65,
    "statsSDEF": 85
  },
  {
    "name": "jellicent",
    "id": 593,
    "img1": "../IMG/DexImg/jellicent_home.png",
    "img2": "../IMG/DexImg/jellicent_classic.png",
    "typ1": "water",
    "typ2": "ghost",
    "moves": [
      "water-absorb",
      "cursed-body",
      "damp"
    ],
    "statsHP": 100,
    "statsATK": 60,
    "statsDEF": 70,
    "statsINIT": 60,
    "statsSATK": 85,
    "statsSDEF": 105
  },
  {
    "name": "alomomola",
    "id": 594,
    "img1": "../IMG/DexImg/alomomola_home.png",
    "img2": "../IMG/DexImg/alomomola_classic.png",
    "typ1": "water",
    "moves": [
      "healer",
      "hydration",
      "regenerator"
    ],
    "statsHP": 165,
    "statsATK": 75,
    "statsDEF": 80,
    "statsINIT": 65,
    "statsSATK": 40,
    "statsSDEF": 45
  },
  {
    "name": "joltik",
    "id": 595,
    "img1": "../IMG/DexImg/joltik_home.png",
    "img2": "../IMG/DexImg/joltik_classic.png",
    "typ1": "bug",
    "typ2": "electric",
    "moves": [
      "compound-eyes",
      "unnerve",
      "swarm"
    ],
    "statsHP": 50,
    "statsATK": 47,
    "statsDEF": 50,
    "statsINIT": 65,
    "statsSATK": 57,
    "statsSDEF": 50
  },
  {
    "name": "galvantula",
    "id": 596,
    "img1": "../IMG/DexImg/galvantula_home.png",
    "img2": "../IMG/DexImg/galvantula_classic.png",
    "typ1": "bug",
    "typ2": "electric",
    "moves": [
      "compound-eyes",
      "unnerve",
      "swarm"
    ],
    "statsHP": 70,
    "statsATK": 77,
    "statsDEF": 60,
    "statsINIT": 108,
    "statsSATK": 97,
    "statsSDEF": 60
  },
  {
    "name": "ferroseed",
    "id": 597,
    "img1": "../IMG/DexImg/ferroseed_home.png",
    "img2": "../IMG/DexImg/ferroseed_classic.png",
    "typ1": "grass",
    "typ2": "steel",
    "moves": [
      "iron-barbs"
    ],
    "statsHP": 44,
    "statsATK": 50,
    "statsDEF": 91,
    "statsINIT": 10,
    "statsSATK": 24,
    "statsSDEF": 86
  },
  {
    "name": "ferrothorn",
    "id": 598,
    "img1": "../IMG/DexImg/ferrothorn_home.png",
    "img2": "../IMG/DexImg/ferrothorn_classic.png",
    "typ1": "grass",
    "typ2": "steel",
    "moves": [
      "iron-barbs",
      "anticipation"
    ],
    "statsHP": 74,
    "statsATK": 94,
    "statsDEF": 131,
    "statsINIT": 20,
    "statsSATK": 54,
    "statsSDEF": 116
  },
  {
    "name": "klink",
    "id": 599,
    "img1": "../IMG/DexImg/klink_home.png",
    "img2": "../IMG/DexImg/klink_classic.png",
    "typ1": "steel",
    "moves": [
      "plus",
      "minus",
      "clear-body"
    ],
    "statsHP": 40,
    "statsATK": 55,
    "statsDEF": 70,
    "statsINIT": 30,
    "statsSATK": 45,
    "statsSDEF": 60
  },
  {
    "name": "klang",
    "id": 600,
    "img1": "../IMG/DexImg/klang_home.png",
    "img2": "../IMG/DexImg/klang_classic.png",
    "typ1": "steel",
    "moves": [
      "plus",
      "minus",
      "clear-body"
    ],
    "statsHP": 60,
    "statsATK": 80,
    "statsDEF": 95,
    "statsINIT": 50,
    "statsSATK": 70,
    "statsSDEF": 85
  },
  {
    "name": "klinklang",
    "id": 601,
    "img1": "../IMG/DexImg/klinklang_home.png",
    "img2": "../IMG/DexImg/klinklang_classic.png",
    "typ1": "steel",
    "moves": [
      "plus",
      "minus",
      "clear-body"
    ],
    "statsHP": 60,
    "statsATK": 100,
    "statsDEF": 115,
    "statsINIT": 90,
    "statsSATK": 70,
    "statsSDEF": 85
  },
  {
    "name": "tynamo",
    "id": 602,
    "img1": "../IMG/DexImg/tynamo_home.png",
    "img2": "../IMG/DexImg/tynamo_classic.png",
    "typ1": "electric",
    "moves": [
      "levitate"
    ],
    "statsHP": 35,
    "statsATK": 55,
    "statsDEF": 40,
    "statsINIT": 60,
    "statsSATK": 45,
    "statsSDEF": 40
  },
  {
    "name": "eelektrik",
    "id": 603,
    "img1": "../IMG/DexImg/eelektrik_home.png",
    "img2": "../IMG/DexImg/eelektrik_classic.png",
    "typ1": "electric",
    "moves": [
      "levitate"
    ],
    "statsHP": 65,
    "statsATK": 85,
    "statsDEF": 70,
    "statsINIT": 40,
    "statsSATK": 75,
    "statsSDEF": 70
  },
  {
    "name": "eelektross",
    "id": 604,
    "img1": "../IMG/DexImg/eelektross_home.png",
    "img2": "../IMG/DexImg/eelektross_classic.png",
    "typ1": "electric",
    "moves": [
      "levitate"
    ],
    "statsHP": 85,
    "statsATK": 115,
    "statsDEF": 80,
    "statsINIT": 50,
    "statsSATK": 105,
    "statsSDEF": 80
  },
  {
    "name": "elgyem",
    "id": 605,
    "img1": "../IMG/DexImg/elgyem_home.png",
    "img2": "../IMG/DexImg/elgyem_classic.png",
    "typ1": "psychic",
    "moves": [
      "telepathy",
      "synchronize",
      "analytic"
    ],
    "statsHP": 55,
    "statsATK": 55,
    "statsDEF": 55,
    "statsINIT": 30,
    "statsSATK": 85,
    "statsSDEF": 55
  },
  {
    "name": "beheeyem",
    "id": 606,
    "img1": "../IMG/DexImg/beheeyem_home.png",
    "img2": "../IMG/DexImg/beheeyem_classic.png",
    "typ1": "psychic",
    "moves": [
      "telepathy",
      "synchronize",
      "analytic"
    ],
    "statsHP": 75,
    "statsATK": 75,
    "statsDEF": 75,
    "statsINIT": 40,
    "statsSATK": 125,
    "statsSDEF": 95
  },
  {
    "name": "litwick",
    "id": 607,
    "img1": "../IMG/DexImg/litwick_home.png",
    "img2": "../IMG/DexImg/litwick_classic.png",
    "typ1": "ghost",
    "typ2": "fire",
    "moves": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ],
    "statsHP": 50,
    "statsATK": 30,
    "statsDEF": 55,
    "statsINIT": 20,
    "statsSATK": 65,
    "statsSDEF": 55
  },
  {
    "name": "lampent",
    "id": 608,
    "img1": "../IMG/DexImg/lampent_home.png",
    "img2": "../IMG/DexImg/lampent_classic.png",
    "typ1": "ghost",
    "typ2": "fire",
    "moves": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ],
    "statsHP": 60,
    "statsATK": 40,
    "statsDEF": 60,
    "statsINIT": 55,
    "statsSATK": 95,
    "statsSDEF": 60
  },
  {
    "name": "chandelure",
    "id": 609,
    "img1": "../IMG/DexImg/chandelure_home.png",
    "img2": "../IMG/DexImg/chandelure_classic.png",
    "typ1": "ghost",
    "typ2": "fire",
    "moves": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ],
    "statsHP": 60,
    "statsATK": 55,
    "statsDEF": 90,
    "statsINIT": 80,
    "statsSATK": 145,
    "statsSDEF": 90
  },
  {
    "name": "axew",
    "id": 610,
    "img1": "../IMG/DexImg/axew_home.png",
    "img2": "../IMG/DexImg/axew_classic.png",
    "typ1": "dragon",
    "moves": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ],
    "statsHP": 46,
    "statsATK": 87,
    "statsDEF": 60,
    "statsINIT": 57,
    "statsSATK": 30,
    "statsSDEF": 40
  },
  {
    "name": "fraxure",
    "id": 611,
    "img1": "../IMG/DexImg/fraxure_home.png",
    "img2": "../IMG/DexImg/fraxure_classic.png",
    "typ1": "dragon",
    "moves": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ],
    "statsHP": 66,
    "statsATK": 117,
    "statsDEF": 70,
    "statsINIT": 67,
    "statsSATK": 40,
    "statsSDEF": 50
  },
  {
    "name": "haxorus",
    "id": 612,
    "img1": "../IMG/DexImg/haxorus_home.png",
    "img2": "../IMG/DexImg/haxorus_classic.png",
    "typ1": "dragon",
    "moves": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ],
    "statsHP": 76,
    "statsATK": 147,
    "statsDEF": 90,
    "statsINIT": 97,
    "statsSATK": 60,
    "statsSDEF": 70
  },
  {
    "name": "cubchoo",
    "id": 613,
    "img1": "../IMG/DexImg/cubchoo_home.png",
    "img2": "../IMG/DexImg/cubchoo_classic.png",
    "typ1": "ice",
    "moves": [
      "snow-cloak",
      "slush-rush",
      "rattled"
    ],
    "statsHP": 55,
    "statsATK": 70,
    "statsDEF": 40,
    "statsINIT": 40,
    "statsSATK": 60,
    "statsSDEF": 40
  },
  {
    "name": "beartic",
    "id": 614,
    "img1": "../IMG/DexImg/beartic_home.png",
    "img2": "../IMG/DexImg/beartic_classic.png",
    "typ1": "ice",
    "moves": [
      "snow-cloak",
      "slush-rush",
      "swift-swim"
    ],
    "statsHP": 95,
    "statsATK": 130,
    "statsDEF": 80,
    "statsINIT": 50,
    "statsSATK": 70,
    "statsSDEF": 80
  },
  {
    "name": "cryogonal",
    "id": 615,
    "img1": "../IMG/DexImg/cryogonal_home.png",
    "img2": "../IMG/DexImg/cryogonal_classic.png",
    "typ1": "ice",
    "moves": [
      "levitate"
    ],
    "statsHP": 80,
    "statsATK": 50,
    "statsDEF": 50,
    "statsINIT": 105,
    "statsSATK": 95,
    "statsSDEF": 135
  },
  {
    "name": "shelmet",
    "id": 616,
    "img1": "../IMG/DexImg/shelmet_home.png",
    "img2": "../IMG/DexImg/shelmet_classic.png",
    "typ1": "bug",
    "moves": [
      "hydration",
      "shell-armor",
      "overcoat"
    ],
    "statsHP": 50,
    "statsATK": 40,
    "statsDEF": 85,
    "statsINIT": 25,
    "statsSATK": 40,
    "statsSDEF": 65
  },
  {
    "name": "accelgor",
    "id": 617,
    "img1": "../IMG/DexImg/accelgor_home.png",
    "img2": "../IMG/DexImg/accelgor_classic.png",
    "typ1": "bug",
    "moves": [
      "hydration",
      "sticky-hold",
      "unburden"
    ],
    "statsHP": 80,
    "statsATK": 70,
    "statsDEF": 40,
    "statsINIT": 145,
    "statsSATK": 100,
    "statsSDEF": 60
  },
  {
    "name": "stunfisk",
    "id": 618,
    "img1": "../IMG/DexImg/stunfisk_home.png",
    "img2": "../IMG/DexImg/stunfisk_classic.png",
    "typ1": "ground",
    "typ2": "electric",
    "moves": [
      "static",
      "limber",
      "sand-veil"
    ],
    "statsHP": 109,
    "statsATK": 66,
    "statsDEF": 84,
    "statsINIT": 32,
    "statsSATK": 81,
    "statsSDEF": 99
  },
  {
    "name": "mienfoo",
    "id": 619,
    "img1": "../IMG/DexImg/mienfoo_home.png",
    "img2": "../IMG/DexImg/mienfoo_classic.png",
    "typ1": "fighting",
    "moves": [
      "inner-focus",
      "regenerator",
      "reckless"
    ],
    "statsHP": 45,
    "statsATK": 85,
    "statsDEF": 50,
    "statsINIT": 65,
    "statsSATK": 55,
    "statsSDEF": 50
  },
  {
    "name": "mienshao",
    "id": 620,
    "img1": "../IMG/DexImg/mienshao_home.png",
    "img2": "../IMG/DexImg/mienshao_classic.png",
    "typ1": "fighting",
    "moves": [
      "inner-focus",
      "regenerator",
      "reckless"
    ],
    "statsHP": 65,
    "statsATK": 125,
    "statsDEF": 60,
    "statsINIT": 105,
    "statsSATK": 95,
    "statsSDEF": 60
  },
  {
    "name": "druddigon",
    "id": 621,
    "img1": "../IMG/DexImg/druddigon_home.png",
    "img2": "../IMG/DexImg/druddigon_classic.png",
    "typ1": "dragon",
    "moves": [
      "rough-skin",
      "sheer-force",
      "mold-breaker"
    ],
    "statsHP": 77,
    "statsATK": 120,
    "statsDEF": 90,
    "statsINIT": 48,
    "statsSATK": 60,
    "statsSDEF": 90
  },
  {
    "name": "golett",
    "id": 622,
    "img1": "../IMG/DexImg/golett_home.png",
    "img2": "../IMG/DexImg/golett_classic.png",
    "typ1": "ground",
    "typ2": "ghost",
    "moves": [
      "iron-fist",
      "klutz",
      "no-guard"
    ],
    "statsHP": 59,
    "statsATK": 74,
    "statsDEF": 50,
    "statsINIT": 35,
    "statsSATK": 35,
    "statsSDEF": 50
  },
  {
    "name": "golurk",
    "id": 623,
    "img1": "../IMG/DexImg/golurk_home.png",
    "img2": "../IMG/DexImg/golurk_classic.png",
    "typ1": "ground",
    "typ2": "ghost",
    "moves": [
      "iron-fist",
      "klutz",
      "no-guard"
    ],
    "statsHP": 89,
    "statsATK": 124,
    "statsDEF": 80,
    "statsINIT": 55,
    "statsSATK": 55,
    "statsSDEF": 80
  },
  {
    "name": "pawniard",
    "id": 624,
    "img1": "../IMG/DexImg/pawniard_home.png",
    "img2": "../IMG/DexImg/pawniard_classic.png",
    "typ1": "dark",
    "typ2": "steel",
    "moves": [
      "defiant",
      "inner-focus",
      "pressure"
    ],
    "statsHP": 45,
    "statsATK": 85,
    "statsDEF": 70,
    "statsINIT": 60,
    "statsSATK": 40,
    "statsSDEF": 40
  },
  {
    "name": "bisharp",
    "id": 625,
    "img1": "../IMG/DexImg/bisharp_home.png",
    "img2": "../IMG/DexImg/bisharp_classic.png",
    "typ1": "dark",
    "typ2": "steel",
    "moves": [
      "defiant",
      "inner-focus",
      "pressure"
    ],
    "statsHP": 65,
    "statsATK": 125,
    "statsDEF": 100,
    "statsINIT": 70,
    "statsSATK": 60,
    "statsSDEF": 70
  },
  {
    "name": "bouffalant",
    "id": 626,
    "img1": "../IMG/DexImg/bouffalant_home.png",
    "img2": "../IMG/DexImg/bouffalant_classic.png",
    "typ1": "normal",
    "moves": [
      "reckless",
      "sap-sipper",
      "soundproof"
    ],
    "statsHP": 95,
    "statsATK": 110,
    "statsDEF": 95,
    "statsINIT": 55,
    "statsSATK": 40,
    "statsSDEF": 95
  },
  {
    "name": "rufflet",
    "id": 627,
    "img1": "../IMG/DexImg/rufflet_home.png",
    "img2": "../IMG/DexImg/rufflet_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "sheer-force",
      "hustle"
    ],
    "statsHP": 70,
    "statsATK": 83,
    "statsDEF": 50,
    "statsINIT": 60,
    "statsSATK": 37,
    "statsSDEF": 50
  },
  {
    "name": "braviary",
    "id": 628,
    "img1": "../IMG/DexImg/braviary_home.png",
    "img2": "../IMG/DexImg/braviary_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "sheer-force",
      "defiant"
    ],
    "statsHP": 100,
    "statsATK": 123,
    "statsDEF": 75,
    "statsINIT": 80,
    "statsSATK": 57,
    "statsSDEF": 75
  },
  {
    "name": "vullaby",
    "id": 629,
    "img1": "../IMG/DexImg/vullaby_home.png",
    "img2": "../IMG/DexImg/vullaby_classic.png",
    "typ1": "dark",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "overcoat",
      "weak-armor"
    ],
    "statsHP": 70,
    "statsATK": 55,
    "statsDEF": 75,
    "statsINIT": 60,
    "statsSATK": 45,
    "statsSDEF": 65
  },
  {
    "name": "mandibuzz",
    "id": 630,
    "img1": "../IMG/DexImg/mandibuzz_home.png",
    "img2": "../IMG/DexImg/mandibuzz_classic.png",
    "typ1": "dark",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "overcoat",
      "weak-armor"
    ],
    "statsHP": 110,
    "statsATK": 65,
    "statsDEF": 105,
    "statsINIT": 80,
    "statsSATK": 55,
    "statsSDEF": 95
  },
  {
    "name": "heatmor",
    "id": 631,
    "img1": "../IMG/DexImg/heatmor_home.png",
    "img2": "../IMG/DexImg/heatmor_classic.png",
    "typ1": "fire",
    "moves": [
      "gluttony",
      "flash-fire",
      "white-smoke"
    ],
    "statsHP": 85,
    "statsATK": 97,
    "statsDEF": 66,
    "statsINIT": 65,
    "statsSATK": 105,
    "statsSDEF": 66
  },
  {
    "name": "durant",
    "id": 632,
    "img1": "../IMG/DexImg/durant_home.png",
    "img2": "../IMG/DexImg/durant_classic.png",
    "typ1": "bug",
    "typ2": "steel",
    "moves": [
      "swarm",
      "hustle",
      "truant"
    ],
    "statsHP": 58,
    "statsATK": 109,
    "statsDEF": 112,
    "statsINIT": 109,
    "statsSATK": 48,
    "statsSDEF": 48
  },
  {
    "name": "deino",
    "id": 633,
    "img1": "../IMG/DexImg/deino_home.png",
    "img2": "../IMG/DexImg/deino_classic.png",
    "typ1": "dark",
    "typ2": "dragon",
    "moves": [
      "hustle"
    ],
    "statsHP": 52,
    "statsATK": 65,
    "statsDEF": 50,
    "statsINIT": 38,
    "statsSATK": 45,
    "statsSDEF": 50
  },
  {
    "name": "zweilous",
    "id": 634,
    "img1": "../IMG/DexImg/zweilous_home.png",
    "img2": "../IMG/DexImg/zweilous_classic.png",
    "typ1": "dark",
    "typ2": "dragon",
    "moves": [
      "hustle"
    ],
    "statsHP": 72,
    "statsATK": 85,
    "statsDEF": 70,
    "statsINIT": 58,
    "statsSATK": 65,
    "statsSDEF": 70
  },
  {
    "name": "hydreigon",
    "id": 635,
    "img1": "../IMG/DexImg/hydreigon_home.png",
    "img2": "../IMG/DexImg/hydreigon_classic.png",
    "typ1": "dark",
    "typ2": "dragon",
    "moves": [
      "levitate"
    ],
    "statsHP": 92,
    "statsATK": 105,
    "statsDEF": 90,
    "statsINIT": 98,
    "statsSATK": 125,
    "statsSDEF": 90
  },
  {
    "name": "larvesta",
    "id": 636,
    "img1": "../IMG/DexImg/larvesta_home.png",
    "img2": "../IMG/DexImg/larvesta_classic.png",
    "typ1": "bug",
    "typ2": "fire",
    "moves": [
      "flame-body",
      "swarm"
    ],
    "statsHP": 55,
    "statsATK": 85,
    "statsDEF": 55,
    "statsINIT": 60,
    "statsSATK": 50,
    "statsSDEF": 55
  },
  {
    "name": "volcarona",
    "id": 637,
    "img1": "../IMG/DexImg/volcarona_home.png",
    "img2": "../IMG/DexImg/volcarona_classic.png",
    "typ1": "bug",
    "typ2": "fire",
    "moves": [
      "flame-body",
      "swarm"
    ],
    "statsHP": 85,
    "statsATK": 60,
    "statsDEF": 65,
    "statsINIT": 100,
    "statsSATK": 135,
    "statsSDEF": 105
  },
  {
    "name": "cobalion",
    "id": 638,
    "img1": "../IMG/DexImg/cobalion_home.png",
    "img2": "../IMG/DexImg/cobalion_classic.png",
    "typ1": "steel",
    "typ2": "fighting",
    "moves": [
      "justified"
    ],
    "statsHP": 91,
    "statsATK": 90,
    "statsDEF": 129,
    "statsINIT": 108,
    "statsSATK": 90,
    "statsSDEF": 72
  },
  {
    "name": "terrakion",
    "id": 639,
    "img1": "../IMG/DexImg/terrakion_home.png",
    "img2": "../IMG/DexImg/terrakion_classic.png",
    "typ1": "rock",
    "typ2": "fighting",
    "moves": [
      "justified"
    ],
    "statsHP": 91,
    "statsATK": 129,
    "statsDEF": 90,
    "statsINIT": 108,
    "statsSATK": 72,
    "statsSDEF": 90
  },
  {
    "name": "virizion",
    "id": 640,
    "img1": "../IMG/DexImg/virizion_home.png",
    "img2": "../IMG/DexImg/virizion_classic.png",
    "typ1": "grass",
    "typ2": "fighting",
    "moves": [
      "justified"
    ],
    "statsHP": 91,
    "statsATK": 90,
    "statsDEF": 72,
    "statsINIT": 108,
    "statsSATK": 90,
    "statsSDEF": 129
  },
  {
    "name": "tornadus-incarnate",
    "id": 641,
    "img1": "../IMG/DexImg/tornadus-incarnate_home.png",
    "img2": "../IMG/DexImg/tornadus-incarnate_classic.png",
    "typ1": "flying",
    "moves": [
      "prankster",
      "defiant"
    ],
    "statsHP": 79,
    "statsATK": 115,
    "statsDEF": 70,
    "statsINIT": 111,
    "statsSATK": 125,
    "statsSDEF": 80
  },
  {
    "name": "thundurus-incarnate",
    "id": 642,
    "img1": "../IMG/DexImg/thundurus-incarnate_home.png",
    "img2": "../IMG/DexImg/thundurus-incarnate_classic.png",
    "typ1": "electric",
    "typ2": "flying",
    "moves": [
      "prankster",
      "defiant"
    ],
    "statsHP": 79,
    "statsATK": 115,
    "statsDEF": 70,
    "statsINIT": 111,
    "statsSATK": 125,
    "statsSDEF": 80
  },
  {
    "name": "reshiram",
    "id": 643,
    "img1": "../IMG/DexImg/reshiram_home.png",
    "img2": "../IMG/DexImg/reshiram_classic.png",
    "typ1": "dragon",
    "typ2": "fire",
    "moves": [
      "turboblaze"
    ],
    "statsHP": 100,
    "statsATK": 120,
    "statsDEF": 100,
    "statsINIT": 90,
    "statsSATK": 150,
    "statsSDEF": 120
  },
  {
    "name": "zekrom",
    "id": 644,
    "img1": "../IMG/DexImg/zekrom_home.png",
    "img2": "../IMG/DexImg/zekrom_classic.png",
    "typ1": "dragon",
    "typ2": "electric",
    "moves": [
      "teravolt"
    ],
    "statsHP": 100,
    "statsATK": 150,
    "statsDEF": 120,
    "statsINIT": 90,
    "statsSATK": 120,
    "statsSDEF": 100
  },
  {
    "name": "landorus-incarnate",
    "id": 645,
    "img1": "../IMG/DexImg/landorus-incarnate_home.png",
    "img2": "../IMG/DexImg/landorus-incarnate_classic.png",
    "typ1": "ground",
    "typ2": "flying",
    "moves": [
      "sand-force",
      "sheer-force"
    ],
    "statsHP": 89,
    "statsATK": 125,
    "statsDEF": 90,
    "statsINIT": 101,
    "statsSATK": 115,
    "statsSDEF": 80
  },
  {
    "name": "kyurem",
    "id": 646,
    "img1": "../IMG/DexImg/kyurem_home.png",
    "img2": "../IMG/DexImg/kyurem_classic.png",
    "typ1": "dragon",
    "typ2": "ice",
    "moves": [
      "pressure"
    ],
    "statsHP": 125,
    "statsATK": 130,
    "statsDEF": 90,
    "statsINIT": 95,
    "statsSATK": 130,
    "statsSDEF": 90
  },
  {
    "name": "keldeo-ordinary",
    "id": 647,
    "img1": "../IMG/DexImg/keldeo-ordinary_home.png",
    "img2": "../IMG/DexImg/keldeo-ordinary_classic.png",
    "typ1": "water",
    "typ2": "fighting",
    "moves": [
      "justified"
    ],
    "statsHP": 91,
    "statsATK": 72,
    "statsDEF": 90,
    "statsINIT": 108,
    "statsSATK": 129,
    "statsSDEF": 90
  },
  {
    "name": "meloetta-aria",
    "id": 648,
    "img1": "../IMG/DexImg/meloetta-aria_home.png",
    "img2": "../IMG/DexImg/meloetta-aria_classic.png",
    "typ1": "normal",
    "typ2": "psychic",
    "moves": [
      "serene-grace"
    ],
    "statsHP": 100,
    "statsATK": 77,
    "statsDEF": 77,
    "statsINIT": 90,
    "statsSATK": 128,
    "statsSDEF": 128
  },
  {
    "name": "genesect",
    "id": 649,
    "img1": "../IMG/DexImg/genesect_home.png",
    "img2": "../IMG/DexImg/genesect_classic.png",
    "typ1": "bug",
    "typ2": "steel",
    "moves": [
      "download"
    ],
    "statsHP": 71,
    "statsATK": 120,
    "statsDEF": 95,
    "statsINIT": 99,
    "statsSATK": 120,
    "statsSDEF": 95
  },
  {
    "name": "chespin",
    "id": 650,
    "img1": "../IMG/DexImg/chespin_home.png",
    "img2": "../IMG/DexImg/chespin_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "bulletproof"
    ],
    "statsHP": 56,
    "statsATK": 61,
    "statsDEF": 65,
    "statsINIT": 38,
    "statsSATK": 48,
    "statsSDEF": 45
  },
  {
    "name": "quilladin",
    "id": 651,
    "img1": "../IMG/DexImg/quilladin_home.png",
    "img2": "../IMG/DexImg/quilladin_classic.png",
    "typ1": "grass",
    "moves": [
      "overgrow",
      "bulletproof"
    ],
    "statsHP": 61,
    "statsATK": 78,
    "statsDEF": 95,
    "statsINIT": 57,
    "statsSATK": 56,
    "statsSDEF": 58
  },
  {
    "name": "chesnaught",
    "id": 652,
    "img1": "../IMG/DexImg/chesnaught_home.png",
    "img2": "../IMG/DexImg/chesnaught_classic.png",
    "typ1": "grass",
    "typ2": "fighting",
    "moves": [
      "overgrow",
      "bulletproof"
    ],
    "statsHP": 88,
    "statsATK": 107,
    "statsDEF": 122,
    "statsINIT": 64,
    "statsSATK": 74,
    "statsSDEF": 75
  },
  {
    "name": "fennekin",
    "id": 653,
    "img1": "../IMG/DexImg/fennekin_home.png",
    "img2": "../IMG/DexImg/fennekin_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "magician"
    ],
    "statsHP": 40,
    "statsATK": 45,
    "statsDEF": 40,
    "statsINIT": 60,
    "statsSATK": 62,
    "statsSDEF": 60
  },
  {
    "name": "braixen",
    "id": 654,
    "img1": "../IMG/DexImg/braixen_home.png",
    "img2": "../IMG/DexImg/braixen_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "magician"
    ],
    "statsHP": 59,
    "statsATK": 59,
    "statsDEF": 58,
    "statsINIT": 73,
    "statsSATK": 90,
    "statsSDEF": 70
  },
  {
    "name": "delphox",
    "id": 655,
    "img1": "../IMG/DexImg/delphox_home.png",
    "img2": "../IMG/DexImg/delphox_classic.png",
    "typ1": "fire",
    "typ2": "psychic",
    "moves": [
      "blaze",
      "magician"
    ],
    "statsHP": 75,
    "statsATK": 69,
    "statsDEF": 72,
    "statsINIT": 104,
    "statsSATK": 114,
    "statsSDEF": 100
  },
  {
    "name": "froakie",
    "id": 656,
    "img1": "../IMG/DexImg/froakie_home.png",
    "img2": "../IMG/DexImg/froakie_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "protean"
    ],
    "statsHP": 41,
    "statsATK": 56,
    "statsDEF": 40,
    "statsINIT": 71,
    "statsSATK": 62,
    "statsSDEF": 44
  },
  {
    "name": "frogadier",
    "id": 657,
    "img1": "../IMG/DexImg/frogadier_home.png",
    "img2": "../IMG/DexImg/frogadier_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "protean"
    ],
    "statsHP": 54,
    "statsATK": 63,
    "statsDEF": 52,
    "statsINIT": 97,
    "statsSATK": 83,
    "statsSDEF": 56
  },
  {
    "name": "greninja",
    "id": 658,
    "img1": "../IMG/DexImg/greninja_home.png",
    "img2": "../IMG/DexImg/greninja_classic.png",
    "typ1": "water",
    "typ2": "dark",
    "moves": [
      "torrent",
      "protean"
    ],
    "statsHP": 72,
    "statsATK": 95,
    "statsDEF": 67,
    "statsINIT": 122,
    "statsSATK": 103,
    "statsSDEF": 71
  },
  {
    "name": "bunnelby",
    "id": 659,
    "img1": "../IMG/DexImg/bunnelby_home.png",
    "img2": "../IMG/DexImg/bunnelby_classic.png",
    "typ1": "normal",
    "moves": [
      "pickup",
      "cheek-pouch",
      "huge-power"
    ],
    "statsHP": 38,
    "statsATK": 36,
    "statsDEF": 38,
    "statsINIT": 57,
    "statsSATK": 32,
    "statsSDEF": 36
  },
  {
    "name": "diggersby",
    "id": 660,
    "img1": "../IMG/DexImg/diggersby_home.png",
    "img2": "../IMG/DexImg/diggersby_classic.png",
    "typ1": "normal",
    "typ2": "ground",
    "moves": [
      "pickup",
      "cheek-pouch",
      "huge-power"
    ],
    "statsHP": 85,
    "statsATK": 56,
    "statsDEF": 77,
    "statsINIT": 78,
    "statsSATK": 50,
    "statsSDEF": 77
  },
  {
    "name": "fletchling",
    "id": 661,
    "img1": "../IMG/DexImg/fletchling_home.png",
    "img2": "../IMG/DexImg/fletchling_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "big-pecks",
      "gale-wings"
    ],
    "statsHP": 45,
    "statsATK": 50,
    "statsDEF": 43,
    "statsINIT": 62,
    "statsSATK": 40,
    "statsSDEF": 38
  },
  {
    "name": "fletchinder",
    "id": 662,
    "img1": "../IMG/DexImg/fletchinder_home.png",
    "img2": "../IMG/DexImg/fletchinder_classic.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "flame-body",
      "gale-wings"
    ],
    "statsHP": 62,
    "statsATK": 73,
    "statsDEF": 55,
    "statsINIT": 84,
    "statsSATK": 56,
    "statsSDEF": 52
  },
  {
    "name": "talonflame",
    "id": 663,
    "img1": "../IMG/DexImg/talonflame_home.png",
    "img2": "../IMG/DexImg/talonflame_classic.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "flame-body",
      "gale-wings"
    ],
    "statsHP": 78,
    "statsATK": 81,
    "statsDEF": 71,
    "statsINIT": 126,
    "statsSATK": 74,
    "statsSDEF": 69
  },
  {
    "name": "scatterbug",
    "id": 664,
    "img1": "../IMG/DexImg/scatterbug_home.png",
    "img2": "../IMG/DexImg/scatterbug_classic.png",
    "typ1": "bug",
    "moves": [
      "shield-dust",
      "compound-eyes",
      "friend-guard"
    ],
    "statsHP": 38,
    "statsATK": 35,
    "statsDEF": 40,
    "statsINIT": 35,
    "statsSATK": 27,
    "statsSDEF": 25
  },
  {
    "name": "spewpa",
    "id": 665,
    "img1": "../IMG/DexImg/spewpa_home.png",
    "img2": "../IMG/DexImg/spewpa_classic.png",
    "typ1": "bug",
    "moves": [
      "shed-skin",
      "friend-guard"
    ],
    "statsHP": 45,
    "statsATK": 22,
    "statsDEF": 60,
    "statsINIT": 29,
    "statsSATK": 27,
    "statsSDEF": 30
  },
  {
    "name": "vivillon",
    "id": 666,
    "img1": "../IMG/DexImg/vivillon_home.png",
    "img2": "../IMG/DexImg/vivillon_classic.png",
    "typ1": "bug",
    "typ2": "flying",
    "moves": [
      "shield-dust",
      "compound-eyes",
      "friend-guard"
    ],
    "statsHP": 80,
    "statsATK": 52,
    "statsDEF": 50,
    "statsINIT": 89,
    "statsSATK": 90,
    "statsSDEF": 50
  },
  {
    "name": "litleo",
    "id": 667,
    "img1": "../IMG/DexImg/litleo_home.png",
    "img2": "../IMG/DexImg/litleo_classic.png",
    "typ1": "fire",
    "typ2": "normal",
    "moves": [
      "rivalry",
      "unnerve",
      "moxie"
    ],
    "statsHP": 62,
    "statsATK": 50,
    "statsDEF": 58,
    "statsINIT": 72,
    "statsSATK": 73,
    "statsSDEF": 54
  },
  {
    "name": "pyroar",
    "id": 668,
    "img1": "../IMG/DexImg/pyroar_home.png",
    "img2": "../IMG/DexImg/pyroar_classic.png",
    "typ1": "fire",
    "typ2": "normal",
    "moves": [
      "rivalry",
      "unnerve",
      "moxie"
    ],
    "statsHP": 86,
    "statsATK": 68,
    "statsDEF": 72,
    "statsINIT": 106,
    "statsSATK": 109,
    "statsSDEF": 66
  },
  {
    "name": "flabebe",
    "id": 669,
    "img1": "../IMG/DexImg/flabebe_home.png",
    "img2": "../IMG/DexImg/flabebe_classic.png",
    "typ1": "fairy",
    "moves": [
      "flower-veil",
      "symbiosis"
    ],
    "statsHP": 44,
    "statsATK": 38,
    "statsDEF": 39,
    "statsINIT": 42,
    "statsSATK": 61,
    "statsSDEF": 79
  },
  {
    "name": "floette",
    "id": 670,
    "img1": "../IMG/DexImg/floette_home.png",
    "img2": "../IMG/DexImg/floette_classic.png",
    "typ1": "fairy",
    "moves": [
      "flower-veil",
      "symbiosis"
    ],
    "statsHP": 54,
    "statsATK": 45,
    "statsDEF": 47,
    "statsINIT": 52,
    "statsSATK": 75,
    "statsSDEF": 98
  },
  {
    "name": "florges",
    "id": 671,
    "img1": "../IMG/DexImg/florges_home.png",
    "img2": "../IMG/DexImg/florges_classic.png",
    "typ1": "fairy",
    "moves": [
      "flower-veil",
      "symbiosis"
    ],
    "statsHP": 78,
    "statsATK": 65,
    "statsDEF": 68,
    "statsINIT": 75,
    "statsSATK": 112,
    "statsSDEF": 154
  },
  {
    "name": "skiddo",
    "id": 672,
    "img1": "../IMG/DexImg/skiddo_home.png",
    "img2": "../IMG/DexImg/skiddo_classic.png",
    "typ1": "grass",
    "moves": [
      "sap-sipper",
      "grass-pelt"
    ],
    "statsHP": 66,
    "statsATK": 65,
    "statsDEF": 48,
    "statsINIT": 52,
    "statsSATK": 62,
    "statsSDEF": 57
  },
  {
    "name": "gogoat",
    "id": 673,
    "img1": "../IMG/DexImg/gogoat_home.png",
    "img2": "../IMG/DexImg/gogoat_classic.png",
    "typ1": "grass",
    "moves": [
      "sap-sipper",
      "grass-pelt"
    ],
    "statsHP": 123,
    "statsATK": 100,
    "statsDEF": 62,
    "statsINIT": 68,
    "statsSATK": 97,
    "statsSDEF": 81
  },
  {
    "name": "pancham",
    "id": 674,
    "img1": "../IMG/DexImg/pancham_home.png",
    "img2": "../IMG/DexImg/pancham_classic.png",
    "typ1": "fighting",
    "moves": [
      "iron-fist",
      "mold-breaker",
      "scrappy"
    ],
    "statsHP": 67,
    "statsATK": 82,
    "statsDEF": 62,
    "statsINIT": 43,
    "statsSATK": 46,
    "statsSDEF": 48
  },
  {
    "name": "pangoro",
    "id": 675,
    "img1": "../IMG/DexImg/pangoro_home.png",
    "img2": "../IMG/DexImg/pangoro_classic.png",
    "typ1": "fighting",
    "typ2": "dark",
    "moves": [
      "iron-fist",
      "mold-breaker",
      "scrappy"
    ],
    "statsHP": 95,
    "statsATK": 124,
    "statsDEF": 78,
    "statsINIT": 58,
    "statsSATK": 69,
    "statsSDEF": 71
  },
  {
    "name": "furfrou",
    "id": 676,
    "img1": "../IMG/DexImg/furfrou_home.png",
    "img2": "../IMG/DexImg/furfrou_classic.png",
    "typ1": "normal",
    "moves": [
      "fur-coat"
    ],
    "statsHP": 75,
    "statsATK": 80,
    "statsDEF": 60,
    "statsINIT": 102,
    "statsSATK": 65,
    "statsSDEF": 90
  },
  {
    "name": "espurr",
    "id": 677,
    "img1": "../IMG/DexImg/espurr_home.png",
    "img2": "../IMG/DexImg/espurr_classic.png",
    "typ1": "psychic",
    "moves": [
      "keen-eye",
      "infiltrator",
      "own-tempo"
    ],
    "statsHP": 62,
    "statsATK": 48,
    "statsDEF": 54,
    "statsINIT": 68,
    "statsSATK": 63,
    "statsSDEF": 60
  },
  {
    "name": "meowstic-male",
    "id": 678,
    "img1": "../IMG/DexImg/meowstic-male_home.png",
    "img2": "../IMG/DexImg/meowstic-male_classic.png",
    "typ1": "psychic",
    "moves": [
      "keen-eye",
      "infiltrator",
      "prankster"
    ],
    "statsHP": 74,
    "statsATK": 48,
    "statsDEF": 76,
    "statsINIT": 104,
    "statsSATK": 83,
    "statsSDEF": 81
  },
  {
    "name": "honedge",
    "id": 679,
    "img1": "../IMG/DexImg/honedge_home.png",
    "img2": "../IMG/DexImg/honedge_classic.png",
    "typ1": "steel",
    "typ2": "ghost",
    "moves": [
      "no-guard"
    ],
    "statsHP": 45,
    "statsATK": 80,
    "statsDEF": 100,
    "statsINIT": 28,
    "statsSATK": 35,
    "statsSDEF": 37
  },
  {
    "name": "doublade",
    "id": 680,
    "img1": "../IMG/DexImg/doublade_home.png",
    "img2": "../IMG/DexImg/doublade_classic.png",
    "typ1": "steel",
    "typ2": "ghost",
    "moves": [
      "no-guard"
    ],
    "statsHP": 59,
    "statsATK": 110,
    "statsDEF": 150,
    "statsINIT": 35,
    "statsSATK": 45,
    "statsSDEF": 49
  },
  {
    "name": "aegislash-shield",
    "id": 681,
    "img1": "../IMG/DexImg/aegislash-shield_home.png",
    "img2": "../IMG/DexImg/aegislash-shield_classic.png",
    "typ1": "steel",
    "typ2": "ghost",
    "moves": [
      "stance-change"
    ],
    "statsHP": 60,
    "statsATK": 50,
    "statsDEF": 140,
    "statsINIT": 60,
    "statsSATK": 50,
    "statsSDEF": 140
  },
  {
    "name": "spritzee",
    "id": 682,
    "img1": "../IMG/DexImg/spritzee_home.png",
    "img2": "../IMG/DexImg/spritzee_classic.png",
    "typ1": "fairy",
    "moves": [
      "healer",
      "aroma-veil"
    ],
    "statsHP": 78,
    "statsATK": 52,
    "statsDEF": 60,
    "statsINIT": 23,
    "statsSATK": 63,
    "statsSDEF": 65
  },
  {
    "name": "aromatisse",
    "id": 683,
    "img1": "../IMG/DexImg/aromatisse_home.png",
    "img2": "../IMG/DexImg/aromatisse_classic.png",
    "typ1": "fairy",
    "moves": [
      "healer",
      "aroma-veil"
    ],
    "statsHP": 101,
    "statsATK": 72,
    "statsDEF": 72,
    "statsINIT": 29,
    "statsSATK": 99,
    "statsSDEF": 89
  },
  {
    "name": "swirlix",
    "id": 684,
    "img1": "../IMG/DexImg/swirlix_home.png",
    "img2": "../IMG/DexImg/swirlix_classic.png",
    "typ1": "fairy",
    "moves": [
      "sweet-veil",
      "unburden"
    ],
    "statsHP": 62,
    "statsATK": 48,
    "statsDEF": 66,
    "statsINIT": 49,
    "statsSATK": 59,
    "statsSDEF": 57
  },
  {
    "name": "slurpuff",
    "id": 685,
    "img1": "../IMG/DexImg/slurpuff_home.png",
    "img2": "../IMG/DexImg/slurpuff_classic.png",
    "typ1": "fairy",
    "moves": [
      "sweet-veil",
      "unburden"
    ],
    "statsHP": 82,
    "statsATK": 80,
    "statsDEF": 86,
    "statsINIT": 72,
    "statsSATK": 85,
    "statsSDEF": 75
  },
  {
    "name": "inkay",
    "id": 686,
    "img1": "../IMG/DexImg/inkay_home.png",
    "img2": "../IMG/DexImg/inkay_classic.png",
    "typ1": "dark",
    "typ2": "psychic",
    "moves": [
      "contrary",
      "suction-cups",
      "infiltrator"
    ],
    "statsHP": 53,
    "statsATK": 54,
    "statsDEF": 53,
    "statsINIT": 45,
    "statsSATK": 37,
    "statsSDEF": 46
  },
  {
    "name": "malamar",
    "id": 687,
    "img1": "../IMG/DexImg/malamar_home.png",
    "img2": "../IMG/DexImg/malamar_classic.png",
    "typ1": "dark",
    "typ2": "psychic",
    "moves": [
      "contrary",
      "suction-cups",
      "infiltrator"
    ],
    "statsHP": 86,
    "statsATK": 92,
    "statsDEF": 88,
    "statsINIT": 73,
    "statsSATK": 68,
    "statsSDEF": 75
  },
  {
    "name": "binacle",
    "id": 688,
    "img1": "../IMG/DexImg/binacle_home.png",
    "img2": "../IMG/DexImg/binacle_classic.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "tough-claws",
      "sniper",
      "pickpocket"
    ],
    "statsHP": 42,
    "statsATK": 52,
    "statsDEF": 67,
    "statsINIT": 50,
    "statsSATK": 39,
    "statsSDEF": 56
  },
  {
    "name": "barbaracle",
    "id": 689,
    "img1": "../IMG/DexImg/barbaracle_home.png",
    "img2": "../IMG/DexImg/barbaracle_classic.png",
    "typ1": "rock",
    "typ2": "water",
    "moves": [
      "tough-claws",
      "sniper",
      "pickpocket"
    ],
    "statsHP": 72,
    "statsATK": 105,
    "statsDEF": 115,
    "statsINIT": 68,
    "statsSATK": 54,
    "statsSDEF": 86
  },
  {
    "name": "skrelp",
    "id": 690,
    "img1": "../IMG/DexImg/skrelp_home.png",
    "img2": "../IMG/DexImg/skrelp_classic.png",
    "typ1": "poison",
    "typ2": "water",
    "moves": [
      "poison-point",
      "poison-touch",
      "adaptability"
    ],
    "statsHP": 50,
    "statsATK": 60,
    "statsDEF": 60,
    "statsINIT": 30,
    "statsSATK": 60,
    "statsSDEF": 60
  },
  {
    "name": "dragalge",
    "id": 691,
    "img1": "../IMG/DexImg/dragalge_home.png",
    "img2": "../IMG/DexImg/dragalge_classic.png",
    "typ1": "poison",
    "typ2": "dragon",
    "moves": [
      "poison-point",
      "poison-touch",
      "adaptability"
    ],
    "statsHP": 65,
    "statsATK": 75,
    "statsDEF": 90,
    "statsINIT": 44,
    "statsSATK": 97,
    "statsSDEF": 123
  },
  {
    "name": "clauncher",
    "id": 692,
    "img1": "../IMG/DexImg/clauncher_home.png",
    "img2": "../IMG/DexImg/clauncher_classic.png",
    "typ1": "water",
    "moves": [
      "mega-launcher"
    ],
    "statsHP": 50,
    "statsATK": 53,
    "statsDEF": 62,
    "statsINIT": 44,
    "statsSATK": 58,
    "statsSDEF": 63
  },
  {
    "name": "clawitzer",
    "id": 693,
    "img1": "../IMG/DexImg/clawitzer_home.png",
    "img2": "../IMG/DexImg/clawitzer_classic.png",
    "typ1": "water",
    "moves": [
      "mega-launcher"
    ],
    "statsHP": 71,
    "statsATK": 73,
    "statsDEF": 88,
    "statsINIT": 59,
    "statsSATK": 120,
    "statsSDEF": 89
  },
  {
    "name": "helioptile",
    "id": 694,
    "img1": "../IMG/DexImg/helioptile_home.png",
    "img2": "../IMG/DexImg/helioptile_classic.png",
    "typ1": "electric",
    "typ2": "normal",
    "moves": [
      "dry-skin",
      "sand-veil",
      "solar-power"
    ],
    "statsHP": 44,
    "statsATK": 38,
    "statsDEF": 33,
    "statsINIT": 70,
    "statsSATK": 61,
    "statsSDEF": 43
  },
  {
    "name": "heliolisk",
    "id": 695,
    "img1": "../IMG/DexImg/heliolisk_home.png",
    "img2": "../IMG/DexImg/heliolisk_classic.png",
    "typ1": "electric",
    "typ2": "normal",
    "moves": [
      "dry-skin",
      "sand-veil",
      "solar-power"
    ],
    "statsHP": 62,
    "statsATK": 55,
    "statsDEF": 52,
    "statsINIT": 109,
    "statsSATK": 109,
    "statsSDEF": 94
  },
  {
    "name": "tyrunt",
    "id": 696,
    "img1": "../IMG/DexImg/tyrunt_home.png",
    "img2": "../IMG/DexImg/tyrunt_classic.png",
    "typ1": "rock",
    "typ2": "dragon",
    "moves": [
      "strong-jaw",
      "sturdy"
    ],
    "statsHP": 58,
    "statsATK": 89,
    "statsDEF": 77,
    "statsINIT": 48,
    "statsSATK": 45,
    "statsSDEF": 45
  },
  {
    "name": "tyrantrum",
    "id": 697,
    "img1": "../IMG/DexImg/tyrantrum_home.png",
    "img2": "../IMG/DexImg/tyrantrum_classic.png",
    "typ1": "rock",
    "typ2": "dragon",
    "moves": [
      "strong-jaw",
      "rock-head"
    ],
    "statsHP": 82,
    "statsATK": 121,
    "statsDEF": 119,
    "statsINIT": 71,
    "statsSATK": 69,
    "statsSDEF": 59
  },
  {
    "name": "amaura",
    "id": 698,
    "img1": "../IMG/DexImg/amaura_home.png",
    "img2": "../IMG/DexImg/amaura_classic.png",
    "typ1": "rock",
    "typ2": "ice",
    "moves": [
      "refrigerate",
      "snow-warning"
    ],
    "statsHP": 77,
    "statsATK": 59,
    "statsDEF": 50,
    "statsINIT": 46,
    "statsSATK": 67,
    "statsSDEF": 63
  },
  {
    "name": "aurorus",
    "id": 699,
    "img1": "../IMG/DexImg/aurorus_home.png",
    "img2": "../IMG/DexImg/aurorus_classic.png",
    "typ1": "rock",
    "typ2": "ice",
    "moves": [
      "refrigerate",
      "snow-warning"
    ],
    "statsHP": 123,
    "statsATK": 77,
    "statsDEF": 72,
    "statsINIT": 58,
    "statsSATK": 99,
    "statsSDEF": 92
  },
  {
    "name": "sylveon",
    "id": 700,
    "img1": "../IMG/DexImg/sylveon_home.png",
    "img2": "../IMG/DexImg/sylveon_classic.png",
    "typ1": "fairy",
    "moves": [
      "cute-charm",
      "pixilate"
    ],
    "statsHP": 95,
    "statsATK": 65,
    "statsDEF": 65,
    "statsINIT": 60,
    "statsSATK": 110,
    "statsSDEF": 130
  },
  {
    "name": "hawlucha",
    "id": 701,
    "img1": "../IMG/DexImg/hawlucha_home.png",
    "img2": "../IMG/DexImg/hawlucha_classic.png",
    "typ1": "fighting",
    "typ2": "flying",
    "moves": [
      "limber",
      "unburden",
      "mold-breaker"
    ],
    "statsHP": 78,
    "statsATK": 92,
    "statsDEF": 75,
    "statsINIT": 118,
    "statsSATK": 74,
    "statsSDEF": 63
  },
  {
    "name": "dedenne",
    "id": 702,
    "img1": "../IMG/DexImg/dedenne_home.png",
    "img2": "../IMG/DexImg/dedenne_classic.png",
    "typ1": "electric",
    "typ2": "fairy",
    "moves": [
      "cheek-pouch",
      "pickup",
      "plus"
    ],
    "statsHP": 67,
    "statsATK": 58,
    "statsDEF": 57,
    "statsINIT": 101,
    "statsSATK": 81,
    "statsSDEF": 67
  },
  {
    "name": "carbink",
    "id": 703,
    "img1": "../IMG/DexImg/carbink_home.png",
    "img2": "../IMG/DexImg/carbink_classic.png",
    "typ1": "rock",
    "typ2": "fairy",
    "moves": [
      "clear-body",
      "sturdy"
    ],
    "statsHP": 50,
    "statsATK": 50,
    "statsDEF": 150,
    "statsINIT": 50,
    "statsSATK": 50,
    "statsSDEF": 150
  },
  {
    "name": "goomy",
    "id": 704,
    "img1": "../IMG/DexImg/goomy_home.png",
    "img2": "../IMG/DexImg/goomy_classic.png",
    "typ1": "dragon",
    "moves": [
      "sap-sipper",
      "hydration",
      "gooey"
    ],
    "statsHP": 45,
    "statsATK": 50,
    "statsDEF": 35,
    "statsINIT": 40,
    "statsSATK": 55,
    "statsSDEF": 75
  },
  {
    "name": "sliggoo",
    "id": 705,
    "img1": "../IMG/DexImg/sliggoo_home.png",
    "img2": "../IMG/DexImg/sliggoo_classic.png",
    "typ1": "dragon",
    "moves": [
      "sap-sipper",
      "hydration",
      "gooey"
    ],
    "statsHP": 68,
    "statsATK": 75,
    "statsDEF": 53,
    "statsINIT": 60,
    "statsSATK": 83,
    "statsSDEF": 113
  },
  {
    "name": "goodra",
    "id": 706,
    "img1": "../IMG/DexImg/goodra_home.png",
    "img2": "../IMG/DexImg/goodra_classic.png",
    "typ1": "dragon",
    "moves": [
      "sap-sipper",
      "hydration",
      "gooey"
    ],
    "statsHP": 90,
    "statsATK": 100,
    "statsDEF": 70,
    "statsINIT": 80,
    "statsSATK": 110,
    "statsSDEF": 150
  },
  {
    "name": "klefki",
    "id": 707,
    "img1": "../IMG/DexImg/klefki_home.png",
    "img2": "../IMG/DexImg/klefki_classic.png",
    "typ1": "steel",
    "typ2": "fairy",
    "moves": [
      "prankster",
      "magician"
    ],
    "statsHP": 57,
    "statsATK": 80,
    "statsDEF": 91,
    "statsINIT": 75,
    "statsSATK": 80,
    "statsSDEF": 87
  },
  {
    "name": "phantump",
    "id": 708,
    "img1": "../IMG/DexImg/phantump_home.png",
    "img2": "../IMG/DexImg/phantump_classic.png",
    "typ1": "ghost",
    "typ2": "grass",
    "moves": [
      "natural-cure",
      "frisk",
      "harvest"
    ],
    "statsHP": 43,
    "statsATK": 70,
    "statsDEF": 48,
    "statsINIT": 38,
    "statsSATK": 50,
    "statsSDEF": 60
  },
  {
    "name": "trevenant",
    "id": 709,
    "img1": "../IMG/DexImg/trevenant_home.png",
    "img2": "../IMG/DexImg/trevenant_classic.png",
    "typ1": "ghost",
    "typ2": "grass",
    "moves": [
      "natural-cure",
      "frisk",
      "harvest"
    ],
    "statsHP": 85,
    "statsATK": 110,
    "statsDEF": 76,
    "statsINIT": 56,
    "statsSATK": 65,
    "statsSDEF": 82
  },
  {
    "name": "pumpkaboo-average",
    "id": 710,
    "img1": "../IMG/DexImg/pumpkaboo-average_home.png",
    "img2": "../IMG/DexImg/pumpkaboo-average_classic.png",
    "typ1": "ghost",
    "typ2": "grass",
    "moves": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "statsHP": 49,
    "statsATK": 66,
    "statsDEF": 70,
    "statsINIT": 51,
    "statsSATK": 44,
    "statsSDEF": 55
  },
  {
    "name": "gourgeist-average",
    "id": 711,
    "img1": "../IMG/DexImg/gourgeist-average_home.png",
    "img2": "../IMG/DexImg/gourgeist-average_classic.png",
    "typ1": "ghost",
    "typ2": "grass",
    "moves": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "statsHP": 65,
    "statsATK": 90,
    "statsDEF": 122,
    "statsINIT": 84,
    "statsSATK": 58,
    "statsSDEF": 75
  },
  {
    "name": "bergmite",
    "id": 712,
    "img1": "../IMG/DexImg/bergmite_home.png",
    "img2": "../IMG/DexImg/bergmite_classic.png",
    "typ1": "ice",
    "moves": [
      "own-tempo",
      "ice-body",
      "sturdy"
    ],
    "statsHP": 55,
    "statsATK": 69,
    "statsDEF": 85,
    "statsINIT": 28,
    "statsSATK": 32,
    "statsSDEF": 35
  },
  {
    "name": "avalugg",
    "id": 713,
    "img1": "../IMG/DexImg/avalugg_home.png",
    "img2": "../IMG/DexImg/avalugg_classic.png",
    "typ1": "ice",
    "moves": [
      "own-tempo",
      "ice-body",
      "sturdy"
    ],
    "statsHP": 95,
    "statsATK": 117,
    "statsDEF": 184,
    "statsINIT": 28,
    "statsSATK": 44,
    "statsSDEF": 46
  },
  {
    "name": "noibat",
    "id": 714,
    "img1": "../IMG/DexImg/noibat_home.png",
    "img2": "../IMG/DexImg/noibat_classic.png",
    "typ1": "flying",
    "typ2": "dragon",
    "moves": [
      "frisk",
      "infiltrator",
      "telepathy"
    ],
    "statsHP": 40,
    "statsATK": 30,
    "statsDEF": 35,
    "statsINIT": 55,
    "statsSATK": 45,
    "statsSDEF": 40
  },
  {
    "name": "noivern",
    "id": 715,
    "img1": "../IMG/DexImg/noivern_home.png",
    "img2": "../IMG/DexImg/noivern_classic.png",
    "typ1": "flying",
    "typ2": "dragon",
    "moves": [
      "frisk",
      "infiltrator",
      "telepathy"
    ],
    "statsHP": 85,
    "statsATK": 70,
    "statsDEF": 80,
    "statsINIT": 123,
    "statsSATK": 97,
    "statsSDEF": 80
  },
  {
    "name": "xerneas",
    "id": 716,
    "img1": "../IMG/DexImg/xerneas_home.png",
    "img2": "../IMG/DexImg/xerneas_classic.png",
    "typ1": "fairy",
    "moves": [
      "fairy-aura"
    ],
    "statsHP": 126,
    "statsATK": 131,
    "statsDEF": 95,
    "statsINIT": 99,
    "statsSATK": 131,
    "statsSDEF": 98
  },
  {
    "name": "yveltal",
    "id": 717,
    "img1": "../IMG/DexImg/yveltal_home.png",
    "img2": "../IMG/DexImg/yveltal_classic.png",
    "typ1": "dark",
    "typ2": "flying",
    "moves": [
      "dark-aura"
    ],
    "statsHP": 126,
    "statsATK": 131,
    "statsDEF": 95,
    "statsINIT": 99,
    "statsSATK": 131,
    "statsSDEF": 98
  },
  {
    "name": "zygarde-50",
    "id": 718,
    "img1": "../IMG/DexImg/zygarde-50_home.png",
    "img2": "../IMG/DexImg/zygarde-50_classic.png",
    "typ1": "dragon",
    "typ2": "ground",
    "moves": [
      "aura-break"
    ],
    "statsHP": 108,
    "statsATK": 100,
    "statsDEF": 121,
    "statsINIT": 95,
    "statsSATK": 81,
    "statsSDEF": 95
  },
  {
    "name": "diancie",
    "id": 719,
    "img1": "../IMG/DexImg/diancie_home.png",
    "img2": "../IMG/DexImg/diancie_classic.png",
    "typ1": "rock",
    "typ2": "fairy",
    "moves": [
      "clear-body"
    ],
    "statsHP": 50,
    "statsATK": 100,
    "statsDEF": 150,
    "statsINIT": 50,
    "statsSATK": 100,
    "statsSDEF": 150
  },
  {
    "name": "hoopa",
    "id": 720,
    "img1": "../IMG/DexImg/hoopa_home.png",
    "img2": "../IMG/DexImg/hoopa_classic.png",
    "typ1": "psychic",
    "typ2": "ghost",
    "moves": [
      "magician"
    ],
    "statsHP": 80,
    "statsATK": 110,
    "statsDEF": 60,
    "statsINIT": 70,
    "statsSATK": 150,
    "statsSDEF": 130
  },
  {
    "name": "volcanion",
    "id": 721,
    "img1": "../IMG/DexImg/volcanion_home.png",
    "img2": "../IMG/DexImg/volcanion_classic.png",
    "typ1": "fire",
    "typ2": "water",
    "moves": [
      "water-absorb"
    ],
    "statsHP": 80,
    "statsATK": 110,
    "statsDEF": 120,
    "statsINIT": 70,
    "statsSATK": 130,
    "statsSDEF": 90
  },
  {
    "name": "rowlet",
    "id": 722,
    "img1": "../IMG/DexImg/rowlet_home.png",
    "img2": "../IMG/DexImg/rowlet_classic.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "overgrow",
      "long-reach"
    ],
    "statsHP": 68,
    "statsATK": 55,
    "statsDEF": 55,
    "statsINIT": 42,
    "statsSATK": 50,
    "statsSDEF": 50
  },
  {
    "name": "dartrix",
    "id": 723,
    "img1": "../IMG/DexImg/dartrix_home.png",
    "img2": "../IMG/DexImg/dartrix_classic.png",
    "typ1": "grass",
    "typ2": "flying",
    "moves": [
      "overgrow",
      "long-reach"
    ],
    "statsHP": 78,
    "statsATK": 75,
    "statsDEF": 75,
    "statsINIT": 52,
    "statsSATK": 70,
    "statsSDEF": 70
  },
  {
    "name": "decidueye",
    "id": 724,
    "img1": "../IMG/DexImg/decidueye_home.png",
    "img2": "../IMG/DexImg/decidueye_classic.png",
    "typ1": "grass",
    "typ2": "ghost",
    "moves": [
      "overgrow",
      "long-reach"
    ],
    "statsHP": 78,
    "statsATK": 107,
    "statsDEF": 75,
    "statsINIT": 70,
    "statsSATK": 100,
    "statsSDEF": 100
  },
  {
    "name": "litten",
    "id": 725,
    "img1": "../IMG/DexImg/litten_home.png",
    "img2": "../IMG/DexImg/litten_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "intimidate"
    ],
    "statsHP": 45,
    "statsATK": 65,
    "statsDEF": 40,
    "statsINIT": 70,
    "statsSATK": 60,
    "statsSDEF": 40
  },
  {
    "name": "torracat",
    "id": 726,
    "img1": "../IMG/DexImg/torracat_home.png",
    "img2": "../IMG/DexImg/torracat_classic.png",
    "typ1": "fire",
    "moves": [
      "blaze",
      "intimidate"
    ],
    "statsHP": 65,
    "statsATK": 85,
    "statsDEF": 50,
    "statsINIT": 90,
    "statsSATK": 80,
    "statsSDEF": 50
  },
  {
    "name": "incineroar",
    "id": 727,
    "img1": "../IMG/DexImg/incineroar_home.png",
    "img2": "../IMG/DexImg/incineroar_classic.png",
    "typ1": "fire",
    "typ2": "dark",
    "moves": [
      "blaze",
      "intimidate"
    ],
    "statsHP": 95,
    "statsATK": 115,
    "statsDEF": 90,
    "statsINIT": 60,
    "statsSATK": 80,
    "statsSDEF": 90
  },
  {
    "name": "popplio",
    "id": 728,
    "img1": "../IMG/DexImg/popplio_home.png",
    "img2": "../IMG/DexImg/popplio_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "liquid-voice"
    ],
    "statsHP": 50,
    "statsATK": 54,
    "statsDEF": 54,
    "statsINIT": 40,
    "statsSATK": 66,
    "statsSDEF": 56
  },
  {
    "name": "brionne",
    "id": 729,
    "img1": "../IMG/DexImg/brionne_home.png",
    "img2": "../IMG/DexImg/brionne_classic.png",
    "typ1": "water",
    "moves": [
      "torrent",
      "liquid-voice"
    ],
    "statsHP": 60,
    "statsATK": 69,
    "statsDEF": 69,
    "statsINIT": 50,
    "statsSATK": 91,
    "statsSDEF": 81
  },
  {
    "name": "primarina",
    "id": 730,
    "img1": "../IMG/DexImg/primarina_home.png",
    "img2": "../IMG/DexImg/primarina_classic.png",
    "typ1": "water",
    "typ2": "fairy",
    "moves": [
      "torrent",
      "liquid-voice"
    ],
    "statsHP": 80,
    "statsATK": 74,
    "statsDEF": 74,
    "statsINIT": 60,
    "statsSATK": 126,
    "statsSDEF": 116
  },
  {
    "name": "pikipek",
    "id": 731,
    "img1": "../IMG/DexImg/pikipek_home.png",
    "img2": "../IMG/DexImg/pikipek_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "skill-link",
      "pickup"
    ],
    "statsHP": 35,
    "statsATK": 75,
    "statsDEF": 30,
    "statsINIT": 65,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "trumbeak",
    "id": 732,
    "img1": "../IMG/DexImg/trumbeak_home.png",
    "img2": "../IMG/DexImg/trumbeak_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "skill-link",
      "pickup"
    ],
    "statsHP": 55,
    "statsATK": 85,
    "statsDEF": 50,
    "statsINIT": 75,
    "statsSATK": 40,
    "statsSDEF": 50
  },
  {
    "name": "toucannon",
    "id": 733,
    "img1": "../IMG/DexImg/toucannon_home.png",
    "img2": "../IMG/DexImg/toucannon_classic.png",
    "typ1": "normal",
    "typ2": "flying",
    "moves": [
      "keen-eye",
      "skill-link",
      "sheer-force"
    ],
    "statsHP": 80,
    "statsATK": 120,
    "statsDEF": 75,
    "statsINIT": 60,
    "statsSATK": 75,
    "statsSDEF": 75
  },
  {
    "name": "yungoos",
    "id": 734,
    "img1": "../IMG/DexImg/yungoos_home.png",
    "img2": "../IMG/DexImg/yungoos_classic.png",
    "typ1": "normal",
    "moves": [
      "stakeout",
      "strong-jaw",
      "adaptability"
    ],
    "statsHP": 48,
    "statsATK": 70,
    "statsDEF": 30,
    "statsINIT": 45,
    "statsSATK": 30,
    "statsSDEF": 30
  },
  {
    "name": "gumshoos",
    "id": 735,
    "img1": "../IMG/DexImg/gumshoos_home.png",
    "img2": "../IMG/DexImg/gumshoos_classic.png",
    "typ1": "normal",
    "moves": [
      "stakeout",
      "strong-jaw",
      "adaptability"
    ],
    "statsHP": 88,
    "statsATK": 110,
    "statsDEF": 60,
    "statsINIT": 45,
    "statsSATK": 55,
    "statsSDEF": 60
  },
  {
    "name": "grubbin",
    "id": 736,
    "img1": "../IMG/DexImg/grubbin_home.png",
    "img2": "../IMG/DexImg/grubbin_classic.png",
    "typ1": "bug",
    "moves": [
      "swarm"
    ],
    "statsHP": 47,
    "statsATK": 62,
    "statsDEF": 45,
    "statsINIT": 46,
    "statsSATK": 55,
    "statsSDEF": 45
  },
  {
    "name": "charjabug",
    "id": 737,
    "img1": "../IMG/DexImg/charjabug_home.png",
    "img2": "../IMG/DexImg/charjabug_classic.png",
    "typ1": "bug",
    "typ2": "electric",
    "moves": [
      "battery"
    ],
    "statsHP": 57,
    "statsATK": 82,
    "statsDEF": 95,
    "statsINIT": 36,
    "statsSATK": 55,
    "statsSDEF": 75
  },
  {
    "name": "vikavolt",
    "id": 738,
    "img1": "../IMG/DexImg/vikavolt_home.png",
    "img2": "../IMG/DexImg/vikavolt_classic.png",
    "typ1": "bug",
    "typ2": "electric",
    "moves": [
      "levitate"
    ],
    "statsHP": 77,
    "statsATK": 70,
    "statsDEF": 90,
    "statsINIT": 43,
    "statsSATK": 145,
    "statsSDEF": 75
  },
  {
    "name": "crabrawler",
    "id": 739,
    "img1": "../IMG/DexImg/crabrawler_home.png",
    "img2": "../IMG/DexImg/crabrawler_classic.png",
    "typ1": "fighting",
    "moves": [
      "hyper-cutter",
      "iron-fist",
      "anger-point"
    ],
    "statsHP": 47,
    "statsATK": 82,
    "statsDEF": 57,
    "statsINIT": 63,
    "statsSATK": 42,
    "statsSDEF": 47
  },
  {
    "name": "crabominable",
    "id": 740,
    "img1": "../IMG/DexImg/crabominable_home.png",
    "img2": "../IMG/DexImg/crabominable_classic.png",
    "typ1": "fighting",
    "typ2": "ice",
    "moves": [
      "hyper-cutter",
      "iron-fist",
      "anger-point"
    ],
    "statsHP": 97,
    "statsATK": 132,
    "statsDEF": 77,
    "statsINIT": 43,
    "statsSATK": 62,
    "statsSDEF": 67
  },
  {
    "name": "oricorio-baile",
    "id": 741,
    "img1": "../IMG/DexImg/oricorio-baile_home.png",
    "img2": "../IMG/DexImg/oricorio-baile_classic.png",
    "typ1": "fire",
    "typ2": "flying",
    "moves": [
      "dancer"
    ],
    "statsHP": 75,
    "statsATK": 70,
    "statsDEF": 70,
    "statsINIT": 93,
    "statsSATK": 98,
    "statsSDEF": 70
  },
  {
    "name": "cutiefly",
    "id": 742,
    "img1": "../IMG/DexImg/cutiefly_home.png",
    "img2": "../IMG/DexImg/cutiefly_classic.png",
    "typ1": "bug",
    "typ2": "fairy",
    "moves": [
      "honey-gather",
      "shield-dust",
      "sweet-veil"
    ],
    "statsHP": 40,
    "statsATK": 45,
    "statsDEF": 40,
    "statsINIT": 84,
    "statsSATK": 55,
    "statsSDEF": 40
  },
  {
    "name": "ribombee",
    "id": 743,
    "img1": "../IMG/DexImg/ribombee_home.png",
    "img2": "../IMG/DexImg/ribombee_classic.png",
    "typ1": "bug",
    "typ2": "fairy",
    "moves": [
      "honey-gather",
      "shield-dust",
      "sweet-veil"
    ],
    "statsHP": 60,
    "statsATK": 55,
    "statsDEF": 60,
    "statsINIT": 124,
    "statsSATK": 95,
    "statsSDEF": 70
  },
  {
    "name": "rockruff",
    "id": 744,
    "img1": "../IMG/DexImg/rockruff_home.png",
    "img2": "../IMG/DexImg/rockruff_classic.png",
    "typ1": "rock",
    "moves": [
      "keen-eye",
      "vital-spirit",
      "steadfast"
    ],
    "statsHP": 45,
    "statsATK": 65,
    "statsDEF": 40,
    "statsINIT": 60,
    "statsSATK": 30,
    "statsSDEF": 40
  },
  {
    "name": "lycanroc-midday",
    "id": 745,
    "img1": "../IMG/DexImg/lycanroc-midday_home.png",
    "img2": "../IMG/DexImg/lycanroc-midday_classic.png",
    "typ1": "rock",
    "moves": [
      "keen-eye",
      "sand-rush",
      "steadfast"
    ],
    "statsHP": 75,
    "statsATK": 115,
    "statsDEF": 65,
    "statsINIT": 112,
    "statsSATK": 55,
    "statsSDEF": 65
  },
  {
    "name": "wishiwashi-solo",
    "id": 746,
    "img1": "../IMG/DexImg/wishiwashi-solo_home.png",
    "img2": "../IMG/DexImg/wishiwashi-solo_classic.png",
    "typ1": "water",
    "moves": [
      "schooling"
    ],
    "statsHP": 45,
    "statsATK": 20,
    "statsDEF": 20,
    "statsINIT": 40,
    "statsSATK": 25,
    "statsSDEF": 25
  },
  {
    "name": "mareanie",
    "id": 747,
    "img1": "../IMG/DexImg/mareanie_home.png",
    "img2": "../IMG/DexImg/mareanie_classic.png",
    "typ1": "poison",
    "typ2": "water",
    "moves": [
      "merciless",
      "limber",
      "regenerator"
    ],
    "statsHP": 50,
    "statsATK": 53,
    "statsDEF": 62,
    "statsINIT": 45,
    "statsSATK": 43,
    "statsSDEF": 52
  },
  {
    "name": "toxapex",
    "id": 748,
    "img1": "../IMG/DexImg/toxapex_home.png",
    "img2": "../IMG/DexImg/toxapex_classic.png",
    "typ1": "poison",
    "typ2": "water",
    "moves": [
      "merciless",
      "limber",
      "regenerator"
    ],
    "statsHP": 50,
    "statsATK": 63,
    "statsDEF": 152,
    "statsINIT": 35,
    "statsSATK": 53,
    "statsSDEF": 142
  },
  {
    "name": "mudbray",
    "id": 749,
    "img1": "../IMG/DexImg/mudbray_home.png",
    "img2": "../IMG/DexImg/mudbray_classic.png",
    "typ1": "ground",
    "moves": [
      "own-tempo",
      "stamina",
      "inner-focus"
    ],
    "statsHP": 70,
    "statsATK": 100,
    "statsDEF": 70,
    "statsINIT": 45,
    "statsSATK": 45,
    "statsSDEF": 55
  },
  {
    "name": "mudsdale",
    "id": 750,
    "img1": "../IMG/DexImg/mudsdale_home.png",
    "img2": "../IMG/DexImg/mudsdale_classic.png",
    "typ1": "ground",
    "moves": [
      "own-tempo",
      "stamina",
      "inner-focus"
    ],
    "statsHP": 100,
    "statsATK": 125,
    "statsDEF": 100,
    "statsINIT": 35,
    "statsSATK": 55,
    "statsSDEF": 85
  },
  {
    "name": "dewpider",
    "id": 751,
    "img1": "../IMG/DexImg/dewpider_home.png",
    "img2": "../IMG/DexImg/dewpider_classic.png",
    "typ1": "water",
    "typ2": "bug",
    "moves": [
      "water-bubble",
      "water-absorb"
    ],
    "statsHP": 38,
    "statsATK": 40,
    "statsDEF": 52,
    "statsINIT": 27,
    "statsSATK": 40,
    "statsSDEF": 72
  },
  {
    "name": "araquanid",
    "id": 752,
    "img1": "../IMG/DexImg/araquanid_home.png",
    "img2": "../IMG/DexImg/araquanid_classic.png",
    "typ1": "water",
    "typ2": "bug",
    "moves": [
      "water-bubble",
      "water-absorb"
    ],
    "statsHP": 68,
    "statsATK": 70,
    "statsDEF": 92,
    "statsINIT": 42,
    "statsSATK": 50,
    "statsSDEF": 132
  },
  {
    "name": "fomantis",
    "id": 753,
    "img1": "../IMG/DexImg/fomantis_home.png",
    "img2": "../IMG/DexImg/fomantis_classic.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "contrary"
    ],
    "statsHP": 40,
    "statsATK": 55,
    "statsDEF": 35,
    "statsINIT": 35,
    "statsSATK": 50,
    "statsSDEF": 35
  },
  {
    "name": "lurantis",
    "id": 754,
    "img1": "../IMG/DexImg/lurantis_home.png",
    "img2": "../IMG/DexImg/lurantis_classic.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "contrary"
    ],
    "statsHP": 70,
    "statsATK": 105,
    "statsDEF": 90,
    "statsINIT": 45,
    "statsSATK": 80,
    "statsSDEF": 90
  },
  {
    "name": "morelull",
    "id": 755,
    "img1": "../IMG/DexImg/morelull_home.png",
    "img2": "../IMG/DexImg/morelull_classic.png",
    "typ1": "grass",
    "typ2": "fairy",
    "moves": [
      "illuminate",
      "effect-spore",
      "rain-dish"
    ],
    "statsHP": 40,
    "statsATK": 35,
    "statsDEF": 55,
    "statsINIT": 15,
    "statsSATK": 65,
    "statsSDEF": 75
  },
  {
    "name": "shiinotic",
    "id": 756,
    "img1": "../IMG/DexImg/shiinotic_home.png",
    "img2": "../IMG/DexImg/shiinotic_classic.png",
    "typ1": "grass",
    "typ2": "fairy",
    "moves": [
      "illuminate",
      "effect-spore",
      "rain-dish"
    ],
    "statsHP": 60,
    "statsATK": 45,
    "statsDEF": 80,
    "statsINIT": 30,
    "statsSATK": 90,
    "statsSDEF": 100
  },
  {
    "name": "salandit",
    "id": 757,
    "img1": "../IMG/DexImg/salandit_home.png",
    "img2": "../IMG/DexImg/salandit_classic.png",
    "typ1": "poison",
    "typ2": "fire",
    "moves": [
      "corrosion",
      "oblivious"
    ],
    "statsHP": 48,
    "statsATK": 44,
    "statsDEF": 40,
    "statsINIT": 77,
    "statsSATK": 71,
    "statsSDEF": 40
  },
  {
    "name": "salazzle",
    "id": 758,
    "img1": "../IMG/DexImg/salazzle_home.png",
    "img2": "../IMG/DexImg/salazzle_classic.png",
    "typ1": "poison",
    "typ2": "fire",
    "moves": [
      "corrosion",
      "oblivious"
    ],
    "statsHP": 68,
    "statsATK": 64,
    "statsDEF": 60,
    "statsINIT": 117,
    "statsSATK": 111,
    "statsSDEF": 60
  },
  {
    "name": "stufful",
    "id": 759,
    "img1": "../IMG/DexImg/stufful_home.png",
    "img2": "../IMG/DexImg/stufful_classic.png",
    "typ1": "normal",
    "typ2": "fighting",
    "moves": [
      "fluffy",
      "klutz",
      "cute-charm"
    ],
    "statsHP": 70,
    "statsATK": 75,
    "statsDEF": 50,
    "statsINIT": 50,
    "statsSATK": 45,
    "statsSDEF": 50
  },
  {
    "name": "bewear",
    "id": 760,
    "img1": "../IMG/DexImg/bewear_home.png",
    "img2": "../IMG/DexImg/bewear_classic.png",
    "typ1": "normal",
    "typ2": "fighting",
    "moves": [
      "fluffy",
      "klutz",
      "unnerve"
    ],
    "statsHP": 120,
    "statsATK": 125,
    "statsDEF": 80,
    "statsINIT": 60,
    "statsSATK": 55,
    "statsSDEF": 60
  },
  {
    "name": "bounsweet",
    "id": 761,
    "img1": "../IMG/DexImg/bounsweet_home.png",
    "img2": "../IMG/DexImg/bounsweet_classic.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "oblivious",
      "sweet-veil"
    ],
    "statsHP": 42,
    "statsATK": 30,
    "statsDEF": 38,
    "statsINIT": 32,
    "statsSATK": 30,
    "statsSDEF": 38
  },
  {
    "name": "steenee",
    "id": 762,
    "img1": "../IMG/DexImg/steenee_home.png",
    "img2": "../IMG/DexImg/steenee_classic.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "oblivious",
      "sweet-veil"
    ],
    "statsHP": 52,
    "statsATK": 40,
    "statsDEF": 48,
    "statsINIT": 62,
    "statsSATK": 40,
    "statsSDEF": 48
  },
  {
    "name": "tsareena",
    "id": 763,
    "img1": "../IMG/DexImg/tsareena_home.png",
    "img2": "../IMG/DexImg/tsareena_classic.png",
    "typ1": "grass",
    "moves": [
      "leaf-guard",
      "queenly-majesty",
      "sweet-veil"
    ],
    "statsHP": 72,
    "statsATK": 120,
    "statsDEF": 98,
    "statsINIT": 72,
    "statsSATK": 50,
    "statsSDEF": 98
  },
  {
    "name": "comfey",
    "id": 764,
    "img1": "../IMG/DexImg/comfey_home.png",
    "img2": "../IMG/DexImg/comfey_classic.png",
    "typ1": "fairy",
    "moves": [
      "flower-veil",
      "triage",
      "natural-cure"
    ],
    "statsHP": 51,
    "statsATK": 52,
    "statsDEF": 90,
    "statsINIT": 100,
    "statsSATK": 82,
    "statsSDEF": 110
  },
  {
    "name": "oranguru",
    "id": 765,
    "img1": "../IMG/DexImg/oranguru_home.png",
    "img2": "../IMG/DexImg/oranguru_classic.png",
    "typ1": "normal",
    "typ2": "psychic",
    "moves": [
      "inner-focus",
      "telepathy",
      "symbiosis"
    ],
    "statsHP": 90,
    "statsATK": 60,
    "statsDEF": 80,
    "statsINIT": 60,
    "statsSATK": 90,
    "statsSDEF": 110
  },
  {
    "name": "passimian",
    "id": 766,
    "img1": "../IMG/DexImg/passimian_home.png",
    "img2": "../IMG/DexImg/passimian_classic.png",
    "typ1": "fighting",
    "moves": [
      "receiver",
      "defiant"
    ],
    "statsHP": 100,
    "statsATK": 120,
    "statsDEF": 90,
    "statsINIT": 80,
    "statsSATK": 40,
    "statsSDEF": 60
  },
  {
    "name": "wimpod",
    "id": 767,
    "img1": "../IMG/DexImg/wimpod_home.png",
    "img2": "../IMG/DexImg/wimpod_classic.png",
    "typ1": "bug",
    "typ2": "water",
    "moves": [
      "wimp-out"
    ],
    "statsHP": 25,
    "statsATK": 35,
    "statsDEF": 40,
    "statsINIT": 80,
    "statsSATK": 20,
    "statsSDEF": 30
  },
  {
    "name": "golisopod",
    "id": 768,
    "img1": "../IMG/DexImg/golisopod_home.png",
    "img2": "../IMG/DexImg/golisopod_classic.png",
    "typ1": "bug",
    "typ2": "water",
    "moves": [
      "emergency-exit"
    ],
    "statsHP": 75,
    "statsATK": 125,
    "statsDEF": 140,
    "statsINIT": 40,
    "statsSATK": 60,
    "statsSDEF": 90
  },
  {
    "name": "sandygast",
    "id": 769,
    "img1": "../IMG/DexImg/sandygast_home.png",
    "img2": "../IMG/DexImg/sandygast_classic.png",
    "typ1": "ghost",
    "typ2": "ground",
    "moves": [
      "water-compaction",
      "sand-veil"
    ],
    "statsHP": 55,
    "statsATK": 55,
    "statsDEF": 80,
    "statsINIT": 15,
    "statsSATK": 70,
    "statsSDEF": 45
  },
  {
    "name": "palossand",
    "id": 770,
    "img1": "../IMG/DexImg/palossand_home.png",
    "img2": "../IMG/DexImg/palossand_classic.png",
    "typ1": "ghost",
    "typ2": "ground",
    "moves": [
      "water-compaction",
      "sand-veil"
    ],
    "statsHP": 85,
    "statsATK": 75,
    "statsDEF": 110,
    "statsINIT": 35,
    "statsSATK": 100,
    "statsSDEF": 75
  },
  {
    "name": "pyukumuku",
    "id": 771,
    "img1": "../IMG/DexImg/pyukumuku_home.png",
    "img2": "../IMG/DexImg/pyukumuku_classic.png",
    "typ1": "water",
    "moves": [
      "innards-out",
      "unaware"
    ],
    "statsHP": 55,
    "statsATK": 60,
    "statsDEF": 130,
    "statsINIT": 5,
    "statsSATK": 30,
    "statsSDEF": 130
  },
  {
    "name": "type-null",
    "id": 772,
    "img1": "../IMG/DexImg/type-null_home.png",
    "img2": "../IMG/DexImg/type-null_classic.png",
    "typ1": "normal",
    "moves": [
      "battle-armor"
    ],
    "statsHP": 95,
    "statsATK": 95,
    "statsDEF": 95,
    "statsINIT": 59,
    "statsSATK": 95,
    "statsSDEF": 95
  },
  {
    "name": "silvally",
    "id": 773,
    "img1": "../IMG/DexImg/silvally_home.png",
    "img2": "../IMG/DexImg/silvally_classic.png",
    "typ1": "normal",
    "moves": [
      "rks-system"
    ],
    "statsHP": 95,
    "statsATK": 95,
    "statsDEF": 95,
    "statsINIT": 95,
    "statsSATK": 95,
    "statsSDEF": 95
  },
  {
    "name": "minior-red-meteor",
    "id": 774,
    "img1": "../IMG/DexImg/minior-red-meteor_home.png",
    "img2": "../IMG/DexImg/minior-red-meteor_classic.png",
    "typ1": "rock",
    "typ2": "flying",
    "moves": [
      "shields-down"
    ],
    "statsHP": 60,
    "statsATK": 60,
    "statsDEF": 100,
    "statsINIT": 60,
    "statsSATK": 60,
    "statsSDEF": 100
  },
  {
    "name": "komala",
    "id": 775,
    "img1": "../IMG/DexImg/komala_home.png",
    "img2": "../IMG/DexImg/komala_classic.png",
    "typ1": "normal",
    "moves": [
      "comatose"
    ],
    "statsHP": 65,
    "statsATK": 115,
    "statsDEF": 65,
    "statsINIT": 65,
    "statsSATK": 75,
    "statsSDEF": 95
  },
  {
    "name": "turtonator",
    "id": 776,
    "img1": "../IMG/DexImg/turtonator_home.png",
    "img2": "../IMG/DexImg/turtonator_classic.png",
    "typ1": "fire",
    "typ2": "dragon",
    "moves": [
      "shell-armor"
    ],
    "statsHP": 60,
    "statsATK": 78,
    "statsDEF": 135,
    "statsINIT": 36,
    "statsSATK": 91,
    "statsSDEF": 85
  },
  {
    "name": "togedemaru",
    "id": 777,
    "img1": "../IMG/DexImg/togedemaru_home.png",
    "img2": "../IMG/DexImg/togedemaru_classic.png",
    "typ1": "electric",
    "typ2": "steel",
    "moves": [
      "iron-barbs",
      "lightning-rod",
      "sturdy"
    ],
    "statsHP": 65,
    "statsATK": 98,
    "statsDEF": 63,
    "statsINIT": 96,
    "statsSATK": 40,
    "statsSDEF": 73
  },
  {
    "name": "mimikyu-disguised",
    "id": 778,
    "img1": "../IMG/DexImg/mimikyu-disguised_home.png",
    "img2": "../IMG/DexImg/mimikyu-disguised_classic.png",
    "typ1": "ghost",
    "typ2": "fairy",
    "moves": [
      "disguise"
    ],
    "statsHP": 55,
    "statsATK": 90,
    "statsDEF": 80,
    "statsINIT": 96,
    "statsSATK": 50,
    "statsSDEF": 105
  },
  {
    "name": "bruxish",
    "id": 779,
    "img1": "../IMG/DexImg/bruxish_home.png",
    "img2": "../IMG/DexImg/bruxish_classic.png",
    "typ1": "water",
    "typ2": "psychic",
    "moves": [
      "dazzling",
      "strong-jaw",
      "wonder-skin"
    ],
    "statsHP": 68,
    "statsATK": 105,
    "statsDEF": 70,
    "statsINIT": 92,
    "statsSATK": 70,
    "statsSDEF": 70
  },
  {
    "name": "drampa",
    "id": 780,
    "img1": "../IMG/DexImg/drampa_home.png",
    "img2": "../IMG/DexImg/drampa_classic.png",
    "typ1": "normal",
    "typ2": "dragon",
    "moves": [
      "berserk",
      "sap-sipper",
      "cloud-nine"
    ],
    "statsHP": 78,
    "statsATK": 60,
    "statsDEF": 85,
    "statsINIT": 36,
    "statsSATK": 135,
    "statsSDEF": 91
  },
  {
    "name": "dhelmise",
    "id": 781,
    "img1": "../IMG/DexImg/dhelmise_home.png",
    "img2": "../IMG/DexImg/dhelmise_classic.png",
    "typ1": "ghost",
    "typ2": "grass",
    "moves": [
      "steelworker"
    ],
    "statsHP": 70,
    "statsATK": 131,
    "statsDEF": 100,
    "statsINIT": 40,
    "statsSATK": 86,
    "statsSDEF": 90
  },
  {
    "name": "jangmo-o",
    "id": 782,
    "img1": "../IMG/DexImg/jangmo-o_home.png",
    "img2": "../IMG/DexImg/jangmo-o_classic.png",
    "typ1": "dragon",
    "moves": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "statsHP": 45,
    "statsATK": 55,
    "statsDEF": 65,
    "statsINIT": 45,
    "statsSATK": 45,
    "statsSDEF": 45
  },
  {
    "name": "hakamo-o",
    "id": 783,
    "img1": "../IMG/DexImg/hakamo-o_home.png",
    "img2": "../IMG/DexImg/hakamo-o_classic.png",
    "typ1": "dragon",
    "typ2": "fighting",
    "moves": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "statsHP": 55,
    "statsATK": 75,
    "statsDEF": 90,
    "statsINIT": 65,
    "statsSATK": 65,
    "statsSDEF": 70
  },
  {
    "name": "kommo-o",
    "id": 784,
    "img1": "../IMG/DexImg/kommo-o_home.png",
    "img2": "../IMG/DexImg/kommo-o_classic.png",
    "typ1": "dragon",
    "typ2": "fighting",
    "moves": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "statsHP": 75,
    "statsATK": 110,
    "statsDEF": 125,
    "statsINIT": 85,
    "statsSATK": 100,
    "statsSDEF": 105
  },
  {
    "name": "tapu-koko",
    "id": 785,
    "img1": "../IMG/DexImg/tapu-koko_home.png",
    "img2": "../IMG/DexImg/tapu-koko_classic.png",
    "typ1": "electric",
    "typ2": "fairy",
    "moves": [
      "electric-surge",
      "telepathy"
    ],
    "statsHP": 70,
    "statsATK": 115,
    "statsDEF": 85,
    "statsINIT": 130,
    "statsSATK": 95,
    "statsSDEF": 75
  },
  {
    "name": "tapu-lele",
    "id": 786,
    "img1": "../IMG/DexImg/tapu-lele_home.png",
    "img2": "../IMG/DexImg/tapu-lele_classic.png",
    "typ1": "psychic",
    "typ2": "fairy",
    "moves": [
      "psychic-surge",
      "telepathy"
    ],
    "statsHP": 70,
    "statsATK": 85,
    "statsDEF": 75,
    "statsINIT": 95,
    "statsSATK": 130,
    "statsSDEF": 115
  },
  {
    "name": "tapu-bulu",
    "id": 787,
    "img1": "../IMG/DexImg/tapu-bulu_home.png",
    "img2": "../IMG/DexImg/tapu-bulu_classic.png",
    "typ1": "grass",
    "typ2": "fairy",
    "moves": [
      "grassy-surge",
      "telepathy"
    ],
    "statsHP": 70,
    "statsATK": 130,
    "statsDEF": 115,
    "statsINIT": 75,
    "statsSATK": 85,
    "statsSDEF": 95
  },
  {
    "name": "tapu-fini",
    "id": 788,
    "img1": "../IMG/DexImg/tapu-fini_home.png",
    "img2": "../IMG/DexImg/tapu-fini_classic.png",
    "typ1": "water",
    "typ2": "fairy",
    "moves": [
      "misty-surge",
      "telepathy"
    ],
    "statsHP": 70,
    "statsATK": 75,
    "statsDEF": 115,
    "statsINIT": 85,
    "statsSATK": 95,
    "statsSDEF": 130
  },
  {
    "name": "cosmog",
    "id": 789,
    "img1": "../IMG/DexImg/cosmog_home.png",
    "img2": "../IMG/DexImg/cosmog_classic.png",
    "typ1": "psychic",
    "moves": [
      "unaware"
    ],
    "statsHP": 43,
    "statsATK": 29,
    "statsDEF": 31,
    "statsINIT": 37,
    "statsSATK": 29,
    "statsSDEF": 31
  },
  {
    "name": "cosmoem",
    "id": 790,
    "img1": "../IMG/DexImg/cosmoem_home.png",
    "img2": "../IMG/DexImg/cosmoem_classic.png",
    "typ1": "psychic",
    "moves": [
      "sturdy"
    ],
    "statsHP": 43,
    "statsATK": 29,
    "statsDEF": 131,
    "statsINIT": 37,
    "statsSATK": 29,
    "statsSDEF": 131
  },
  {
    "name": "solgaleo",
    "id": 791,
    "img1": "../IMG/DexImg/solgaleo_home.png",
    "img2": "../IMG/DexImg/solgaleo_classic.png",
    "typ1": "psychic",
    "typ2": "steel",
    "moves": [
      "full-metal-body"
    ],
    "statsHP": 137,
    "statsATK": 137,
    "statsDEF": 107,
    "statsINIT": 97,
    "statsSATK": 113,
    "statsSDEF": 89
  },
  {
    "name": "lunala",
    "id": 792,
    "img1": "../IMG/DexImg/lunala_home.png",
    "img2": "../IMG/DexImg/lunala_classic.png",
    "typ1": "psychic",
    "typ2": "ghost",
    "moves": [
      "shadow-shield"
    ],
    "statsHP": 137,
    "statsATK": 113,
    "statsDEF": 89,
    "statsINIT": 97,
    "statsSATK": 137,
    "statsSDEF": 107
  },
  {
    "name": "nihilego",
    "id": 793,
    "img1": "../IMG/DexImg/nihilego_home.png",
    "img2": "../IMG/DexImg/nihilego_classic.png",
    "typ1": "rock",
    "typ2": "poison",
    "moves": [
      "beast-boost"
    ],
    "statsHP": 109,
    "statsATK": 53,
    "statsDEF": 47,
    "statsINIT": 103,
    "statsSATK": 127,
    "statsSDEF": 131
  }
]