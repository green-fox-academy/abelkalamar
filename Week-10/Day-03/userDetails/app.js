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
app.use('/details/static', express.static('static'));

app.listen(PORT, () => {
  console.log(`Application listening on PORT:${PORT}`);
});

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/user', (req, res) => {
  const { username, password } = req.query;
  if (username && password) {
    const sqlSearch = 'SELECT * FROM userContent'
    conn.query(sqlSearch, (err, data) => {
      if (err) {
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      const userFromDB = (data.find(user => user.username === username))
      if (userFromDB) {
        if (userFromDB.password === password) {
          res.status(200).json({
            message: 'Login successful',
            path: `/details`,
            id: userFromDB.id
          });
        } else {
          res.status(201).json({
            message: 'Wrong password',
          });
        }
      } else {
        res.status(202).json({
          message: 'Invalid username',
          path: '/register'
        });
      }
    });
    return;
  } else if (!username || username === "" || username === " ") {
    res.status(203).json({
      message: 'Missing username'
    });
    // return;
  } else if (!password || password === "" || password === " ") {
    res.status(204).json({
      message: 'Missing password'
    });
  }
});

app.get('/details/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/details.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/register.html'));
});

app.get('/user/details/:id', (req, res) => {
  const { id } = req.params;
  conn.query(`SELECT * FROM userContent WHERE id = '${id}';`, (err, data) => {
    if (err) {
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});
