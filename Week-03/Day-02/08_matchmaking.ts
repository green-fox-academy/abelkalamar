'use strict';

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(arr1: string [], arr2: string[]): string[] {
  let matches: string[] = [];
  for( let i: number = 0; i < arr1.length; i++){
    matches.push(girls[i])
    for( let j: number = 0; j < arr2.length; j++){
      matches.push(boys[i])
      break;
    }
  }
  return matches;
}

console.log(makingMatches(girls, boys));

export = makingMatches;