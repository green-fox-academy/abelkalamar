let express = require('express');

let app = express();

//set uo template engine
app.set('view engine', 'ejs');

//static files 
app.use(express.static('./public'));

//listen to port
app.listen(3000);
console.log('You are listening to port 3000 ');
