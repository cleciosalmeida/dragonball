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
            description: "Sanguíneo. Goku é alegre, sociável e espontâneo, sempre buscando se superar e fazer novos amigos, características que o fazem um exemplo claro do temperamento sanguíneo. Ele encara a vida com um entusiasmo genuíno, explorando o mundo com a curiosidade de uma criança e uma disposição vibrante para desafios. Goku nos inspira a abraçar a vida com otimismo e a ver cada obstáculo como uma oportunidade para aprender e crescer. Seu ponto forte é a energia contagiante e o espírito aventureiro, mas sua impulsividade pode levá-lo a situações perigosas que ele nem sempre percebe a tempo."
        },
        kuririn: {
            name: "Kuririn",
            img: "img/kuririn.jpg",
            description: "Fleumático. Kuririn é o amigo fiel e calmo que mantém a cabeça fria, mesmo nas batalhas mais tensas. Sua atitude ponderada e paciente faz dele um fleumático clássico, sempre pronto para oferecer apoio e uma perspectiva realista em meio aos problemas. Ele é o exemplo de alguém que valoriza a amizade e a paz, preferindo resolver as coisas de forma equilibrada e prática. Kuririn nos ensina que o verdadeiro valor de um amigo é estar presente, independentemente da situação. Seu ponto forte é a tranquilidade e o comprometimento com os amigos; o ponto fraco é a timidez e a dificuldade de acreditar plenamente em seu potencial."
        },
        bulma: {
            name: "Bulma",
            img: "img/bulma.jpg",
            description: "Sanguínea. Bulma, com sua natureza curiosa, extrovertida e cheia de ideias, representa o temperamento sanguíneo na sua essência. Sempre em busca de novas invenções e aventuras, ela é a criadora dinâmica que não se contenta com o que já conhece e está sempre pronta para explorar o desconhecido. Sua disposição para experimentar e sua confiança fazem dela uma líder natural em momentos de inovação e mudanças. O ponto forte de Bulma é sua criatividade e entusiasmo em transformar obstáculos em oportunidades; o ponto fraco é a tendência a agir impulsivamente, o que às vezes leva a pequenos desastres."
        },
        kame: {
            name: "Mestre Kame",
            img: "img/kame.jpg",
            description: "Fleumático. Mestre Kame é calmo, observador e equilibrado, mantendo a serenidade mesmo nas situações mais intensas. Como fleumático, ele reflete sobre as coisas antes de agir e é movido mais pela sabedoria e paciência do que pela pressa. Ele nos inspira a cultivar a calma interior e a valorizar o aprendizado que vem com o tempo. Seu ponto forte é sua paciência e capacidade de análise, sempre oferecendo conselhos sábios. O ponto fraco, no entanto, é que, em sua tranquilidade, ele às vezes hesita em tomar a frente, deixando de agir em momentos de urgência."
        },
        karin: {
            name: "Mestre Karin",
            img: "img/karin.jpg",
            description: "Fleumático. Mestre Karin exibe uma tranquilidade quase espiritual, valorizando o equilíbrio e a paz em todas as suas ações. Seu temperamento fleumático o torna um mentor sábio e paciente, que nos ensina a importância da resiliência e da autoconsciência. Com calma e compaixão, ele ajuda os heróis a alcançar seus objetivos, mostrando que a verdadeira força vem da serenidade. Seu ponto forte é a paciência e a habilidade de guiar os outros sem pressa; no entanto, sua reserva e tranquilidade excessiva podem limitar sua interação e iniciativa."
        },
        tenshinhan: {
            name: "Tenshinhan",
            img: "img/tenshinhan.jpg",
            description: "Melancólico. Tenshinhan é introspectivo, disciplinado e sério, características que o definem como um melancólico. Ele vive em constante busca pelo aprimoramento e pela perfeição, o que faz dele um lutador disciplinado e focado. Seu senso de dever e autoconhecimento é uma fonte de inspiração, lembrando-nos da importância da disciplina e da persistência em nossos próprios caminhos. O ponto forte de Tenshinhan é sua determinação inabalável e foco; no entanto, sua autocrítica rigorosa às vezes o afasta dos outros e o torna excessivamente duro consigo mesmo."
        },
        chaos: {
            name: "Chaos",
            img: "img/chaos.jpg",
            description: "Fleumático. Chaos é gentil, calmo e sempre disposto a ajudar os amigos, exemplificando o temperamento fleumático em sua bondade e paciência. Ele prefere atuar de forma discreta, apoiando principalmente seu melhor amigo Tenshinhan, mostrando que a verdadeira força está na lealdade e no suporte silencioso. A dedicação de Chaos nos ensina que a amizade é uma força poderosa que sustenta e inspira. Seu ponto forte é a resiliência e lealdade, que são inabaláveis; seu ponto fraco é a reserva e passividade, o que às vezes o faz hesitar em tomar uma postura mais ativa."
        },
        yamcha: {
            name: "Yamcha",
            img: "img/yamcha.jpg",
            description: "Sanguíneo. Yamcha é extrovertido e cheio de energia, sempre em busca de aventura e novas amizades. Como um verdadeiro sanguíneo, ele é carismático e tem facilidade em se conectar com as pessoas, sendo muitas vezes o primeiro a tentar algo novo. Sua confiança e coragem nos incentivam a enfrentar nossos próprios medos e a aproveitar as oportunidades que surgem pelo caminho. O ponto forte de Yamcha é o carisma e a disposição para encarar desafios com coragem; seu ponto fraco é a insegurança que ele tenta mascarar, o que o faz hesitar em momentos cruciais."
        },
        uranai: {
            name: "Vovó Uranai",
            img: "img/uranai.jpg",
            description: "Vovó Uranai é astuta, intuitiva e reservada, características típicas do temperamento melancólico. Ela observa as situações com calma e profundidade, oferecendo orientações estratégicas e sábias aos heróis. Sua introspecção a torna uma fonte de sabedoria e insight, nos lembrando de que a análise e a reflexão são essenciais para a tomada de decisões. O ponto forte de Vovó Uranai é sua capacidade de análise e entendimento profundo das pessoas e situações; seu ponto fraco é a tendência ao isolamento, que pode limitar suas interações e seu impacto direto."
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
