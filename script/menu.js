document.addEventListener("DOMContentLoaded", function() {
    // Recuperar el nombre del localStorage y añadirlo al mensaje de bienvenida
    const nombre = localStorage.getItem('nombreUsuario');
    if (nombre) {
        document.getElementById('welcome').innerText += nombre;
    }
});

// Función para navegar a diferentes páginas HTML de casos
function navigate(url){
    window.location.href = url; 
}
