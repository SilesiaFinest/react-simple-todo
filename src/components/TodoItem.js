import React from 'react';

//function declaration
function TodoItem(props) {
  //text decoration style declared then added conditionally to <p></p>
    const completedStyle = {
      fontStyle: 'italic',
      color: '#cdcdcd',
      textDecoration: 'line-through'
    }
    return (
      <div className='todo-item'>
        <input
          type='checkbox'
          //binding checked with item's.completed value
          checked={props.item.completed}
          //onChange receives event in 1st () it is anonymous function and then it calls handleChange
          // and passes this item's ID so we can identificate where to change .completed value
          onChange={() => props.handleChange(props.item.id)} />
        <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
      </div>
    )
  };

export default TodoItem;