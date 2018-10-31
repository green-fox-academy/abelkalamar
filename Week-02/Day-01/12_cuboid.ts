'use strict';
export { };

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a: number = 10.45;
let b: number = 6.65;
let c: number = 5.92;

let surface: number = a * b;
let volume: number = surface * c;

console.log(`Surface Area = ${surface}`);
console.log(`Volume = ${volume}`);