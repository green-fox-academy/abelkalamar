'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
//ctx.translate(canvas.width / 2, canvas.height / 2);

/* let startX: number = w / 2;
let startY: number = 20; */
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

//drawTriangle(250, 50, 20);


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



/*                  
function drawLines(lineDistance: number, color: string): void {
  let y: number = canvas.height / 2;
  let i: number = 0;
  ctx.beginPath();
  ctx.strokeStyle = color;
  function myLoop () {
    setTimeout(function () {
      ctx.moveTo(i, 0);
      ctx.lineTo(0, y);         
      ctx.stroke();
      i += lineDistance;
      y -= lineDistance;
      if (i < (canvas.width / 2)) {            
        myLoop();             
      }                       
   }, 30)
  }
  myLoop();
}

function rotateLines(lineDistance: number, color: string):void {
  for (let j: number = 0; j < 4; j++){
    drawLines(lineDistance, color)
    ctx.rotate(90 * - j/(180/Math.PI));
  }
}

rotateLines(10, 'green');

*/


