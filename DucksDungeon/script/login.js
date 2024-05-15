document.getElementById('formularioLogin').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita el envío tradicional del formulario
    let nombre = document.getElementById('nombre').value;
    if(nombre) {
        alert('Hola ' + nombre + '!');
    }
});
document.getElementById('formularioLogin').addEventListener('submit', function(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if (nombre) {
        localStorage.setItem('nombreUsuario', nombre); // Guarda el nombre en localStorage
        alert('Hola ' + nombre + '!');
    }
});
// otraPagina.html
let nombreGuardado = localStorage.getItem('nombreUsuario');
if (nombreGuardado) {
    console.log('Nombre guardado: ' + nombreGuardado);
}
