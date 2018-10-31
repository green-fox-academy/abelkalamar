'use strict';
export { };

// -  Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// -  Print the sum of the second and the third element

let r: number[] = [54, 23, 66, 12];

function sum(array: number[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < array.length; i++) {
    if (i === 1) {
      sum += array[i];
    } else if (i === 2) {
        sum += array[i];
    }
  }
  return sum;
}

console.log(sum(r));