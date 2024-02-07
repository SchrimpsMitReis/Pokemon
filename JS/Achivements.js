let myGymBadges = []


function saveBadges(){
    let payload = JSON.stringify(myGymBadges);
    localStorage.setItem("Badges", payload);
}

function loadBadges(){
    let response = localStorage.getItem("Badges");
    if (response){
        console.log(response);
        let parsedResponse = JSON.parse(response);
        myGymBadges = parsedResponse;
    }else{
        saveBadges();
        loadBadges();
    }
}
function addOrden(x){
    let orden = allBadges[x]
    try{loadBadges()}catch(e){console.log(e);}
    if (myGymBadges.includes(orden.name)){
        console.log(`Abzeichen ${orden.name} bereits vorhanden.`)
    }else{
        levelUp.play()
        myGymBadges.push(orden.name)
        let overlay = document.getElementById('badgeOverlay');
        overlay.classList.remove('d-none');
        overlay.innerHTML = /*html*/`
                <div class="headlineBadge">
                    <img src=${orden.img} alt="Felsorden">
                    <p>Herzlichen Glückwunsch, <br> Du hast den ${orden.name} erhalten!</p>
                </div>

        `
        setTimeout(() => {
            overlay.classList.add("d-none")
        }, 3000);
    }
    saveBadges()
}
function deleteBagdges(){
    myGymBadges = [];
    saveBadges()
}