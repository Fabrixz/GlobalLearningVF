let clics = 0;
let tiempo = 3;
let intervalo;

document.addEventListener("DOMContentLoaded", function() {
    intervalo = setInterval(actualizarTiempo, 1000);
});

function contarClics() {
    if (clics < 100 && tiempo > 0) {
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
            window.open("../patitosLocos.html");
            window.location.href = '../../index.html'
        } else {
            window.location.href = '../menu.html'
        }
    }
}

localStorage.setItem("playedGameOne","true")


