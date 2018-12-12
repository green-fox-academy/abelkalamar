const button = document.querySelector('button');
let counter = 0;

button.addEventListener('click', (event) => {
  counter++;
  if (counter > 3 && event.timeStamp > 5000) {
    button.textContent = '5 seconds elapsed and clicked 3 times';
  }
})