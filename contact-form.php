/*
@author     Mike Stk
@date       07.04.2020
*/


/*
html-data:

div class: "field/control/input"      type: "Name"
div class: "field/control/input"      type: "Email"
div class: "field/control/textarea"   type: "Message"
div class: "field/control/checkbox"   type: "accept-checkbox"
div class: "field/control/button"     type: "send-button"

Sources: https://medium.com/@stevesohcot/simple-php-contact-form-tutorial-part-1-of-2-6cdb2e383b23
*/


<?php
  
    $userName       = $_POST['Name'];
    $userEmail      = $_POST['Email'];
    $userMessage    = $_POST['Message'];
    
    	
    $to         = "michael-staerke@mail.de";
    $subject    = "Email from michael-staerke.de";
    $body       = "the user typed in: " . $_POST['Email'];

    mail($to, $subject, $body);
    
?>