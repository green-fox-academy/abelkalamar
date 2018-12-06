// Write the image's url to the console.
// Replace the image with a picture of your favorite animal.
// Make the link point to the Green Fox Academy website.
// Disable the second button.
// Replace its text with 'Don't click me!'.

const image = document.querySelector('img');
console.log(image.getAttribute('src'));

const picture = document.querySelector('img');
picture.setAttribute('src', 'dog.jpg');

const link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');

const button = document.querySelector('.this-one');
button.setAttribute('disabled', 'disabled');
button.textContent = 'Don\'t click me!';
