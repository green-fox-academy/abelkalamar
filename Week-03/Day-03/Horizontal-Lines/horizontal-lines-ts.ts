'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

let colors: string[] = ['green', 'yellow', 'red', 'purple', 'blue'];

function drawLine(x: number, y: number) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 50, y);
  ctx.strokeStyle = colors[Math.floor(Math.random() * (colors.length - 1))];
  ctx.stroke();
}

let x: number = 50;
let y: number = 50;
for (let i: number = 0; i < 3; i++) {
  drawLine(x, y);
  x += Math.floor(Math.random() * 300);
  y += Math.floor(Math.random() * 250);
}
