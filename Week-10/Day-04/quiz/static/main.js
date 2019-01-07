'use strict'

const xhr = new XMLHttpRequest();

const question = document.querySelector('.question');
const firstAnswer = document.querySelector('.answer_one');
const secondAnswer = document.querySelector('.answer_two');
const thirdAnswer = document.querySelector('.answer_three');
const fourthAnswer = document.querySelector('.answer_four');
const answersDiv = document.querySelector('.content');

xhr.open('GET', '/game');
xhr.onload = (response) => {
  const questions = JSON.parse(xhr.responseText);
  const id = chooseId(questions) * 4;
  console.log(questions);
  question.textContent = questions[id].question;
  firstAnswer.textContent = questions[id].answer;
  firstAnswer.setAttribute('data', questions[id].is_correct);
  secondAnswer.textContent = questions[id + 1].answer;
  secondAnswer.setAttribute('data', questions[id + 1].is_correct);
  thirdAnswer.textContent = questions[id + 2].answer;
  thirdAnswer.setAttribute('data', questions[id + 2].is_correct);
  fourthAnswer.textContent = questions[id + 3].answer;
  fourthAnswer.setAttribute('data', questions[id + 3].is_correct);
};
xhr.send();

const chooseId = (list) =>{
  return Math.floor(Math.random() * (list.length / 4));
};

answersDiv.addEventListener('click', (event) => {
  if (event.target.getAttribute('data') == 1) {
    event.target.setAttribute('style', 'background: #27AE60');
  } else {
    event.target.setAttribute('style', 'background: #EB6654');
  }
});