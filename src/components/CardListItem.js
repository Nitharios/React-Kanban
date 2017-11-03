import React from 'react';

export default ({ id, title, priority, status, created_By, assigned_To, deleteCard }) => {

  console.log(deleteCard);

  function removeCard() {
    deleteCard(id);
  };

  return(
    <div className="card">
      { 
        <div>
          <div>{ title }</div>
          <div>{ priority }</div>
          <div>{ status }</div>
          <div>{ created_By }</div>
          <div>{ assigned_To }</div>
          <div>
            <input type="submit" value="edit" />
            <input type="submit" value="delete" onClick={ removeCard } /> 
          </div>      
        </div>
      }
    </div>
  )
}