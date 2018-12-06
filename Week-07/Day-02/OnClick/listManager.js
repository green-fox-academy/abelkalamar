// 1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
// 2, Achive the same design by css
// 3, Try not to use css classes
// 4, Add some functionality to the buttons
//     - If "Up" is clicked the selection should move up by one
//     - If "Down" is clicked the selection should move down by one
//     - If "X" is clicked the selected item should be removed and the first item should be selected
//     - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
// 5, Check all the edge cases, no error should be printed to the console


const body = document.querySelector('body');
const leftList = document.createElement('div');
const rightList = document.createElement('div');
const buttons = document.createElement('div');
body.appendChild(leftList);


const list = document.createElement('ul');
leftList.appendChild(list);

const foods = ['bread', 'milk', 'orange', 'tomato'];

foods.forEach(e => {
  const elem = document.createElement('li');
  elem.textContent = e;
  list.appendChild(elem);
})

const buttons = ['Up', '>', 'X', 'Down'];

buttons.forEach(e => {
  const elem = document.createElement('li');
  elem.textContent = e;
  list.appendChild(elem);
})




