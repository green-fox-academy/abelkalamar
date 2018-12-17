let express = require('express');
let app = express();
let PORT = 3000;

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(PORT, () => {
console.log('App listening to PORT 3000');
})

