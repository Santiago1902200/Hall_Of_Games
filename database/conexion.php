<?php 


// Función para establecer conexión con la base de datos
function conectarBD() {
    // Datos de conexión: servidor, usuario, contraseña y nombre de la base de datos
    $servidor = "sql311.infinityfree.com";
    $usuario = "if0_39025433";
    $password = "Hallofgames123";
    $bd = "if0_39025433_Hallofgames";

    // Se crea la conexión utilizando MySQLi
    $conexion = new mysqli($servidor, $usuario, $password, $bd);

    // Verifica si ocurrió un error al conectar
    if ($conexion->connect_error) {
        // Si hay un error, se detiene el script y se muestra el mensaje
        die("Error de conexión: " . $conexion->connect_error);
    }

    // Si todo va bien, se retorna la conexión lista para usar
    return $conexion;
}
?>

