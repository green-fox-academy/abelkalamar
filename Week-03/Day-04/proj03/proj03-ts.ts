'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.translate(canvas.width / 2, canvas.height / 2);

function drawLines(lineDistance: number, color: string): void {
  let y: number = canvas.height / 2;
  ctx.beginPath();
  ctx.strokeStyle = color;
  for (let i: number = 0; i < (canvas.width / 2); i += lineDistance) {
    ctx.moveTo(i, 0);
    ctx.lineTo(0, y);
    y -= lineDistance;
  }
  ctx.stroke();
}

function rotateLines(lineDistance: number, color: string):void {
  ctx.beginPath();
  ctx.strokeStyle = color;
  for (let i: number = 0; i < 4; i++){
    ctx.rotate(90 * i/(180/Math.PI));
    drawLines(lineDistance, color);
  }
  ctx.stroke();
}

rotateLines(10, 'green');




