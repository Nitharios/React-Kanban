import React from 'react';
import CardItem from '../containers/CardItem';

export default ({ cards, status_id, status_name }) => {
  return(
    <div id={ status_name } className="column-component">
      { cards
        .filter(card => {
          return card.status.id === Number(status_id);
        })
        .map((card, idx) => {
          return(
            <CardItem
              card = { card }
              key = { idx }
            />
          )
        })
      }
    </div>    
  )
}
