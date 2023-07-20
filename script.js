
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
});

// Código para guardar el usuario en una base de datos
function createUser(){
      
  let nombreForm = document.getElementById("name");
  let apellidoForm = document.getElementById("lastname");
  let correoForm = document.getElementById("email");
  let usernameForm = document.getElementById("username");
  let passwordForm = document.getElementById("password");
  let confirmPasswordForm = document.getElementById("confirmPassword");

  // Crear un objeto con los datos del formulario
  let singup ={
    nombre:nombreForm.value,
    apellido:apellidoForm.value,
    correo:correoForm.value,
    username:usernameForm.value,
    password:passwordForm.value,
    confirmPassword:confirmPasswordForm.value
  };

  console.log(singup);

  let url = "http://localhost:8000/api/usuario";
  let params = {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(singup),
  }
  
  //Creamos la patición a la API con metodo POST
  fetch(url,params).then((response) =>{

    console.log(response);
    console.log(response.json());

    if(response.status == 201){
        alert("Usuario creado exitosamente!!!");
        limpiarFormulario();
    }else{

        alert("Error al crear el usuario !!");

    }

  });

  return true;

}

function limpiarFormulario() {
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
}

document.getElementById("enviar").addEventListener("click", createUser);
document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("confirmPassword").addEventListener("input", validatePassword);
// Aquí puedes redirigir al usuario a otra página o realizar otras acciones necesarias