'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 7, 5, 6, 8];

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

//1st solution with for loop:

const containsSeven = (arr: number[]): string => {
  let answer: string = 'Noooooo';
  for(let i: number = 0; i < arr.length; i++){
    if(arr[i] === 7){
      answer = 'Hoorray'
    } 
  }
  return answer;
}
console.log(containsSeven(numbers));

//2nd solution with .some() method: 
const contains7 = (arr: number[]): string => {
  if (arr.some(e => e === 7)){
    return 'Hoorray';
  } else {
    return 'Noooooo';
  }
}
console.log(contains7(numbers));

//3nd solution with .indexOf() method: 
const isItContains7 = (arr: number[]): string => {
  if (arr.indexOf(7) !== -1){
    return 'Hoorray';
  } else {
    return 'Noooooo';
  }
}
console.log(isItContains7(numbers));

export = contains7;