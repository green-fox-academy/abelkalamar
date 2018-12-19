'use strict'

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/doubling', (req, res) => {
  const { input } = req.query;
  const doubling = {
    "received": input,
    "result": input * 2 
  };
  if (input) {
    res.json(doubling);
  } else {
    res.json({
      "error": "Please provide an input!"
    })
  }
})

app.listen(PORT, () => {
  console.log('Listening to PORT 3000');
})
