'use strict';

const form = document.querySelector('form');
const { username, password, age, gender } = form.elements;

form.onsubmit = () => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `/register/user`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    id: 0,
    username: username.value,
    password: password.value,
    age: age.value,  
    gender: gender.value
  }));
  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    alert(data.message);
  }
}
