'use strict';
export { };

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 10;
let obj: string = '%';
let space: string = ' ';
let columns: number = 10;


for (let i: number = 0; i <= lineCount; i++) {
  if (i == 0 || i == lineCount) {
    console.log(obj.repeat(columns));
  } else {
      console.log(obj + space.repeat(columns - 2) + obj);
    }
}
