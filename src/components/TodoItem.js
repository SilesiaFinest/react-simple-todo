import React from 'react';

//function declaration
function TodoItem(props) {
    return (
      <div className='todo-item'>
        <input type='checkbox' />
        <p>{props.item.text}</p>
      </div>
    )
  };

export default TodoItem;