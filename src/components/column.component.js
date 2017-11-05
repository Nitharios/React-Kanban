import React from 'react';
import CardItem from '../containers/CardItem';
import AddCard from '../containers/AddCard';

export default ({ cards, status_id, status_name }) => {

  return(
    <div id={ status_name } className="column-component">
      <div className="sub-header">
        <div>
          { status_name }
        </div>
        <button id="sub-option">
          +
        </button>
      </div>

      <AddCard />

      { cards
        .filter(card => {
          return card.status.id === Number(status_id);
        })
        .sort((current, next) => {
          return Number(current.priority.id) - Number(next.priority.id);
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
