const orm  = require('../config/orm')

const burger =  {
  all(cb) {
  orm.all('burgers', (res) => cb(res));
  },
}
  
  module.exports = burger