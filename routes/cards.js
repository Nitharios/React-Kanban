const express = require('express');
const success = require('../lib/success');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    console.log('Cards hit');
    res.json(success.win);
  });

module.exports = router;