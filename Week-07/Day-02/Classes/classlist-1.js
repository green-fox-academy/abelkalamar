// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
// If the first p has an 'apple' class, replace cat's content with 'dog'
// Make apple red by adding a .red class
// Make balloon less balloon-like (change its shape)

const paragraph = document.querySelectorAll('p');
const apple = document.querySelector('.apple');
const cat = document.querySelector('.cat');
const balloon = document.querySelector('.balloon');
console.log(apple);
console.log(cat);


if (paragraph[3].classList.contains('dolphin')) {
  apple.textContent = 'pear';
}

if (paragraph[0].classList.contains('apple')) {
  cat.innerText = 'dog';
}

apple.classList.add('red');

balloon.classList.replace('balloon', 'pear');

