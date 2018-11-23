import fs from 'fs';

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log('Cannot read the file!');
    return null;
  }
}

function createObject(): Object {
  let content = readFile('text.txt').trim().split('\r\n');
  let splitContent = content.map(line => line.split('  '));
  let resultObject = splitContent.reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      itemName: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers;
  }, {});
  return resultObject;
}
console.log(createObject());

