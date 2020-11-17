<?php
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $mailFrom = $_POST['email'];
    $fname = $_POST['fname'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "yehhhk@outlook.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$fname $lname.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html");


?>
