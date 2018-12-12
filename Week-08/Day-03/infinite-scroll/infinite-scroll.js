let scrollThreshold = 1000;
const divCounts = 10;
let currentScrollY = 0;
const main = document.querySelector('.container');


const createDivs = () => {
  for (let i = 0; i < divCounts; i++) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let div = document.createElement('div');
    div.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue}`);
    main.appendChild(div);
  }
}
createDivs();

const createUpperDivs = () => {
  for (let i = 0; i < divCounts; i++) {
    const firstDiv = document.querySelectorAll('div')[0];
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let newDiv = document.createElement('div');
    newDiv.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue}`);
    main.insertBefore(newDiv, firstDiv);
  }
}

window.addEventListener('scroll', () => {
  currentScrollY = scrollY;
  if (currentScrollY >= scrollThreshold) {
    createDivs();
  } else if (window.scrollY === 0) {
    createUpperDivs();
    window.scrollTo(0, 2000);
  }
})

