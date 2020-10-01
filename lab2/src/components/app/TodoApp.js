import React, { useState } from 'react';
import TodoList from '../todolist/TodoList';
import './TodoApp.css';

function TodoApp() {
  const initiaTaskList = [
    { id: 1, text: 'create lab 1', dueDate: 'test1' },
    { id: 2, text: 'create lab 2', dueDate: 'test2' },
    { id: 3, text: 'create lab 3', dueDate: 'test3' },
    { id: 4, text: 'create lab 4', dueDate: 'test4' },
    { id: 5, text: 'create lab 5', dueDate: 'test5' },
    { id: 6, text: 'create lab 6', dueDate: 'test6' },
  ];

  const [taskList, setTaskList] = useState(initiaTaskList);

  const onRemoveTask = (task) => {
    setTaskList(taskList => taskList.filter(item => item !== task));
  }

  return (
    <div className="app">
      <div className="todoContainer">
        <TodoList taskList={taskList} onRemoveTask={onRemoveTask}/>
      </div>
    </div>
  );
}

export default TodoApp;
