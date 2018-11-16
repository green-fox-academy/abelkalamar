'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let h = canvas.height;
let w = canvas.width;

function drawLines(n: number): void {
  ctx.beginPath()
  ctx.strokeStyle = 'yellow';
  for (let i = 1; i < 3; i++) {
    ctx.moveTo(0, i * h / 3);
    ctx.lineTo(w, i * h / 3);
    ctx.moveTo(i * w / 3, 0);
    ctx.lineTo(i * w / 3, h);
    ctx.stroke();
  }
}
drawLines(3);

function recursiveLines(n: number) {

}
