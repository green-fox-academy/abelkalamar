'use strict'

// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored

const section = document.querySelector('.section');

const createElements = (parent) => {
  for(let i = 2; i < 101; i++) {
    let div = document.createElement('div');
    div.textContent = i;
    parent.appendChild(div);
  }
}

createElements(section);

