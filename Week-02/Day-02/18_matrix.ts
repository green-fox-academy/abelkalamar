"use strict"
export { }

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let cols: number = 5;
let rows: number = 5;

let matrix = [];

    for (let i: number = 0; i < cols; i++){

        matrix [i] = 0;

        for ( let j: number = 0; j < rows; i++){
            matrix[i] = 0;
            
        }
    }

/*
for (let i: number = 0; i < size; i++) {
    matrix[i].push(0);
}

for (let i: number = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}
*/



