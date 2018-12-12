const button = document.querySelector("button");
const text = document.querySelector(".text");

const printText = () => {
  setInterval(() => {
    text.textContent = 'this is my text';
  }, 2000);
}

button.addEventListener('click', printText);
