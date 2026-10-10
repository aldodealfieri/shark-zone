// Array di curiosità sugli squali per il generatore interattivo
const sharkFacts = [
    "Gli squali esistono da più di 400 milioni di anni, il che significa che sono più antichi degli alberi e dei dinosauri!",
    "La maggior parte delle specie di squali deve nuotare continuamente per mantenere l'acqua in movimento sulle branchie e respirare.",
    "Gli squali hanno un senso dell'olfatto formidabile: possono rilevare una singola goccia di sangue in milioni di litri d'acqua.",
    "La pelle degli squali è ricoperta da minuscole scaglie chiamate dentelli dermici che riducono l'attrito con l'acqua, rendendoli nuotatori silenziosissimi.",
    "A differenza degli umani, gli squali cambiano continuamente i denti nel corso della loro vita: possono perderne e sostituirne decine di migliaia!",
    "Lo squalo balena ha più di 3.000 denti minuscoli, ma nessuno di essi viene usato per masticare il cibo."
];

// Selettori DOM
const factBtn = document.getElementById('fact-btn');
const factDisplay = document.getElementById('fact-display');
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('nav ul');
const navbar = document.getElementById('navbar');

// Funzione generatore di curiosità casuali con effetto dissolvenza
factBtn.addEventListener('click', () => {
    // Effetto fade-out
    factDisplay.style.opacity = '0';
    
    setTimeout(() => {
        // Estrai un indice casuale diverso dall'attuale o semplicemente randomico
        const randomIndex = Math.floor(Math.random() * sharkFacts.length);
        factDisplay.textContent = sharkFacts[randomIndex];
        // Effetto fade-in
        factDisplay.style.opacity = '1';
    }, 300);
});

// Menu a tendina per dispositivi mobili
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Effetto ombra/cambio stile navbar durante lo scroll della pagina
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
