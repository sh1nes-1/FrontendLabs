import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const now = new Date();
  const dueDate = props.dueDate;
  const dateDifference = dueDate.getTime() - now.getTime();
  const daysLeft = Math.round(dateDifference / (1000 * 3600 * 24));

  return (
    <div className="todoItem">
      <span>Task: {props.text}, Date: {dueDate.toLocaleDateString()} {dueDate.toLocaleTimeString()}, Days left: {daysLeft > 0 ? daysLeft : 0}</span>
      <input type="button" className="removeBtn" value="x" onClick={props.onRemoveClick}></input>
    </div>
  );
}

export default TodoItem;