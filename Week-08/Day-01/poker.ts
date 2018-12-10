
const suits = ['C', 'D', 'H', 'S'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

const Black: string[] = [];
const White: string[] = [];

const createDeck = (suits: string[], values: string[]): string[] => {
  let cardDeck: string[] = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      cardDeck.push(values[i] + suits[j]);
    }
  }
  return cardDeck;
}

let cardDeck = createDeck(suits, values);

export const dealCards = (player: string[]) => {
  for (let i = 0; i < 5; i++) {
    let value = values[Math.round(Math.random() * (values.length - 1))];
    let suit = suits[Math.round(Math.random() * (suits.length - 1))];
    if (cardDeck.includes(value + suit)) {
      cardDeck.splice(cardDeck.indexOf(value + suit), 1);
      player.push(value + suit);
    } else {
      i--;
    }
  }
  return player;
}

console.log(dealCards(Black));
console.log(dealCards(White));

console.log(cardDeck);


