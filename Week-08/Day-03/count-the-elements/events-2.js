//On the click of the button,
//Count the items in the list
//And display the result in the result element.

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const list = document.querySelectorAll('li');
  const result = document.querySelector('.result');
  result.textContent = `This list has ${list.length} items.`;
})