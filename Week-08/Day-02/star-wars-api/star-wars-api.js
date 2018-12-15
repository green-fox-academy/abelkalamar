const xhr = new XMLHttpRequest();
const url = 'https://swapi.co/api/people/';
const main = document.querySelector('.main');

const clearer = () => {
}

xhr.onload = () => {
  if (xhr.status === 200) {
    const content = JSON.parse(xhr.responseText);
    console.log(content.results);
    content.results.forEach(e => {
      let charName = document.createElement('p');
      charName.textContent = e.name;
      console.log(charName);
      
      main.appendChild(charName);
    });
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
  xhr.open('GET', `${url}?search=${name}`);
  xhr.send();
}



