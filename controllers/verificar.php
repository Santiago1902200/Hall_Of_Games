<?php
// Incluye el archivo de conexión a la base de datos
require_once('../database/conexion.php');

// Verifica que la solicitud sea del tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Comprueba si se enviaron los campos email y contraseña
    if (isset($_POST['email'], $_POST['contrasena'])) {
        
        // Establece la conexión con la base de datos
        $conexion = conectarBD();

        // Captura los datos del formulario
        $email = $_POST['email'];
        $contrasena = $_POST['contrasena'];

        // Prepara la consulta para buscar al usuario por su correo
        $sql = "SELECT * FROM usuarios WHERE email = ?";
        $stmt = $conexion->prepare($sql);

        if ($stmt) {
            // Asigna el parámetro a la consulta
            $stmt->bind_param("s", $email);
            $stmt->execute();

            // Obtiene el resultado de la consulta
            $resultado = $stmt->get_result();

            // Verifica si existe un usuario con ese correo
            if ($resultado->num_rows === 1) {
                $usuario = $resultado->fetch_assoc();

                // Compara la contraseña ingresada con la almacenada (hasheada)
                if (password_verify($contrasena, $usuario['contrasena'])) {
                    echo "✅ Inicio de sesión exitoso. Bienvenido, " . htmlspecialchars($usuario['nombre']) . "!";
                    // Aquí podrías iniciar la sesión con $_SESSION, si se desea
                } else {
                    // Mensaje si la contraseña no coincide
                    echo "❌ Contraseña incorrecta.";
                }
            } else {
                // Mensaje si no se encuentra el usuario
                echo "❌ No se encontró un usuario con ese correo.";
            }

            // Cierra la consulta preparada
            $stmt->close();
        } else {
            // Error si falla la preparación de la consulta
            echo "Error al preparar la consulta: " . $conexion->error;
        }

        // Cierra la conexión con la base de datos
        $conexion->close();
    } else {
        // Mensaje si faltan campos en el formulario
        echo "❌ Faltan datos en el formulario.";
    }
} else {
    // Mensaje si no se hace la solicitud con método POST
    echo "❌ Método de solicitud no válido.";
}
?>
