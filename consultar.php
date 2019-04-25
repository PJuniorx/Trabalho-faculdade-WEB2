<?php
	include("config.php");
	
	$data = array();
	
	if(isset($_POST['telaConsultar'])) {
		
		$query = "Select * FROM cadastro";
			
		$q = mysqli_query($conn, $query) or die(mysqli_error());
		
		if($q){
			while ($row=mysqli_fetch_object($q)){
				$data[] = $row;
			}
			echo json_encode($data);
		}
	}
?>