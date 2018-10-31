'use strict';
export { };

// Swap the values of these variables
let a: number = 123;
let b: number = 526;

function swap(a: any, b: any) {
    let c: any = b;
    b = a;
    a = c;
    console.log(a);
    console.log(b);
}

swap(a, b);