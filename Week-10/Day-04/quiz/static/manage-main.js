'use strict'

const sendHTTPRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();
  xhr.onload = (response) => {
    if (xhr.status === 200) {
      response = JSON.parse(xhr.responseText);
      callback(response);
    }
  }
}


const parentDiv = document.querySelector('.manage-questions');

const createLayout = (data) => {
  data.forEach(row => {
    const div = document.createElement('div');
    div.setAttribute('class', `question`);
    const span = document.createElement('span');
    span.textContent = row.question;
    span.setAttribute('class', `${row.id}`);
    const link = document.createElement('a');
    link.setAttribute('class', `delete`);
    link.setAttribute('data', `${row.id}`);
    link.textContent = 'delete';
    div.appendChild(span);
    div.appendChild(link);
    parentDiv.appendChild(div);
  });
}

sendHTTPRequest('GET', '/questions', createLayout);

parentDiv.onclick = (event) => {
  if (event.target.classList.value === 'delete') {
    sendHTTPRequest('DELETE', `/questions/${event.target.getAttribute('data')}`, (response) => {
      console.log(response);
    });
  }
}

