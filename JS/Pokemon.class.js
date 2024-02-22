<<<<<<< Updated upstream
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
        this.satsATK = statsATK;
        this.satsDEF = statsDEF;
        this.satsINIT = statsINIT;
        this.satsSATK = statsSATK;
        this.satsSDEF = statsSDEF;
=======
class Pokemon {
    constructor(name, id, img1, img2, typ1, typ2, moves, statsHP, statsATK, statsDEF, statsINIT, statsSATK, statsSDEF, cry, fT = "Leider gibt es nichts dazu zu sagen! :(") {
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
      this.cry = cry;
      this.flavorText = fT
>>>>>>> Stashed changes
    }
  }
  