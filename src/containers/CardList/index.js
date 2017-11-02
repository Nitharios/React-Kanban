import React from 'react';
import CardListItem from '../../components/CardListItem';

export default ({ cards }) => {
  
  return(
    <div className="card-list">
      {
        cards
        .map((card, idx) => {
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