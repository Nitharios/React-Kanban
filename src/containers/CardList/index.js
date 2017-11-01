import React from 'react';
import CardListItem from '../../components/CardListItem';

const CardList = ({ cards }) => {
  console.log(cards);
  
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

export default CardList;