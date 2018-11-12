'use strict';
export { };

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

let fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName);
  } catch(e) {
    return null;
  }
}

function writeIntoFile(file: string, data: string) {
  fs.writeFileSync(file, data);
}

function copyFile(fileName1: string, fileName2: string): boolean {
  const content = readFromFile(fileName1);
  if (content !== null) {
    writeIntoFile(fileName2, content);
    return true;
  } else {
    return false;
  }
}

console.log(copyFile('my-name.txt', 'my-file.txt'));