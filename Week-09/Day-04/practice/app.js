const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'sitepoint'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    return;
  }
  console.log('Connection established');
});


connection.query('SELECT * FROM employees', (err, rows) => {
  if (err) throw err;


  console.log('Data received from DB:\n');
  console.log(rows);

  rows.forEach((row) => {
    console.log(`${row.name} is in ${row.location}`);
  });
})

const employee = { name: 'Winnie', location: 'Australia' };

connection.query('INSERT INTO employees SET ?', employee, (err, res) => {
  if (err) throw err;

  console.log(`Last insert ID:`, res.insertId);
})

connection.query(
  'UPDATE employees SET location = ? WHERE ID = ?',
  ['South Africa', 5],
  (err, res) => {
    if (err) throw err;

    console.log(`Changed ${res.changedRows} row(s)`)
  }
)

connection.end((err) => {
});
