'use strict';
export { };

// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

const quoteSwap = (arr: string[]): string => {
  let a: number = 2;
  let b: number = 5;
  arr[a] = arr.splice(b, 1, arr[a])[0];
  return arr.join(' ');
}
console.log(quoteSwap(words));

// Expected output: "What I cannot create I do not understand."

