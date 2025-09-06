// Capturar el formulario
const form = document.getElementById('formulario');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita recargar la página

  // Obtener valores
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Mostrar en alerta
  alert(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);
});

// Evento interactivo con el mouse
const titulo = document.querySelector("h1");
titulo.addEventListener("mouseover", () => {
  titulo.style.color = "blue";
});
titulo.addEventListener("mouseout", () => {
  titulo.style.color = "black";
});
