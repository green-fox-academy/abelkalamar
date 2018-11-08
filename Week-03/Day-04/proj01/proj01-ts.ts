'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawIt(lineDistance: number, color: string, direction: number): void {
  ctx.strokeStyle = color;
  ctx.beginPath();
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
drawIt(30,'purple', 1);
drawIt(30, 'green', 2);
