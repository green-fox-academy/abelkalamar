'use strict';
export { };

//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list

// Example
//console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
//console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'

function subint(num: number, arr: number[]): number[] {
  let indeces: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].toString().includes(num.toString())) {
      indeces.push(arr.indexOf(arr[i]));
    }
  }
  return indeces;
}
console.log(subint(1, [23, 44, 34, 52, 66]));
