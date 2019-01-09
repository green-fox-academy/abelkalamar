'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', `/user${window.location.pathname}`);
xhr.send();
xhr.onload = () => {
  const data = JSON.parse(xhr.responseText);
  showDetails(data[0]);
}

const showDetails = (data) => {
  const parentDiv = document.querySelector('.content');
  const ul = document.createElement('ul');
  const idLi = document.createElement('li');
  const userLi = document.createElement('li');
  const passLi = document.createElement('li');
  const ageLi = document.createElement('li');
  const genderLi = document.createElement('li');
  idLi.textContent = `ID: ${data.id}`;
  userLi.textContent = `Username: ${data.username}`;
  passLi.textContent = `Password: ${data.password}`;
  ageLi.textContent = `Age: ${data.age}`;
  genderLi.textContent = `Gender: ${data.gender}`;
  ul.appendChild(idLi);
  ul.appendChild(userLi);
  ul.appendChild(passLi);
  ul.appendChild(ageLi);
  ul.appendChild(genderLi);
  parentDiv.appendChild(ul);
}