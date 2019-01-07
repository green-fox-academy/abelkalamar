'use strict';

const express = require('express');
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/static', express.static('static'));
app.listen(PORT, () => {
  console.log(`Application listening on PORT:${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});


