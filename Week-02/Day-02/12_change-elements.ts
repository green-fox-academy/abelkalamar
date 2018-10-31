'use strict';
export { };

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1, 2, 3, 8, 5, 6];


//Alternative solution using simple 'for' loop
/*
function change8(array: number[]): number[] {
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] == 8) {
      array[i] = 4;
    }
  }
  return array;
}

console.log(change8(numList));
*/

let newlist = numList.map(function (e) {
  if (e == 8) {
    return e = 4;
  } else {
    return e;
  }
})

console.log(newlist[3]);
