import React from 'react';
import './App.css';
import TodoItem from '../components/TodoItem';
import todosData from '../components/todosData'

function App() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className='todo-list'>
      {todoItems}
    </div>
  )
};

export default App;
