const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");

function abrirMenu() {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
}

function fecharMenu() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
}

// abrir menu
if (menuToggle) {
  menuToggle.addEventListener("click", abrirMenu);
}

// fechar no X
if (closeMenu) {
  closeMenu.addEventListener("click", fecharMenu);
}

// fechar clicando fora
if (overlay) {
  overlay.addEventListener("click", fecharMenu);
}

document.querySelectorAll(".titulo-expansivel").forEach(titulo => {
  titulo.addEventListener("click", () => {
    const secao = titulo.parentElement;
    secao.classList.toggle("ativa");
  });
});