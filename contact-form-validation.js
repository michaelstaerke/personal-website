/*
@author         Mike Stk
@date           10.01.2022

**Update: Arbeiten wurden erstmal eingestellt, bis wichtige Lektion des Udemy Kurses
"Modernes JavaScript ES6"  drankamen, sodass ich einen gepflegten Code (-Stil)  
produzieren kann.**

JavaScript to validate the user data that was put into the HTML contact form.

*/

// Zur Fehleranalyse
'use strict';

// Main function
function contactFormValidation() {
    // What it does
    document.getElementsByTagName('form').onsubmit = function (event) {
        // HTML data saved in JS variables.
        const guestName = document.getElementById('floatingName').value;
        const email = document.getElementById('floatingEmail').value;
        const subject = document.getElementById('floatingSubject').value;
        const text = document.getElementById('floatingTextArea').value;

        // Validation result as HTML text, therefore arrays needed.
        let errorText = ['ArrayElement0', 'ArrayElement1', 'ArrayElement2'];
        var successText = [' '];

        function validationInputs() {
            // Name filter
            if (guestName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
            } else {
                errorText.push(guestName);
                event.preventDefault();
            }
            // Email filter
            if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            } else {
                errorText.push(email);
                event.preventDefault();
            }
            // Function return.
            return guestName, email;
        }

        function validationForm() {
            // success
            if (validationInputs(guestName, email)) {
                successText = 'Erfolg, Anfrage wurde versendet';
                document.getElementById('submit-text').innerHTML = succesText;
                // error
            } else {
                document.getElementById('submit-text').innerHTML =
                    'Folgende Eingaben sind falsch, bitte korrigieren: ' +
                    errorText;
            }
        }
    };
}
