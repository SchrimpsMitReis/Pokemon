const axios = require('axios');
const fs = require('fs');

console.clear()
let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
async function download(){
    let data = await fetch(url)
    console.log(data);
    fs.writeFile('./TestBild.png', data, (err) => {
        if (err) {
          console.error('Fehler beim Erstellen der Datei:', err);
        } else {
          console.log('Die Datei wurde erfolgreich erstellt.');
        }
      });
}
async function saveConnect(url) {
    const bildUrl = `${url}`;
    const speicherpfad = `test.png`;
    
    axios({
      method: 'get',
      url: bildUrl,
      responseType: 'stream'
    })
      .then((response) => {
        response.data.pipe(fs.createWriteStream(speicherpfad));
    
        response.data.on('end', () => {
          console.log('Bild erfolgreich heruntergeladen und gespeichert.');
        });
      })
      .catch((error) => {
        console.error('Fehler beim Herunterladen des Bildes:', error);
      });
    
    return speicherpfad

}

saveConnect(url)