const express = require('express');
const router = express.Router();
const brew = require('../models/brew');  // import the model

// ROUTES
router.get('/', (req, res) => {
  brew.selectAll(data => {
    const hbsObj = {brews: data};
    res.render('index', hbsObj);
    console.log(hbsObj);
  });
});

router.post('/api/brews', (req, res) => {
  brew.insertOne(req.body.brew_name, 
    result => res.json({id: result.insertId}));
});

router.put('/api/brews/:id', (req, res) => {
  const condition = "id = " + req.params.id;
  
  brew.updateOne(true, condition, result => {
    console.log("condition", condition);
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;