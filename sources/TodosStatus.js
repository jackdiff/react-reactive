import React, { Component } from 'react'
import { subscribe } from './TodoStore'

class TodosStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { status: props.status };
  }

  render() {
    return (
      <div className="w-3/4 h-12">{this.props.remainTodosCount ? this.props.remainTodosCount : 0} remaining.</div>
    )
  }
}

const dispatch = {
  remainTodosCount : (todostore) => todostore.remainingTodosCount()
}

export default subscribe(TodosStatus, dispatch)