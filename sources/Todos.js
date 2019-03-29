import React, { Component, Fragment } from 'react'
import Todo from './Todo'
import { todoStore, subscribe } from './TodoStore'

class Todos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mb-4 border border-grey-lightest">
        { this.props.todos && this.props.todos.map((todo) => <Todo {...todo} key={todo.id} updateCallback={(id, status) => todoStore.toggle(id, status)} />)
        }
      </div>
    )
  }
}
const dispatch = {
  todos : (todostore) => todostore.todos
}

export default subscribe(Todos, dispatch)