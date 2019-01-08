'use strict';

const express = require('express');
const app = express();

app.use(express.json());

app.get('/yondu', (req, res) => {
  const { distance, time } = req.query;
  if (!distance || !time) {
    res.status(403).json({
      error: 'some query is missing'
    });
  } else if (distance && time) {
    res.status(200).json({
      distance: +distance,
      time: +time,
      speed: distance / time
    });
  };
});


module.exports = app;