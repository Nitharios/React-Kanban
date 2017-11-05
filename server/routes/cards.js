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
    ],
    order : [[ 'id' ]]
  })
  .then((cardList => {
    console.log('returned array of cards');
    return res.json(cardList);
  }));
})

// post to cards will create a new card
.post((req, res) => {
  return Card.create({
    title : req.body.title,
    priority_id : Number(req.body.priority),
    status_id : Number(req.body.status),
    creator_id : Number(req.body.created_by),
    assigned_to_id : Number(req.body.assigned_to)
  })
  .then(newCard => {
    console.log('created a new card');
    newCard.reload({
      include : [
        { model : User, as : 'creator' },
        { model : User, as : 'dev' },
        { model : Priority },
        { model : Status }
      ]
    })
    .then(newCardDetails => {
      res.json(newCardDetails);
    });
  })
  .catch(err => {
    res.json(success.fail);
  });
});

// put to card id will edit a card
router.route('/:id')
.put((req, res) => {  
  let id = req.body.id;

  return Card
  .update({ 
    title : req.body.title,
    priority_id : Number(req.body.priority),
    status_id : Number(req.body.status),
    creator_id : Number(req.body.created_by),
    assigned_to_id : Number(req.body.assigned_to)
  }, 
  { 
    where : { id : id },
    returning : true
  })
  .then(updatedCard => {
    
    updatedCard[1][0].reload({
      include : [
        { model : User, as : 'creator' },
        { model : User, as : 'dev' },
        { model : Priority },
        { model : Status }
      ]
    })
    .then(updatedCardDetails => {
      console.log('edited a card');
      res.json(updatedCardDetails);
    });
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