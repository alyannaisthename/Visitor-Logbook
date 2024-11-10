<?php
include 'db.php';

$name = $_POST['name'];
$date = $_POST['date'];
$timeIn = $_POST['timeIn'];
$place = $_POST['place'];
$purpose = $_POST['purpose'];

$sql = "INSERT INTO visitors (name, date, time_in, place, purpose) VALUES ('$name', '$date', '$timeIn', '$place', '$purpose')";

if ($conn->query($sql) === TRUE) {
    echo "New visitor added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
