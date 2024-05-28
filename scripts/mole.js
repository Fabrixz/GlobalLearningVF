const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector(".buttons .play");
const stopBtn = document.querySelector(".buttons .stop");
const cursor = document.querySelector(".cursor img");


function startTimer() {
  var seconds = 20;
  const timerElement = document.getElementById('timer');
  timerElement.textContent = seconds;
  const timerOverlay = document.getElementById('timer-overlay');

  timerInterval = setInterval(() => {
      seconds--;
      timerElement.textContent = seconds;
      if (seconds === 0) {
          clearInterval(timerInterval);
          timerOverlay.classList.remove('hidden');
          lifeChecker()
      }
  }, 1000)
}

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
  startTimer();
  setTimeout(()=>{
    if (score.innerText < 6) {
      window.open("../patitosLocos.html");
      window.location.href = '../index.html'
  } else {
      window.location.href = 'menu.html'
  }
  },20000)
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




function goBackToMenu() {
  window.location.href = 'pages/patitosLocos.html'
}