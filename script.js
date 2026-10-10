// Dati dettagliati per la finestra Modal Popup
const sharkData = {
    bianco: {
        title: "Squalo Bianco (Carcharodon carcharias)",
        speed: "Fino a 56 km/h",
        size: "4.5 - 6 metri",
        diet: "Foche, leoni marini, pesci di grande taglia",
        status: "Vulnerabile (IUCN)",
        desc: "È il più grande pesce predatore del pianeta. Possiede circa 300 denti seghettati disposti su più file e un organo sensoriale chiamato Ampolle di Lorenzini capace di rilevare il battito cardiaco delle prede."
    },
    balena: {
        title: "Squalo Balena (Rhincodon typus)",
        speed: "Circa 5 km/h",
        size: "12 - 18 metri",
        diet: "Plancton, krill, piccoli pesci",
        status: "In Pericolo (IUCN)",
        desc: "Nonostante la mole colossale, è assolutamente innocuo per l'uomo. La disposizione dei puntini bianchi sulla sua pelle è unica per ogni esemplare, proprio come le nostre impronte digitali."
    },
    martello: {
        title: "Squalo Martello (Sphyrna lewini)",
        speed: "Circa 40 km/h",
        size: "3.5 - 6 metri",
        diet: "Razze, cefalopodi, crostacei",
        status: "In Pericolo Critico",
        desc: "La forma insolita del capo gli consente di avere un raggio visivo a 360 gradi verticale. Ama nuotare in grandi banchi durante le ore diurne attorno alle secche oceaniche."
    },
    barriera: {
        title: "Squalo Pinna Nera del Reef",
        speed: "Circa 30 km/h",
        size: "1.6 - 2 metri",
        diet: "Piccoli pesci di barriera, polpi",
        status: "Quasi Minacciato",
        desc: "Facilmente identificabile per il caratteristico apice nero della prima pinna dorsale. È tra gli squali più comuni nelle acque basse e limpide dell'Oceano Indiano e Pacifico."
    }
};

// Dati interattivi per la Mappa degli Habitat
const habitatInfo = {
    artico: {
        title: "❄️ Oceano Artico e Mari Freddi",
        text: "Acque gelide e profonde caratterizzate da temperature prossime allo zero. È l'habitat esclusivo del famosissimo e longevo Squalo della Groenlandia, capace di vivere per secoli."
    },
    atlantico: {
        title: "🌊 Oceano Atlantico",
        text: "Acque temperate e pelagiche aperte. È la zona d'elezione per il Grande Squalo Bianco e lo Squalo Mako, che sfruttano le forti correnti per spostarsi lungo le coste."
    },
    indiano: {
        title: "☀️ Oceano Indiano e Barriere Coralline",
        text: "Mari caldi, tropicali e lagune cristalline ricche di vita. Ospitano grandi popolazioni di squali di barriera (come il Pinna Nera) e passaggi di squali balena."
    },
    pacifico: {
        title: "🌀 Oceano Pacifico",
        text: "Il bacino oceanico più vasto del pianeta. Qui si concentrano i famosi banchi di squali martello attorno alle secche vulcaniche e una biodiversità marina straordinaria."
    }
};

function showHabitatInfo(zone) {
    const data = habitatInfo[zone];
    const box = document.getElementById('map-info-box');
    if(!data || !box) return;

    box.style.opacity = '0';
    setTimeout(() => {
        box.innerHTML = `<h3>${data.title}</h3><p>${data.text}</p>`;
        box.style.opacity = '1';
    }, 200);
}

// Lista ricca di curiosità sugli squali
const sharkFacts = [
    "Gli squali esistono da più di 400 milioni di anni, ovvero da prima che comparissero gli alberi sulla Terra!",
    "La maggior parte delle specie di squali deve nuotare continuamente per non affondare e far scorrere l'acqua nelle branchie.",
    "Gli squali possono avvertire una singola goccia di sangue disposta in milioni di litri d'acqua.",
    "La pelle degli squali è formata da microscopici dentelli dermici che riducono l'attrito con l'acqua, rendendoli silenziosissimi.",
    "Un singolo squalo può cambiare e sostituire fino a 30.000 denti nel corso di tutta la sua vita!",
    "Lo squalo della Groenlandia può vivere per oltre 400 anni, risultando il vertebrato più longevo del pianeta.",
    "Alcune specie di squali depongono le uova in particolari involucri protettivi chiamati 'borse delle mermaid'.",
    "Gli squali non hanno le ossa: il loro intero scheletro è composto da cartilagine flessibile e robusta.",
    "Lo squalo volpe usa la sua lunghissima pinna caudale come una frusta per stordire i banchi di pesci prima di mangiarli."
];

// Gestione Modal Popup
function openModal(key) {
    const data = sharkData[key];
    if(!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-body').innerHTML = `
        <p style="color:#555; margin-bottom:15px; line-height:1.6;">${data.desc}</p>
        <ul class="modal-info-list">
            <li><strong>Velocità max:</strong> <span>${data.speed}</span></li>
            <li><strong>Dimensioni:</strong> <span>${data.size}</span></li>
            <li><strong>Dieta:</strong> <span>${data.diet}</span></li>
            <li><strong>Stato di conservazione:</strong> <span>${data.status}</span></li>
        </ul>
    `;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(e) {
    if (e.target == document.getElementById('modal')) closeModal();
}

// Generatore Curiosità
const factBtn = document.getElementById('fact-btn');
const factDisplay = document.getElementById('fact-display');

factBtn.addEventListener('click', () => {
    factDisplay.style.opacity = '0';
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * sharkFacts.length);
        factDisplay.textContent = sharkFacts[randomIndex];
        factDisplay.style.opacity = '1';
    }, 300);
});

// Logica Quiz Interattivo
let quizAnswers = {};

function selectAnswer(step, choice) {
    quizAnswers[step] = choice;
    document.getElementById(`quiz-step-${step}`).classList.remove('active');
    
    if(step === 1) {
        document.getElementById('quiz-step-2').classList.add('active');
    } else if(step === 2) {
        document.getElementById('quiz-result').classList.add('active');
        calculateResult();
    }
}

function calculateResult() {
    const title = document.getElementById('result-title');
    const desc = document.getElementById('result-desc');

    if(quizAnswers[1] === 'sport' || quizAnswers[2] === 'speed') {
        title.textContent = "Sei un Grande Squalo Bianco! 🦈";
        desc.textContent = "Sei pieno di energia, determinato, competitivo e non passi mai inosservato!";
    } else if(quizAnswers[1] === 'relax' || quizAnswers[2] === 'calm') {
        title.textContent = "Sei uno Squalo Balena! 🐋";
        desc.textContent = "Sei pacifico, tranquillo, ami stare in compagnia e goderti la vita senza stress.";
    } else {
        title.textContent = "Sei uno Squalo Martello! 🔨";
        desc.textContent = "Sei una persona originale, curiosa, piena di risorse e con un punto di vista unico su tutto!";
    }
}

function resetQuiz() {
    document.getElementById('quiz-result').classList.remove('active');
    document.getElementById('quiz-step-1').classList.add('active');
    quizAnswers = {};
}

// Menu Mobile e Scroll Navbar
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('nav ul');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => navList.classList.toggle('active'));

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});
