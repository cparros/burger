const express = require('express')
const burger = require('../models/burger')

const router = express.Router();

router.get('/', (req, res) => {

  burger.all((data) => {
    const hbsObject = {
      burger: data,
    };
    console.log('hbsObject', hbsObject);
    res.render('index', hbsObject );
  });
});

router.post('/api/burgers', (req, res) => {
  burger.create(['burger_name'], [req.body.burger_name], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


module.exports = router