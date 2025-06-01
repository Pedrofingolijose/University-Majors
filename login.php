<?php
// Database connection
$conn = new mysqli("sql311.infinityfree.com", "if0_37845006", "hdUFuqkhYk95hj8", "if0_37845006_raymajor");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sanitize and validate inputs
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$password = $_POST['password'];

// Prepare the SQL query to select the user by email
$sql = "SELECT email, password FROM registration WHERE email = ?";

// Prepare and bind the statement
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);

// Execute the query
$stmt->execute();

// Store the result
$stmt->store_result();

// Check if the email exists
if ($stmt->num_rows > 0) {
    // Bind the result to variables
    $stmt->bind_result($db_email, $db_password);
    
    // Fetch the result
    $stmt->fetch();

    // Verify the password
    if (password_verify($password, $db_password)) {
        echo "Login successful!";
        // Redirect or further process user login here
    } else {
        echo "Incorrect password.";
    }
} else {
    echo "No account found with that email.";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
