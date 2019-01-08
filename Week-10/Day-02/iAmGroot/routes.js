'use strict';

const express = require('express');
const app = express();

app.use(express.json());

app.get('/groot', (req, res) => {
  const { message } = req.query;
  if (message) {
    res.status(200).json({
      received: message,
      translation: 'I am Groot!'
    });
  } else {
    res.status(202).json({
      error: 'I am Groot!'
    });
  }
});

module.exports = app;


