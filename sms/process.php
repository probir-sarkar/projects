<?php
include"conn.php";
$name = $_POST["name"];
$roll_no = $_POST["roll_no"];
$dept = $_POST["dept"];
    if(isset($_POST["save"])){
        $sql = "INSERT INTO `student_id`(`name`, `roll_no`,`dept`) 
        VALUES ('$name','$roll_no','$dept')";
    }
   
    if (mysqli_query($conn, $sql)) {
		header("Location: index.php");
	 } else {
		echo "Error: " . $sql . "
" . mysqli_error($conn);
	 }
	 mysqli_close($conn);

    ?>