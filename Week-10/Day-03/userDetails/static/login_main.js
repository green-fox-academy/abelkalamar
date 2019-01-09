'use strict';

const form = document.querySelector('form');
const { username, password } = form.elements;

const sendHTTPRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();
  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    callback(data);
  }
}

form.onsubmit = (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/user?username=${username.value}&password=${password.value}`);
  xhr.send();
  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    alert(data.message);
    if (xhr.status === 200) {
      window.location = `${data.path}/${data.id}`;
    } else if (xhr.status === 202) {
      window.location = data.path;
    }
  }
}


