/*
@author     Mike Stk
@date       03.06.2020
*/


<?php
    

    /* html urls */
    $url_homepage = "michael-staerke.de";
    $url_mail_failed = "";

    
    /* html parameter */
    $userName       = $_POST['Name'];
    $userEmail      = $_POST['Email'];
    $userSubject    = $_POST['Subject'];  /* to do */
    $userMessage    = $_POST['Message'];
    
    	
    $homeEmail      = "michael-staerke@mail.de";
    $clientsubject  = "Email from michael-staerke.de";
    $mailBody       = "the user typed in: " . $_POST['Email'];


    /* sending client mail to my email adress */
    $mail_send = mail($homeEmail, $clientSubject, $mailBody);
    $

        
    if($mail_send) {

        header("Location: ".$url_homepage); 
        exit();
    } 
    else {
        
        header("Location: ".$url_mail_failed);
        exit();
    }


?>




/* 
+++NOTES+++

html-data:

div class: "field/control/input"      type: "Name"
div class: "field/control/input"      type: "Email"
div class: "field/control/textarea"   type: "Message"
div class: "field/control/checkbox"   type: "accept-checkbox"
div class: "field/control/button"     type: "send-button"

Sources: 
1.  https://medium.com/@stevesohcot/simple-php-contact-form-tutorial-part-1-of-2-6cdb2e383b23
2.  https://www.php-einfach.de/experte/php-codebeispiele/kontaktformular/

+++END+++
*/
