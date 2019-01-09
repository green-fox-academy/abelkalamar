'use strict'

const answersDiv = document.querySelector('.content');
const scoreSpan = document.querySelector('.score');

const sendHTTPRequest = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/game');
  xhr.send();
  xhr.onload = (response) => {
    if (xhr.status === 200) {
      response = JSON.parse(xhr.responseText);
      showQuestion(response);
    }
  }
}

sendHTTPRequest();

const evaluate = (event) => {
  if (event.target.getAttribute('data') == 1) {
    event.target.setAttribute('style', 'background: #27AE60');
    let currentScore = +(scoreSpan.textContent);
    currentScore++;
    scoreSpan.textContent = currentScore;
  } else if (event.target.getAttribute('data') == 0) {
    event.target.setAttribute('style', 'background: #EB6654');
  }
  if (event.target.getAttribute('class') != "content" &&
    event.target.getAttribute('class') != "question") {
    setTimeout(sendHTTPRequest, 1000);
    answersDiv.removeEventListener('click', evaluate);
  }
}

const showQuestion = (data) => {
  const question = document.querySelector('.question');
  const firstAnswer = document.querySelector('.answer_one');
  const secondAnswer = document.querySelector('.answer_two');
  const thirdAnswer = document.querySelector('.answer_three');
  const fourthAnswer = document.querySelector('.answer_four');
  question.textContent = data.question;
  firstAnswer.textContent = data.answers[0].answer;
  firstAnswer.setAttribute('data', data.answers[0].is_correct);
  firstAnswer.setAttribute('style', "");
  secondAnswer.textContent = data.answers[1].answer;
  secondAnswer.setAttribute('data', data.answers[1].is_correct);
  secondAnswer.setAttribute('style', "");
  thirdAnswer.textContent = data.answers[2].answer;
  thirdAnswer.setAttribute('data', data.answers[2].is_correct);
  thirdAnswer.setAttribute('style', "");
  fourthAnswer.textContent = data.answers[3].answer;
  fourthAnswer.setAttribute('data', data.answers[3].is_correct);
  fourthAnswer.setAttribute('style', "");
  answersDiv.addEventListener('click', evaluate);
}

const manageQuestions = document.querySelector('.manage');
manageQuestions.addEventListener('click', (event) => {
  event.preventDefault();
  const manageXHR = new XMLHttpRequest();
  manageXHR.open('GET', '/manage');
  manageXHR.send();
  manageXHR.onload = () => {
    if (manageXHR.status === 200) {
      window.location = '/manage';
    }
  }
});


