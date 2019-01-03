'use strict'

const xhr = new XMLHttpRequest();
const URL = '/bookdata';

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
  const table = document.querySelector('.bookstore')
  const tHead = document.createElement('tr');
  const thBookTitle = document.createElement('th');
  const thAutName = document.createElement('th');
  const thCat = document.createElement('th');
  const thPubName = document.createElement('th');
  const thPrice = document.createElement('th');
  thBookTitle.textContent = 'Book Title';
  thAutName.textContent = 'Author';
  thCat.textContent = 'Category';
  thPubName.textContent = 'Publisher';
  thPrice.textContent = 'Price';
  tHead.appendChild(thBookTitle);
  tHead.appendChild(thAutName);
  tHead.appendChild(thCat);
  tHead.appendChild(thPubName);
  tHead.appendChild(thPrice);
  table.appendChild(tHead);
  response.forEach(row => {
    const tBody = document.createElement('tr');
    const tdBookTitle = document.createElement('td');
    const tdAutName = document.createElement('td');
    const tdCat = document.createElement('td');
    const tdPubName = document.createElement('td');
    const tdPrice = document.createElement('td');
    tdBookTitle.textContent = row.book_name;
    tdAutName.textContent = row.aut_name;
    tdCat.textContent = row.cate_descrip;
    tdPubName.textContent = row.pub_name;
    tdPrice.textContent = row.book_price;
    tBody.appendChild(tdBookTitle);
    tBody.appendChild(tdAutName);
    tBody.appendChild(tdCat);
    tBody.appendChild(tdPubName);
    tBody.appendChild(tdPrice);
    table.appendChild(tBody);
  })
});

const form = document.querySelector('.filter');
const { category } = form.elements;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const filterXHR = new XMLHttpRequest();
  filterXHR.open('GET', `${URL}?category=${category.value}`);
  filterXHR.onload = () => {
    if (filterXHR.status === 200) {
     let result = JSON.parse(filterXHR.responseText);
     printTable(result);
    }
  }
  filterXHR.send();
})

const printTable = (response) => {
  const table = document.querySelector('.bookstore')
  table.textContent = " ";
  const tHead = document.createElement('tr');
  const thBookTitle = document.createElement('th');
  const thAutName = document.createElement('th');
  const thCat = document.createElement('th');
  const thPubName = document.createElement('th');
  const thPrice = document.createElement('th');
  thBookTitle.textContent = 'Book Title';
  thAutName.textContent = 'Author';
  thCat.textContent = 'Category';
  thPubName.textContent = 'Publisher';
  thPrice.textContent = 'Price';
  tHead.appendChild(thBookTitle);
  tHead.appendChild(thAutName);
  tHead.appendChild(thCat);
  tHead.appendChild(thPubName);
  tHead.appendChild(thPrice);
  table.appendChild(tHead);
  response.forEach(row => {
    const tBody = document.createElement('tr');
    const tdBookTitle = document.createElement('td');
    const tdAutName = document.createElement('td');
    const tdCat = document.createElement('td');
    const tdPubName = document.createElement('td');
    const tdPrice = document.createElement('td');
    tdBookTitle.textContent = row.book_name;
    tdAutName.textContent = row.aut_name;
    tdCat.textContent = row.cate_descrip;
    tdPubName.textContent = row.pub_name;
    tdPrice.textContent = row.book_price;
    tBody.appendChild(tdBookTitle);
    tBody.appendChild(tdAutName);
    tBody.appendChild(tdCat);
    tBody.appendChild(tdPubName);
    tBody.appendChild(tdPrice);
    table.appendChild(tBody);
  })
}
