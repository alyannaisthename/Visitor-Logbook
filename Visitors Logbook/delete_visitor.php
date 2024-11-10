<?php
include 'db.php';

$id = $_POST['id'];

$sql = "DELETE FROM visitors WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Visitor deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>