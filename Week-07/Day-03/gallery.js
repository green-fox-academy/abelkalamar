'use strict'

const images = ['images/mountains1.jpg', 'images/mountains2.jpg', 'images/mountains3.jpg', 'images/mountains4.jpg', 'images/mountains5.jpg', 'images/mountains6.jpg'];

const fillFooter = (imagelist) => {
  const footer = document.querySelector('.footer');
  imagelist.forEach((e, i) => {
    const img = document.createElement('img');
    img.setAttribute('src', imagelist[i]);
    footer.appendChild(img);
  })
}

fillFooter(images);


function gallery(imagelist) {
  let counter = 0;
  const mainImg = document.querySelector('.main-image');
  mainImg.setAttribute('src', imagelist[counter]);
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');

  right.onclick = () => {
    if (counter === imagelist.length - 1) {
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

const buttons = document.querySelectorAll('.footer img');
buttons.forEach(e => {
  e.onclick = () => {
    mainImg.setAttribute('src', e.getAttribute('src'));
  }
})

}

gallery(images);

