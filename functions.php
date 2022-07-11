<?php
/*
@author		Mike Stk
@date		13.01.2022

*/


// Sende eine Nachricht an das Serverlog, falls
// keine Verbindung zur Datenbank herstellbar ist.
if (!Ora_Logon($benutzername, $passwort)) {
    error_log("Die Oracle-Datenbank ist nicht erreichbar!", 0);
}

// Benachrichtige den Administrator per E-Mail, falls kein FOO mehr verfügbar ist.
if (!($foo = allocate_new_foo())) {
    error_log("Wir haben ein Problem: FOO ist alle!", 1,
               "operator@example.com");
}

// Eine weitere Möglichkeit, error_log() aufzurufen:
error_log("Du hast Mist gebaut!", 3, "/var/tmp/meine-fehler.log");
error_log("sometext", 1, "michael-staerke.de",
  "Subject: Foo\nFrom: michael-staerke.de\n");
?>