'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number !');
  } else if (secretNumber === guess) {
    document.querySelector('.number').textContent = `🎈 ${secretNumber} 🎈`;
    displayMessage('🎉 YOU WON !');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '50rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too HIGH !' : '📉 Too LOW !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 YOU LOST !');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'orangered';
      document.querySelector('.number').textContent = '🤦‍♂️';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

let web3;
async function Connect() {
  await window.web3.currentProvider.enable();
  web3 = new web3(window.web3.currentProvider);
}
