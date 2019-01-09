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

app.delete('/questions/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM questions WHERE id = '${id}';`
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

app.get('/game', (req, res) => {
  const sql = `SELECT * FROM questions;`
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    const num = Math.floor(Math.random() * data.length);
    const question = {
      'id': data[num].id,
      'question': data[num].question
    };
    conn.query('SELECT * FROM answers', (err, answers) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      let answerList = [];
      answers.forEach(e => {
        if (e.question_id === question.id) {
          answerList.push(e);
        }
      });
      res.json({
        id: question.id,
        question: question.question,
        answers: answerList
      });
    });
  });
});

app.post('/questions', (req, res) => {
  const { question, answers } = req.body;
  const sql = 'INSERT INTO answers VALUES(?, ?, ?, ?)';
  conn.query('INSERT INTO questions VALUES(?, ?)', [0, question], (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    console.log(data.insertId);
    // conn.query(sql, [0, answers.question_id, answers.aswer])
  });
})
