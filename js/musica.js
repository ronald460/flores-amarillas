document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("backgroundMusic");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const stopBtn = document.getElementById("stopBtn");
  const volumeControl = document.getElementById("volume");
  const status = document.getElementById("status");
  const statusText = status.querySelector(".status-text");

  // Configurar el volumen inicial
  audio.volume = volumeControl.value;

  // Intentar reproducir automáticamente al cargar la página
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // Reproducción exitosa
        updateStatus("playing", "Reproduciendo");
      })
      .catch((error) => {
        // Reproducción automática prevenida
        updateStatus("stopped", "Haz clic en reproducir");
        console.log("La reproducción automática fue prevenida: ", error);
      });
  }

  // Controlar volumen
  volumeControl.addEventListener("input", function () {
    audio.volume = volumeControl.value;
  });

  // Botones de control
  playBtn.addEventListener("click", function () {
    audio.play();
    updateStatus("playing", "Reproduciendo");
  });

  pauseBtn.addEventListener("click", function () {
    audio.pause();
    updateStatus("paused", "En pausa");
  });

  stopBtn.addEventListener("click", function () {
    audio.pause();
    audio.currentTime = 0;
    updateStatus("stopped", "Detenido");
  });

  // Actualizar estado visual
  function updateStatus(state, text) {
    status.className = "status " + state;
    statusText.textContent = text;
  }
});
