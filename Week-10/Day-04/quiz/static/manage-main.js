'use strict'

const sendHTTPRequest = (method, url) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();
  xhr.onload = (response) => {
    if (xhr.status === 200) {
      response = JSON.parse(xhr.responseText);
      createLayout(response);
    }
  }
}

sendHTTPRequest('GET', '/questions');


const createLayout = (data) => {
  data.forEach(row => {
    const div = document.createElement('div');
    div.setAttribute('class', `question`);
    const span = document.createElement('span');
    span.textContent = row.question;
    span.setAttribute('class', `question${row.id}`);
    const link = document.createElement('a');
    link.setAttribute('class', `question${row.id}`);
    link.textContent = 'delete';
    const parentDiv = document.querySelector('.manage-questions');
    div.appendChild(span);
    div.appendChild(link);
    parentDiv.appendChild(div);
  });
}