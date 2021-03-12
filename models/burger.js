
const orm  = require('../config/orm.js')

const burger =  {
  all(cb) {
  orm.all('burgers', (res) => cb(res));
  },

  create(burgerName, cb) {
    console.log(burgerName)
    orm.create('burgers', burgerName, (res) => cb(res));
  },


  update(devoured, value, cb) {
    orm.update('burgers', devoured, 'id', value, (res) => cb(res))
  }
}
  
  module.exports = burger