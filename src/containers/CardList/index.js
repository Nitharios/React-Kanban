import React from 'react';
import CardListItem from '../../components/CardListItem';

export default ({ cards }) => {
  console.log('create card-list in div');
  console.log(cards);
  
  return(
    <div className="card-list">
      {
        cards
        .map((card, idx) => {
          console.log(card);
          
          return(
            <CardListItem
              title = { card.title }
              priority = { card.priority.name }
              status = { card.status.name }
              created_By = { card.user.name }
              assigned_To = { card.assigned_To }
              key = { idx}
            />
          )
        })
      }
    </div>
  )
}