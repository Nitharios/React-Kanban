import React from 'react';

export default ({ card, toggleEdit, editCard, deleteCard, handleChange, handleSubmit }) => {  

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
                className="addInput"
                name="title"
                onChange={ handleChange }
                defaultValue={ card.title } />
            </div>
            <div>
              <select
                className="addInput"
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
                className="addInput"
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
                className="addInput"
                name="created_by"
                onChange={ handleChange }
                defaultValue={ creator.id } />
            </div>
            <div>
              <input
                className="addInput"
                name="assigned_to"
                onChange={ handleChange }
                defaultValue={ dev.id } />
            </div>    
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