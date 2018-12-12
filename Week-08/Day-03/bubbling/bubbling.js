// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//        - the nav buttons (up, down, left, right) move the background by 10px
//        - the zoom buttons increase/decrease the image by 20%
//        - attach only two event listeners to the nav element
//        - one for navigation
//        - one for zooming

const buttons = document.querySelectorAll('button');
const navigation = document.querySelector('nav');
const img = document.querySelector('.img-inspector');
let posX = 0;
let posY = 0;
let size = 200;

navigation.addEventListener('click', (event) => {
  switch (event.target.getAttribute('data-direction')) {
    case 'up':
      if (posY > -240) {
        posY -= 10;
      }
      break;
    case 'down':
      if (posY < 0) {
        posY += 10;
      }
      break;
    case 'left':
      if (posX > -500) {
        posX -= 10;
      }
      break;
    case 'right':
      if (posX < 0) {
        posX += 10;
      }
      break;
    case 'in':
      size += 20;
      break;
    case 'out':
      if (size > 20) {
        size -= 20;
      }
      break;
  }
  img.setAttribute('style', `background-position-x: ${posX}px; background-position-y: ${posY}px; background-size: ${size}%`);
})


