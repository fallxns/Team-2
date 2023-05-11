<?php
$servername = "localhost"; // replace with your server name
$username = "team2"; // replace with your MySQL username
$password = "Team02##"; // replace with your MySQL password
$dbname = "team2"; // replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>