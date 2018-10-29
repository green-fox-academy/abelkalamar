'use strict';

let lineCount: number = 30;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let result:string = "*"
for ( let i:number = 1; i <= lineCount; i ++){
    console.log(result);
    result += "*";
}