const createCandies = document.querySelector('.create-candies');
const candieCount = document.querySelector('.candies');
const candieCreateRate = document.querySelector('.speed');
const buyLollipop = document.querySelector('.buy-lollypops');
const lollipopCount = document.querySelector('.lollypops');

let myCandies = 0;
let myLollipops = '';
let myLollipopCounter = 0;
let candiesPerSec = 0;

createCandies.addEventListener('click', () => {
  myCandies += 100;
  candieCount.textContent = myCandies;
})

buyLollipop.addEventListener('click', () => {
  if (myCandies >= 100) {
    myLollipops += '🍭';
    myLollipopCounter++;
    lollipopCount.textContent = myLollipops;
    myCandies -= 100;
    candieCount.textContent = myCandies;
    if (myLollipopCounter >= 10) {
      candiesPerSec++;
      myLollipopCounter = 0;
    }
    candieCreateRate.textContent = candiesPerSec;

  }
})



