document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const openModalBtn = document.querySelector(".open-modal-btn");
  const floresContainer = document.getElementById("flores");

  // Crear flores decorativas
  for (let i = 0; i < 20; i++) {
    const flor = document.createElement("div");
    flor.classList.add("flor");
    flor.innerHTML = Math.random() > 0.5 ? "🌼" : "🌻";
    flor.style.left = Math.random() * 100 + "%";
    flor.style.top = Math.random() * 100 + "%";
    flor.style.fontSize = Math.random() * 20 + 16 + "px";
    flor.style.transform = `rotate(${Math.random() * 360}deg)`;
    floresContainer.appendChild(flor);
  }

  // Abrir modal automáticamente al cargar
  modal.classList.add("active");

  // Cerrar modal
  closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  // Abrir modal con botón
  openModalBtn.addEventListener("click", function () {
    modal.classList.add("active");
  });

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
