// Add an item that says 'The Green Fox' to the asteroid list.
// Add an item that says 'The Lamplighter' to the asteroid list.
// Add a heading saying 'I can add elements to the DOM!' to the .container.
// Add an image, any image, to the container.

const list = document.querySelector('.asteroids');
const container = document.querySelector('.container');
const greenFox = document.createElement('li');
greenFox.innerText = 'The Green Fox';
list.appendChild(greenFox);

const lampLighter = document.createElement('li');
lampLighter.innerText = 'The Lamplighter';
list.appendChild(lampLighter);

const header = document.createElement('header');
header.innerText = 'I can add elements to the DOM!';
container.appendChild(header);

const image = document.createElement('img');
image.setAttribute('src', 'https://www.thoughtco.com/thmb/_wj4kFqJQiKnSn4naqyRaIzRZNM=/423x487/filters:no_upscale()/christmastree6-56a26c9f5f9b58b7d0ca1cdc.jpg');
container.appendChild(image);
