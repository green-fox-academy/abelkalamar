'use strict';

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

/* Ugly solution:

function checkNums(arr: number[]): boolean {
  let answer: boolean = false;
  let is4: boolean = false;
  let is8: boolean = false;
  let is12: boolean = false;
  let is16: boolean = false;

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      is4 = true;
    } else if (arr[i] === 8) {
      is8 = true;
    } else if (arr[i] === 12) {
      is12 = true;
    } else if (arr[i] === 16) {
      is16 = true;
    }
    if (is4 && is8 && is12 && is16) {
      answer = true;
    }
  }
  return answer;
}
console.log(checkNums(listOfNumbers));
*/

const checkNums = (arr: number[]): boolean => {
  if (arr.indexOf(4) !== -1 && arr.indexOf(8) !== -1 && arr.indexOf(12) !== -1 && arr.indexOf(16) !== -1) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNums(listOfNumbers));
export = checkNums;