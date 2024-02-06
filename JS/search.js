
async function searchPokemon() {
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

// Starte die Funktion
