<?php
    
<<<<<<< HEAD

    /* check if html form was submitted */
    if (isset($_POST['submit'])) {
=======
    /* html urls */
    $url_homepage = "michael-staerke.de";
    $url_mail_failed = "";
>>>>>>> 079b0e5b7fd18dbe0a65577c78bfee97bc487e03


        /* html urls */
        $url_homepage = "michael-staerke.de";
        $url_mail_failed = "";

        
        /* html data, variables declaration and init. */
        $userName       = $_POST['Name'];
        $userEmail      = $_POST['Email'];
        $userSubject    = $_POST['Subject'];  /* to do */
        $userMessage    = $_POST['Message'];
        

<<<<<<< HEAD
            /* contact email content */
            $homeEmail      = "michael.staerke@mail.de";
            $clientSubject  = "Email from michael-staerke.de";
            $mailBody       = "the user typed in: " . $_POST['Email'];


            /* sending client mail to my email adress */
            $mail_send = mail($homeEmail, $clientSubject, $mailBody);

            
        if($mail_send) {

            header("Location: ".$url_homepage); 
            exit();
        } 
        else {
            
            header("Location: ".$url_mail_failed);
            exit();
        }

    }

=======
>>>>>>> 079b0e5b7fd18dbe0a65577c78bfee97bc487e03
?>




/* 
<<<<<<< HEAD
+++NOTIZEN+++
@date:      15.08.2020
@author:    Mike.Stk
=======
+++NOTES+++
>>>>>>> 079b0e5b7fd18dbe0a65577c78bfee97bc487e03

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
