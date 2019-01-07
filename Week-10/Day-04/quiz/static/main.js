'use strict'

const xhr = new XMLHttpRequest();

const question = document.querySelector('.question')

xhr.open('GET', '/game');
xhr.onload = (response) => {
  const questions = JSON.parse(xhr.responseText);
  const id = chooseId(questions);
  question.textContent = questions[id].question;
};
xhr.send();

const chooseId = (list) =>{
  return Math.floor(Math.random() * list.length);
};