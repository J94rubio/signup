
document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("confirmPassword").addEventListener("input", validatePassword);

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const confirmacionInput = document.getElementById("confirmPassword");
  const message = document.getElementById("message");

  const password = passwordInput.value;
  const confirmacion = confirmacionInput.value;

  if (password === confirmacion) {
    message.style.color = 'green';
    message.textContent = 'Las contraseñas coinciden';
  } else {
    message.style.color = 'red';
    message.textContent = 'Las contraseñas no coinciden';
  }
}

document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const passwordInput = document.getElementById("password");
  const confirmacionInput = document.getElementById("confirmPassword");
  const message = document.getElementById("message");

  const password = passwordInput.value;
  const confirmacion = confirmacionInput.value;

  if (password === confirmacion) {
    alert("Usuario creado exitosamente.");
  } else {
    alert("¡Error al crear usuario!");
  }

  // Código para guardar el usuario en una base de datos o realizar una solicitud al servidor

  // Aquí puedes redirigir al usuario a otra página o realizar otras acciones necesarias
});