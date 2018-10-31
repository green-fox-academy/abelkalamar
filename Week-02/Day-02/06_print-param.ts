'use strict';
export { };

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...nums: any[]): any {
  for (let i: number = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }
}

printParams(56, 77, 'HELLO ', 34, 54, true);