'use strict';

const xhr = new XMLHttpRequest();
const url = '/';

const sendHTTPRequest = (method, url, callback) => {
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();
}

sendHTTPRequest('GET', url, (req, res) => {
  
})