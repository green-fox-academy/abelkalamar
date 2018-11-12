'use strict';
export { };

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

let fs = require('fs');

function readFromFile(filename: string): string {
  try {
    return fs.readFileSync(filename, 'utf-8');
  } catch (e) {
    return null;
  }
}

function result(fileName: string) {
  let content: string[] = readFromFile(fileName).split('\r\n');
  let res: any[][] = [];
  if (content !== null) {
    for (let i:number = 0; i < content.length; i++) {
      res.push(content[i].split(''));
    }
    
  }
  console.log(res);
}

result('win-o.txt');



/*
console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"*/