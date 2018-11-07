'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

let colors: string[] = ['#FFFFFF', '#D8D8D8', '#A8A8A8', 'yellow', '#909090', '#E8E8E8', 'grey', '#606060'];

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i: number = 0; i < 500; i++) {
  let x: number = Math.floor(Math.random() * canvas.width);
  let y: number = Math.floor(Math.random() * canvas.height);
  let size: number = Math.floor(Math.random() * 3);
  ctx.fillStyle = colors[Math.floor(Math.random() * colors.length - 1)];
  ctx.fillRect(x , y , size, size);
}
