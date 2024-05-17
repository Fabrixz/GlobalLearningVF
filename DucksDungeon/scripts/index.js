function redirectToMenu(event) {
    event.preventDefault();
    const username = document.getElementById('nameInput').value;
    if (username) {
        localStorage.setItem('username', username);
        window.location.href = 'menu.html';
    } else {
        alert("Necesitas ingresar tu nombre para poder continua.")
    }
}