const express = require('express');
const success = require('../lib/success');
const db = require('../../models');
const Card = db.card;
const User = db.user;
const Priority = db.priority;
const Status = db.status;
const router = express.Router();

// this is an SPA so views will be built in parts
// get to cards will return all cards in database with their associated details
router.route('/')
.get((req, res) => {
  return Priority.findAll({
   order : [[ 'id' ]]
  })
  .then((priorityList => {
    console.log('returned array of priorities');
    return res.json(priorityList);
  }));
});

module.exports = router;