const createCandies = document.querySelector('.create-candies');
const candieCount = document.querySelector('.candies');
let myCandies = 0;

createCandies.addEventListener('click', () => {
  myCandies++;
  candieCount.textContent = myCandies;
})