<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $company = $_POST["company"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "maniraj1893@gmail.com";
    $subject = "New MSG in Maniraj.Ca";
    $headers = "From: $email";

    $mailBody = "Name: $name\nEmail: $email\nCompany: $company\nMessage:\n$message";

    mail($to, $subject, $mailBody, $headers);
}
?>