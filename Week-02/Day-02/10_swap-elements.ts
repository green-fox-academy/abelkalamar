'use strict';
export { };

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ["Arthur", "Boe", "Kutya"];

function swap(array: string[]): string[] {
  array.splice(0, 3, array[2], array[1], array[0]);
  return array;
}

console.log(swap(abc));
