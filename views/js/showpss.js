function mostrarOcultarContrasena() {
    // Obtiene el elemento input de la contraseña por su id "contrasena"
    const inputContrasena = document.getElementById("contrasena");
    // Obtiene el ícono del ojo para cambiar su clase (mostrar u ocultar)
    const icono = document.getElementById("iconoOjo");
  
    // Verifica si el input está en modo oculto (tipo "password")
    const esOculta = inputContrasena.type === "password";
    // Cambia el tipo del input: si está oculto, lo muestra (type="text"), sino lo oculta (type="password")
    inputContrasena.type = esOculta ? "text" : "password";
    // Cambia la clase del ícono para reflejar el estado (ojo abierto o cerrado)
    icono.className = esOculta ? "bi bi-eye-slash" : "bi bi-eye";
}
