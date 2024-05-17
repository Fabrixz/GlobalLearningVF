// Definimos la funcion para los botones svg que retroceden
function goBack() {
    window.history.back();
}

// Esto toma atributos de datos personalizados del URL ya codificados (evita problemas entre carácteres
// especiales y la funcionalidad de la URL
document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);
    const encodedBgColor = urlParams.get('bg-color');
    const encodedMadrePato = urlParams.get('madre-pato');
    const encodedBodyColor = urlParams.get('body-color');
    const encodedGoBackBtn = urlParams.get('go-back-btn');
    const encodedBtnColor = urlParams.get('btn-color');

// Decodificamos los datos personalizados y los almacenamos en nuevas constantes.
    const bgColor = decodeURIComponent(encodedBgColor);
    const madrePato = "/" + decodeURIComponent(encodedMadrePato);
    const bodyColor = decodeURIComponent(encodedBodyColor);
    const goBackBtn = "/" + decodeURIComponent(encodedGoBackBtn);
    const btnColor = decodeURIComponent(encodedBtnColor);

    console.log("Madre pato svg path: ", madrePato);
    console.log("Container background color: ", bgColor);
    console.log("Body background color: ", bodyColor);
    console.log("Header background color: ", bodyColor);
    console.log("Go back button path: ", goBackBtn);
    console.log("Buttons color: ", btnColor);

    const containerElement = document.querySelector('.container');
    const imgElement = document.getElementById('egg');
    const bodyElement = document.querySelector('body');
    const headerIntro = document.querySelector('header');
    const goBackElement = document.getElementById('go-back');
    const btnElements = document.querySelectorAll('.info-button');

// Comprobamos si las constantes tienen asignado el elemento para luego setearles la propiedad deseada al dato personalizado.
    if (imgElement) {
        imgElement.src = madrePato;
    } else {
        console.error('No se ha encontrado al elemento con el id EGG');
    }

    if (containerElement) {
        containerElement.style.backgroundColor = bgColor;
    } else {
        console.error('No se ha encontrado el elemento con la clase .container');
    }

    if (bodyElement && headerIntro && goBackElement) {
        bodyElement.style.backgroundColor = bodyColor;
        headerIntro.style.backgroundColor = bodyColor;
        goBackElement.src = goBackBtn;
    } else {
        console.error('No se ha encontrado el elemento body')
    }

    if (btnElements) {
        btnElements.forEach(function(btnElement) {
            btnElement.style.backgroundColor = btnColor;
        })
    }

    // Agregando el nombre guardado en localStorage mediante elementos span en el html
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').textContent = username.toUpperCase();
    }

    // Enviar al usuario al game.html al clickear "EMPEZAR"
    const startGameElement = document.querySelector('h2.startGame');

    if (startGameElement) {
        startGameElement.addEventListener('click', () => {
            window.location.href = 'game.html';
        })
    }
});
