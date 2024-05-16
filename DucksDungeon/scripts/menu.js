function redirectToIntro(bgColor, madrePato, bodyColor, goBackBtn) {
    const encodedBgColor = encodeURIComponent(bgColor); // Codificamos el color porque el # no es bien interpretado en la barra de búsqueda. Luego lo decodificamos :)
    const encodedMadrePato = encodeURIComponent(madrePato);
    const encodedBodyColor = encodeURIComponent(bodyColor);
    const encodedGoBackBtn = encodeURIComponent(goBackBtn);
    window.location.href = `intro.html?bg-color=${encodedBgColor}&madre-pato=${encodedMadrePato}&body-color=${encodedBodyColor}&go-back-btn=${encodedGoBackBtn}`;
}