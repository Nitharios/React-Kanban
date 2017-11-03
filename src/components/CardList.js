import React from 'react';
import CardListItem from './CardListItem';

export default ({ cards, deleteCard, isHidden }) => {  
  return(
    <div className="card-list">
      {
        cards
        .map((card, idx) => {
          return(
            <CardListItem 
              id = { card.id }
              title = { card.title }
              priority = { card.priority.name }
              status = { card.status.name }
              created_By = { card.user.name }
              assigned_To = { card.assigned_To }
              deleteCard = { deleteCard }
              isHidden = { isHidden }
              key = { idx}
            />
          )
        })
      }
    </div>
  )
}