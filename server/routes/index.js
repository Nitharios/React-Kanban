const express = require('express');
const cards = require('./cards');
const users = require('./users');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('API route hit');
  res.json('Hello World from API!');
});

router.use('/cards', cards);
router.use('/users', users);

module.exports = router;