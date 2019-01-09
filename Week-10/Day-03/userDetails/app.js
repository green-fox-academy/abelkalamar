'use strict';

const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;

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