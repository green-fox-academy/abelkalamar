"use strict"
export {}

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function bubble(arr){
    arr.sort(function(a, b){
        return a - b; 
    });
    console.log(arr);
}

function advancedBubble(arr: any[]){
    if(arr[1]){
        arr[0].sort(function(e, i){
            return i - e;
        })
    } else {
        arr[0].sort(function(e, i){
            return e - i; 
        });
    }
    console.log(arr[0]);
}

bubble([34, 100, 30, 1100, 12, 24, 9, 5]);
advancedBubble([[36, 50, 6, 7, 12, 1, ], true]);

