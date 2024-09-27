<?php
// Iniciar sesión
session_start();

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sena store web";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $nombre_usuario = $_POST['nombre'];
    $nueva_contraseña = $_POST['password'];

    // Verificar si el usuario existe
    $sql = "SELECT * FROM usuario WHERE nombre = '$nombre_usuario'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // El usuario existe, proceder con el cambio de contraseña
        $nueva_contraseña_hash = password_hash($nueva_contraseña, PASSWORD_DEFAULT); // Hashear la nueva contraseña
        
        // Actualizar la contraseña en la base de datos
        $sql_update = "UPDATE usuario SET Contraseña = '$nueva_contraseña_hash' WHERE nombre = '$nombre_usuario'";
        
        if ($conn->query($sql_update) === TRUE) {
            echo "<script>
                    alert('Contraseña actualizada con éxito');
                    window.location.href = 'Iniciosesion.html'; // Redirigir al login después de actualizar la contraseña
                  </script>";
        } else {
            echo "<script>
                    alert('Error al actualizar la contraseña');
                    window.location.href = 'recuperarcontraseña.html'; // Redirigir a la página de recuperación si falla
                  </script>";
        }
    } else {
        // Si el usuario no existe, mostrar un error
        echo "<script>
                alert('Usuario no encontrado');
                window.location.href = 'registro.html'; // Redirigir a la página de recuperación
              </script>";
    }
}

// Cerrar la conexión
$conn->close();
?>
