'use strict'
const suits = ['C', 'D', 'H', 'S'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

let cardDeck = [];
const createDeck = (suits, values) => {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      cardDeck.push(values[i] + suits[j]);
    }
  }
  return cardDeck;
}

let playerOne = [];
let playerTwo = [];

const dealCards = () => {
  playerOne = [];
  playerTwo = [];
  cardDeck = [];
  createDeck(suits, values);
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * cardDeck.length);
    if (i % 2 === 0) {
      playerOne.push(cardDeck[num]);
      cardDeck.splice(num, 1);
    } else if (i % 2 !== 0) {
      playerTwo.push(cardDeck[num]);
      cardDeck.splice(num, 1);
    }
  }
}

const firstPlayer = document.querySelector('.player-one');
const secondPlayer = document.querySelector('.player-two');
const firstCards = document.querySelectorAll('.player-one img');
const secondCards = document.querySelectorAll('.player-two img');
const dealButton = document.querySelector('.dealCards');
const result = document.querySelector('.result');
const printWinner = document.querySelector('.winner');
const firstScore = document.querySelector('.firstScore');
const secondScore = document.querySelector('.secondScore');

const showCards = () => {
  dealCards();
  playerOne.forEach((e, i) => {
    firstCards[i].setAttribute('src', `./img/${e}.jpg`);
  });
  playerTwo.forEach((e, i) => {
    secondCards[i].setAttribute('src', `./img/${e}.jpg`);
  });
  firstScore.textContent = ``;
  secondScore.textContent = ``;
  printWinner.textContent = ``;
}

const evaluate = () => {
  let firstDeckValue = 0;
  let secondDeckValue = 0;
  playerOne.forEach(e => {
    firstDeckValue += values.indexOf(e[0]) + 1;
  });
  playerTwo.forEach(e => {
    secondDeckValue += values.indexOf(e[0]) + 1;
  });
  firstScore.textContent = `1st Player\'s score: ${firstDeckValue}!`;
  secondScore.textContent = `2nd Player\'s score: ${secondDeckValue}!`;
  if (firstDeckValue === secondDeckValue) {
    printWinner.textContent = `It\'s a draw`;
  } else if (firstDeckValue > secondDeckValue) {
    printWinner.innerHTML = `1st Player wins!`;
  } else {
    printWinner.textContent = `2nd Player wins!`;
  }
}

const slide = document.querySelector('.slides');
const body = document.querySelector('body');
const container = document.querySelector('.container');

let slideNum = 1;
const slides = (event) => {
  if (event.keyCode === 13) {
    slideNum = 9;
    let img = document.createElement('img');
    img.setAttribute('src', `../../../../week08demo/dia${slideNum}.png`)
    img.style.objectFit = 'fit';
    img.style.width = '100vw';
    img.style.height = '100vh';
    img.style.position = 'absolute';
    img.style.zIndex = '2';
    body.insertBefore(img, container);
  }
  if (slideNum === 9) {
    body.removeChild(slide);
  }
  if (event.keyCode === 39) {
    slide.setAttribute('src', `../../../../week08demo/dia${slideNum}.png`)
    slideNum++;
  }
  if (event.keyCode === 37) {
    slide.setAttribute('src', `../../../../week08demo/dia${slideNum - 1}.png`);
    if(slideNum !== 0) {
      slideNum--;
    }
  }
}

dealButton.addEventListener('click', showCards);
result.addEventListener('click', evaluate);

document.addEventListener('keydown', slides);

