<?php
$servername = "localhost:3308";
$username = "root";
$password = "";
$dbname = "teste";

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$nascimento = filter_input(INPUT_POST,'nascimento', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST,'email', FILTER_SANITIZE_STRING);
$telefone =filter_input(INPUT_POST,'telefone', FILTER_SANITIZE_STRING);
$regiao = filter_input(INPUT_POST,'regiao', FILTER_SANITIZE_STRING);
$unidade = filter_input(INPUT_POST,'unidade', FILTER_SANITIZE_STRING);

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}else{
    echo "Connected successfully";
}
$sql = "INSERT INTO `usuarios`(`nome`, `nascimento`, `email`, `telefone`, `regiao`, `unidade`) VALUES ('$nome','$nascimento','$email','$telefone','$regiao','$unidade')";

if (mysqli_query($conn, $sql)) {
    echo "Registro gravado com sucesso!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>