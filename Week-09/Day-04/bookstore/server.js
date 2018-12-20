'use strict'

require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));

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
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})

const findBookTitles = 'SELECT book_name FROM book_mast';

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/booknames', (req, res) => {
  conn.query(findBookTitles, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json(data);
  })
});
