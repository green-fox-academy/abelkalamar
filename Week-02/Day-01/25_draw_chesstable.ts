'use strict';
export { };

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let obj: string = '% ';
let lineCount: number = 10;
let space: string = ' ';

for (let i: number = 1; i <= lineCount; i++) {
    if (i % 2 === 0) {
        console.log(obj.repeat(5));
    } else {
        console.log(space + obj.repeat(5));
    }
}
