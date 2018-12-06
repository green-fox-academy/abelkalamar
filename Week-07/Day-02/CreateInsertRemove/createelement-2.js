// Remove the king from the list.
// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content.

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

const listElem = document.querySelector('li');
const list = document.querySelector('ul'); 
list.removeChild(listElem);

planetData.forEach(e => {
  if (e.asteroid){
    let elem = document.createElement('li');
    elem.textContent = e.content;
    elem.setAttribute('class', e.category);
    list.appendChild(elem);
  }
})
