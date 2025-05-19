<?php
// Incluye el archivo conexion.php que tiene la función para conectar a la base de datos
require_once('../database/conexion.php');

// Llama a la función conectarBD() definida en conexion.php y guarda el resultado (objeto conexión o false)
$conexion = conectarBD(); // <-- aquí llamas la función

// Verifica si la conexión fue exitosa
if ($conexion) {
    // Si la conexión es válida, muestra mensaje de éxito
    echo "✅ Conexión exitosa desde probar.php";
} else {
    // Si la conexión falla, muestra mensaje de error
    echo "❌ Falló la conexión en probar.php";
}
?>
