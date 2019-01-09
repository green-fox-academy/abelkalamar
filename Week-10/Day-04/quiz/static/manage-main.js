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
  parentDiv.innerHTML = "";
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
    sendHTTPRequest('GET', '/questions', createLayout);
  }
}

const form = document.querySelector('form');
form.onsubmit = (event) => {
  event.preventDefault();
  const { newQuestion, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer } = form.elements;
  const postXHR = new XMLHttpRequest();
  postXHR.open('POST', '/questions');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    question: newQuestion.value,
    answers: {
      firstAnswer: firstAnswer.value,
      secondAnswer: secondAnswer.value,
      thirdAnswer: thirdAnswer.value,
      fourthAnswer: fourthAnswer.value
    }
  }));
  postXHR.onload = () => {
    if (postXHR.status === 200) {
      constole.log(JSON.parse(xhr.responseText));
    }
  }
}

const backToTheGame = document.querySelector('#back');
backToTheGame.onclick = (event) => {
  const newXHR = new XMLHttpRequest();
  newXHR.open('GET', '/');
  newXHR.onload = () => {
    if (newXHR.status === 200) {
      window.location = '/';
    }
  }
  newXHR.send();
}


