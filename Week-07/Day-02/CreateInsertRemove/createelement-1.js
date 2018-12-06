// Add an item that says 'The Green Fox' to the asteroid list.
// Add an item that says 'The Lamplighter' to the asteroid list.
// Add a heading saying 'I can add elements to the DOM!' to the .container.
// Add an image, any image, to the container.

const list = document.querySelector('.asteroids');
const greenFox = document.createElement('li');
greenFox.innerText = 'The Green Fox';
list.appendChild(greenFox);

const lampLighter = document.createElement('li');
lampLighter.innerText = 'The Lamplighter';
list.appendChild(lampLighter);

