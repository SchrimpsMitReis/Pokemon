nidobtn.addEventListener('input',()=>{
    let nidoValue = nidobtn.value;
    let dexCards = document.querySelectorAll('.dexCard')
    let imgContainer = document.querySelectorAll('.pokeImgContainer');
    let svg = document.querySelectorAll('.svg');
    let cardName = document.querySelectorAll('.cardName');
    let img = document.getElementById('.dexCardImage');
    
    dexCards.forEach((card)=>{
        card.style.width = 24 * (nidoValue/100) + "em"; 
        card.style.height =  32 * (nidoValue/100) + "em";
        card.style.borderRadius = 1 * (nidoValue/100) + "em"
        card.style.boxShadow= 0.1 * (nidoValue/100) + "em " + 0 * (nidoValue/100) + "em " + 0.2 * (nidoValue/100) + "em " + 0.1 * (nidoValue/100) + "px";
        card.style.margin = 1 *(nidoValue/100) + "em";
        card.style.paddingBottom= 1* (nidoValue/100) + "em";
    
    })
    imgContainer.forEach((img)=>{
        img.style.border = (nidoValue/100) + "em solid silver";
        img.style.borderRadius =(nidoValue/100) + "em";
        // img.style.margin =(nidoValue/100) + "em";
    
    })
    svg.forEach((path)=>{
        path.style.transform = "scale(" + (nidoValue/100) + ")"
        path.style.transform = "translateY(" + -1 *(nidoValue/100) + ")"
    })
    cardName.forEach((sign)=>{
        sign.style.padding = 10 * (nidoValue/100) + "px"
        sign.style.borderRadius = 5 * (nidoValue/100) + "px" ;
        sign.style.border = 3 + (nidoValue/100) + "px ridge #F7BE10";
    })
    img.forEach((img)=>{
        // img.style.transform = "translateY( " + (-30 * (nidoValue/100)) + "px)" 
    })

})
function changeSvg(path, nidoValue){
    // path.style.cx = 40 * (nidoValue/100);
    // path.style.cy = 40 * (nidoValue/100);
    path.style.r = 20 * (nidoValue/100);
}