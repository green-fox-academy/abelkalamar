'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let size: number = 10;
let addSize: number = 5;
let numSquare: number = 15;
let x: number = 10;
let y: numebr = 10;

for (let i: number = 0; i <= numSquare; i++) {
  ctx.fillStyle = "purple";
  ctx.fillRect(x, y, size, size);
  x += size;
  y += size;
  size += addSize;
}