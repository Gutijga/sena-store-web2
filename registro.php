<?php
// Conexión a la base de datos
$servername = "localhost"; // Servidor local
$username = "root"; // Nombre de usuario, cámbialo si es necesario
$password = ""; // Contraseña del usuario, cámbiala si es necesario
$dbname = "sena store web"; // Nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Encriptar la contraseña
    $password_encriptada = password_hash($password, PASSWORD_BCRYPT);

    // Insertar los datos en la tabla 'usuario'
    $sql = "INSERT INTO usuario (Nombre, Correo, Contraseña) VALUES ('$nombre', '$email', '$password_encriptada')";

    if ($conn->query($sql) === TRUE) {
        // Si el registro es exitoso, redirige con un mensaje de éxito
        echo "<script>
                alert('Registro exitoso');
                window.location.href = 'Iniciosesion.html'; // Cambia a la página que desees
              </script>";
    } else {
        // Si ocurre un error, redirige con un mensaje de error
        echo "<script>
                alert('No se pudo registrar');
                window.location.href = 'registro.html'; // Cambia a la página que desees
              </script>";
    }
}

// Cerrar la conexión
$conn->close();
?>
