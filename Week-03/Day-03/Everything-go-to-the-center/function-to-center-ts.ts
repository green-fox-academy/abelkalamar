'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
//

function drawToCenter(x: number, y: number) {
  let centerX: number = canvas.width / 2;
  let centerY: number = canvas.height / 2;
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(centerX, centerY);
  ctx.stroke();
}

drawToCenter(10, 40);