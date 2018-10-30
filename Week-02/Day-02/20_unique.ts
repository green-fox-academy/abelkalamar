"use strict"
export{}

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr: number[]) {
    let new = {};
    return arr.filter(function(e) {
        return new.hasOwnProperty(e) ? false : (new[e] = true);
    })
}

//  Example
//console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

/*
function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
console.log(uniq([12, 14, 12, 14, 25, 26]));
*/