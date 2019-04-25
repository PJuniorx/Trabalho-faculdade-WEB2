<?php
    include("config.php");

    if(isset($_POST['telaIncluir'])) {
        
		//Tabela Cadastro
        $nome=$_POST['nome'];
        $dtNasc=$_POST['dtNasc']; 
		$salario=$_POST['salario'];
		
		$queryCadastro = "INSERT INTO cadastro(Nome, Data_Nascimento, Salario) VALUES('$nome', '$dtNasc', '$salario')";
		
		mysqli_query($conn, $queryCadastro) or die(mysqli_error());
		
		echo "Cadastro Salvo";
	}
 ?>