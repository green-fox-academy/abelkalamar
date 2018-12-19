const express = require('express');
// const bp = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.json());

function isVowel(character) {
  return ['a', 'u', 'o', 'e', 'i', 'é', 'ő', 'í', 'á', 'ű'].some(vowel => vowel === character.toLowerCase());
}

function translate(hungarian) {
  let teve = hungarian.split('');
  teve.forEach((e, i) => {
    if (isVowel(e)) {
      teve.splice(i, 1, `${e}v${e}`)
    }
  });
  return teve.join('');
}

app.post('/translate', (req, res) => {
  const { text } = req.body;
  if (text === '' || !text) {
    res.json({ 'error': 'I can\'t translate that!' })
  } else {
    res.json({
      'translated': `${translate(text)}`,
      'lang': 'teve'
    })
  }
})

app.listen(PORT, () => {
  console.log('Server is running on PORT 3000');
})
