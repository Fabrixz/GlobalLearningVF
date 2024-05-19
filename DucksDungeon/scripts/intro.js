// Definimos la funcion para los botones svg que retroceden
function goBack() {
    window.history.back();
}

// Almacenamos los datos personalizados de los atributos extrayéndolos del URL.
const urlParams = new URLSearchParams(window.location.search);
const encodedBgColor = urlParams.get('bg-color');
const encodedMadrePato = urlParams.get('madre-pato');
const encodedBodyColor = urlParams.get('body-color');
const encodedGoBackBtn = urlParams.get('go-back-btn');
const encodedBtnColor = urlParams.get('btn-color');
const encodedObstacles = urlParams.get('obstacles');

document.addEventListener('DOMContentLoaded', () => {
// Decodificamos los datos personalizados y los almacenamos.
    const bgColor = decodeURIComponent(encodedBgColor);
    const madrePato = "/" + decodeURIComponent(encodedMadrePato);
    const bodyColor = decodeURIComponent(encodedBodyColor);
    const goBackBtn = "/" + decodeURIComponent(encodedGoBackBtn);
    const btnColor = decodeURIComponent(encodedBtnColor);
    const obstacles = decodeURIComponent(encodedObstacles);

// Seleccionamos elementos
    const containerElement = document.querySelector('.container');
    const imgElement = document.getElementById('egg');
    const bodyElement = document.querySelector('body');
    const headerIntro = document.querySelector('header');
    const goBackElement = document.getElementById('go-back');
    const btnElements = document.querySelectorAll('.info-button');
    const obstacleCounter = document.getElementById('obstacles');

// Asignando datos personalizados.
    imgElement.src = madrePato;
    containerElement.style.backgroundColor = bgColor;
    bodyElement.style.backgroundColor = bodyColor;
    headerIntro.style.backgroundColor = bodyColor;
    goBackElement.src = goBackBtn;
    obstacleCounter.textContent = Number(obstacles);
    btnElements.forEach(btnElement => btnElement.style.backgroundColor = btnColor)
    
// Agregando el nombre guardado en localStorage mediante elementos span en el html
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').textContent = username.toUpperCase();
    }


// Enviar al usuario al game.html al clickear "EMPEZAR"
    const startGameElement = document.querySelector('h2.startGame');
    if (startGameElement) {
        startGameElement.addEventListener('click', () => {
            const divColor = encodeURIComponent(bgColor)
            const headerColor = encodeURIComponent(bodyColor)
            const btnGame = encodeURIComponent(btnColor)
            const obstaclesNum = encodeURIComponent(obstacles)
            window.location.href = `game.html?&div-color=${divColor}&header-color=${headerColor}&btn-color=${btnGame}&obstacles=${obstaclesNum}`;
        })
    }

});
