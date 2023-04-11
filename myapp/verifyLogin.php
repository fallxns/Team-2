<?php
//login credentials
$lg_email = $_REQUEST["email"]; 
$lg_password = $_REQUEST["password"];

//db credentials
$servername = "35.246.43.223";
$username = "team2";
$password = "Team02##";
$database = "team2";

//connects to db
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn -> connect_error);
}

//sql query
$sql = "SELECT * FROM accounts";


$result = $conn->query($sql);
$found = false;

//turns sql result into array
if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {

        if ($row["email"] == $lg_email & $row["password"] == $lg_password) {
            $found = true;
        }
    }
}

$conn->close();

//send validation results
if($found == true){
    echo "Valid";
}

else{
    echo "Invalid";
}