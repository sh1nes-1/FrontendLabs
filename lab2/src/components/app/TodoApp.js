import React, { useState } from 'react';
import TodoForm from '../todoform/TodoForm';
import TodoList from '../todolist/TodoList';
import './TodoApp.css';

function TodoApp() {
  const now = new Date();

  const initialTaskList = [
    { id: 1, text: 'create lab 1', dueDate: now },
    { id: 2, text: 'create lab 2', dueDate: now },
    { id: 3, text: 'create lab 3', dueDate: now },
    { id: 4, text: 'create lab 4', dueDate: now },
    { id: 5, text: 'create lab 5', dueDate: now },
    { id: 6, text: 'create lab 6', dueDate: now },
  ];

  const [taskList, setTaskList] = useState(initialTaskList);

  const onRemoveTask = (task) => {
    setTaskList(taskList => taskList.filter(item => item !== task));
  }

  const onFormSubmit = (text, datetime) => {
    const task = {
      id: taskList[taskList.length - 1].id + 1,
      text: text,
      dueDate: new Date(datetime)
    };

    setTaskList([...taskList, task]);
  }

  return (
    <div className="app">
      <div className="todoContainer">
        <TodoList 
          taskList={taskList} 
          onRemoveTask={onRemoveTask}/>

        <TodoForm onFormSubmit={onFormSubmit} />
      </div>
    </div>
  );
}

export default TodoApp;
