import React from 'react';

export default ({ id, title, priority_Id, priority, status_Id, status, created_By, assigned_To, toggleEdit, isEditing, editCard, deleteCard }) => {
  
  function removeCard() {
    deleteCard(id);
  };

  return(
    <div className="card">
      { !isEditing &&
        <div>
          <div>{ title }</div>
          <div>{ priority }</div>
          <div>{ status }</div>
          <div>{ created_By }</div>
          <div>{ assigned_To }</div>
        </div>
      }

      { isEditing &&
        <div>
          <form onSubmit={ editCard }>
            <div>
              <input
                className="addInput"
                name="title"
                // onChange={ this.handleChange.bind(this) }
                defaultValue={ title } />
            </div>
            <div>
              <select
                className="addInput"
                name="priority"
                // onChange={ this.handleChange.bind(this) }>
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
                // onChange={ this.handleChange.bind(this) }>
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
                // onChange={ this.handleChange.bind(this) }
                defaultValue={ created_By} />
            </div>
            <div>
              <input
                className="addInput"
                name="assigned_To"
                // onChange={ this.handleChange.bind(this) }
                defaultValue={ assigned_To } />
            </div>    
              <input
                type="submit"
                value="update" />
            </form>
          <div>
            <input type="submit" value="delete" onClick={ removeCard } /> 
          </div>      
        </div>
      }
        <input type="submit" value="edit" onClick={ toggleEdit } />
    </div>
  )
}