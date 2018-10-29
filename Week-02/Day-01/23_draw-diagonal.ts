export {}

'use strict';

let lineCount: number = 11;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let obj: string = "%";
let spaceNum: number = 3;
let space: string = " ";
let spaceBef: number = 0;
let spaceAft: number = lineCount - spaceBef - 3;


for ( let i: number = 1; i <= lineCount; i ++){
    if (i == 1 || i == lineCount) {
        console.log(obj.repeat(lineCount));
    } else {
        if (spaceAft < 0){
            break;
        }
        console.log(obj + space.repeat(spaceBef) + obj + space.repeat(spaceAft) + obj);
        spaceBef ++;
        spaceAft --;
    }
}