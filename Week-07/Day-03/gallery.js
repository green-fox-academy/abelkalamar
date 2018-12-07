'use strict'

const images = ['images/mountains1.jpg', 'images/mountains2.jpg', 'images/mountains3.jpg', 'images/mountains4.jpg', 'images/mountains5.jpg', 'images/mountains6.jpg'];

function gallery(imagelist) {
  let counter = 0;
  const mainImg = document.querySelector('.main-image');
  mainImg.setAttribute('src', imagelist[counter]);
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');

  right.onclick = () => {
    if(counter === imagelist.length - 1) {
      counter = -1;
    }
    counter++;
    mainImg.setAttribute('src', imagelist[counter]);
  }

  left.onclick = () => {
    if (counter === 0) {
      counter = imagelist.length;
    }
    counter--;
    mainImg.setAttribute('src', imagelist[counter]);
  }

}

gallery(images);

// let counter = 0;
// const mainImg = document.querySelector('.main-image');
// mainImg.setAttribute('src', images[counter]);
// const left = document.querySelector('.left');
// const right = document.querySelector('.right');


// right.onclick = () => {
//   counter++;
//   console.log(counter);
//   mainImg.setAttribute('src', images[counter]);
//   mainImg.getAttribute('src');
// }

// left.onclick = () => {
//   if (counter === 1) {
//     counter
//   }
//   counter--;
//   console.log(counter);
//   mainImg.setAttribute('src', images[counter]);
//   mainImg.getAttribute('src');
// }
