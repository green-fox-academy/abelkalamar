'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

ctx.fillStyle = 'green';

let aSide: number = 10;
let bSide: number = 10;

ctx.fillRect((canvas.width / 2) - (aSide / 2), (canvas.height / 2)  - (bSide / 2), aSide, bSide);

