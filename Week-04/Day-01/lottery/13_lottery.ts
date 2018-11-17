// Create a method that find the 5 most common lottery numbers in lottery.csv

let fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e);
    return null;
  }
}

function getNumbersFromFile(fileName: string): string [][] {
  let content: string[] = readFromFile(fileName).split('\r\n');
  let contentLines: string[][] = [];
  let numsInLines: string[][] = [];
  content.map(e => {
    contentLines.push(e.split(';'));
  });
  contentLines.forEach((e, i, a) => {
    numsInLines.push(e.slice(-5));
  });
  return numsInLines;
}

function frequentNums(arr: string[][]) {
  
}
getNumbersFromFile('lottery.txt')

