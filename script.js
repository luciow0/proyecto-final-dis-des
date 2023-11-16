const menu = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener('click', () => {
  menu.classList.add("visible");
});


cerrar.addEventListener('click', () => {
  menu.classList.remove("visible");
});