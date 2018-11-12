'use strict';
export { };

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

let fs = require('fs');

function writeIntoFile(content: string, fileName: string): void {
  try {
    fs.writeFileSync(fileName, content);
  } catch (e) {
    console.log(`Unable to write a file: ${fileName}`);
    return null;
  }
}
writeIntoFile('Abel Kalamar', 'my-name.txt');



