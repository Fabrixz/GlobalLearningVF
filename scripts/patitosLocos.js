document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');

    video.pause();

    document.getElementById('EmpezarJuego').addEventListener('click', function() {
        document.getElementById('EmpezarJuego').classList.add('hidden');
        document.getElementById('background-video').classList.remove('hidden');
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }

        video.volume = 1.0;
        video.play();
    });
});