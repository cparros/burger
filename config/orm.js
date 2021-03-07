const connection = require('./connection')

const orm = {
  selectALL(tableInput) {
    const queryString = `SELECT * FROM ${tableInput}`;
    connection.query(
      queryString, [tableInput], (err, res) => {
        if(err) throw err;
        console.table(res)
      }
    )
  }
}

module.exports = orm;