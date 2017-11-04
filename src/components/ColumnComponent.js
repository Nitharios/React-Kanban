import React from 'react';
import CardListItem from './CardListItem';

export default ({ status_id, status_name, cards, toggleEdit, editCard, deleteCard, handleChange, handleSubmit }) => {
  return(
    <div  id={ status_name } className="column-component">
      { cards
        .filter(card => {
          return card.status.id === Number(status_id);
        })
        .map((card, idx) => {
          return(
            <CardListItem 
              id = { card.id }
              title = { card.title }
              priority_id = { card.priority.id }
              priority = { card.priority.name }
              status_id = { card.status.id }
              status = { card.status.name }
              creator_id = { card.creator.id }
              created_by = { card.creator.name }
              dev_id = { card.dev.id }
              assigned_to = { card.dev.name }
              toggleEdit = { toggleEdit.bind(this, card) }
              isEditing = { card.isEditing }
              editCard = { editCard }
              deleteCard = { deleteCard }
              handleChange = { handleChange }
              handleSubmit = { handleSubmit }
              key = { idx}
            />
          )
        })
      }
    </div>    
  )
}
