'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);


function drawIt(startX: number, startY: number, lineDistance: number, color: string, direction: number): void {
  ctx.strokeStyle = color;
  ctx.beginPath();
  let parts: number = 4;
  let newWidth = canvas.width / parts;
  let newHeight = canvas.height / parts;
  let newLineDist = lineDistance / parts;  
  for (let i: number = 0; i < canvas.width * 2; i += lineDistance) {
    if (direction === 1) {
      ctx.moveTo(startX, 0);
      ctx.lineTo(canvas.width, startY);
      startX += lineDistance;
      startY += lineDistance;
    } else {
      ctx.moveTo(0, startY);
      ctx.lineTo(startX, canvas.height);
      startX += lineDistance;
      startY += lineDistance;
    }
  }
  ctx.stroke();
}
drawIt(0, 0, 30, 'purple', 1);
drawIt(0, 0, 30, 'green', 2);
