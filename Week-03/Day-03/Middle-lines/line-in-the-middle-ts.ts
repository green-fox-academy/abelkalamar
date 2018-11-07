
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.

ctx.beginPath();
ctx.moveTo(0, innerHeight/2);
ctx.lineTo(innerWidth, innerHeight/2);

ctx.strokeStyle = 'red';
ctx.stroke();

// draw a green vertical line to the canvas' middle.

ctx.beginPath();
ctx.moveTo(canvas.width/2, 0);
ctx.lineTo(canvas.width/2, canvas.height);

ctx.strokeStyle = 'green';
ctx.stroke();
