import { truncateSync } from "fs";

'use strict'
export { };

// Create a method that decrypts encoded-lines.txt

let fs = require('fs');

function readFromFile(fileName: string) {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e);
    return null;
  }
}

function decodeText(fileName: string): string {
  let content: string[] = readFromFile(fileName).split('\r\n');
  let contentChar: string[][] = [];
  let encodedText = [];
  if (content !== null) {
    content.forEach(e => contentChar.push(e.split('')));
    for (let i = 0; i < contentChar.length; i++) {
      encodedText.push([]);
      encodedText[i].push([]);
      for (let j = 0; j < contentChar[i].length; j++) {
        if (contentChar[i][j] !== ' ') {
        encodedText[i][j] = String.fromCharCode(contentChar[i][j].charCodeAt(0) - 1);
        } else encodedText[i][j] = ' ';
      }
    }
    encodedText.forEach((e, i, a) => content.splice(i, 1, e.join('')));
  }
  return content.join('\r\n');
}

console.log(decodeText('encoded-lines.txt'));

/*
let arr = ['wel c ome', 'ho me'];
let arr2: string[][] = [];
arr.forEach(e => arr2.push(e.split('')));

for (let j = 0; j < arr2.length; j++) {
  arr2.forEach((e, i, a) => {
    if (a[j][i] !== ' ') {
      console.log(a[j][i].charCodeAt(0));
    }
  })
}
//console.log(arr2[0][1].charCodeAt(1));
*/