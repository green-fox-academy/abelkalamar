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

app.get('/manage', (req, res) => {
  res.sendFile(path.join(__dirname, '/manage-app.html'));
});

app.get('/game', (req, res) => {
  const sql = `SELECT questions.id AS "quest_id", answers.id, is_correct, question, answer
  FROM questions
  JOIN answers ON answers.question_id = questions.id;`
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

app.get('/questions', (req, res) => {
  const sql = `SELECT * FROM questions;`
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});


