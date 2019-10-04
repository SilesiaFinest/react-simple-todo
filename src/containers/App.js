import React, { Component } from 'react';
import './App.css';
import TodoItem from '../components/TodoItem';
import todosData from '../components/todosData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    // add next line to bind || when declaring method use arrow function!
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      //we are taking prevState of todos and creating a new array, almost identical, except
      //one of the items ( which has the same ID as the ID passed to the function from onChange handler)
      // that item.completed is changing to opposite value (true || false)
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return  {
        //new array is replacing old one
        todos: updatedTodos
      }
    });
  }

  render() {
    //handleChange method is being passed to every TodoItem we create with .map
    const todoItems = this.state.todos.map(item =>
          <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div className='todo-list'>
        {todoItems}
      </div>
    )
  }
};

export default App;
