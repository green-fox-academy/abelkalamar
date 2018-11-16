'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let h = canvas.height;
let w = canvas.width;

function drawTriangle(size: number, startX: number, startY: number): void {
  ctx.beginPath()
  ctx.strokeStyle = 'yellow';
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + size, startY);
  ctx.lineTo(startX + size / 2, startY + size);
  ctx.lineTo(startX, startY);
  ctx.stroke();
  
}
//drawTriangle(w, 0, 0);
/*
function drawTriangles(num: number, startX: number, startY: number) {
  if (num === 0) return num;
  else {
    drawTriangle()
  }
}*/

function multiplyTriangles(depth: number, startX: number, startY: number): number {
  if (depth === 0) return depth;
  else {
  drawTriangle(w / (2 ** depth), startX, startY);
  drawTriangle(w / (2 ** depth), startX + w / (2 ** depth), startY);
  drawTriangle(w / (2 ** depth), startX + (w / 2 / (2 ** depth)), startY + w / (2 ** depth));
  multiplyTriangles(depth - 1, 0, 0);
  return multiplyTriangles(depth - 1, w / 2, 0);
  //return multiplyTriangles(depth - 1, w / 4, h / 2);
  }
}
multiplyTriangles(6);

