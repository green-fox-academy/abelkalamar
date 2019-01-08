'use strict';

const express = require('express');
const app = express();

app.use(express.json());

app.get('/rocket', (req, res) => {
  res.json({
    caliber25: 0,
    caliber30: 0,
    caliber50: 0,
    shipstatus: 'empty',
    ready: false
  });
});

module.exports = app;