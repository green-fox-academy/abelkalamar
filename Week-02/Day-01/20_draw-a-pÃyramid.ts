'use strict';
export { };

let lineCount: number = 30;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let star: string = '*';
let spaceNum: number = lineCount;

for (let i: number = 1; i <= lineCount; i++) {
  let spc: string = (' ').repeat(spaceNum);
  console.log(spc + star);
  star += '**';
  spaceNum--;
}