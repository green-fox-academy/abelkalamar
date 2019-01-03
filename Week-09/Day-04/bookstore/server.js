'use strict'

require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use('/static', express.static('static'));
app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

conn.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connected to database', '\n');
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/bookdata', (req, res) => {
  const { category, publisher, plt, pgt } = req.query;
  let bookinfo = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
  FROM book_mast
  JOIN author ON book_mast.aut_id = author.aut_id
  JOIN category ON book_mast.cate_id = category.cate_id
  JOIN publisher ON book_mast.pub_id = publisher.pub_id`
  if (category) {
    bookinfo += ` WHERE cate_descrip = '${category}'`
  }
  if (publisher) {
    if (category) {
      bookinfo += ` AND pub_name = '${publisher}'`
    }
    else {
      bookinfo += ` WHERE pub_name = '${publisher}'`
    }
  }
  if (plt) {
    if (category || publisher) {
      bookinfo += ` AND book_price < '${plt}'`
    }
    else {
      bookinfo += ` WHERE book_price < '${plt}'`
    }
  }
  if (pgt) {
    if (category || publisher || plt) {
      bookinfo += ` AND book_price > '${pgt}'`
    }
    else {
      bookinfo += ` WHERE book_price > '${pgt}'`
    }
  }
  conn.query(bookinfo, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json(data);
  });
});