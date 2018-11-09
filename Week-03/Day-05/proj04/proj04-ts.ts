'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
//ctx.translate(canvas.width / 2, canvas.height / 2);


function drawTriangle(starX: number, starY: number, size: number) {
  let m: number = size / 2 * (Math.tan(60/(180/Math.PI)));
  ctx.beginPath()
  ctx.moveTo(starX, starY);
  ctx.lineTo(size / 2, m);
  ctx.lineTo(- size, 0);
  ctx.lineTo(size / 2, - m);
  ctx.stroke(); 
  console.log(m);
}

drawTriangle(250, 50, 50);


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


