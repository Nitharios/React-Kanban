const express = require('express');
const success = require('../lib/success');
const db = require('../models');
const Card = db.card;
const User = db.user;
const Priority = db.priority;
const Status = db.status;
const router = express.Router();

// this is an SPA so views will be built in parts

// get to cards will return all cards in database with their associated details
router.route('/')
.get((req, res) => {
  return Card.findAll({
    include : [
    { model : User },
    { model : Priority },
    { model : Status }
    ]
  })
  .then((cardList => {
    console.log('Cards hit');
    return res.json(cardList);
  }));
})

// post to cards will create a new card
.post((req, res) => {
  let newCard = {
    title : req.body.title,
    priority_id : req.body.priority_id,
    creator_id : req.body.creator_id,
    assigned_to_id : req.body.assigned_to_id,
    status_id : req.body.status_id    
  };

  return Card
  .create({ newCard })
  .then(response => {
    console.log('New card posted');
    res.json(success.win);
  })
  .catch(err => {
    res.json(success.lose);
  });
});

// put to card id will edit a card
router.route('/:id')
.put((req, res) => {
  let id = req.params.id;
  let updatedCard = {
    title : req.body.title,
    priority_id : req.body.priority_id,
    creator_id : req.body.creator_id,
    assigned_to_id : req.body.assigned_to_id,
    status_id : req.body.status_id    
  };

  return Card
  .update(
    { updatedCard }, 
    { where : { id : id }}
  )
  .then(response => {
    console.log('Edit a card');
    res.json(success.win);
  })
  .catch(err => {
    res.json(success.lose);
  });
})

// delete to card id will remove a card
.delete((req, res) => {
  let id = req.params.id;
  
  return Card.destroy({
    where : { id : id }
  })
  .then(response => {
    console.log('delete a card');
    res.json(success.win);
  })
  .catch(err => {
    res.json(success.lose);
  });
});

module.exports = router;