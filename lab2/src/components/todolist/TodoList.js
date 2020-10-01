import React from 'react';
import TodoItem from '../todoitem/TodoItem';
import './TodoList.css';

function TodoList(props) {
  return (
    <div className="todoList">
      {props.taskList.map(task =>
        <TodoItem
          key={task.id}
          text={task.text}
          dueDate={task.dueDate} 
          onRemoveClick={() => props.onRemoveTask(task)} />
      )}
    </div>
  );
}

export default TodoList;