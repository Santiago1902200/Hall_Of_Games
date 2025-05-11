<?php
require_once('../database/conexion.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['email'], $_POST['contrasena'])) {
        $conexion = conectarBD();

        $email = $_POST['email'];
        $contrasena = $_POST['contrasena'];

        $sql = "SELECT * FROM usuarios WHERE email = ?";
        $stmt = $conexion->prepare($sql);

        if ($stmt) {
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $resultado = $stmt->get_result();

            if ($resultado->num_rows === 1) {
                $usuario = $resultado->fetch_assoc();

                // Verificar contraseña
                if (password_verify($contrasena, $usuario['contrasena'])) {
                    echo "✅ Inicio de sesión exitoso. Bienvenido, " . htmlspecialchars($usuario['nombre']) . "!";
                    // Aquí podrías iniciar sesión con $_SESSION
                } else {
                    echo "❌ Contraseña incorrecta.";
                }
            } else {
                echo "❌ No se encontró un usuario con ese correo.";
            }

            $stmt->close();
        } else {
            echo "Error al preparar la consulta: " . $conexion->error;
        }

        $conexion->close();
    } else {
        echo "❌ Faltan datos en el formulario.";
    }
} else {
    echo "❌ Método de solicitud no válido.";
}
?>
