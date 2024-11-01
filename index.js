// index.js
function showCharacterDetails() {
    const characterSelect = document.getElementById("characterSelect").value;
    const characterImage = document.getElementById("characterImage");
    const characterName = document.getElementById("characterName");
    const characterDescription = document.getElementById("characterDescription");

    // Dados dos personagens
    const characters = {
        goku: {
            name: "Goku",
            img: "img/goku.jpg",
            description: "Goku é a personificação da alegria e do entusiasmo. Ele tem uma curiosidade insaciável por conhecer o mundo, descobrir novos oponentes e ultrapassar seus próprios limites..."
        },
        kuririn: {
            name: "Kuririn",
            img: "img/kuririn.jpg",
            description: "Kuririn é o amigo leal e calmo, típico de um fleumático. Ele não busca o protagonismo, mas está sempre presente para apoiar seus amigos quando mais precisam..."
        },
        bulma: {
            name: "Bulma",
            img: "img/bulma.jpg",
            description: "Bulma é o retrato perfeito de uma sanguínea — inteligente, extrovertida e sempre com ideias inovadoras. Ela adora estar rodeada de amigos e se destaca com sua criatividade..."
        },
        kame: {
            name: "Mestre Kame",
            img: "img/kame.jpg",
            description: "Mestre Kame é o clássico fleumático — tranquilo, sábio e com uma serenidade que raramente se abala..."
        },
        karin: {
            name: "Karin",
            img: "img/karin.jpg",
            description: "Mestre Karin, com seu temperamento calmo e sábio, exemplifica o fleumático..."
        },
        tenshinhan: {
            name: "Tenshinhan",
            img: "img/tenshinhan.jpg",
            description: "Tenshinhan carrega a seriedade e a introspecção de um melancólico. Ele é focado, disciplinado e perfeccionista..."
        },
        chaos: {
            name: "Chaos",
            img: "img/chaos.jpg",
            description: "Chaos, com seu temperamento fleumático, é um personagem calmo, leal e reservado..."
        },
        yamcha: {
            name: "Yamcha",
            img: "img/yamcha.jpg",
            description: "O sempre animado Yamcha, com seu charme natural e jeito descontraído, é o típico sanguíneo..."
        },
        uranai: {
            name: "Vovó Uranai",
            img: "img/uranai.jpg",
            description: "Vovó Uranai, com seu temperamento melancólico, é uma figura reservada e analítica, focada em sua habilidade de prever o futuro..."
        }
    };

    if (characterSelect && characters[characterSelect]) {
        characterImage.src = characters[characterSelect].img;
        characterName.textContent = characters[characterSelect].name;
        characterDescription.textContent = characters[characterSelect].description;
    } else {
        characterImage.src = "";
        characterName.textContent = "";
        characterDescription.textContent = "";
    }
}
