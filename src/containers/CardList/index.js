import React from 'react';
import CardListItem from '../../components/CardListItem';

export default ({ cards }) => {
  console.log('create card-list in div');
  
  return(
    <div className="card-list">
      {
        cards
        .map((card, idx) => {
          return(
            <CardListItem
              title = { card.title }
              priority = { card.priority }
              status = { card.status }
              created_By = { card.created_By }
              assigned_To = { card.assigned_To }
              key = { idx}
            />
          )
        })
      }
    </div>
  )
}