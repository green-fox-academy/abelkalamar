import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

//console.log(initializeDominoes());

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

//print(dominoes);
// console.log(dominoes[0].values[0])
//console.log(dominoes[0].values[1])


function createSnakeDominos(arr: Domino[]) {
  let snakeDominoes = [];
  snakeDominoes.push(dominoes[0]);
  for (let i = 0; i < dominoes.length; i++) {
    for (let j = 1; j < dominoes.length; j++) {
      if (snakeDominoes[i].values[1] === dominoes[j].values[0]) {
        snakeDominoes.push(dominoes[j]);
      }
    }
  }
  return snakeDominoes;
}

console.log(createSnakeDominos(dominoes));