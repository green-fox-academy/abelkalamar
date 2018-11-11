'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let w: number = 250;

function drawHexagon(startX: number, startY: number, size: number): void {
  let m: number = 2 * size * (Math.cos(30 / (180 / Math.PI)));
  let x: number = size * (Math.sin(30 / (180 / Math.PI)));
  ctx.beginPath()
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + size, startY);
  ctx.lineTo(startX + size + x, startY + m / 2);
  ctx.lineTo(startX + size, startY + m);
  ctx.lineTo(startX, startY + m);
  ctx.lineTo(startX - x, startY + m / 2);
  ctx.lineTo(startX, startY);
  ctx.stroke();
}

//drawHexagon(80, 150, 20);

function multiplyHexagon(startX: number, startY: number, size: number, rows: number) {
  let m: number = size / 2 * (Math.tan(60 / (180 / Math.PI)));
  let x: number = size * (Math.sin(30 / (180 / Math.PI)));
  let firstNum: number = Math.ceil(rows / 2);
  for (let i = 0; i < rows; i++) {
    if (i < (rows / 2)) {
      for (let j = 0; j < (i + firstNum); j++) {
        drawHexagon(startX, startY, size);
        startY += 2 * m;
      }
      startX += size + x;
      startY -= (i + firstNum) * 2 * m + m;
    } else {
      startY += 2 * m;
      for (let j = 0; j < (2 * rows - firstNum - i); j++) {
        drawHexagon(startX, startY, size);
        startY += 2 * m;
      }
      startX += size + x;
      startY -= 2 * (2 * rows - firstNum - i) * m + m;
    }
  }
}
multiplyHexagon(90, 150, 20, 11);

