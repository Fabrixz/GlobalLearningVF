document.addEventListener('DOMContentLoaded', () => {
    // Obtener el parámetro de color de fondo de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const bgColor = urlParams.get('bg-color');

    // Seleccionar el elemento con la clase .container
    const containerElement = document.querySelector('.container');

    // Aplicar el color de fondo al elemento .container
    if (containerElement) {
        containerElement.style.backgroundColor = bgColor;
    } else {
        console.error('No se encontró el elemento con la clase .container');
    }
});