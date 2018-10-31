'use strict';
export { };

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method

let numList: number[] = [3, 4, 5, 6, 7];

function reverse(array: number[]) {
  array.splice(0, 5, array[4], array[3], array[2], array[1], array[0]);
  return array;
}

console.log(reverse(numList));


// console.log(numList.reverse());

//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let newArray: number[] = numList.reverse();

for (let i: number = 0; i < numList.length; i++) {
  numList[i] = (newArray[i]);
}

console.log(numList);