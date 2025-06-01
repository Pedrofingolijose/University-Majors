<?php
// Database connection
$conn = new mysqli("sql311.infinityfree.com", "if0_37845006", "hdUFuqkhYk95hj8", "if0_37845006_raymajor");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sanitize and validate inputs
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
$password = $_POST['password'];

// Check if email or username already exists in the database
$email_check_query = "SELECT * FROM registration WHERE email = ?";
$username_check_query = "SELECT * FROM registration WHERE username = ?";

// Prepare and execute the email check
$stmt = $conn->prepare($email_check_query);
$stmt->bind_param("s", $email);
$stmt->execute();
$email_result = $stmt->get_result();

// Prepare and execute the username check
$stmt->close();
$stmt = $conn->prepare($username_check_query);
$stmt->bind_param("s", $username);
$stmt->execute();
$username_result = $stmt->get_result();

// If either email or username exists, show a message
if ($email_result->num_rows > 0) {
    echo "The email is already registered. Please enter a different email.";
} elseif ($username_result->num_rows > 0) {
    echo "The username is already taken. Please enter a different username.";
} else {
    // Hash the password before storing
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare and bind the insert query
    $insert_query = "INSERT INTO registration (email, username, password) VALUES (?, ?, ?)";
    $stmt->close();
    $stmt = $conn->prepare($insert_query);
    $stmt->bind_param("sss", $email, $username, $hashed_password);

    // Execute the query
    if ($stmt->execute()) {
        echo "Value inserted successfully!";
        // Display the button to redirect to another page after successful insertion
        echo '<br><br><form action="first.html" method="get">
                <button type="submit">Go to Your first Page</button>
              </form>';
    } else {
        echo "Insertion failed: " . $stmt->error;
    }
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>