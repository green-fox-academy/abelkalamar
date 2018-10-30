"use strict"
export{}

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

let array: any[] = [0, 3, 55, 3, 23, 0, 53, 0, 3];



function uniq(arr: any[]){
    let uniqArr: any[] = [];
    for(let i: number = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i]) == i){
            uniqArr.push(arr[i]);
        } 
    }
    console.log(uniqArr);
}

uniq(array);