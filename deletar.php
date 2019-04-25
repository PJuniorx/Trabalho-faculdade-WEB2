<?php
    include("config.php");

    if(isset($_POST['telaDeletar'])) {
        $id=$_POST['id'];

        $queryCadastro = "DELETE FROM cadastro WHERE 'Codigo'='$id'";

        if ($conn->query($queryCadastro) === TRUE) {
            echo "Record deleted successfully";
        } else {
            echo "Error deleting record: " . $conn->error;
        }
       
    }
?>