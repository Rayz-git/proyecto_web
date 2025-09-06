// Capturar el formulario
const form = document.getElementById('formulario');

// pedidos del trabajo: Implementa una función que muestre en una alerta los datos ingresados
// en el formulario cuando se envíen. Agrega al menos un evento interactivo asociado al
// movimiento del mouse (como onclick. onmouseover, onmouseout, etc.).

// la funcion de alerta deberia ser el aviso de que el comentario es publicado.
// el evento de click debe ser para comentar

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
