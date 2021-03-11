const connection = require('./connection')

const printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
};

const objToSql = (ob) => {
  const arr = [];

  // Loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(`${key}=${value}`);
    }
  }

  // Translate array of strings to a single comma-separated string
  return arr.toString();
};

const orm = {
  all(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput}`;
    console.log(queryString)
    connection.query(queryString, [tableInput], (err, res) => {
        if(err) throw err;

        cb(res)
      })
  },
  create(tableInput, burgerName, cb) {
    const queryString = `INSERT INTO ${tableInput} (burger_name) VALUES (${burgerName}`;

    console.log(queryString);

    connection.query(queryString, [tableInput, burgerName], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },

  delete(table, condition, cb) {
    let queryString = `DELETE FROM ${table}`;
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
}

module.exports = orm;