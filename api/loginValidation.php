<?php
	
	$url = "localhost:3308";
	$user ="root";
	$pass = "";
	$dbname = "iprog";

	$code = 0;
	$result = "invalid data";

	$username = $_POST['username'];
	$password = $_POST['password'];
	//$output = array();


$con = mysqli_connect($url,$user,$pass,$dbname);
	if($con){
			$query = "select * from user where username = '".$username."'  and password = '".$password."' ";
			
		$return = mysqli_query($con, "select * from user where username = '".$username."'  and password = '".$password."' ");
		if(mysqli_num_rows($return) == 0){
			
			$data = array('code' =>$code ,'result' => $result );
			print(json_encode($data, JSON_PRETTY_PRINT));
		
			
			
		}
		else{
			$code = 1;
			while($row = mysqli_fetch_assoc($return)){
				$output[] = $row;
			}
			$data = array('code' =>$code ,'result' => $output );
			print(json_encode($data, JSON_PRETTY_PRINT));
		}
		
	}
	else {
		die("Unable to connect : ".mysqli_error());
	}


?>	