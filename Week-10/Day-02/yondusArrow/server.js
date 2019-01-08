'use strict';

const server = require('./routes');
const PORT = 3000;

server.listen(PORT, () =>{
  console.log(`Application is listening on PORT:${PORT}`);
});