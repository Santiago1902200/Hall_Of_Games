<?php
require_once '../database/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validar existencia de datos esperados
    if (
        isset($_POST['email'], $_POST['nombre'], $_POST['usuario'], $_POST['contrasena'])
    ) {
        $conexion = conectarBD();

        $email = $_POST['email'];
        $nombre = $_POST['nombre'];
        $usuario = $_POST['usuario'];
        $contrasena = $_POST['contrasena'];

        // Hashear la contraseña
        $contrasena_hash = password_hash($contrasena, PASSWORD_BCRYPT);

        $sql = "INSERT INTO usuarios (email, nombre, usuario, contrasena) VALUES (?, ?, ?, ?)";
        $stmt = $conexion->prepare($sql);

        if ($stmt) {
            $stmt->bind_param("ssss", $email, $nombre, $usuario, $contrasena_hash);

            if ($stmt->execute()) {
                echo "¡Usuario registrado exitosamente!";
            } else {
                echo "Error al registrar: " . $stmt->error;
            }

            $stmt->close();
        } else {
            echo "Error en la preparación de la consulta: " . $conexion->error;
        }

        $conexion->close();
    } else {
        echo "Faltan campos en el formulario.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
