<?php
	
	$url = "localhost:3308";
	$user ="root";
	$pass = "";
	$dbname = "iprog";

	$code = 0;
	$count = 0;
	$result = "invalid data";

$con = mysqli_connect($url,$user,$pass,$dbname);
	if($con){
		$return = mysqli_query($con, "select * from leads order by created desc");
		$return_1 = mysqli_query($con, "select count(phone) as count from leads");
		if($return_1){
			while ($row = mysqli_fetch_assoc($return_1)) {
				$count = $row['count'];
			}
		}
		if($return){
			$code = 1;
			while ($row = mysqli_fetch_assoc($return)) {
				$output[] = $row;
			}
			$data = array('code' => $code,'count' => $count ,'result' => $output );
			print(json_encode($data,JSON_PRETTY_PRINT));
		}
		else{
			$data = array('code' => $code,'result' => $resutl );
			print(json_encode($data,JSON_PRETTY_PRINT));
		}

	}
	else {
		die("Unable to connect : ".mysqli_error());
	}


?>