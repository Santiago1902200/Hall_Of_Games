function mostrarOcultarContrasena() {
    const inputContrasena = document.getElementById("contrasena");
    const icono = document.getElementById("iconoOjo");
  
    const esOculta = inputContrasena.type === "password";
    inputContrasena.type = esOculta ? "text" : "password";
    icono.className = esOculta ? "bi bi-eye-slash" : "bi bi-eye";
  }
  