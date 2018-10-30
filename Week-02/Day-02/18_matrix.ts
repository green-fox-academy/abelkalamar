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

let size: number = 9;


let matrix = [];

    for (let i: number = 0; i < size; i++){

        matrix.push([]);

        matrix[i].push([]);
           
         for ( let j: number = 0; j < size; j++){
            if (i + j == (size - 1)) {
                matrix[i][j] = 1;
            } else {
            matrix[i][j] = 0;
                }
        }
    }

console.log(matrix);

