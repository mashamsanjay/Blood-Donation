<?php
// Database configuration
$servername = "127.0.0.1";
$username = "root";
$password = "22J41A7340";
$dbname = "donor";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data
    $user = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $pass = htmlspecialchars($_POST['password']);

    // Hash the password
    $hashed_password = password_hash($pass, PASSWORD_DEFAULT);

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $user, $email, $hashed_password);

    // Execute the query
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
