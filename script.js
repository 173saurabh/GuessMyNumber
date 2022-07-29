'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//! 1st way:-
/*document.querySelector('.again').onclick = function () {
  window.location.reload();
};*/
//! 2nd way:-
/*document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
});*/
//* Not page reload game restore:-
document.querySelector('.again').onclick = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number🙊🚫');
  } else if (guess === secretNumber) {
    displayMessage('🥳🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '📉Too Low!' : '📈Too High!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
