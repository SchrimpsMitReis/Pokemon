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
    // Pfad und Dateiname, unter dem das Bild gespeichert werden soll
    const speicherpfad = `test.png`;
    
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

saveConnect(url)