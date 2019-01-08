'use strict';

const express = require('express');
const app = express();

app.use(express.json());

let caliber25 = 0;
let caliber30 = 0;
let caliber50 = 0;
let totalAmount = 0;
console.log(totalAmount);

app.get('/rocket', (req, res) => {
  res.json({
    caliber25: +caliber25,
    caliber30: +caliber30,
    caliber50: +caliber50,
    shipstatus: shipStatus(totalAmount),
    ready: +totalAmount === 12500
  });
});

app.get('/rocket/fill', (req, res) => {
  const { caliber, amount } = req.query;
  if (!caliber || !amount) {
    res.status(220).json({
      error: 'Missing queries'
    });
  } else if (caliber && amount) {
    if (caliber == .25) {
      caliber25 += amount;
    } else if (caliber == .30) {
      caliber30 += amount;
    } else if (caliber == .50) {
      caliber50 += amount;
    }
    totalAmount = +caliber25 + +caliber30 + +caliber50;
    res.json({
      received: caliber,
      amount: +amount,
      shipstatus: shipStatus(totalAmount),
      ready: +totalAmount === 12500,
      totalAmount: totalAmount
    });
  }
});

const shipStatus = (amount) => {
  if (amount <= 12500) {
    return amount / 12500 * 100 + '%';
  } else {
    return 'overloaded';
  }
}

module.exports = app;