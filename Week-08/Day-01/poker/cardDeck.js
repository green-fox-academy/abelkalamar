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
  createDeck(suits, values);
  for (let i = 0; i < 10; i++) {
    let num = Math.round(Math.random() * cardDeck.length);
    if (i % 2 === 0) {
      playerOne.push(cardDeck[num]);
      cardDeck.splice(num, 1);
    } else if (i % 2 !== 0) {
      playerTwo.push(cardDeck[num]);
      cardDeck.splice(num, 1);
    }
  }
}

// dealCards();

// console.log(playerOne);
// console.log(playerTwo);


const firstPlayer = document.querySelector('.player-one');
const secondPlayer = document.querySelector('.player-two');
const firstCards = document.querySelectorAll('.player-one img');
const secondCards = document.querySelectorAll('.player-two img');
const dealButton = document.querySelector('.dealCards');

// console.log(firstCards[0]);

const showCards = () => {
  dealCards();
  playerOne.forEach((e, i) => {
    firstCards[i].setAttribute('src', `./img/${e}.jpg`);
  })
  playerTwo.forEach((e, i) => {
    secondCards[i].setAttribute('src', `./img/${e}.jpg`);
  })
  playerOne = [];
  playerTwo = [];
}

dealButton.addEventListener('click', showCards);



