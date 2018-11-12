'use strict';
export { };

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

let fs = require('fs');

function readFromFile(filename: string): string {
  try {
    return fs.readFileSync(filename, 'utf-8');
  } catch (e) {
    return null;
  }
}

function uniqIPs(fileName: string): number[] {
  let content = readFromFile(fileName).split("   ");
  let IPs: any[] = [];
  if (content !== null) {
    content.forEach(function (e, i) {
      if (i % 2 === 1) {
        IPs.push(e);
      }
    })
  }
  return IPs;
}
console.log(uniqIPs('log.txt'));

function getPost(fileName: string): number {
  let gets: number = 0;
  let posts: number = 0;
  let fileContent = readFromFile(fileName).split('\r\n');
  if (fileContent !== null) {
    fileContent.forEach(e => {
      if (e.includes('GET')) {
        gets++;
      } else if (e.includes('POST')) {
        posts++;
      }
    });
  }
  return gets / posts;
}
console.log(getPost('log.txt'));