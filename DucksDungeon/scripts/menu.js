function redirectToIntro(bgColor, madrePato, bodyColor, goBackBtn, btnColor, obstacles) {
    const encodedBgColor = encodeURIComponent(bgColor); // Codificamos el color porque el # no es bien interpretado en la barra de búsqueda. Luego lo decodificamos :)
    const encodedMadrePato = encodeURIComponent(madrePato);
    const encodedBodyColor = encodeURIComponent(bodyColor);
    const encodedGoBackBtn = encodeURIComponent(goBackBtn);
    const encodedBtnColor = encodeURIComponent(btnColor);
    const encodedObstacles = encodeURIComponent(obstacles);
    window.location.href = `intro.html?bg-color=${encodedBgColor}&madre-pato=${encodedMadrePato}&body-color=${encodedBodyColor}&go-back-btn=${encodedGoBackBtn}&btn-color=${encodedBtnColor}&obstacles=${encodedObstacles}`;
}

const username = localStorage.getItem('username')
console.log(username)
