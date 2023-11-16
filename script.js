/*MENÚ HAMBURGUESA*/

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener('click', () => {
  nav.classList.add("visible");
});


cerrar.addEventListener('click', () => {
  nav.classList.remove("visible");
});



/*FORMULARIO*/

document.getElementById('formulario-ingresantes').addEventListener('submit', function (event) {
  event.preventDefault();


  alert('Solicitud enviada con éxito. Nos pondremos en contacto contigo pronto :).');
});
