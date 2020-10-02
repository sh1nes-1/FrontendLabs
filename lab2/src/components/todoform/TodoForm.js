import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm(props) {
  const [ text, setText ] = useState('');
  const [ datetime, setDatetime ] = useState('');

  const onTextChange = (event) => {    
    const newValue = event.target.value;
    setText(() => newValue);
  }

  const onDateTimeChange = (event) => {    
    const newValue = event.target.value;
    setDatetime(() => newValue);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(text, datetime);
  }

  return (
    <form className="todoForm" onSubmit={onSubmit}>
      <input
        type="text"
        value={text}        
        onChange={onTextChange}
        className="textInput"
        placeholder="Text" 
        required={true}
        minLength={3}
        />

      <input 
        type="datetime-local"
        value={datetime}        
        onChange={onDateTimeChange}
        className="dateInput" 
        required={true}
        />

      <input
        type="submit"
        value="Додати запис"
        className="submitBtn"
        />
    </form>
  );
}

export default TodoForm;