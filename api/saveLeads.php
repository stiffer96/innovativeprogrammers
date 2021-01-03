<?php
	
	$url = "localhost:3308";
	$user ="root";
	$pass = "";
	$dbname = "iprog";

	$full_name = $_POST['full_name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$code = 0;
	$result = "invalid data";
	


	$con = mysqli_connect($url,$user,$pass,$dbname);
	if($con){
		if(!empty($full_name) && !empty($phone) && !empty($email) && !empty($message)){
			$return = mysqli_query($con , "insert into leads(full_name,phone, email,message) values('".$full_name."','".$phone."','".$email."','".$message."')");

			if($return){
				$code = 1;
				$result = "Success";
				$data = array('code' =>$code,'result'=>$result );
				print(json_encode($data, JSON_PRETTY_PRINT));
			}
			else{
				$data = array('code' =>$code,'result'=> $result );
				print(json_encode($data, JSON_PRETTY_PRINT));
			}
			
		}
	}
	else {
		die("Unable to connect : ".mysqli_error());
	}


?>