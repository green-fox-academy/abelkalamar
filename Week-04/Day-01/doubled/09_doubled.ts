'use strict';
export { };

// Create a method that decrypts duplicated-chars.txt

let fs = require('fs');

function readFromFile(fileName: string) {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function decryptText(file: string) {
  let fileContent: string[] = readFromFile(file).split('');
  let text: string[] = [];
  fileContent.forEach(function (e, i) {
    if (i % 2 !== 0) {
      text.push(e);
    }
  })
  return text.join('');
}
console.log(decryptText('doubled.txt'));
