const express = require('express');
const app = express();
const bp = require('body-parser');
const PORT = 3000;

app.use(bp());

app.post('/sith', (req, res) => {
  const { text } = req.body;
  if (text === "" || !text) {
    res.json({"error": "Feed me some text you have to, padawan young you are. Hmmm."})
  } else {
    res.json({"sith_text": `${text}`})
  }
})

app.listen(PORT, () => {
  console.log('Server is running on PORT 3000');
})