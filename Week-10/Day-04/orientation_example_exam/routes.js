'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

app.use('/static', express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const secretCode = () => {
  const randomNum = () => Math.floor(Math.random() * 10);
  return Array.from({ length: 4 }, randomNum).join('');
}

app.post('/api/links', (req, res) => {
  const { url, alias } = req.body;
  conn.query(`SELECT * FROM urls;`, (err, data) => {
    if (err) {
      res.status(500).json({
        message: 'Internal server error'
      });
      return;
    }
    if (data.find(e => e.alias === alias)) {
      res.status(400).json({
        message: 'Alias exists!'
      });
    } else {
      const newSecretCode = secretCode()
      const newAlias = {
        url: url,
        alias: alias,
        hitCount: 0,
        secretCode: newSecretCode,
      }
      conn.query('INSERT INTO urls SET ?', newAlias, (err, result) => {
        if (err) {
          res.status(500).json({
            message: 'Internal server error'
          });
          return;
        }
        res.json({
          url: url,
          alias: alias,
          hitCount: 0,
          secretCode: newSecretCode,
          id: result.insertId
        });
      });
    }
  });
})



module.exports = app;
