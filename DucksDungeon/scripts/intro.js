document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);
    const encodedBgColor = urlParams.get('bg-color');
    const encodedMadrePato = urlParams.get('madre-pato');
    const encodedBodyColor = urlParams.get('body-color');
    const encodedGoBackBtn = urlParams.get('go-back-btn');


    const bgColor = decodeURIComponent(encodedBgColor);
    const madrePato = "/" + decodeURIComponent(encodedMadrePato);
    const bodyColor = decodeURIComponent(encodedBodyColor);
    const goBackBtn = "/" + decodeURIComponent(encodedGoBackBtn);

    console.log("Madre pato svg path: ", madrePato);
    console.log("Container background color: ", bgColor);
    console.log("Body background color: ", bodyColor)
    console.log("Header background color: ", bodyColor)
    console.log("Go back button path: ", goBackBtn)

    

    const containerElement = document.querySelector('.container');
    const imgElement = document.getElementById('egg');
    const bodyElement = document.querySelector('body');
    const headerIntro = document.querySelector('header');
    const goBackElement = document.getElementById('go-back'); 

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
});