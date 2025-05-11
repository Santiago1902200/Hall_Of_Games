<?php
require_once('../database/conexion.php');

$conexion = conectarBD(); // <-- aquí llamas la función

if ($conexion) {
    echo "✅ Conexión exitosa desde probar.php";
} else {
    echo "❌ Falló la conexión en probar.php";
}
?>
