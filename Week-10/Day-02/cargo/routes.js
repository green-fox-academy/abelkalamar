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

app.get('/rocket/fill', (req, res) => {
  const { caliber, amount } = req.query;
  if (!caliber || !amount) {
    res.status(220).json({
      error: 'Missing queries'
    });
  } else if (caliber && amount) {
    res.json({
      received: caliber,
      amount: +amount,
      shipstatus: amount / 12500 * 100 + '%',
      ready: amount >= 12500
    });
  }
});

module.exports = app;