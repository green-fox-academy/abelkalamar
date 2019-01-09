'use strict';

const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

app.use(express.json());
app.use('/static', express.static('static'));

app.listen(PORT, () => {
  console.log(`Application listening on PORT:${PORT}`);
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/details', (req, res) => {
  res.sendFile(path.join(__dirname + '/details.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/register.html'));
});

app.get('/', (req, res) => {
  conn.query('SELECT * FROM userContent', (err, data) => {
    if (err) {
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  })
})
