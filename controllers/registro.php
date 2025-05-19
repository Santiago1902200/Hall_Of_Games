<?php
// Importa la función para conectar a la base de datos desde otro archivo
require_once '../database/conexion.php';

// Verifica si la solicitud se está haciendo mediante el método POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Comprueba si todos los campos necesarios están presentes en el formulario
    if (
        isset($_POST['email'], $_POST['nombre'], $_POST['usuario'], $_POST['contrasena'])
    ) {
        // Llama a la función para conectar con la base de datos
        $conexion = conectarBD();

        // Almacena los datos del formulario en variables
        $email = $_POST['email'];
        $nombre = $_POST['nombre'];
        $usuario = $_POST['usuario'];
        $contrasena = $_POST['contrasena'];

        // Encripta la contraseña usando el algoritmo BCRYPT
        $contrasena_hash = password_hash($contrasena, PASSWORD_BCRYPT);

        // Prepara la consulta SQL para insertar un nuevo usuario
        $sql = "INSERT INTO usuarios (email, nombre, usuario, contrasena) VALUES (?, ?, ?, ?)";
        $stmt = $conexion->prepare($sql);

        // Verifica si la preparación de la consulta fue exitosa
        if ($stmt) {
            // Asocia los parámetros a la consulta preparada
            $stmt->bind_param("ssss", $email, $nombre, $usuario, $contrasena_hash);

            // Ejecuta la consulta y muestra el resultado
            if ($stmt->execute()) {
                echo "¡Usuario registrado exitosamente!";
            } else {
                // Muestra un mensaje de error si la ejecución falla
                echo "Error al registrar: " . $stmt->error;
            }

            // Cierra la consulta preparada
            $stmt->close();
        } else {
            // Muestra un mensaje de error si la preparación falla
            echo "Error en la preparación de la consulta: " . $conexion->error;
        }

        // Cierra la conexión con la base de datos
        $conexion->close();
    } else {
        // Muestra un mensaje si faltan campos en el formulario
        echo "Faltan campos en el formulario.";
    }
} else {
    // Muestra un mensaje si el método de solicitud no es POST
    echo "Método de solicitud no válido.";
}
?>
