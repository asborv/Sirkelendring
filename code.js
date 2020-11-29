// category HTML-element

const sirkel = document.getElementById("sirkel");
const mainContainer = document.querySelector("main");



// category funksjonar

function endreRadius({ target }) {

    // Finn ut kor stor sirkelen kan bli uten å øydeleggje
    const maxRadius = Math.min(
        window.innerWidth,
        window.innerHeight,
        parseInt(window.getComputedStyle(mainContainer).marginTop)
    );

    // Tilfeldig tal i det gyldige området
    const nyRadius = (Math.floor(Math.random() * maxRadius) + 20) / 2;
    
    // Set ny radius og tilpassar høgd, slik at sirkelen ikkje flyttar på seg
    target.style.width = `${nyRadius * 2}px`;
    target.style.height = `${nyRadius * 2}px`;
    target.style.transform = `translateY(-${nyRadius}px)`;
}



// category event listeners

sirkel.addEventListener("click", endreRadius);

// Køyrer funksjonen med éin gong, slik at sirkelen får riktig posisjon
endreRadius({target: sirkel});