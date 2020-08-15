/*
@date:       13.06.2020
@author:     Mike Stk

JS Script to test if the guest data is valid.
*/



function validateForm() {
    
    
    /* Function description */
    function isNotEmpty(value) {

        if (value == null || typeof value == 'undefined')
            return false;

        return (value.length > 0);
    }


    /* Function description */
    function isNumber(num) {

        return (num.length > 0) && !isNan(num);
    }

    /* Function description */
    function isEmail(email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:               [a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9]                 {0,61}[a-ZA-Z0-9])?)*$/;
        return regex.test(String(email).toLowerCase());
    }


    /* Function description */
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
        valid &= fieldValidation(fields.guestName, isNotEmpty);

    }
    
    
    
    
}    



/*
function sendGuestContact() {
    if () {
        document.getElementById("guestSendButton").innerHTML = 'Test'; 
    }
    else {
        window.alert();
    }
}
*/

/* document.getElementById("demo").innerHTML */

/* 
Source 0: https://www.codebrainer.com/blog/contact-form-in-javascript 
Source 1: https://www.tutorialrepublic.com/javascript-tutorial/javascript-form-validation.php
*/