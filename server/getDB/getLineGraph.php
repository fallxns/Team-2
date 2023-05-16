<?php
//db credentials
$servername = "34.105.142.231";
$username = "team2";
$password = "Team02##";
$database = "team2";

//connects to db
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn -> connect_error);
}

//sql query
$sql = "SELECT * FROM manHrsLineGraph";

$result = $conn->query($sql);
$graphArray = [];
$graphIDs = [];

//turns sql result into array
if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {

        if (!in_array($row["Date"], $graphIDs)) {
            array_push($graphArray, $row);
            array_push($graphIDs, $row["Date"]);
        }
    }
}

$conn->close();

//encodes array as json to use later
echo json_encode($graphArray);

?>
