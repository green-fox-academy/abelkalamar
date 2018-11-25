const fs = require('fs');

function readFile(fileName) {
  try {
    return fs.readFileSync(fileName, 'utf8');
  } catch (e) {
    console.log('Cannot read file');
    return null;
  }
}

export let getNumbers = (fileName): any => {
  let content = readFile(fileName).trim().split('\r\n');
  if (content !== null) {
    content = content.map((e, i) => {
      return e.split(';').slice(-5);
    })
  }
  return content;
}

export let frequentNumbers = (filteredContent): Object => {
  let frequenties: Object = {};
  filteredContent.forEach(e => {
    e.reduce((nums, freq) => {
      nums[freq] ? nums[freq]++ : nums[freq] = 1;
      return nums;
    }, frequenties);
  });
  return frequenties;
}

export let chooseMostFreqs = (lotteryNums: Object): string[] => {
  let mostFrequents = Object.values(lotteryNums).sort().slice(-5);
  let results: string[] = [];
  mostFrequents.forEach(e => {
    for (let x in lotteryNums) {
      if (e === lotteryNums[x]) {
        if (results.indexOf(x) === -1) {
          results.push(x);
        }
      }
    }
  });
  return results;
}

console.log(chooseMostFreqs(frequentNumbers(getNumbers('text.txt'))));