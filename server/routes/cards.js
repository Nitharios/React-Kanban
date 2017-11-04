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
  return Card.findAll({
    include : [
    { model : User, as : 'creator' },
    { model : User, as : 'dev' },
    { model : Priority },
    { model : Status }
    ]
  })
  .then((cardList => {
    console.log('returned array of cards');
    
    return res.json(cardList);
  }));
})

// post to cards will create a new card
.post((req, res) => {
  console.log(req.body);
  return Card
  .create({
    title : req.body.title,
    priority_id : Number(req.body.priority) || 1,
    creator_id : Number(req.body.created_By) || 1,
    assigned_to_id : Number(req.body.assigned_To) || 1,
    status_id : Number(req.body.status_id) || 1
  })
  .then(response => {
    console.log('created a new card');
    res.json(success.win);
  })
  .catch(err => {
    console.log(success.fail);
    res.json(success.fail);
  });
});

// put to card id will edit a card
router.route('/:id')
.put((req, res) => {
  console.log(req.body);
  
  let id = req.body.id;

  return Card
  .update(
  { 
    title : req.body.title,
    priority_id : Number(req.body.priority),
    creator_id : Number(req.body.created_By),
    assigned_to_id : Number(req.body.assigned_To),
    status_id : Number(req.body.status)
  }, 
    { where : { id : id }}
  )
  .then(response => {
    console.log('edited a card');
    res.json(success.win);
  })
  .catch(err => {
    console.log(err);
    
    res.json(success.fail);
  });
})

// delete to card id will remove a card
.delete((req, res) => {
  let id = req.params.id;
  
  return Card.destroy({
    where : { id : id }
  })
  .then(response => {
    console.log('deleted a card');
    res.json(success.win);
  })
  .catch(err => {
    res.json(success.fail);
  });
});

module.exports = router;