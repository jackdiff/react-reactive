import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import Todos from './Todos'
import AddTodo from './AddTodo'
import TodosStatus from './TodosStatus'

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="flex container mx-auto px-4 mt-8 max-w-md">
          <TodosStatus />
          <div className="w-1/4 h-12"><AddTodo /></div>
        </div>
        <div className="container mx-auto px-4 mt-8 max-w-md">
          <Todos />
        </div>
      </Fragment>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);