const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector(".buttons .play");
const stopBtn = document.querySelector(".buttons .stop");
const cursor = document.querySelector(".cursor img");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  window.addEventListener("click", () => {
    cursor.style.animation = "hit 0.1s ease";
    setTimeout(() => {
      cursor.style.removeProperty("animation");
    }, 100);
  });
});

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";

  let hole;
  let points = 0;

  const startGame = setInterval(() => {
    let arrayNo = Math.floor(Math.random() * 9);
    hole = holes[arrayNo];

    let image = document.createElement("img");
    image.setAttribute("src", "https://previews.dropbox.com/p/thumb/AA8m-hEZXJI_bVZ712hEmOsO0lr1Q-0YPNVQdM1bSv76OP1cyZs-T0VeigdLEezp7pjNl9jSdmUQhVoZdC_tkGvsP0QRH2Ru-IctZj_3O-URgAFasZqHeiLAQbHykAYYWEIIuYtecoLSKbxPx7KMUNplBM6Kp4rFqAF41IeQKG7wkNjaoF192bgyVaq2WUysHKSSr6UE4Y4JpSGXfFE3dg-2rs3XcAk7noO7BOYOd5fbX3E8zc7cLuJ5yGVbbkX6v7D--_63fghCjbgwKL_QzHk_G0v6J2l2F8k1OQ2ESQ72YJodx8Yv_u-ZiId-3VTWbYZLHDqpSE0Wh7GbmSrNZXAE4ZdExd-iHw-jMcJ3_wBaOg/p.png?fv_content=true&size_mode=5");
    image.setAttribute("class", "mole");
    hole.appendChild(image);

    setTimeout(() => {
      hole.removeChild(image);
    }, 200); // Cambia este valor para aumentar la frecuencia (por ejemplo, 200 ms)

  }, 300); // Cambia este valor para aumentar la frecuencia (por ejemplo, 300 ms)

  window.addEventListener("click", (e) => {
    if (e.target === hole) score.innerText = ++points;
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(startGame);
    stopBtn.style.display = "none";
    playBtn.style.display = "inline-block";
    score.innerText = 0;
  });
});
