'use strict';

const express = require('express');
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;
const app = express();

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quiz'
});

app.use(express.json());
app.use('/static', express.static('static'));

app.listen(PORT, () => {
  console.log(`Application listening on PORT:${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/game', (req, res) => {
  conn.query('SELECT * FROM questions', (err, data) =>{
    if(err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      })
      return;
    }
    res.json(data);
  })
})