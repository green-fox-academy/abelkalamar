// 1) replace the list items' content with items from this list:
//['apple', 'banana', 'cat', 'dog']
//2) change the <ul> element's background color to 'limegreen'
//- use css class to change the color instead of the style property

const list = document.querySelectorAll('li');
// console.log(list);

const contents = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < list.length; i++) {
  list[i].innerText = contents[i];
  console.log(list[i].innerText);
}
