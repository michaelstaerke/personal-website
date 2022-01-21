<?php

/* 
@author     Michael Staerke
@date       19.12.2021

Dies ist 
*/
?>

<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </head>
  <body>
    <form action="?" method="POST">
      <div class="g-recaptcha" data-sitekey="your_site_key"></div>
      <br/>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>

<?php

// Session HA
    session_start();


        if (isset($_POST['submit'])) {

            $userEmailadress = $_POST['email'];
            $userPassword = $_POST['password'];

            // Enables error reporting for mysqli before attempting to make a connection
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

            // Connects to the MySQL phpmyadmin database
            $mysqli = new mysqli('localhost', 'd031be0e', 'FVoMfXDk3Uwp', 'd031be0e');

            // Sets the desired charset after establishing a connection
            $mysqli->set_charset('utf8mb4');

            if($mysqli) {
                printf("Success... %s\n", $mysqli->host_info);
            }

            /* ToDo: Den Benutzer nach der Email und seinem Passwort fragen
            -> siehe index.html 
            */

            /* ToDo: Überprüfen ob beides eingetragen wurde */
            echo "<p>Deine eingegebene Email ist: ".$userEmailadress.
            "<br>Dein eingegebenes Passwort lautet: ".$userPassword."</p>";

            /* ToDo: Überprüfen ob die Emailadresse bereits registriert ist
            SQL-Datenbank-Daten sind "Tabelle: benutzer"  "emailadresse" "passwort" 
            SQL-Test-Daten sind "michael.staerke@mail.de" "m12345"

            $query = "";
            */
            
            /* ToDo: Wenn nicht, nutzer registrieren */

            // Session HA
            $_SESSION['email'] = $_POST['email'];
            header("Location: session.php");

            /* 
            Leider auch hier wieder bad practice vom Tutor siehe HEADER!
            Note that this may not work with secure pages (HTTPS) and 
            it's a pretty bad idea overall as the header can be hijacked, 
            sending the user to some other destination. 
            The header may not even be sent by the browser.
            */
        }
?>