async function searchPokemon() {
  setTimeout(() => {
    addOrden(6)
  }, 1000);
  let pokemonFound = false;
  let input = searchInput.value;
  let searchResult = allPokemon.filter(pokemon => pokemon['name'].includes(input.toLowerCase()))
  content.innerHTML = "";
  if (searchResult.length > 0){
    pokemonFound = true;

    for (let i = 0; i < searchResult.length; i++) {
      const pokemon = searchResult[i];
      let pName = pokemon['name'];
      let pImg = pokemon['img1'];
      let indexOfPokemon = allPokemon.findIndex(p => p['name'] === pName)
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
                <img src="${pImg}" alt="Pokemon">
            </div>
            <h1 class="cardName">${pName}</h1>
        </div>
    
        `
    }
  }
  if (input === "clearall"){
    localStorage.clear();
    location.reload();
  }
  if (!pokemonFound && searchInput.value === "") {
    rangeCounter = 0;
    renderDex();
  } else if (!pokemonFound) {
    renderMissingNo();
  }
  searchInput.value = "";
}
function renderName() {
  let i = 0;

  function renderLetters(actualName, j) {
    if (j < actualName.length) {
      const letter = actualName.charAt(j);
      searchInput.placeholder += letter;
      setTimeout(() => renderLetters(actualName, j + 1), 500);
    } else {
      setTimeout(renderNextName, 1500);
    }
  }

  function renderNextName() {
    if (i < allPokemon.length) {
      const actualName = allPokemon[i]['name'];
      searchInput.placeholder = "";
      renderLetters(actualName, 0);
      i++;
    }
  }

  renderNextName(); // Starte den Prozess
}