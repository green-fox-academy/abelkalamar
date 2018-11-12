'use strict';
export { };

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

let fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function checkRows(fileName: string) {
  let content: string[] = readFromFile(fileName).split('\r\n');
  let rows: string[][] = [];
  let result: string = '';
  if (content !== null) {
    for (let i: number = 0; i < content.length; i++) {
      rows.push(content[i].split(''));
      if (rows[i].every((e, i, arr) => e === arr[0])) {
        result = rows[i][0];
      }
    }
  }
  return result;
}

console.log(checkRows('win-x.txt'));



/*
function result(fileName: string) {
  let rows: string[] = readFromFile(fileName).split('\r\n');
  let columns: any [][] = [];
  let diag: string[][] = [];
  if (rows !== null) {
    for (let i: number = 0; i < rows.length; i++) {
      diag.push(rows[i].split(''));
    }
    for (let i: number = 0; i < diag.length; i++) {
      columns.push([]);
      columns[i].push([]);
      for (let j: number = 0; j < diag[i].length; j++) {
      columns[i][j] = (diag[j][i]);
      }
    }
    
  }
  console.log(rows);
  console.log(diag);
  console.log(columns);
}

result('win-x.txt');
*/
/*
console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"*/