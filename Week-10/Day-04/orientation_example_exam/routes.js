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
          id: result.insertId,
          url: url,
          alias: alias,
          hitCount: 0,
          secretCode: newSecretCode
        });
      });
    }
  });
});

app.get('/a/:alias', (req, res) => {
  const { alias } = req.params;
  conn.query(`SELECT * FROM urls WHERE alias = '${alias}'`, (err, data) => {
    if (err) {
      res.status(500).json({
        message: 'Internal server error'
      });
      return;
    }
    const content = data[0];
    const sqlCommand = `UPDATE urls SET hitcount = hitcount + 1 WHERE alias = '${content.alias}';`
    conn.query(sqlCommand, (error) => {
      if (error) {
        res.status(500).json({
          message: 'Internal server error'
        });
        return;
      }
      res.redirect(content.url);
    });
  });
});

app.get('/api/links', (req, res) => {
  conn.query('SELECT id, url, alias, hitcount FROM urls', (err, data) => {
    if (error) {
      res.status(500).json({
        message: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

app.delete('/api/links/', (req, res) => {
  const { id } = req.query;
  const { secretCode } = req.body;
  conn.query(`SELECT secretcode FROM urls WHERE id = '${id}';`, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Internal server error'
      });
      return;
    }
    res.json(result);
    if (result) {
      if (result[0].secretcode == secretCode) {
        conn.query(`DELETE FROM urls WHERE secretcode = '${secretCode}';`), (err) => {
          if (err) {
            res.status(500).json({
              message: 'Internal server error'
            });
            return;
          }
          res.json({
            message: 'Successfully deleted!'
          });
        }
      } else {
        res.status(403).json({
          message: 'wrong code',
          code: secretCode,
          needed: result[0].secretcode
        });
      }
    } else {
      res.status(404).json({
        message: 'wrong id'
      });
      return;
    }
  });
});

module.exports = app;
