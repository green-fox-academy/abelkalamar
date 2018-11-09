'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// just for white background
//ctx.fillStyle = 'white';
//ctx.fillRect(0, 0, canvas.width, canvas.height);

// draw the lines

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

function multyLines(num: number, color1: string, color2: string, lineDistance: number) {
  ctx.scale(1 / num, 1 / num);
  let w: number = canvas.width;
  let h: number = canvas.height;
  for (let i: number = 0; i < num; i++) {
    for (let j: number = 0; j < num; j++) {
      drawLines(lineDistance, color1, 1);
      drawLines(lineDistance, color2, 2);
      ctx.translate(w, 0);
    }
    ctx.translate(- num * w, h);
  }
}

multyLines(6, 'blue', 'green', 30);


