'use strict';



const form = document.querySelector('form');
const { username, password } = form.elements;

const sendHTTPRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();
  xhr.onload = (response) => {
    if (xhr.status === 200 && response) {
      data = JSON.parse(response);
      callback(response);
    }
  }
}

sendHTTPRequest('GET', '/user', () => {
});