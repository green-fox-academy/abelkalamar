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
  let rows: number[] = [];
  if (content !== null) {
    for (let i: number = 0; i < content.length; i++) {
      res.push(content[i].split(''));
    }
    if (res[0][0] === res[1][1] === res[2][2] || res[0][2] === res[1][1] === res[2][0]) {
      console.log(res[1][1]);
      return res[1][1];
    } /*else {
      for (let i: number = 0; i < res.length; i++) {
        if (res[i].every(e => e === 'X' || e === 'O')) {
          return res[i][0];
        }
      }
  }*/
  }
  console.log(res[0][0]);
  console.log(res[1][1]);
  console.log(res[2][2]);
}

console.log(result('win-X.txt'));



/*
console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"*/