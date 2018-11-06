'use strict';
export { };

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: any = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

function repair(str: string): string {
  str = quote.replace('It', 'It always takes longer than');
  return str
}

quote = repair(quote);

console.log(quote);