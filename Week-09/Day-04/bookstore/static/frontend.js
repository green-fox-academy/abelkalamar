'use strict'

const xhr = new XMLHttpRequest();
const URL = 'http://localhost:3000/booknames'

const sendHTTPRequest = (url, method, callback) => {
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();
}

sendHTTPRequest(URL, 'GET', (response) => {
  console.log(response);
  
  const table = document.querySelector('.booknames')
  response.forEach(title => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.innerText = title.book_name;
    table.appendChild(tr);
    tr.appendChild(td);
  })
});
