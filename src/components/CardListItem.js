import React from 'react';

export default ({ id, title, priority, status, created_By, assigned_To, deleteCard, isHidden }) => {

  let hidden = isHidden;

  function toggleHidden() {
    console.log(hidden);
    hidden = !hidden;
    console.log(hidden);
  }

  function removeCard() {
    deleteCard(id)
  };

  return(
    <div className="card">
      { 
        hidden && <div>
          <div>{ title }</div>
          <div>{ priority }</div>
          <div>{ status }</div>
          <div>{ created_By }</div>
          <div>{ assigned_To }</div>
          <div>
            <input type="submit" value="edit" onClick={ toggleHidden.bind(this) } />
            <input type="submit" value="delete" onClick={ removeCard } /> 
          </div>      
        </div>
      }
      { 
        !hidden && <div>
          <div> title </div>
          <div>{ priority }</div>
          <div>{ status }</div>
          <div>{ created_By }</div>
          <div>{ assigned_To }</div>
          <div>
            <input type="submit" value="edit" onClick={ toggleHidden.bind(this) } />
            <input type="submit" value="delete" onClick={ removeCard } /> 
          </div>      
        </div>
      }
    </div>
  )
}