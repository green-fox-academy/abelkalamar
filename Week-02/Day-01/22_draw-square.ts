'use strict';
export {}

let lineCount: number = 10;

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

let obj: string = "%";
let spaceNum: number = 3;
let space: string = " ";
let columns: number = 10;


for ( let i: number = 0; i <= lineCount; i ++){
    if (i == 0 || i == lineCount) {
        console.log(obj.repeat(columns));
    } else {
        console.log(obj + space.repeat(columns - 2) + obj);
    }
}
