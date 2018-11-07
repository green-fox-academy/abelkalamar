'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors: string[] = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'grey', 'black'];


for (let i: number = 0; i < 4; i++) {
  let x: number = Math.floor(Math.random() * 400);
  let y: number = Math.floor(Math.random() * 400);
  let a: number = Math.floor(Math.random() * 100);
  let b: number = Math.floor(Math.random() * 150);
  ctx.fillStyle = colors[Math.floor(Math.random() * colors.length - 1)];
  ctx.fillRect(x , y , a, b);
  x += Math.floor(Math.random() * 100);
  y += Math.floor(Math.random() * 100);
  a += Math.floor(Math.random() * 50);
  b += Math.floor(Math.random() * 50);
  if (x > canvas.width) {
    x -= canvas.width;
  }
  if (y > canvas.height) {
    y -= canvas.height;
  }
}


