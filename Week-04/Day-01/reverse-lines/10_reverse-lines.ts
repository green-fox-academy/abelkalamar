'use strict';
export { };

// Create a method that decrypts reversed-lines.txt

let fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function reverseText(fileName: string): string {
  let content: string[] = readFromFile(fileName).split('\r\n');
  let reversed: string[] = [];
  content.forEach(e => {
    reversed.push(e.split('').reverse().join(''));
  })
  return reversed.join('\n');
}
console.log(reverseText('reversed_lines.txt'));