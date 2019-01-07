'use strict'


const answersDiv = document.querySelector('.content');
const scoreSpan = document.querySelector('.score');

const sendHTTPRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
}

sendHTTPRequest('GET', '/game', (response) => {
  pickQuestion(response);
});

const chooseId = (list) => {
  return Math.floor(Math.random() * (list.length / 4));
};

answersDiv.addEventListener('click', (event) => {
  if (event.target.getAttribute('data') == 1) {
    event.target.setAttribute('style', 'background: #27AE60');
    let currentScore = +(scoreSpan.textContent);
    currentScore++;
    scoreSpan.textContent = currentScore;
  } else if (event.target.getAttribute('data') == 0) {
    event.target.setAttribute('style', 'background: #EB6654');
  }
  if (event.target.getAttribute('class') != "content") {
    setTimeout(sendHTTPRequest('GET', '/game', (response) => {
      pickQuestion(response);
    }), 5000);
  }
});

const pickQuestion = (data) => {
  const question = document.querySelector('.question');
  const firstAnswer = document.querySelector('.answer_one');
  const secondAnswer = document.querySelector('.answer_two');
  const thirdAnswer = document.querySelector('.answer_three');
  const fourthAnswer = document.querySelector('.answer_four');
  const questions = data;
  const id = chooseId(questions) * 4;
  console.log(questions);
  question.textContent = questions[id].question;
  firstAnswer.textContent = questions[id].answer;
  firstAnswer.setAttribute('data', questions[id].is_correct);
  firstAnswer.setAttribute('style', "");
  secondAnswer.textContent = questions[id + 1].answer;
  secondAnswer.setAttribute('data', questions[id + 1].is_correct);
  secondAnswer.setAttribute('style', "");
  thirdAnswer.textContent = questions[id + 2].answer;
  thirdAnswer.setAttribute('data', questions[id + 2].is_correct);
  thirdAnswer.setAttribute('style', "");
  fourthAnswer.textContent = questions[id + 3].answer;
  fourthAnswer.setAttribute('data', questions[id + 3].is_correct);
  fourthAnswer.setAttribute('style', "");
}