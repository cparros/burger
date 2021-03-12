const mysql = require('mysql');

let connection;
// Set up our connection information
if(process.envJAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Birdman123!',
  database: 'burgers_db',
});
}
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