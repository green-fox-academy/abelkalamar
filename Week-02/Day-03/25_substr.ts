'use strict';
export {}

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one


function subStr(str: string, keyword: string) : number {
    if (str.indexOf(keyword) !== -1){
        return str.indexOf(keyword);
    } else return -1;
}

console.log(subStr("itt keress faterom", "tesa"));
