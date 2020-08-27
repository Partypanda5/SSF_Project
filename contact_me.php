<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   return false;
   exit();
   }

if ($_POST['_gotcha']) 
   {
      exit();
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
$subscribe = $_POST['subscribe'];

// Create the email and send the message
$to = 'info@sabisabifoundation.org.za'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Sabi Sabi Foundation Website Message From:  $name";
$email_body = "You have received a new message from the Sabi Sabi Foundation website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n\n$message\n\nSubscribe to the newsletter:\n$subscribe";
$headers = "From: noreply@SabiSabiFoundation.org\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers) or die("An error has occurred. Please try again later.");
echo "<h1 style='color: #28422C; text-align:center;  display: flex; justify-content: center; align-items: center; height: 200px;'> You message has been sent. Thank you for contacting us, we will get back to you soon.</h1>
<a href='index.html' style='text-decoration:none; color:#28422C; text-align:center;  display: flex; justify-content: center; align-items: center;'>Return To The Sabi Sabi Foundation Website</a>";
return true;         
?>
