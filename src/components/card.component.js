import React from 'react';
import SelectComponent from './select.component';

export default ({ card, toggleEdit, editCard, deleteCard, handleChange, handleSubmit, users, priorities, statuses }) => {

  const priority = card.priority;
  const status = card.status;
  const creator = card.creator;
  const dev = card.dev;

  function removeCard() {
    deleteCard(card.id);
  }

  return(
    <div className="card-component">
      { !card.isEditing &&
        <div>
          <div>{ card.title }</div>
          <div>{ priority.name }</div>
          {/*<div>{ status.name }</div>*/}
          <div>{ creator.name }</div>
          <div>{ dev.name }</div>
          <input type="submit" value="EDIT" onClick={ toggleEdit.bind(this, card) } />
        </div>
      }

      { card.isEditing &&
        <div>
          <form onSubmit={ (e) => handleSubmit(card.id, e) }>
            <div>
              <input
                name="title"
                onChange={ handleChange }
                defaultValue={ card.title } />
            </div>

            <SelectComponent
              optionsArr={ priorities }
              name="priority"
              onChange={ handleChange }
              defaultValue={ priority.id } />

            <SelectComponent
              optionsArr={ statuses }
              name="status"
              onChange={ handleChange }
              defaultValue={ status.id } />

            <SelectComponent
              optionsArr={ users }
              name="created_by"
              onChange={ handleChange }
              defaultValue={ creator.id } />

            <SelectComponent
              optionsArr={ users }
              name="assigned_to"
              onChange={ handleChange }
              defaultValue={ dev.id } />

            <input type="submit"  value="UPDATE" />
            <input type="button" value="UNDO" onClick={ toggleEdit.bind(this, card) } />
            <input type="button" value="DELETE" onClick={ removeCard } />
          </form>

          
        </div>
      }
    </div>
  )
}