'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


function draw3Squares(x: number, y: number) {
  let colors: string[] = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'grey', 'black']; 
  for (let i: number = 0; i < 3; i++){
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length - 1)];
    x = Math.floor(Math.random() * (canvas.width - 50));
    y = x = Math.floor(Math.random() * (canvas.height - 50));
  }
}

draw3Squares(300, 200);