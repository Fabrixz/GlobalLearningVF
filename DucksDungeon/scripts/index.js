function saveName() {
    const username = document.getElementById('nameInput').value;
    localStorage.setItem('username', username)
    console.log(localStorage.getItem('username'))
}
