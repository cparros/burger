const orm  = require('../config/orm.js')

const burger =  {
  all(cb) {
  orm.all('burgers', (res) => cb(res));
  },

  create(burgerName, cb) {
    orm.create('burgers', burgerName, (res) => cb(res))
  }
}
  
  module.exports = burger