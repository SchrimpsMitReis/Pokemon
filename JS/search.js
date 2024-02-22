
async function searchPokemon() {
<<<<<<< Updated upstream
  let searchInput = document.getElementById('searchInput').value;
  let searchInputGroß = () => {
    return searchInput.charAt(0).toUpperCase() + searchInput.slice(1)
  }
  let index = pokemonEnglish.indexOf(searchInput)
  let elementId = `Card${index}`
  if (index !== -1) {
    scrollToPoint(elementId)
    showBackside(index);
  } else {
    // console.log("Pokemon nicht gefunden", searchInput);
  }
}

function scrollToPoint(elementId) {
  const cardX = document.getElementById(elementId);

  if (cardX) {
    cardX.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`Element mit der ID "${elementId}" wurde nicht gefunden.`);
  }
}
async function searchPokemon2(){
  addOrden(3)
  content.innerHTML = "";
  let pokemonFound = false;

  for (let i = 0; i < pokemonEnglish.length; i++) {
      const pokemon = pokemonEnglish[i].toLowerCase();
      if (pokemon.includes(searchInput.value.toLowerCase())) {
          await loadPokemon(pokemon, i);
          pokemonFound = true;
      }
  }

  if (!pokemonFound && searchInput.value === "") {
=======
  setTimeout(() => {
    addOrden(3)
  }, 1000);
  let pokemonFound = false;
  let input = searchInput.value;
  console.log("search", input);

  let searchResult = allPokemon.filter(pokemon => pokemon['name'].toLowerCase().includes(input.toLowerCase()))
  content.innerHTML = "";
  if (searchResult.length > 0){
    pokemonFound = true;
    for (let i = 0; i < searchResult.length; i++) {
      const pokemon = searchResult[i];
      let indexOfPokemon = allPokemon.findIndex(p => p['name'] === pokemon['name'])
      content.innerHTML += /*html*/`
        <div id="Card${i}" class="dexCard" onclick="showBackside(${indexOfPokemon})">
            <div>
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="blueCircle" cx="40" cy="40" r="20"/>
                  <circle  cx="40" cy="40" r="20" fill="none" stroke="black" stroke-width="14" />
                  <circle  cx="40" cy="40" r="20" fill="none" stroke="white" stroke-width="10"/>
                </svg>
    
            </div>
            <div class="pokeImgContainer">
                <img src="${pokemon['img1']}" alt="Pokemon">
            </div>
            <h1 class="cardName">${pokemon['name']}</h1>
        </div>
        `
    }
  }
  else if (input === "clearall"){
    clearAll()
  }
  else if (!pokemonFound && searchInput.value === "") {
>>>>>>> Stashed changes
    rangeCounter = 0;
      renderList();
  } else if (!pokemonFound) {
      renderMissingNo();
  }
  searchInput.value = "";
}

const input = document.getElementById('searchInput')
input.placeholder = "";


function renderName() {
  let i = 0;

  function renderLetters(actualName, j) {
    if (j < actualName.length) {
      const letter = actualName.charAt(j);
      input.placeholder += letter;
      setTimeout(() => renderLetters(actualName, j + 1), 500);
    } else {
      setTimeout(renderNextName, 1500);
    }
  }

  function renderNextName() {
    if (i < pokemonEnglish.length) {
      const actualName = pokemonEnglish[i];
      input.placeholder = "";
      renderLetters(actualName, 0);
      i++;
    }
  }

  renderNextName(); // Starte den Prozess
}
<<<<<<< Updated upstream

// Starte die Funktion
=======
function clearAll(){
  localStorage.clear();
  location.reload();
}
>>>>>>> Stashed changes
