import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const daysLeft = '2';

  return (
    <div className="todoItem">
      <span>Task: {props.text}, Date: {props.dueDate}, Days left: {daysLeft}</span>
      <input type="button" className="removeBtn" value="x" onClick={props.onRemoveClick}></input>
    </div>
  );
}

export default TodoItem;