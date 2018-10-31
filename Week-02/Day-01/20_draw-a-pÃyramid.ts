'use strict';
export { };

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 10;
let star: string = '*';
let spaceNum: number = lineCount;

for (let i: number = 1; i <= lineCount; i++) {
  let spc: string = (' ').repeat(spaceNum);
  console.log(spc + star);
  star += '**';
  spaceNum--;
}