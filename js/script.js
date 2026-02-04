const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");

// abrir menu
menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

// fechar no X
closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// fechar clicando fora
overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});