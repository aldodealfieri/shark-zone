const sharkInfo = {

    white: {
        emoji: "🦈",
        title: "Squalo bianco",
        text: "Il grande squalo bianco è uno dei predatori più conosciuti dell'oceano. Può raggiungere grandi dimensioni ed è famoso per la sua incredibile capacità di individuare le prede."
    },

    hammer: {
        emoji: "🔨",
        title: "Squalo martello",
        text: "La sua caratteristica più famosa è la testa a forma di martello. Questa particolare forma gli permette di avere un campo visivo molto ampio e di percepire meglio ciò che lo circonda."
    },

    whale: {
        emoji: "🐋",
        title: "Squalo balena",
        text: "Nonostante il nome e le enormi dimensioni, lo squalo balena è un animale filtratore e si nutre soprattutto di piccoli organismi presenti nell'acqua."
    }

};


const curiosita = [

    "Gli squali esistono sulla Terra da più di 400 milioni di anni.",

    "Non tutti gli squali sono enormi: alcune specie sono abbastanza piccole da poter stare in una mano.",

    "Lo squalo balena è il pesce più grande conosciuto al mondo.",

    "Gli squali hanno un olfatto molto sviluppato e possono percepire sostanze presenti nell'acqua.",

    "Esistono centinaia di specie diverse di squali.",

    "La forma della testa dello squalo martello è una delle caratteristiche più riconoscibili tra gli squali."

];


function scopriSquali() {

    document.getElementById("squali").scrollIntoView({
        behavior: "smooth"
    });

}


function mostraInfo(tipo) {

    const shark = sharkInfo[tipo];

    document.getElementById("modalEmoji").textContent = shark.emoji;

    document.getElementById("modalTitle").textContent = shark.title;

    document.getElementById("modalText").textContent = shark.text;

    document.getElementById("infoModal").classList.add("active");

}


function chiudiInfo() {

    document.getElementById("infoModal").classList.remove("active");

}


function nuovaCuriosita() {

    const elemento = document.getElementById("fact");

    const numeroCasuale = Math.floor(
        Math.random() * curiosita.length
    );

    elemento.textContent = curiosita[numeroCasuale];

}


document.getElementById("infoModal").addEventListener("click", function(event) {

    if (event.target === this) {
        chiudiInfo();
    }

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        chiudiInfo();
    }

});
```
