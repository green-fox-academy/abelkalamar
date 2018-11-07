'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let size: number = 40;
let x: number = size;
let y: number = 0;

for (let i: number = 0; i <= (canvas.width/size); i++) {
  ctx.fillStyle = 'blue';
  ctx.fillRect(x, y, size, size);
  
  for (let j: number = 0; j <= (canvas.width/size); j++) {
    x += size * 2;
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, size, size);
  }
  y += size;
  if(i % 2 === 0) {
    x = 0;
  } else {
    x = size;
  }
}

