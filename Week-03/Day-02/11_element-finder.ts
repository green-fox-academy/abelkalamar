'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 7, 5, 6, 8];

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

function containsSeven(arr: number[]): string {
  let answer: string = 'Noooooo';
  for(let i: number = 0; i < arr.length; i++){
    if(arr[i] === 7){
      answer = 'Hoorray'
    } 
  }
  return answer;
}
console.log(containsSeven(numbers));

export = containsSeven;