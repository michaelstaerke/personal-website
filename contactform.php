<?php
/*
@author		Mike Stk
@date		13.01.2022
*/

/* ToDo: Serverside validation because hackers can surpase clientside validation (JS). */
error_reporting(E_ALL);

if($_POST) {

	$kontaktFehler = "";
	$kontaktErfolg = "";

	/* in HTML the data is given trough the HTML keyword "name" and "post" */
	$name = $_POST["floatingName"];
	$email = $_POST["floatingEmail"];
	$betreff = $_POST["floatingSubject"];
	$nachricht = $_POST["floatingTextArea"];

	$quelle = "michael.staerke@mail.de";

		if(mail($quelle, "Von:".$name, "Absender-Email: ".$email, $betreff, $nachricht)){
			echo '<script type="text/javascript">window.location = "https://michael-staerke.de/"</script>';
			/* $kontaktErfolg = '<div class="alert alert-success role="alert"><p><b>
			Alles hat geklappt. Ich antworte Dir so schnell ich kann.</b></p></div>'; */
		} else {
			$kontaktFehler = '<div class="alert alert-danger" role="alert"><p><b>Das Formular konnte nicht übertragen werden. Bitte versuche es noch einmal.</b></p></div>';
		}
} else {
	echo 'HTML zu PHP ÜBertragung Fehlgeschlagen.';
}
?>
