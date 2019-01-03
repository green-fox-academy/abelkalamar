'use strict'

const xhr = new XMLHttpRequest();
let url = `/bookdata?`;

const sendHTTPRequest = (method, url, callback) => {
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();
}

const createTable = (response) => {
  const table = document.querySelector('.bookstore');
  clearer(table);
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
    createCategoryList(row);
    createPublisherList(row);
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
  });
}

sendHTTPRequest('GET', url, (response) => {
  createTable(response);
});

const createCategoryList = (row) => {
  const filterCat = document.querySelector('.category');
  const category = document.createElement('option');
  category.setAttribute('value', row.cate_descrip);
  category.setAttribute('class', 'cate_name');
  category.textContent = row.cate_descrip;
  const beforeCat = document.querySelectorAll('.cate_name');
  let sameCate = 0;
  beforeCat.forEach(category => {
    if (category.innerText == row.cate_descrip) {
      sameCate++;
    }
  })
  if (sameCate === 0) {
    filterCat.appendChild(category);
  }
}

const clearer = (div) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

const createPublisherList = (row) => {
  const filterPub = document.querySelector('.publisher');
  const publisher = document.createElement('option');
  publisher.setAttribute('value', row.pub_name);
  publisher.setAttribute('class', 'pub_name');
  publisher.textContent = row.pub_name;
  const beforePub = document.querySelectorAll('.pub_name');
  let samePub = 0;
  beforePub.forEach(publisher => {
    if (publisher.innerText == row.pub_name) {
      samePub++;
    }
  })
  if (samePub === 0) {
    filterPub.appendChild(publisher);
  }
}

const form = document.querySelector('.filter');
const { category, publisher, plt, pgt } = form.elements;
form.addEventListener('change', (event => {
  if (category.value !== 'category') {
    url += `category=${category.value}&`
  }
  if (publisher.value !== 'publisher') {
    url += `publisher=${publisher.value}&`
  }
  if (plt.value) {
    url += `plt=${plt.value}&`
  }
  if (pgt.value) {
    url += `pgt=${pgt.value}&`
  }
  sendHTTPRequest('GET', url, (response) => {
    createTable(response);
  });
  url = `/bookdata?`;
}))
