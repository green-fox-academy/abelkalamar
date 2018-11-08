'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

import { drawLines } from ../proj01/proj01;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.scale(0.5, 0.5);

function drawLines(lineDistance: number, color: string, direction: number): void {
  ctx.beginPath();
  ctx.strokeStyle = color;
  for (let i: number = 0; i < canvas.width; i += lineDistance) {
    if (direction === 1) {
      ctx.moveTo(i, 0);
      ctx.lineTo(canvas.width, i);
    } else {
      ctx.moveTo(0, i);
      ctx.lineTo(i, canvas.height);
    }
  }
  ctx.stroke();
}



//function multyLines

drawLines(30, 'green', 1);
drawLines(30, 'purple', 2);

/* else {
  ctx.moveTo(0, i);
  ctx.lineTo(i, canvas.height);
}*/
ctx.translate(500, 500);
ctx.rotate(Math.PI);
