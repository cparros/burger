const mysql = require('mysql');

// Set up our connection information
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Birdman123!',
  database: 'burgers_db',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`SUCCESS connected as id ${connection.threadId}`);
});

// Export connection
module.exports = connection;