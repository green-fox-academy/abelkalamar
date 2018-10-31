'use strict';
export { };

let number: number = 5;

// Create a program that
// prints the multiplication table with number

let result: number = number;
let a: number = 1;

for (let i: number = 0; i < 10; i++) {
  console.log(` ${a} * ${number} = ${result}`);
  result += number
  a++;
}