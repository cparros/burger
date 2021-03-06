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
  burger.create({burger_name: req.body.burger_name}, (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', (req, res) => {
  //make sure you dont have any string input before request param you will get a duplicate error
  const condition = `${req.params.id}`

  console.log('condition', condition);

  burger.update(
    {devoured: req.body.devoured}, condition, (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      console.log('success')
      res.status(200).end();
    }
  );
});

   
 




module.exports = router