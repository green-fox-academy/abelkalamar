let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.send(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
  res.send(__dirname + '/contact.html');
  console.log(req.query);
});

app.get('/profile/:name', function(req, res) {
  // res.send('You are viewing the profile of ' + res.params.name);
  res.render('profile');
});

app.listen(3000);