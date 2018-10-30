"use strict"
export {}
// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console



let ai: number[] = [3, 4, 5, 6, 7];
/*
function add(array: number[]){

}
*/
let sum: number = 0;

ai.forEach((element, index, array) => {
    sum += ai[index];
});

console.log(sum);



/*
let reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(ai.reduce(reducer));
*/