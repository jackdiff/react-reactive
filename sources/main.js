import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import Todo from './Todo'
import AddTodo from './AddTodo'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {'name' : 'Cook dinner : soup, potatoe, salad', id: 1, 'status': false},
        {'name' : 'Cook dinner : soup, potatoe, salad', id: 2, 'status': false},
        {'name' : 'Cook dinner : soup, potatoe, salad', id: 3, 'status': true},
        {'name' : 'Cook dinner : soup, potatoe, salad', id: 4, 'status': false},
        {'name' : 'Cook dinner : soup, potatoe, salad', id: 5, 'status': true},
        {'name' : 'Cook dinner : soup, potatoe, salad', id: 6, 'status': false},
      ]
    };
  }

  getRemaining() {
    return this.state.todos.filter(todo => !todo.status);

  }

  updateTodo(id, status) {
    const todos = this.state.todos
    const found = todos.findIndex((todo) => todo.id == id)
    if(found >= 0) {
      todos[found].status = status;
      this.setState({todos: todos})
    }
  }

  addTodo(todo) {
    const id = this.state.todos.length + 1
    this.setState({
      todos: [
        ...this.state.todos,
        {'name' : todo, id: id, status: false}
      ]
    })
  }

  render() {
    return (
      <Fragment>
        <div className="flex container mx-auto px-4 mt-8 max-w-md">
          <div class="w-3/4 h-12">{this.getRemaining().length} remaining.</div>
          <div class="w-1/4 h-12"><AddTodo addCallback={(todo) => this.addTodo(todo)} /></div>
        </div>
        <div className="container mx-auto px-4 mt-8 max-w-md">
          <div className="mb-4 border border-grey-lightest">
            { this.state.todos.map((todo) => <Todo {...todo} key={todo.id} updateCallback={(id, status) => this.updateTodo(id, status)} />)
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);