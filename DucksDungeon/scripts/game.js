const urlParams = new URLSearchParams(window.location.search);
// Storing encoded params
const encodedDivColor = encodeURIComponent(urlParams.get('div-color'));
const encodedHeaderColor = encodeURI(urlParams.get('header-color'));
const encodedBtnColor = encodeURI(urlParams.get('btn-color'));

// Decoding and storing params
const divColor = decodeURIComponent(encodedDivColor);
const headerColor = decodeURIComponent(encodedHeaderColor);
const btnColor = decodeURIComponent(encodedBtnColor);
console.log(headerColor)
console.log(divColor)
console.log(btnColor)


// Selecting elements
const bodyElement = document.querySelector('body');
const headerElement = document.querySelector('header');
const containerElement = document.getElementById('container');
const buttonsElements = document.querySelectorAll('h2, .button-color')


document.addEventListener('DOMContentLoaded', () => {
    bodyElement.style.backgroundColor = headerColor;
    headerElement.style.backgroundColor = headerColor;
    containerElement.style.backgroundColor = divColor;
    buttonsElements.forEach(buttonElement => buttonElement.style.backgroundColor = btnColor)
})

const questions = [
    {
        question: "¿Cuál es el siguiente número de la secuencia:  2, 4, 8, 16, ...?",
        answers: [
            {text: "24", correct: false},
            {text: "20", correct: false},
            {text: "32", correct: true},
            {text: "64", correct: false}
        ]
    },
    {
        question: "¿Cuál es la adaptación más importante de los patos para nadar en el agua?",
        answers: [
            {text: "Pico plano", correct: false},
            {text: "Alas cortas", correct: false},
            {text: "Patas palmeadas", correct: true},
            {text: "Cuello lago", correct: false}
        ]
    },
    {
        question: "¿Cuál es la raza de pato más pequeña?",
        answers: [
            {text: "Pato Bantam", correct: true},
            {text: "Pato Criollo", correct: false},
            {text: "Pato Tepalcate", correct: false},
            {text: "Pato Mallard", correct: false}
        ]
    },
    {
        question: "¿Cuál es el nombre de la galaxia más cercana a la Vía Láctea?",
        answers: [
            {text: "Andrómeda", correct: true},
            {text: "Magallanes", correct: false},
            {text: "Enana del Can Mayor", correct: false},
            {text: "Enana Elíptica de Sagitario", correct: false}
        ]
    },
    {
        question: "¿Cuál es el continente con la mayor diversidad de ecosistemas?",
        answers: [
            {text: "África", correct: false},
            {text: "América del sur", correct: false},
            {text: "Asia", correct: false},
            {text: "Australia", correct: true}
        ]
    },
    {
        question: "¿Cuál es el nombre de la estrella más brillante del cielo nocturno?",
        answers: [
            {text: "Sirio", correct: true},
            {text: "Betelgeuse", correct: false},
            {text: "Canopus", correct: false},
            {text: "Rigel", correct: false}
        ]
    },
    {
        question: "¿Cuál es el país con la mayor extensión de bosques tropicales?",
        answers: [
            {text: "Brasil", correct: true},
            {text: "Indonesia", correct: false},
            {text: "Rusia", correct: false},
            {text: "Canadá", correct: false}
        ]
    },
    {
        question: "¿Cuál es el nombre del fenómeno que ocurre cuando la Tierra pasa entre el Sol y la Luna?",
        answers: [
            {text: "Solsticio", correct: false},
            {text: "Equinoccio", correct: false},
            {text: "Eclipse solar", correct: true},
            {text: "Eclipse lunar", correct: false}
        ]
    },
    {
        question: "¿Cuál es el principal tipo de alimento que consumen los patos en los lagos y lagunas?",
        answers: [
            {text: "Pequeños peces", correct: false},
            {text: "Insectos acuáticos", correct: false},
            {text: "Plantas acuáticas", correct: true},
            {text: "Frutas y semillas", correct: false}
        ]
    },
    {
        question: "¿Cuál es el siguiente número de la secuencia: 1, 3, 6, 10, 15, ...?",
        answers: [
            {text: "18", correct: false},
            {text: "21", correct: false},
            {text: "25", correct: false},
            {text: "28", correct: true}
        ]
    },
    {
        question: "¿Cuál es la principal función de la membrana nictitante en los ojos de los patos?",
        answers: [
            {text: "Mejorar la visión nocturna", correct: false},
            {text: "Proteger los ojos bajo el agua", correct: false},
            {text: "Detectar movimiento", correct: false},
            {text: "Todas las anteriores", correct: true}
        ]
    },
    {
        question: "¿Cuál es la unidad básica de procesamiento en una computadora actual?",
        answers: [
            {text: "Disco duro", correct: false},
            {text: "Memoria RAM", correct: false},
            {text: "Microprocesador", correct: true},
            {text: "Tarjeta gráfica", correct: false},
        ]
    },
    {
        question: "¿Cuál es el principio físico que permite el funcionamiento de los radares?",
        answers: [
            {text: "Efecto Doppler", correct: false},
            {text: "Reflexión de ondas", correct: true},
            {text: "Polarización de la luz", correct: false},
            {text: "Efecto túnel", correct: false},
        ]
    },
    {
        question: "¿Cuál es el principal factor que determina el valor de una moneda en el mercado de divisas?",
        answers: [
            {text: "Oferta y demanda", correct: true},
            {text: "Tasa de inflación", correct: false},
            {text: "Reservas de oro", correct: false},
            {text: "Paridad de poder adquisitivo", correct: false},
        ]
    },
    {
        question: "¿Cuál es la principal ventaja de los vehículos eléctricos en comparación con los de combustión interna?",
        answers: [
            {text: "Mayor potencia", correct: false},
            {text: "Menor costo de mantenimiento", correct: false},
            {text: "Cero emisiones contaminantes", correct: true},
            {text: "Autonomía más prolongada", correct: false},
        ]
    },
    {
        question: "¿Cuál es la principal limitación actual de las baterías de iones de litio utilizadas en dispositivos electrónicos?",
        answers: [
            {text: "Densidad de energía limitada", correct: true},
            {text: "Riesgo de explosión", correct: false},
            {text: "Tiempo de recarga prolongado", correct: false},
            {text: "Todas las anteriores", correct: true},
        ]
    },
    {
        question: "¿Cuál es la principal aplicación de la inteligencia artificial en la medicina del futuro?",
        answers: [
            {text: "Cirugía robótica", correct: false},
            {text: "Diagnóstico automatizado", correct: true},
            {text: "Generación de fármacos", correct: false},
            {text: "Monitoreo remoto de pacientes", correct: false},
        ]
    },
    {
        question: "¿Cuál es la principal característica que deberán tener los trabajos del futuro para ser relevantes a largo plazo?",
        answers: [
            {text: "Altamente especializados", correct: false},
            {text: "Complementarios a la tecnología", correct: true},
            {text: "Basados en habilidades manuales", correct: false},
            {text: "Con alta remuneración", correct: false},
        ]
    },
    {
        question: "¿Cuál es el nombre del proceso psicológico que permite a las personas procesar y dar significado a la información sensorial??",
        answers: [
            {text: "Percepción", correct: true},
            {text: "Atención", correct: false},
            {text: "Memoria", correct: false},
            {text: "Emoción", correct: false},
        ]
    },
    {
        question: "¿Cuál es el nombre del país más extenso del mundo?",
        answers: [
        {text: "Rusia", correct: true},
        {text: "Canadá", correct: false},
        {text: "China", correct: false},
        {text: "Brasil", correct: false}
        ]
    },
    {
        question: "¿Cuál es el nombre del proceso psicológico que permite a las personas reconocer y expresar emociones?",
        answers: [
        {text: "Percepción", correct: false},
        {text: "Aprendizaje", correct: false},
        {text: "Inteligencia emocional", correct: true},
        {text: "Memoria", correct: false}
        ]
    },
    {
        question: "¿Cuál es el nombre del proceso por el cual las células convierten nutrientes en energía utilizable?",
        answers: [
        {text: "Fotosíntesis", correct: false},
        {text: "Respiración celular", correct: true},
        {text: "Fermentación", correct: false},
        {text: "Digestión", correct: false}
        ]
    },
    {
        question: "¿Cuál es la principal función de la fotosíntesis en las plantas?",
        answers: [
        {text: "Producir dióxido de carbono", correct: false},
        {text: "Absorber agua", correct: false},
        {text: "Producir energía", correct: false},
        {text: "Sintetizar glucosa", correct: true}
        ]
    },
    {
        question: "¿Cuál es el nombre del proceso geológico que forma las montañas?",
        answers: [
        {text: "Erosión", correct: false},
        {text: "Vulcanismo", correct: false},
        {text: "Tectónica de placas", correct: true},
        {text: "Sedimentación", correct: false}
        ]
    },
    {
        question: "¿Cuál es el nombre del proceso por el cual los organismos desarrollan habilidades y conocimientos a lo largo de su vida?",
        answers: [
        {text: "Aprendizaje", correct: true},
        {text: "Evolución", correct: false},
        {text: "Cognición", correct: false},
        {text: "Neuroplasticidad", correct: false}
        ]
    },
    {
        question: "¿Cuál es el nombre del proceso psicológico que permite a las personas crear nuevas ideas y soluciones?",
        answers: [
        {text: "Pensamiento lateral", correct: true},
        {text: "Inteligencia lógico-matemática", correct: false},
        {text: "Memoria de trabajo", correct: false},
        {text: "Toma de decisiones", correct: false}
        ]
    },
    {
        question: "¿Cuál es la principal aplicación de la computación cuántica en el futuro?",
        answers: [
        {text: "Simulación de procesos químicos", correct: false},
        {text: "Criptografía avanzada", correct: true},
        {text: "Procesamiento de imágenes de alta resolución", correct: false},
        {text: "Desarrollo de inteligencia artificial superinteligente", correct: false}
        ]
    }
]


// questions.forEach(question => console.log(question.question))

// function getRandomQuestion() {
//     const randomIndex = Math.floor(Math.random() * questions.length);
//     return questions[randomIndex];
// }

// const randomQuestion = getRandomQuestion();
// console.log(randomQuestion.question);

// randomQuestion.answers.forEach(answer => {
//     console.log(answer.text);
// });