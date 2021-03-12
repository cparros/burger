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

  create(table, burgerName, cb) {
    const queryString = `INSERT INTO ?? SET ?`;

    connection.query(queryString, [table, burgerName], (err, res) => {
      if (err) throw err;

      cb(res);
    });
  },

  update(table, devoured, column, value, cb) {
    let queryString = `UPDATE ?? SET ? WHERE ?? = ?`;

    connection.query(queryString, [table, devoured, column, value, cb], (err, res) => {
      if (err) {
        throw err;
      }

      cb(res);
    });
  },
}

module.exports = orm;