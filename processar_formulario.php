<?php
// Conexão com o banco de dados
$servername = "localhost"; // Geralmente é localhost
$username = "MEDELLIN";
$password = "MEDELLIN24";
$dbname = "u657306771_formulario";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Capturar os dados do formulário
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Inserir os dados no banco
$sql = "INSERT INTO mensagens (nome, email, mensagem) VALUES ('$name', '$email', '$message')";
if ($conn->query($sql) === TRUE) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Fechar conexão
$conn->close();
?>
 error_reporting(E_ALL);
ini_set('display_errors', 1);
