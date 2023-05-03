<?php
// include database connection file
include 'db_connect.php';

// function to retrieve data from database
function get_data() {
    global $conn;

    // SQL query to retrieve data
    $sql = "SELECT * FROM data";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    } else {
        return false;
    }
}

// check for API request
if(isset($_GET['api']) && $_GET['api'] == 'get_data') {
    $data = get_data();
    if($data) {
        header('Content-Type: application/json');
        echo json_encode($data);
    } else {
        header('HTTP/1.1 404 Not Found');
    }
}
?>