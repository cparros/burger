const connection = require('./connection')

const orm = {
  all(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput}`;
    console.log(queryString)
    connection.query(queryString, [tableInput], (err, res) => {
        if(err) throw err;

        cb(res)
      })
  },

  create(tableName, burgerName, cb) {
    //Look at cats activity and see query construction breakdown DONT USE CAT SYNTAX ITS TRASH make Qs your self
    const queryString = `INSERT INTO ?? SET ?`;

    connection.query(queryString, [tableName, burgerName], (err, res) => {
      if (err) throw err;

      cb(res);
    });
  },

  update(tableName, devoured, column, value, cb) {
    let queryString = `UPDATE ?? SET ? WHERE ?? = ?`;

    connection.query(queryString, [tableName, devoured, column, value, cb], (err, res) => {
      if (err) {
        throw err;
      }

      cb(res);
    });
  },
}

module.exports = orm;