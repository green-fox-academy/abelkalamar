'use strict';
export { };

// Create a method that decrypts reversed-order.txt

let fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}
//console.log(readFromFile('reverse-order.txt'));

function reverseOrder(fileName: string): string {
  let content: string[] = readFromFile(fileName).split('\r\n');
  let reversed: string = '';
  if (content !== null) {
    reversed = content.reverse().join('\n');
  }
  return reversed;
}
console.log(reverseOrder('reverse-order.txt'));