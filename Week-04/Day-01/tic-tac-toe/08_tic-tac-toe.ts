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

let result1: string = 'Draw';
let result2: string = 'Draw';
let result3: string = 'Draw';

function checkRows(fileName: string): string {
  let content: string[] = readFromFile(fileName).split('\r\n');
  let rows: string[] = [];
  console.log(rows);
  if (content !== null) {
    if (rows.indexOf('X') === -1) result1 = 'O';
    if (rows.indexOf('O') === -1) result1 = 'X';
  }
  return result1;
}
console.log(checkRows('win-o.txt'));

function checkColumns(fileName: string): string {
  let content: string[] = readFromFile(fileName).split('\r\n');
  let columns: any[][] = [];
  if (content !== null) {
    for (let i: number = 0; i < content.length; i++) {
      columns.push([]);
      columns[i].push([]);
      for (let j: number = 0; j < content[i].length; j++) {
        columns[i][j] = (content[j][i]);
      }
      if (columns[i].every((e, i, arr) => e === arr[0])) {
        result2 = columns[i][0];
      } 
    }
  }
  return result2;
}

function checkDiagonal(fileName: string): string {
  let content: any[] = readFromFile(fileName).split('\r\n');
  let diag: any[] = [];
  if (content !== null) {
    for (let i: number = 0; i < content.length; i++) {
      diag.push(content[i].split(''));
    }
    if (diag[0][0] === diag[1][1] && diag[1][1] === diag[2][2]) {
      result3 = diag[1][1];
    } else if (diag[0][2] === diag[1][1] && diag[1][1] === diag[2][0]) {
      result3 = diag[1][1];
    } 
  }
  return result3;
}

function ticTacResult(fileName: string): string {
  let result: string = 'Draw';
  if (checkRows(fileName)!== 'Draw') {
    result = checkRows(fileName);
  } else if (checkColumns(fileName)!== 'Draw') {
    console.log('yes');
    result = checkColumns(fileName);
  } else if (checkDiagonal(fileName)!== 'Draw') {
    result = checkDiagonal (fileName);
  } 
  return result;
}
/*
console.log(checkColumns('win-o.txt'));
console.log(checkRows('win-o.txt'));
console.log(checkDiagonal('win-o.txt'));
console.log(ticTacResult('win-o.txt'));
// Should print "O"
/*
console.log(ticTacResult('win-x.txt'));
// Should print "X"

console.log(ticTacResult('draw.txt'));
// Should print "Draw"
*/