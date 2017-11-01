import React from 'react';

const CardItem = ({ title, author, priority, status, created_By, assigned_To }) => {
  
  return(
    <div className="card">
      <div>{ title }</div>
      <div>{ author }</div>
      <div>{ priority }</div>
      <div>{ status }</div>
      <div>{ created_By }</div>
      <div>{ assigned_To }</div>
    </div>
  )
}

export default CardItem;