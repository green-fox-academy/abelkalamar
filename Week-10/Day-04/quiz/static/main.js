'use strict'

const xhr = new XMLHttpRequest();


xhr.open('GET', '/game');
xhr.onload = (response) => {
  const question = document.querySelector('.question');
  const firstAnswer = document.querySelector('.answer_one');
  const secondAnswer = document.querySelector('.answer_two');
  const thirdAnswer = document.querySelector('.answer_three');
  const fourthAnswer = document.querySelector('.answer_four');
  const questions = JSON.parse(xhr.responseText);
  const id = chooseId(questions) * 4;
  console.log(questions);
  question.textContent = questions[id].question;
  firstAnswer.textContent = questions[id].answer;
  secondAnswer.textContent = questions[id + 1].answer;
  thirdAnswer.textContent = questions[id + 2].answer;
  fourthAnswer.textContent = questions[id + 3].answer;
};
xhr.send();

const chooseId = (list) =>{
  return Math.floor(Math.random() * (list.length / 4));
};