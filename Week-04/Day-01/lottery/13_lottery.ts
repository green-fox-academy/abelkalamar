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

function getNumbersFromFile(fileName: string): string[][] {
  let content: string[] = readFromFile(fileName).split('\r\n');
  let contentLines: string[][] = [];
  let numsInLines: string[][] = [];
  content.forEach(e => {
    contentLines.push(e.split(';'));
  });
  contentLines.forEach(e => {
    numsInLines.push(e.slice(-5));
  });
  return numsInLines;
}

function frequentNums(arr: string[][]) {
  class LotteryNums {
    name: string;
    frequency: number;

    constructor(name: string) {
      this.name = name;
      this.frequency = 0;
    }
  }
  let nums: LotteryNums[] = [];
  for (let i = 1; i <= 90; i++) {
    nums.push(new LotteryNums(i.toString()));
  }
  for (let j = 0; j < arr.length; j++) {
    arr[j].forEach(e => {
      for (let k = 0; k < nums.length; k++) {
        if (e === nums[k].name) {
          nums[k].frequency++;
          break;
        }
      }
    });
  }
  console.log(nums);
  let numFrequencies: number[] = [];
  let fiveBiggestFraqs: number[] = [];
  let result: string[] = [];
  for (let i = 0; i < nums.length; i++) {
    numFrequencies.push(nums[i].frequency);
  }
  for (let j = 0; j < 5; j++) {
    fiveBiggestFraqs.push(Math.max(...numFrequencies));
    numFrequencies.splice(numFrequencies.indexOf(Math.max(...numFrequencies)), 1);
  }
  for (let j = 0; j < fiveBiggestFraqs.length; j++) {
    nums.forEach(e => {
      if (fiveBiggestFraqs[j] === e.frequency) {
        result.push(e.name);
        nums.splice(nums.indexOf(e), 1);
      }
    });
  }
  return ` The 5 most frequent numbers are: ${result}`;
}
console.log(frequentNums(getNumbersFromFile('lottery.txt')));

