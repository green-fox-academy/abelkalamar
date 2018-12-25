'use strict';

const myDiv = document.querySelector('div');
const leftEvent = new CustomEvent('left-side-click');
const rightEvent = new CustomEvent('right-side-click');

myDiv.addEventListener('click', (event) => {
  console.log(event);

  if (event.clientX > 0 && event.clientX <= 200) {
    event.target.dispatchEvent(leftEvent);
  } else if (event.clientX > 200 && event.clientX <= 400) {
    event.target.dispatchEvent(rightEvent);
  }
})

myDiv.addEventListener('left-side-click', (ev) => {
  ev.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});


