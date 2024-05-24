// timer
var timerInterval;

function lifeChecker(){
    const playedGameOne = localStorage.getItem("playedGameOne")
    const playedGameTwo = localStorage.getItem("playedGameTwo")
    if (!playedGameOne) {
        window.location.href = '/castigo.html'
        return
    }
    if (!playedGameTwo) {
        window.location.href = '/mole.html'
        //to do: redirigir al juego castigo 2
        return
    }
    //to do:redigirir a screamer luego a index
    window.open("GlobalLearningVF/pages/patitosLocos.html");
    window.location.href = '../index.html'
}
function startTimer() {
    var seconds = 70;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = seconds;
    const timerOverlay = document.getElementById('timer-overlay');

    timerInterval = setInterval(() => {
        seconds--;
        timerElement.textContent = seconds;
        if (seconds === 0) {
            clearInterval(timerInterval);
            timerOverlay.classList.remove('hidden');
            lifeChecker()
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(timerInterval);
}



// Funciones
const closeOverlay = () => document.getElementById('start-overlay').style.display = 'none';
const goBackToMenu = () => window.location.href = '/menu.html';

// Storing encoded params
const urlParams = new URLSearchParams(window.location.search);
const encodedDivColor = encodeURIComponent(urlParams.get('div-color'));
const encodedHeaderColor = encodeURI(urlParams.get('header-color'));
const encodedBtnColor = encodeURI(urlParams.get('btn-color'));


// Decoding and storing params
const divColor = decodeURIComponent(encodedDivColor);
const headerColor = decodeURIComponent(encodedHeaderColor);
const btnColor = decodeURIComponent(encodedBtnColor);



// Selecting elements
const bodyElement = document.querySelector('body');
const headerElement = document.querySelector('header');
const paragraphElement = document.querySelectorAll('p');
const containerElement = document.getElementById('container');
const h2ButtonsElements = document.querySelectorAll('h2, .button-color')
const closeOverlayButton = document.getElementById('close-overlay');
const buttonsElements = document.querySelectorAll('button');
const correctOverlay = document.getElementById('correct-overlay');
const wrongOverlay = document.getElementById('wrong-overlay');


// Ejecutando el siguiente código una vez cargue el contenido:
document.addEventListener('DOMContentLoaded', () => {
    bodyElement.style.backgroundColor = headerColor;
    headerElement.style.backgroundColor = headerColor;
    containerElement.style.backgroundColor = divColor;
    h2ButtonsElements.forEach(button => button.style.backgroundColor = btnColor);
    paragraphElement.forEach(paragraph => paragraph.style.backgroundColor = divColor);
    buttonsElements.forEach(button => button.style.backgroundColor = headerColor);

    closeOverlayButton.addEventListener('click', () => {
        startGame(); // Esto será startGame() y tendrá toda la lógica del juego.
        
    })
})

const questions = [
    {
        question: "¿Cuál es el siguiente número de la secuencia:  2, 4, 8, 16, ...?",
        answers: [
            {text: ["24", false]},
            {text: ["20", false]},
            {text: ["32", true]},
            {text: ["64", false]}
        ]
    },
    {
        question: "¿Cuál es la adaptación más importante de los patos para nadar en el agua?",
        answers: [
            {text: ["Pico plano", false]},
            {text: ["Alas cortas", false]},
            {text: ["Patas palmeadas", true]},
            {text: ["Cuello lago", false]}
        ]
    },
    {
        question: "¿Cuál es la raza de pato más pequeña?",
        answers: [
            {text: ["Pato Bantam", true]},
            {text: ["Pato Criollo", false]},
            {text: ["Pato Tepalcate", false]},
            {text: ["Pato Mallard", false]}
        ]
    },
    {
        question: "¿Cuál es el nombre de la galaxia más cercana a la Vía Láctea?",
        answers: [
            {text: ["Andrómeda", true]},
            {text: ["Magallanes", false]},
            {text: ["Enana del Can Mayor", false]},
            {text: ["Enana Elíptica de Sagitario", false]}
        ]
    },
    {
        question: "¿Cuál es el continente con la mayor diversidad de ecosistemas?",
        answers: [
            {text: ["África", false]},
            {text: ["América del sur", false]},
            {text: ["Asia", false]},
            {text: ["Australia", true]}
        ]
    },
    {
        question: "¿Cuál es el nombre de la estrella más brillante del cielo nocturno?",
        answers: [
            {text: ["Sirio", true]},
            {text: ["Betelgeuse", false]},
            {text: ["Canopus", false]},
            {text: ["Rigel", false]}
        ]
    },
    {
        question: "¿Cuál es el país con la mayor extensión de bosques tropicales?",
        answers: [
            {text: ["Brasil", true]},
            {text: ["Indonesia", false]},
            {text: ["Rusia", false]},
            {text: ["Canadá", false]}
        ]
    },
    {
        question: "¿Cuál es el nombre del fenómeno que ocurre cuando la Tierra pasa entre el Sol y la Luna?",
        answers: [
            {text: ["Solsticio", false]},
            {text: ["Equinoccio", false]},
            {text: ["Eclipse solar", true]},
            {text: ["Eclipse lunar", false]}
        ]
    },
    {
        question: "¿Cuál es el principal tipo de alimento que consumen los patos en los lagos y lagunas?",
        answers: [
            {text: ["Pequeños peces", false]},
            {text: ["Insectos acuáticos", false]},
            {text: ["Plantas acuáticas", true]},
            {text: ["Frutas y semillas", false]}
        ]
    },
    {
        question: "¿Cuál es el siguiente número de la secuencia: 1, 3, 6, 10, 15, ...?",
        answers: [
            {text: ["18", false]},
            {text: ["21", true]},
            {text: ["25", false]},
            {text: ["28", false]}
        ]
    },
    {
        question: "¿Cuál es la principal función de la membrana nictitante en los ojos de los patos?",
        answers: [
            {text: ["Mejorar la visión nocturna", false]},
            {text: ["Proteger los ojos bajo el agua", false]},
            {text: ["Detectar movimiento", false]},
            {text: ["Todas las anteriores", true]}
        ]
    },
    {
        question: "¿Cuál es la unidad básica de procesamiento en una computadora actual?",
        answers: [
            {text: ["Disco duro", false]},
            {text: ["Memoria RAM", false]},
            {text: ["Microprocesador", true]},
            {text: ["Tarjeta gráfica", false]},
        ]
    },
    {
        question: "¿Cuál es el principio físico que permite el funcionamiento de los radares?",
        answers: [
            {text: ["Efecto Doppler", false]},
            {text: ["Reflexión de ondas", true]},
            {text: ["Polarización de la luz", false]},
            {text: ["Efecto túnel", false]},
        ]
    },
    {
        question: "¿Cuál es el principal factor que determina el valor de una moneda en el mercado de divisas?",
        answers: [
            {text: ["Oferta y demanda", true]},
            {text: ["Tasa de inflación", false]},
            {text: ["Reservas de oro", false]},
            {text: ["Paridad de poder adquisitivo", false]},
        ]
    },
    {
        question: "¿Cuál es la principal ventaja de los vehículos eléctricos en comparación con los de combustión interna?",
        answers: [
            {text: ["Mayor potencia", false]},
            {text: ["Menor costo de mantenimiento", false]},
            {text: ["Cero emisiones contaminantes", true]},
            {text: ["Autonomía más prolongada", false]},
        ]
    },
    {
        question: "¿Cuál es la principal limitación actual de las baterías de iones de litio utilizadas en dispositivos electrónicos?",
        answers: [
            {text: ["Densidad de energía limitada", true]},
            {text: ["Riesgo de explosión", false]},
            {text: ["Tiempo de recarga prolongado", false]},
            {text: ["Todas las anteriores", true]},
        ]
    },
    {
        question: "¿Cuál es la principal aplicación de la inteligencia artificial en la medicina del futuro?",
        answers: [
            {text: ["Cirugía robótica", false]},
            {text: ["Diagnóstico automatizado", true]},
            {text: ["Generación de fármacos", false]},
            {text: ["Monitoreo remoto de pacientes", false]},
        ]
    },
    {
        question: "¿Cuál es la principal característica que deberán tener los trabajos del futuro para ser relevantes a largo plazo?",
        answers: [
            {text: ["Altamente especializados", false]},
            {text: ["Complementarios a la tecnología", true]},
            {text: ["Basados en habilidades manuales", false]},
            {text: ["Con alta remuneración", false]},
        ]
    },
    {
        question: "¿Qué científico propuso la teoría de la relatividad?",
        answers: [
        {text: ["Isaac Newton", false]},
        {text: ["Albert Einstein", true]},
        {text: ["Galileo Galilei", false]},
        {text: ["Nikola Tesla", false]}
        ]
        },
        {
        question: "¿Qué tipo de animal es un delfín?",
        answers: [
        {text: ["Pez", false]},
        {text: ["Mamífero", true]},
        {text: ["Reptil", false]},
        {text: ["Anfibio", false]}
        ]
        },
        {
        question: "¿Cuál es el órgano más grande del cuerpo humano?",
        answers: [
        {text: ["Hígado", false]},
        {text: ["Corazón", false]},
        {text: ["Pulmones", false]},
        {text: ["Piel", true]}
        ]
        },
        {
        question: "¿Qué elemento tiene el símbolo químico 'Fe'?",
        answers: [
        {text: ["Fósforo", false]},
        {text: ["Flúor", false]},
        {text: ["Hierro", true]},
        {text: ["Francio", false]}
        ]
        },
        {
        question: "¿Cuál es la velocidad de la luz?",
        answers: [
        {text: ["300,000 km/s", true]},
        {text: ["150,000 km/s", false]},
        {text: ["450,000 km/s", false]},
        {text: ["600,000 km/s", false]}
        ]
        },
        {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answers: [
        {text: ["Marte", false]},
        {text: ["Júpiter", true]},
        {text: ["Saturno", false]},
        {text: ["Neptuno", false]}
        ]
        },
        {
        question: "¿Cuál es el océano más grande del mundo?",
        answers: [
        {text: ["Atlántico", false]},
        {text: ["Índico", false]},
        {text: ["Ártico", false]},
        {text: ["Pacífico", true]}
        ]
        }
]

    
// Funcion para obtener una pregunta aleatoria
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const alreadyPickedQuestions = [];
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    if (alreadyPickedQuestions.includes(randomIndex)) {
        console.warn("this question has already been selected, therefore I getRandomInt(18) to the index. Good luck!");
        let newRandom = getRandomInt(18);
        alreadyPickedQuestions.push(newRandom);
        return questions[newRandom];
    } else {
        alreadyPickedQuestions.push(randomIndex);
        return questions[randomIndex];
    }
}

// Función para recuperar huevos
var recoveredEggs = localStorage.getItem("RecoveredEggs")|| 0;
const recoveredEggsElement = document.getElementById('recovered-eggs');
    recoveredEggsElement.textContent = recoveredEggs;
function recoverEgg() {
    recoveredEggs++;
    console.log(recoveredEggs);
    const recoveredEggsElement = document.getElementById('recovered-eggs');
    recoveredEggsElement.textContent = recoveredEggs;
    localStorage.setItem('RecoveredEggs', recoveredEggs)
}

// JUEGO LÓGICA

function nextQuestion() {
    correctOverlay.classList.add('hidden');
    startGame();
}

const obstaclesElement = document.getElementById('obstacleCountDecrease');
const obstacles = encodeURI(urlParams.get('obstacles'));
var obstacleCountDecrease = parseInt(obstacles, 10);

function startGame() {

    if (obstacleCountDecrease>0) {
        obstaclesElement.textContent = obstacleCountDecrease;
        console.log("The type of obstacles is: ", typeof obstacleCountDecrease);
        // Obtengo pregunta aleatoria y la guardo
        const randomQuestion = getRandomQuestion();
        // Se asignan las preguntas
        const questionElement = document.querySelector('.question');
        const randomQuestionAnswers = randomQuestion.answers;
        const optionContentElements = document.querySelectorAll('.optioncontent');
        const optionElements = document.querySelectorAll('.options');
        const [option1, option2, option3, option4] = optionContentElements;
        questionElement.textContent = randomQuestion.question;
        option1.textContent = randomQuestion.answers[0].text[0];
        option2.textContent = randomQuestion.answers[1].text[0];
        option3.textContent = randomQuestion.answers[2].text[0];
        option4.textContent = randomQuestion.answers[3].text[0];



        // creo lista con el valor de cada opcion
        var booleanList = []
        randomQuestion.answers.forEach((answers) => {
            booleanList.push(answers.text[1]);
            console.log(answers)
        })


        // Se inicia el contador
        startTimer();
        console.log(alreadyPickedQuestions)
        
        optionContentElements.forEach(option => {
            option.addEventListener('click', (event) => {
                const number = event.target.dataset.number;
                if (booleanList[number] === true) {
                    recoverEgg();
                    stopTimer();
                    obstacleCountDecrease--;
                    event.target.style.animation = 'green 1s ease forwards';
                    correctOverlay.classList.remove('hidden');
                    optionContentElements.forEach(option => {
                        const newOption = option.cloneNode(true);
                        option.parentNode.replaceChild(newOption, option);
                    });
                } else {
                    stopTimer();
                    event.target.style.backgroundColor = 'red';
                    wrongOverlay.classList.remove('hidden');
                    lifeChecker()
                }
            })
        })
    } else {
        obstaclesElement.textContent = obstacleCountDecrease;
        const EggsSpanElement = document.querySelector('.collected-eggs');
        const congratsElement = document.getElementById('congrats-overlay');
        EggsSpanElement.textContent = recoveredEggs;
        congratsElement.classList.remove('hidden');
        console.log(`FINALIZASTE!!! HUEVOS RECUPERADOS: ${recoveredEggs}`)
    }
    }




