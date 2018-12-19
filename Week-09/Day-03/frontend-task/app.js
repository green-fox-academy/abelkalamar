'use strict'

const express = require('express');
const app = express();
const path = require('path');
const bp = require('body-parser');

const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(bp());

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

app.get('/greeter', (req, res) => {
  const { name, title } = req.query;
  const greeting = {
    "welcome_message": `Oh, hi there ${name}, my dear ${title}!`,
  };
  if (name && title) {
    res.json(greeting);
  } else if (!name) {
    res.json({
      "error": "Please provide a name!",
    })
  } else if (!title) {
    res.json({
      "error": "Please provide a title!",
    })
  }
})

app.get('/appenda/:appendable', (req, res) => {
  const word = req.params.appendable;
  const appenda = {
    "appended": `${word}a`
  }
  if (word) {
    res.json(appenda);
  } else {
    res.status(404).send();
  }
})

const action = (num) => {
  let result = 0;
  while (num > 0) {
    result += num;
    num--;
  }
  return result;
}

const factor = (num) => {
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
}

app.post('/dountil/:action', (req, res) => {
  const param = req.params.action;
  const until = req.body.until;
  if (isNaN(until)) {
    res.json('error: please provide a number')
  } else if (param === "sum" && !isNaN(until)) {
    res.json(
      {
        "result": action(until)
      });
  } else if (param === "factor" && !isNaN(until)) {
    res.json(
      {
        "result": factor(until)
      });
  } else {
    res.json('error: please provide input')
  }
})

app.listen(PORT, () => {
  console.log('Listening to PORT 3000');
})
