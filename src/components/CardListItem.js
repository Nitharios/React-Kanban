import React from 'react';

export default ({ id, title, priority_Id, priority, status_Id, status, created_By, assigned_To, toggleEdit, isEditing, editCard, deleteCard, handleChange, handleSubmit }) => {  

  function removeCard() {
    deleteCard(id);
  }

  return(
    <div className="card">
      { !isEditing &&
        <div>
          <div>{ title }</div>
          <div>{ priority }</div>
          <div>{ status }</div>
          <div>{ created_By }</div>
          <div>{ assigned_To }</div>
          <input type="submit" value="EDIT" onClick={ toggleEdit } />
        </div>
      }

      { isEditing &&
        <div>
          <form onSubmit={ (e) => handleSubmit(id, e) }>
            <div>
              <input
                className="addInput"
                name="title"
                onChange={ handleChange }
                defaultValue={ title } />
            </div>
            <div>
              <select
                className="addInput"
                name="priority"
                onChange={ handleChange }
                defaultValue={ priority_Id }>
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
                defaultValue={ status_Id }>
                <option value="1">In Queue</option>
                <option value="2">In Progress</option>
                <option value="3">Done</option>
              </select>            
            </div>
            <div>
              <input
                className="addInput"
                name="created_By"
                onChange={ handleChange }
                defaultValue={ created_By} />
            </div>
            <div>
              <input
                className="addInput"
                name="assigned_To"
                onChange={ handleChange }
                defaultValue={ assigned_To } />
            </div>    
              <input type="submit"  value="UPDATE" />
            </form>
            <button type="submit" onClick={ toggleEdit }>
              UNDO
            </button>
            <button type="submit" onClick={ removeCard }>DELETE
            </button>
          <div>
          </div>      
        </div>
      }
    </div>
  )
}