import React from 'react';

const Card = ({ data }) => {
  return(
    <div className="card">
      <div>{ data.title }</div>
      <div>{ data.author }</div>
      <div>{ data.priority }</div>
      <div>{ data.status }</div>
      <div>{ data.created_By }</div>
      <div>{ data.assigned_To }</div>
    </div>
  )
}

export default Card;