export {}
'use strict';

let lineCount: number = 20;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let star: string = "*";
let spaceNum: number = lineCount;
let decrease: number = lineCount;

for ( let i:number = 1; i <= lineCount; i ++){
    if (lineCount % 2 == 0){
        if (decrease < 0){
        break;
        }

        if(i <= lineCount/2){
        let spc: string = (" ").repeat(spaceNum);
        console.log(spc + star);
        star += "**";
        spaceNum --;   
        } else {
        spaceNum ++;
        let spc: string = (" ").repeat(spaceNum);
        let addStar: string = ("*").repeat(decrease - 1);
        console.log(spc + addStar);
        decrease -= 2;
        }
    } else if(lineCount % 2 !== 0){
        if (decrease < 0){
            break;
        }
        if(i <= lineCount/2){
            let spc: string = (" ").repeat(spaceNum);
            console.log(spc + star);
            star += "**";
            spaceNum --;   
        } else {
            let spc: string = (" ").repeat(spaceNum);
            let addStar: string = ("*").repeat(decrease);
            console.log(spc + addStar);
            decrease -= 2;
            spaceNum ++;
        }
    }
}