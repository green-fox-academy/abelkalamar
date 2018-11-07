'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawToCenter(x: number, y: number) {
  let centerX: number = canvas.width / 2;
  let centerY: number = canvas.height / 2;
  ctx.strokeStyle = "yellow";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(centerX, centerY);
  ctx.stroke();
}

let x: number = 0;
let y: number = 0;
let lineDistance: number = 20;

for (let i: number = 0; i <= (canvas.width / lineDistance) ; i++) {
  if (x <= canvas.width) {
    drawToCenter(x, 0);
    drawToCenter(x, canvas.height);
  }
  if (y <= canvas.height) {
    drawToCenter(0, y);
    drawToCenter(canvas.width, y);
  }
  x += lineDistance;
  y += lineDistance;
}

// Ugly solution:
/*
for (let i: number = 0; i <= (canvas.width/lineDistance) ; i++) {
  drawToCenter(x, y);
  x += lineDistance;
  if(x > canvas.width) {
    x = 0;
    for (let j: number = 0; j <= (canvas.height/lineDistance) ; j++) {
      drawToCenter(x, y);
      y += lineDistance;
      if(y > canvas.height) {
        y = canvas.height;
        for (let k: number = 0; k <= (canvas.width/lineDistance) ; k++) {
          drawToCenter(x, y);
          x += lineDistance;
          if(x > canvas.width) {
            x = canvas.width;
            y = 0;
            for (let l: number = 0; l <= (canvas.height/lineDistance) ; l++) {
              drawToCenter(x, y);
              y += lineDistance;
            }
          }
        }
      }
    }
  }
}
*/

