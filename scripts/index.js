function redirectToMenu(event) {
    event.preventDefault();
    const username = document.getElementById('nameInput').value;
    if (username) {
        localStorage.setItem("RecoveredEggs", 0)
        localStorage.removeItem("playedGameOne")
        localStorage.removeItem("playedGameTwo")
        localStorage.setItem('username', username);
        window.location.href = '/pages/menu.html';
    } else {
        alert("Necesitas ingresar tu nombre para poder continua.")
    }
}