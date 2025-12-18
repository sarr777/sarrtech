<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $phone   = htmlspecialchars($_POST['phone']);
    // $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "sarrpro9@gmail.com"; // <-- TON EMAIL ICI
    $email_name = "Nouveau message : $name";

    $email_body = "
    Nom : $name\n
    Email : $email\n
    Téléphone : $phone\n
    Message :\n$message
    ";
    // Sujet : $subject\n

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $email_name, $email_body, $headers)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>
