<?php
//allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

//db credentials
$servername = "localhost";
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
$userArray = [];
$userIDs = [];

//turns sql result into array
if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {

        if (!in_array($row["id"], $userIDs)) {
            array_push($userArray, $row);
            array_push($userIDs, $row["id"]);
        }
    }
}

$conn->close();

//encodes array as json to use later
echo json_encode($userArray);

?>