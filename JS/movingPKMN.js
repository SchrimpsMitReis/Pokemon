

let icognito = document.getElementById('icognito')

let icognitoCSS = document.querySelector('.icognito')

let posX = 3;
let posY = 3;
function updatePosition() {
    icognitoCSS.style.top = `${posY}px`
    icognitoCSS.style.left = `${posX}px`
}

function movePokemon(x, y) {
    posX += x;
    posY += y
    updatePosition()
}

document.body.addEventListener('mousemove', function (event) {
    let mouseX = event.clientX; 
    let mouseY = event.clientY; 
    if (mouseX) {
        let difX = (mouseX - posX) / 200;
        let difY = (mouseY - posY) / 200;
        setInterval(movePokemon(difX, difY))



    }
});

icognito.addEventListener('click', () => {
<<<<<<< Updated upstream
    addOrden(2);
=======
    setTimeout(() => {
        addOrden(2)
    }, 1000);
    toggleBtns()
>>>>>>> Stashed changes
    let age = ()=>{
        let date = new Date()
        let year = date.getFullYear()
        let age = year - 1992;
        return age;
    }
    let renderOrden = () =>{
        collectedBadges = "";
        if(myGymBadges.includes('Felsorden')){
            collectedBadges += /*html*/`<div class="orden fels"></div>`
        }
        if(myGymBadges.includes('Quellorden')){
            collectedBadges += /*html*/`<div class="orden quell"></div>`
        }
        if(myGymBadges.includes('Donnerorden')){
            collectedBadges += /*html*/`<div class="orden donner"></div>`
        }
        if(myGymBadges.includes('Farborden')){
            collectedBadges += /*html*/`<div class="orden farb"></div>`
        }
        if(myGymBadges.includes('Seelenorden')){
            collectedBadges += /*html*/`<div class="orden seelen"></div>`
        }
        if(myGymBadges.includes('Sumpforden')){
            collectedBadges += /*html*/`<div class="orden sumpf"></div>`
        }
        if(myGymBadges.includes('Vulkanorden')){
            collectedBadges += /*html*/`<div class="orden vulkan"></div>`
        }
        if(myGymBadges.includes('Erdorden')){
            collectedBadges += /*html*/`<div class="orden erd"></div>`
        }
        return collectedBadges;    
    }
    console.log("Nice Funktioniert");
    openCardBG.classList.remove('d-none')
    openCardBG.innerHTML = /*html*/`
    <div class="openCard">
        <div class="closeButton" onclick="closeWindow()"></div>
        <div class="openCardLeft">
            <div class="nameId">
                <h1>Roman Schröder</h1>
                <p>Lvl: ${age()}</p>
            </div>

            <div class="romanImage">
                <img src="./IMG/RomanAnime.png" alt="homeFront">
            </div>

            <div id="types" class="types">
                <div id="type1" class="type CT">Coding Trainee</div>
            </div>

            <div class="moveTable">
                <h2>Abilities :</h2>
                <div id="allMoves" class="allMoves">
                    <h1 class="ability">HTML, CSS, JavaScript</h1>
                    <h1 class="ability">C++</h1>
                    <h1 class="ability">Graphic & Design"</h1>
                    <h1 class="ability">Film & Media Production"</h1>
                </div>
            </div>
        </div>
        <div id="rightBackside" class="openCardRight">
            <div id="AllOrden" class="AllOrden">
                ${renderOrden()}
            </div>
            <div class="allStats">
                <h1 class="ability" style="color: #2E66B1">CV:</h1>
                <p class="ability"><b><u>2012:</u></b>  	<br>Abitur<br>Elisabeth Selbert Gesamtschule<br>Bonn Bad Godesberg</p>
                <p class="ability"><b><u>2015:</u></b>  	<br>BA. Digital Film Making<br>SAE Cologne / Middelsex University London</p>
                <p class="ability"><b><u>2012-2024:</u></b> <br>Productdesign & Marketing<br> Perlando.com</p>
                <p class="ability"><b><u>2023-2024:</u></b> <br>Apprenticeship: <br> Software Developer<br>Developer Akademie München</p>
                <h1 class="ability" style="color: #2E66B1">Contact:</h1>
                <p class="ability"><b><u>Adress:</u></b> <br>Roman Schröder<br>Siebengebirgsweg 10<br>53424 Remagen</p>
                <p class="ability"><b><u>Smart-Rotom:</u></b> <br>+49 1514/1684778</p>
                <p class="ability"><b><u>E-Mail:</u></b> <br>roman.schroeder(a)inclufilm.com</p>
            </div>
        </div>
    </div>

    `

})