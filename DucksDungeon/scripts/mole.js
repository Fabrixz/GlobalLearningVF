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
  setTimeout(()=>{
    if (score.innerText < 6) {
      window.open("screamer.yt/", "_blank");
      window.location.href = 'index.html'
  } else {
      window.location.href = 'menu.html'
  }
  },45000)
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";

  let hole;
  let points = 0;

  const startGame = setInterval(() => {
    let arrayNo = Math.floor(Math.random() * 9);
    hole = holes[arrayNo];

    let image = document.createElement("img");
    image.setAttribute("src", "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Worm-64.png");
    image.setAttribute("class", "mole");
    hole.appendChild(image);

    setTimeout(() => {
      hole.removeChild(image);
    }, 400); // Cambia este valor para aumentar la frecuencia (por ejemplo, 200 ms)

  }, 600); // Cambia este valor para aumentar la frecuencia (por ejemplo, 300 ms)

  window.addEventListener("click", (e) => {
    if (e.target === hole) score.innerText = ++points;
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(startGame);
    stopBtn.style.display = "none";
    playBtn.style.display = "inline-block"
    score.innerText = 0;
  });
});
localStorage.setItem("playedGameTwo","true")

