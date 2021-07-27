'use strict';

let secretNumber = newSecretNumber();
let score = 20;
let highscore = 0;

// document.querySelector('.number').style = 'backgroundColor: white;'

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function setTextContent(value) {
    document.querySelector('.score').textContent = value;
}

function setSecretNumber() {
    document.querySelector('.number').textContent = secretNumber;
}

function setBackgroundColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}

function setSecretNumberWidth(width) {
    document.querySelector('.number').style.width = width;
}

function newSecretNumber() {
    return Math.trunc(Math.random() * 20 + 1);
}

 setTextContent(score);
//  setSecretNumber();

document.querySelector('.again').addEventListener('click', function() {
// AGAIN BUTTON
   // reset score and secretNumber
    secretNumber = newSecretNumber();
    score = 20;
    setTextContent(score);
    // setSecretNumber();
    displayMessage('Start quessing...');
    setBackgroundColor('#222');
    setSecretNumberWidth('15rem');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function() {
    const quess = Number(document.querySelector('.guess').value);
    console.log(quess, typeof quess);



// When no input
    if (!quess) {
        displayMessage('No Number imputed!!!');

// When player wins        
    } else if (quess === secretNumber) {
        displayMessage('You quessed correct number!');
        setBackgroundColor('#60b347');
        setSecretNumberWidth('27rem');
        setSecretNumber();
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (quess !== secretNumber) {
        if (score > 1) {
            // Too high or too low       
                        displayMessage(quess > secretNumber ? 'Too high!' : 'Too low!');
                        score--;
                        setTextContent(score);
            // Loose the game            
                    } else {
                        displayMessage('You lost the game!');
                        setTextContent(0);
                    }
    }
});


