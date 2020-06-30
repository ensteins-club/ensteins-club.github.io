<?php

if(isset($_POST['submit'])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];


    $EmailTo = "club_scientifique@enst.dz";
    $Title = "New Message Received";

// prepare email body text
    $Fields .= "Name: ";
    $Fields .= $name;
    $Fields .= "\n";

    $Fields .= "Email: ";
    $Fields .= $email;
    $Fields .= "\n";

    $Fields .= "Subject: ";
    $Fields .= $subject;
    $Fields .= "\n";

    $Fields .= "Message: ";
    $Fields .= $message;
    $Fields .= "\n";

// send email
    $success = mail($EmailTo, $Title, $Fields, "From:" . $email);
}
