let express = require('express');
let app = express();
let PORT = 3000;

app.set('view engine', 'ejs');


// app.get('/', (req, res) => {
//   res.send('Hello world');
// })
app.get('/', (req, res) => {
  res.render('home', {
    person: `${req.query.name || 'Guest'}!`});
})


app.listen(PORT, () => {
  console.log('Listening to PORT 3000');
})