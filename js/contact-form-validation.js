/*
@author         Mike Stk
@date           19.08.2022

JavaScript to validate the user data on the frontend,
that was put into the HTML contact form, (DOM).
When the data is in a correct form, it will be sent to the php file -> backend.
*/

const submit = document.getElementById('submit');

// checks if the js variable is connected to the HTML DOM elements
if (submit) {
	
	submit.addEventListener('click', () => {
		
        validation();
		document.getElementById('submit-text').innerHTML = 
		"<p>Lade.. !<p>";
		
		// prevents the HTML form from being submitted, 
		// which will also prevent the page from reloading 
		event.preventDefault();
	});
}

function validation() {
		
        // HTML data saved in JS variables.
        let guestName = document.getElementById('floatingName').value;
        let email = document.getElementById('floatingEmail').value;
        let subject = document.getElementById('floatingSubject').value;
        let text = document.getElementById('floatingTextArea').value;

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

