'use strict';
export { };

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

let array: any[] = [0, 3, 55, 3, 'hello', 0, 53, 0, 'hello', 3];

function uniq(arr: any[]): any[] {
  let uniqArr: any[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == i) {
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr;
}

console.log(uniq(array));