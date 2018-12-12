const createCandies = document.querySelector('.create-candies');
const candieCount = document.querySelector('.candies');
const candieCreateRate = document.querySelector('.speed');
const buyLollipop = document.querySelector('.buy-lollypops');
const lollipopCount = document.querySelector('.lollypops');
const candyRain = document.querySelector('.candy-machine');

let myCandies = 0;
let myLollipops = '';
let myLollipopCounter = 0;
let candiesPerSec = 0;


const addCandies = () => {
  myCandies++;
  candieCount.textContent = myCandies;
}

const periodCandies = () => {
  myCandies += candiesPerSec;
  candieCount.textContent = myCandies;
}

const candyMachine = () => {
  candiesPerSec = candiesPerSec * 10;
  candieCreateRate.textContent = candiesPerSec;
}

createCandies.addEventListener('click', addCandies);

buyLollipop.addEventListener('click', () => {
  if (myCandies >= 100) {
    myLollipops += '🍭';
    myLollipopCounter++;
    lollipopCount.textContent = myLollipops;
    myCandies -= 100;
    candieCount.textContent = myCandies;
  }
})

buyLollipop.addEventListener('click', () => {
  if (myLollipopCounter >= 10) {
    candiesPerSec++;
    myLollipopCounter = 0;
  }
  candieCreateRate.textContent = candiesPerSec;
})

// buyLollipop.addEventListener('click', () => {
//   if (myLollipopCounter === 9) {
//     clearInterval(interval);
//   }
//   if (myLollipopCounter === 10) {
//     let interval = setInterval(periodCandies, 1000);
//   }
// })

candyRain.addEventListener('click', candyMachine);

myCandies = 2000;