'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
let colors: string[] = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'grey'];

function drawSquare(size: number) {
  ctx.strokeRect((canvas.width / 2 - size / 2), (canvas.height / 2 - size / 2), size, size);
  ctx.stroke();
  ctx.strokeStyle = colors[Math.floor(Math.random() * (colors.length - 1))];

}

drawSquare(200);
drawSquare(100);
drawSquare(50);
