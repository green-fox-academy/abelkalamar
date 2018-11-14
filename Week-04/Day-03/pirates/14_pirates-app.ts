import { Pirates } from './pirates';
import { Ship } from './ship';

/*
let pirate1 = new Pirates('Bob');
let pirate2 = new Pirates('John');
let pirate3 = new Pirates('Spearrow');
let pirate4 = new Pirates('Keane');
let pirate5 = new Pirates('Norman');

pirate1.drinkSomeRum();
pirate1.howItsGoingMate();

pirate1.brawl(pirate3);
console.log(pirate1.alive);
console.log(pirate3.alive);
*/

let pearl = new Ship('Pearl');

pearl.fillShip();
console.log(pearl.crew);
