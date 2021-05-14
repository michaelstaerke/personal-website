/*
@date:       14.02.2021
@author:     Mike Stk

JS Script to test if the guest data is valid.

main source: https://www.codebrainer.com/blog/contact-form-in-javascript 
             https://www.tutorialrepublic.com/javascript-tutorial/javascript-form-validation.php
*/



/* Script: Pop Up Window */

// When the user clicks on <div>, open the popup
function myFunction() {

    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}



/* Script: Contact Form Validation */

// guest Data: guestName guestEmail guestTopic guestMessage guestPrivacyPolicy guestSendButton


function validateForm() {
    

    // var which groups all fields into an object
    var fields = {};

    document.addEventListener("DOMContentLoaded", function() {

        fields.guestName = document.getElementById('guestName');
        fields.guestEmail = document.getElementById('guestEmail');
        fields.guestTopic = document.getElementById('guestEmail');
        fields.guestMessage = document.getElementById('guestEmail');
    })


    /* Function that checks, if the guest-field is not empty */
    function isNotEmpty(value) {

        if (value == null || typeof value == 'undefined')
            return false;

        return (value.length > 0);
    }


    /* Function that checks, if an number guest-field is filled with numbers */
    function isNumber(num) {

        return (num.length > 0) && !isNan(num);
    }


    /* Function that checks, if the guest-field is an email */
    function isEmail(email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9]{0,61}[a-ZA-Z0-9])?)*$/;
        return regex.test(String(email).toLowerCase());
    }


    /* Function that checks, if all the validation functions are in order,
        to use them with the main validation function */
    function fieldValidation(field, validationFunction) {

        if (field == null) 
            return false;

        let isFieldValid = validationFunction(field.value)

        if (!isFieldValid) {
            field.className = 'placeholderRed';
        } else {
             field.classname = '';       
        }

        return isFieldValid;
    }


    /* Function description */
    function isValid() {

        var valid = true;

        valid &= fieldValidation(fields.guestName, isNotEmpty);
        valid &= fieldValidation(fields.guestEmail, isEmail);
        valid &= fieldValidation(fields.guestTopic, isNotEmpty);
        valid &= fieldValidation(fields.guestMessage, isNotEmpty);
    }
    
    
    /* Class which combines multiple values in one, makes it easier to work with complex values */
    class User {

        constructor(guestName, guestEmail, guestTopic, guestMessage){

            this.guestName = guestName;
            this.guestEmail = guestEmail;
            this.guestTopic = guestTopic;
            this.guestMessage = guestMessage;
        }
    }


    /* main function, which is called from the HTML button */
    function sendContant() {
    
        if (isValid()) {
            let usr = new User(guestName.value, guestEmail.value, guestTopic.value, guestMessage.value);

            alert('${usr.guestName} Danke für die Nachricht.')
        
        } else {

            alert("Da war ein Fehler!")
        }
    }

}