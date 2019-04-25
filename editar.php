<?php
    include("config.php");

    if(isset($_POST['editar'])) {
        $id=$_POST['id'];
        $nome=$_POST['nome'];
        $dtNasc=$_POST['dtNasc'];
		$salario=$_POST['salario'];
        
        $q=mysqli_query($conn,"UPDATE 'cadastro' SET 'Nome'='$nome','Data_Nascimento'='$dtNasc','Salario'='$salario' where 'id'='$id'");
        
        if($q) {
            echo "success";
        } else {
            echo "error";
        }
    }
?>