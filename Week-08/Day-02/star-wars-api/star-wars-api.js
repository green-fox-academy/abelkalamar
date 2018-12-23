const xhr = new XMLHttpRequest();
const url = 'https://swapi.co/api/people/';
const characters = document.querySelector('.charList');
const movieList = document.querySelector('.movieList');
const button = document.querySelector('button');

const clearer = (div) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

const selectChar = (data) => {
  characters.addEventListener('click', (event) => {
    clearer(movieList);
    let selectedChar = event.target.dataset.name;
    data.forEach(e => {
      if (e.name === selectedChar) {
        e.films.forEach(e => {
          sendHttpRequest('GET', e, (res) => {
            printMovies(res.title);
          })
        })
      }
    })
  })
}

const printChar = (list) => {
  list.forEach(e => {
    let charName = document.createElement('p');
    charName.textContent = e.name;
    charName.classList.add('charName');
    charName.setAttribute('data-name', e.name);
    characters.appendChild(charName);
  });
}

const printMovies = (title) => {
  let movieTitle = document.createElement('p');
  movieTitle.textContent = title;
  movieList.appendChild(movieTitle);
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
    const content = response.results;
    clearer(characters);
    clearer(movieList);
    printChar(content);
    selectChar(content);
  })
}



