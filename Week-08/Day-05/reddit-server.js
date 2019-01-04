'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use('/static', express.static('static'));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/reddit.html');
});

