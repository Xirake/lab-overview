<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $people = $_POST['people'];

    $conn = new mysqli("localhost", "root", "", "lab5"); 

    if ($conn->connect_error) {
        die('Connection failed: ' . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO booking (name, phone, date, time, people) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $phone, $date, $time, $people);
    
    if ($stmt->execute()) {
        echo "Бронювання успішне!";
    } else {
        echo "Помилка: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
