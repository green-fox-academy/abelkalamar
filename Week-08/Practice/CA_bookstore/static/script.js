'use strict'

const xhr = new XMLHttpRequest();

xhr.open('GET', '/author');
xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    authorTable(response);
  }
}
xhr.send();

const table = document.querySelector('.table');

const authorTable = (data) => {
  const tr = document.createElement('tr');
  const thID = document.createElement('th');
  const thName = document.createElement('th');
  const thCountry = document.createElement('th');
  const thHome = document.createElement('th');
  const thButton = document.createElement('th')
  thID.textContent = 'ID';
  thName.textContent = 'Name';
  thHome.textContent = 'Home City';
  thCountry.textContent = 'Country';
  thButton.textContent = 'Delete';
  tr.appendChild(thID);
  tr.appendChild(thName);
  tr.appendChild(thCountry);
  tr.appendChild(thHome);
  tr.appendChild(thButton);
  table.appendChild(tr);
  data.forEach(e => {
    const trBody = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdName = document.createElement('td');
    const tdCountry = document.createElement('td');
    const tdHome = document.createElement('td');
    const tdButton = document.createElement('td');
    const button = document.createElement('button');
    tdId.textContent = e.aut_id;
    tdName.textContent = e.aut_name;
    tdCountry.textContent = e.country;
    tdHome.textContent = e.home_city;
    button.textContent = 'Delete';
    button.setAttribute('id', e.aut_id);
    trBody.appendChild(tdId);
    trBody.appendChild(tdName);
    trBody.appendChild(tdCountry);
    trBody.appendChild(tdHome);
    tdButton.appendChild(button);
    trBody.appendChild(tdButton);
    table.appendChild(trBody);
  });
}

table.addEventListener('click', (event) => {
  const deleteXHR = new XMLHttpRequest();
  deleteXHR.open('DELETE', '/author');
  deleteXHR.setRequestHeader('Content-Type', 'application/json');
  deleteXHR.send(JSON.stringify({
    aut_id: event.target.id
  }));
  deleteXHR.onload = () => {
    console.log(JSON.parse(deleteXHR.responseText));
  }
});

const form = document.querySelector('.post');
const { aut_id, aut_name, country, home_city } = form.elements;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXHR = new XMLHttpRequest();
  postXHR.open('POST', '/author');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    aut_id: aut_id.value,
    aut_name: aut_name.value,
    country: country.value,
    home_city: home_city.value
  }));
  postXHR.onload = () => {
    console.log(JSON.parse(postXHR.responseText));
  }
});

const deleteForm = document.querySelector('.delete');
deleteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const deleteXHR = new XMLHttpRequest();
  deleteXHR.open('DELETE', '/author');
  deleteXHR.setRequestHeader('Content-Type', 'application/json')
  deleteXHR.send(JSON.stringify({
    aut_id: deleteForm.elements.aut_id.value
  }));
  deleteXHR.onload = () => {
    console.log(JSON.parse(deleteXHR.responseText))
  }
})
