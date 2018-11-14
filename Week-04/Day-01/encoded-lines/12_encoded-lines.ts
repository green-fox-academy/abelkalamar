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
  //let alphabet = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ[ , - . / ' ( * +".split('')
  let content: string[] = readFromFile(fileName).toLowerCase().split('\r\n');
  //let contentRows: string[][] = [];
  //content.forEach((e, i, a) => contentRows.push(a[i].split('')));
  //console.log(contentRows);
  if (content !== null) {
    content.forEach((e, i) => {
      for (let j = 0; j < content[i].length; j++) {
        content[i].charCodeAt(j);
        
      }
        //content.splice(i, 1, alphabet[alphabet.indexOf(e) - 1]);
      });
    
    
  }
  return content.join(' ');
}
decodeText('encoded-lines.txt');



/*
let str: string[] = 'abcdefghijk'.split('');
console.log(str);

console.log('+'.charCodeAt(0));
*/
