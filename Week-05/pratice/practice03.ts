const fs = require('fs');

function readFile(fileName) {
  try {
    return fs.readFileSync(fileName, 'utf8');
  } catch (e) {
    console.log('Cannot read file');
    return null;
  }
}

let getNumbers = (fileName) => {
  let content = readFile(fileName).trim().split('\r\n');
  if (content !== null) {
    content = content.map((e, i) => {
      return e.split(';').slice(-5);
    })
  }
  return content;
}

function frequentNumbers(filteredContent) {
  let frequenties: Object = {};
  filteredContent.forEach(e => {
    e.reduce((nums, freq) => {
      nums[freq] ? nums[freq]++ : nums[freq] = 1;
      return nums;
    }, frequenties);
  });
  return frequenties;
}

console.log(frequentNumbers(getNumbers('text.txt')));