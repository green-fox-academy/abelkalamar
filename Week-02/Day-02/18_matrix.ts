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

let cols: number = 4;
let rows: number = 4;

let matrix: number[] = [];

function drawMatrix(cols){

    for (let i: number = 0; i < cols; i++){
        for ( let j: number = 0; j < rows; i++){
            matrix[i][j] = 0;
            console.log(i);
            console.log(j);
        }
    }
}
/*
for (let i: number = 0; i < size; i++) {
    matrix[i].push(0);
}

*/

for (let i: number = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}



