const xhr = new XMLHttpRequest();
const url = 'https://swapi.co/api/people/';
const main = document.querySelector('#main');

xhr.onload = () => {
  if (xhr.status === 200) {
    const content = JSON.parse(xhr.responseText);
    console.log(content);
    // content.results.forEach((e, i) => {
    //   const char = document.createElement('button');
    //   character.innerHTML = content.results[i].name;
    //   main.appendChild(char);
    // })
  }
}

const button = document.querySelector('button');

button.onclick = () => {
  const inputValue = document.querySelector('#full-name');
  let name = inputValue.value;
  // console.log(name);
  xhr.open('GET', `${url}?search=${name}`);
  xhr.send();
}



