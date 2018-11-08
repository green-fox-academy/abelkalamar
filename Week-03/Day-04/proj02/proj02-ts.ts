'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);


function drawIt(lineDistance: number, color: string, direction: number): void {
  ctx.strokeStyle = color;
  ctx.beginPath();
  let startX: number = 0;
  let startY: number = 0;
  let parts: number = 4;
  let newWidth = canvas.width / parts * 2;
  let newHeight = canvas.height / parts * 2;
  let newLineDist = lineDistance / parts * 2;  
  for (let i: number = 0; i < newWidth; i += newLineDist) {
    if (direction === 1) {
      ctx.moveTo(i, 0);
      ctx.lineTo(newWidth, i);
    } else {
    ctx.moveTo(0, i);
    ctx.lineTo(i, newHeight);
    }
  }
  ctx.stroke();
}
drawIt(30, 'purple', 1);
drawIt(30, 'green', 2);
