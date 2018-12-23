const xhr = new XMLHttpRequest();
const url = 'https://swapi.co/api/people/';
const characters = document.querySelector('.charList');
const button = document.querySelector('button');

const clearer = () => {
  while (characters.firstChild) {
    characters.removeChild(characters.firstChild);
  }
}

const selectChar = () => {
  characters.addEventListener('click', (event) => {
    console.log(event.target);
  })
}

const printChar = (list) => {
  list.forEach(e => {
    let charName = document.createElement('p');
    charName.textContent = e.name;
    characters.appendChild(charName);
  });
}

const turnPage = (nextPage) => {
  while (nextPage) {
    console.log('ok');
    const newXHR = new XMLHttpRequest();
    newXHR.onload = () => {
      if (newXHR.status === 200) {
        const nextContent = JSON.parse(newXHR.responseText);
        printChar(nextContent.results);
        newXHR.open('GET', `${content.next}`);
        newXHR.send();
      }
    }
  }
}

const sendHttpRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();
}

button.onclick = () => {
  const inputValue = document.querySelector('#full-name');
  let name = inputValue.value;
  sendHttpRequest('GET', `${url}?search=${name}`, (response) => {
    const content = response;
    console.log(content);
    clearer();
    printChar(content.results);
    selectChar();
  })
}



