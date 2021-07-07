<?php
include'conn.php';
$roll_no = $_GET['roll_no'];
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// sql to delete a record
$sql = "DELETE FROM student_id WHERE roll_no = $roll_no";

if (mysqli_query($conn, $sql)) {
  echo ("<script LANGUAGE='JavaScript'>
      window.alert('Succesfully Deleted Roll No - $roll_no');
      window.location.href='index.php';
      </script>");
} else {
  echo "Error deleting record: " . mysqli_error($conn);
}

mysqli_close($conn)
?>
