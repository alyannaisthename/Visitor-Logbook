<?php
include 'db.php';

$id = $_POST['id'];
$name = $_POST['name'];
$date = $_POST['date'];
$timeIn = $_POST['timeIn'];
$place = $_POST['place'];
$purpose = $_POST['purpose'];

$sql = "UPDATE visitors SET name='$name', date='$date', time_in='$timeIn', place='$place', purpose='$purpose' WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Visitor updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>