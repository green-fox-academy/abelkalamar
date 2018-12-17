let express = require('express');
let app = express();
let POST = 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

const todos = [
  'go climbing',
  'learn coding',
  'shopping',
  'cooking',
  'buy a christmas tree'
];

app.get('/', (req, res) => {
  res.render('home', {
    data: todos
  })
})

app.listen(POST, () => {
  console.log('Listening PORT 3000');
})


