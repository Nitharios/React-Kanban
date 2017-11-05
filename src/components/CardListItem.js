import React from 'react';
import SelectComponent from './SelectComponent';

export default ({ card, toggleEdit, editCard, deleteCard, handleChange, handleSubmit, users }) => {    

  const priority = card.priority;
  const status = card.status;
  const creator = card.creator;
  const dev = card.dev;

  function removeCard() {
    deleteCard(card.id);
  }

  return(
    <div className="card">
      { !card.isEditing &&
        <div>
          <div>{ card.title }</div>
          <div>{ priority.name }</div>
          <div>{ status.name }</div>
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
            <div>
              <select
                name="priority"
                onChange={ handleChange }
                defaultValue={ priority.id }>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
                <option value="4">Blocker</option>
              </select>
            </div>
            <div>
              <select
                name="status"
                onChange={ handleChange }
                defaultValue={ status.id }>
                <option value="1">In Queue</option>
                <option value="2">In Progress</option>
                <option value="3">Done</option>
              </select>            
            </div>
            <div>
              <input
                name="created_by"
                onChange={ handleChange }
                defaultValue={ creator.id } />
            </div>
            <SelectComponent
              optionsArr={ users }
              name="assigned_to"
              onChange={ handleChange }
              defaultValue={ dev.id }
            />
            <input type="submit"  value="UPDATE" />
          </form>

          <button type="submit" onClick={ toggleEdit.bind(this, card) }>
            UNDO
          </button>
          <button type="submit" onClick={ removeCard }>
            DELETE
          </button>
        </div>
      }
    </div>
  )
}