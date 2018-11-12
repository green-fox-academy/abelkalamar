import { fileURLToPath } from "url";

'use strict';
export { };

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function howManyLines(file: string): number {
  let fileCont = readFromFile(file);
  if (fileCont !== null) {
    let lines = fileCont.split('\r\n').length;
    return lines;
  } else {
    return 0;
  }
}

console.log(howManyLines('my-file.txt'));