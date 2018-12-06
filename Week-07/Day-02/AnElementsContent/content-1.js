// 1)  Fill every paragraph with the last one's content.
// 2)  Do the same again, but you should keep the cat strong.

const content = document.querySelector('.animals');
const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(e => {
//   e.innerText = content.textContent;
// })

paragraphs.forEach(e => {
  e.innerHTML = content.innerHTML;
})
console.log(content.innerHTML);
console.log(paragraphs);