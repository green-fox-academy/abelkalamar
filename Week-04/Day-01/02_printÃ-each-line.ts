'use strict';
export { };

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines from the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require('fs');

const readFromFile = (filename: string): string => {
  try {
    return fs.readFileSync(filename, 'utf-8');
  } catch (e) {
    console.log(`Unable to read file: ${filename}`);
    return null;
  }
}

const printLines = (file: string) => {
  const fileContent = readFromFile(file);
  if (fileContent !== null) {
    fileContent.split("\n\t").forEach(e => {
      console.log(e);
    });
  }
}
printLines('my-file.txt');