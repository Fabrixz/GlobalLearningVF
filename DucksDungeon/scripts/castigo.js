let clics = 0;
let tiempo = 10;
let intervalo;

document.addEventListener("DOMContentLoaded", function() {
    intervalo = setInterval(actualizarTiempo, 1000);
});

function contarClics() {
    if (clics < 160 && tiempo > 0) {
        clics++;
        document.getElementById('contadorClics').innerText = clics;
    }
}

function actualizarTiempo() {
    if (tiempo > 0) {
        tiempo--;
        document.getElementById('contadorTiempo').innerText = tiempo;
    } else {
        clearInterval(intervalo);
        if (clics < 160) {
            document.getElementById('susto').style.display = 'block';
            // Aquí puedes reiniciar el juego o hacer otra acción
        }
    }
}

