const connection = require('./connection')

const orm = {
  selectALL(tableInput, cb) {
    const queryString = 'SELECT * FROM ??';
    connection.query(
      queryString, [tableInput], (err, res) => {
        if(err) throw err;
        cb(res)
      }
    )
  }
}

module.exports = orm;