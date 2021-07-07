<!DOCTYPE html>
<html lang="en">
<head>
<style>
table, th, td {
    border: 1px solid black;
}
</style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form method="post" action="process.php">
    <label id="first"> Student name:</label><br/>
    <input type="text" name="name"><br/>

    <label id="first">Roll No</label><br/>
    <input type="number" name="roll_no"><br/>
        <label id="first">Depertment</label><br/>
    <input type="text" name="dept"><br/>

    <button type="submit" name="save">save</button>
    </form>
<?php
include"conn.php";
$sql = "SELECT * FROM `student_id`";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    echo "<table><tr><th>Name</th><th>Roll No</th><th>Depertment</th><th>Depertment</th></tr>";
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr><td>" . $row["name"]. "</td><td>" . $row["roll_no"]. "</td><td> " . $row["dept"]. "</td>"?> <td><a href="delete.php?roll_no=<?php echo $row['roll_no'] ?>">Delete</a></td><?php "</tr>";
    }
    echo "</table>";
} else {
  echo "0 results";
}

mysqli_close($conn);
?>

</body>
</html>
