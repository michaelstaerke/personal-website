/*
@author         Mike Stk
@date           31.12.2021


**Update: Arbeiten wurden erstmal eingestellt, bis wichtige Lektion des Udemy Kurses
"fortgeschrittene Programmierung in Javascript"  drankamen, sodass ich einen 
gepflegten Code (-Stil) produzieren kann.**

*/

/*

// Zur Fehleranalyse
'use strict';

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('rockpsButton');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

var userInputGameModeOne = document.getElementById('gameModeButtonOne');
var userInputGameModeTwo = document.getElementById('gameModeButtonTwo');

var userGameChoices = new Array();
userGameChoices[0] = 'Schere';
userGameChoices[1] = 'Stein';
userGameChoices[2] = 'Papier';

var userGameChoicesString = '';

// Zufallszahl generieren als Computerspielzug Objekt
var randomNumber = Math.floor(Math.random() * 3) + 1;

var result;
var userGameChoiceButton;

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Spiel Abläufe

userInputGameModeOne.onclick = function () {
    // zweiter Game Modi also User Spielzug
    for (var i = 0; i < userGameChoices.length; i++) {
        userGameChoicesString =
            userGameChoicesString +
            '<button>' +
            userGameChoices[i] +
            '</button>';
    }

    document.getElementById('modal-body').innerHTML = userGameChoicesString;
};

/*
            document.getElementById("userGameChoiceButton").onclick = function() {

                alert(userGameChoiceButton.value);
            }
*/
