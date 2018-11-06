'use strict';
export { };

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

// 1st SOLUTION
quote = quote.replace('It', 'It always takes longer than');

// 2nd SOLUTION
let quoted: any = quote.split('It');

quoted.splice(1, 0, 'It always takes longer than');

console.log(quoted.join(''));