
async function searchPokemon() {
  let searchInput = document.getElementById('searchInput').value;
  let searchInputGroß = () => {
    return searchInput.charAt(0).toUpperCase() + searchInput.slice(1)
  }
  let index = allPokemon.indexOf(searchInput)
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

async function searchPokemon2() {
  setTimeout(() => {
    addOrden(6)
  }, 1000);
  content.innerHTML = "";
  let pokemonFound = false;

  let searchResult = allPokemon.filter(pokemon => pokemon['name'] == searchInput.value.toLowerCase())
  for (let i = 0; i < searchResult.length; i++) {
    const pokemon = searchResult[i];
    let pName = pokemon['name'];
    let pImg = pokemon['img1'];

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

  if (!pokemonFound && searchInput.value === "") {
    rangeCounter = 0;
    renderDex();
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
    if (i < allPokemon.length) {
      const actualName = allPokemon[i]['name'];
      input.placeholder = "";
      console.log(actualName);
      renderLetters(actualName, 0);
      i++;
    }
  }

  renderNextName(); // Starte den Prozess
}

// Starte die Funktion
