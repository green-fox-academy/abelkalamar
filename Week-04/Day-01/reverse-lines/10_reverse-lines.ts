'use strict';
export { };

// Create a method that decrypts reversed-lines.txt

let fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    return null;
  }
}

function reverseText(fileName: string) {
  const content = readFromFile(fileName).split('\r\n');
  
}