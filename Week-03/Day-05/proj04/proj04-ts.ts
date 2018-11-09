'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let w: number = canvas.width;

function drawTriangle(startX: number, startY: number, size: number): void {
  let m: number = size / 2 * (Math.tan(60 / (180 / Math.PI)));
  ctx.beginPath()
  ctx.moveTo(startX, startY);
  ctx.lineTo((startX + size / 2), (startY + m));
  ctx.lineTo(startX - size / 2, (startY + m));
  ctx.lineTo(startX, startY);
  ctx.stroke();
}

function multiplyTriangle(startX: number, startY: number, size: number, rows: number,){
  let m: number = size / 2 * (Math.tan(60 / (180 / Math.PI)));
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= i; j++) {
      drawTriangle(startX, startY, size);
      startX += size;
      console.log('x:' + startX);
    } 
    startX -= ((i + 1) * size + (size / 2));
    startY += m;
    console.log('y:' + startY);
  }
}

multiplyTriangle(250, 100, 20, 15);
