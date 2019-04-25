<?php
    header("Access-Control-Allow-Origin: *");
    $dbhost = 'localhost:3306';
    $dbuser = 'root';
    $dbpass = 'root';
    global $conn;
	
	try {
		$conn = new mysqli($dbhost, $dbuser, $dbpass, "trabalho");
		return $conn;
	} catch (Exception $e) {
		echo "Não foi possivel conectar-se ao banco de dados! " + $e->getMessage();
		return null;
	}
	
	function closeDatabase($conn) {
		try {
			mysqli_close($conn);
		} catch (Exception $e) {
			echo $e->getMessage();
		}
	}
?>