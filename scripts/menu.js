function redirectToIntro(bgColor, madrePato, bodyColor, goBackBtn, btnColor, obstacles, eggsToRecover) {
    const encodedBgColor = encodeURIComponent(bgColor); // Codificamos el color porque el # no es bien interpretado en la barra de búsqueda. Luego lo decodificamos :)
    const encodedMadrePato = encodeURIComponent(madrePato);
    const encodedBodyColor = encodeURIComponent(bodyColor);
    const encodedGoBackBtn = encodeURIComponent(goBackBtn);
    const encodedBtnColor = encodeURIComponent(btnColor);
    const encodedObstacles = encodeURIComponent(obstacles);
    const encodedEggsToRecover = encodeURIComponent(eggsToRecover);
    window.location.href = `intro.html?bg-color=${encodedBgColor}&madre-pato=${encodedMadrePato}&body-color=${encodedBodyColor}&go-back-btn=${encodedGoBackBtn}&btn-color=${encodedBtnColor}&obstacles=${encodedObstacles}&eggs-to-recover=${encodedEggsToRecover}`;
}

const username = localStorage.getItem('username')
console.log(username)
