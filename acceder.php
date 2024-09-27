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
    $password_usuario = $_POST['password'];

    // Consulta SQL para buscar al usuario por el nombre
    $sql = "SELECT * FROM usuario WHERE Nombre = '$nombre_usuario'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // El usuario existe, verificar la contraseña
        $row = $result->fetch_assoc();
        
        // Verificar si la contraseña ingresada coincide con la de la base de datos
        if (password_verify($password_usuario, $row['Contraseña'])) {
            // Si la contraseña es correcta, iniciar la sesión y redirigir
            $_SESSION['usuario'] = $row['Nombre']; // Guarda el nombre de usuario en la sesión
            echo "<script>
                    alert('Inicio de sesión exitoso');
                    window.location.href = 'carrito.html'; // Cambia a la página de inicio
                  </script>";
        } else {
            // Si la contraseña es incorrecta, mostrar un error
            echo "<script>
                    alert('Contraseña incorrecta');
                    window.location.href = 'Iniciosesion.html'; // Cambia a la página de login
                  </script>";
        }
    } else {
        // Si el usuario no existe, mostrar un error
        echo "<script>
                alert('Usuario no encontrado');
                window.location.href = 'Iniciosesion.html'; // Cambia a la página de login
              </script>";
    }
}

// Cerrar la conexión
$conn->close();
?>
