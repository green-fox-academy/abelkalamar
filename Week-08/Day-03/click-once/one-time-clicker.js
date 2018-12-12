// Create an event listener which logs the current timestamp to the console once the button is clicked.
// When the button is clicked for the second or any other times no event listener should be called.
// Try to solve this two different ways.

// 1st solution

const button = document.querySelector('button');
const logTimeStamp = (event) => {
  console.log(`The button pressed after ${event.timeStamp / 1000} seconds the page loaded.`);
  button.removeEventListener('click', logTimeStamp);
}
button.addEventListener('click', logTimeStamp);

// 2nd solution