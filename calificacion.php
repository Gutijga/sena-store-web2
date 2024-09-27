<?php
// Configuración de la conexión
$servername = "localhost";
$username = "root";
$password = "";
$database = "sena store web";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos del formulario
    $calificacion = isset($_POST['stars']) ? intval($_POST['stars']) : 0;
    $comentario = isset($_POST['comments-star']) ? $_POST['comments-star'] : '';

    // Validar que se haya seleccionado una calificación
    if ($calificacion > 0) {
        // Preparar la consulta SQL para insertar los datos
        $stmt = $conn->prepare("INSERT INTO calificacion (Calificacion, Comentario) VALUES (?, ?)");
        $stmt->bind_param("is", $calificacion, $comentario);

        // Ejecutar la consulta
        if ($stmt->execute()) {
            echo "<script>
                    alert('se a enviado exitosamente');
                    window.location.href = 'index.html'; // Cambia a la página de inicio
                  </script>";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Cerrar la declaración
        $stmt->close();
    } else {
        echo "Por favor selecciona una calificación.";
    }

    // Cerrar la conexión
    $conn->close();
}
?>
