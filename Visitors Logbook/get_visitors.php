<?php
include 'db.php';

$sql = "SELECT * FROM visitors";
$result = $conn->query($sql);

$visitors = array();
while($row = $result->fetch_assoc()) {
    $visitors[] = $row;
}

echo json_encode($visitors);

$conn->close();
?>