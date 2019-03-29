import React, { Component, Fragment } from 'react'
import { todoStore }  from './TodoStore'

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm : false
    }
  }

  add() {
    if(this.newTodo.value) {
      todoStore.addTodo(this.newTodo.value)
      this.setState({showForm: false}, () => {
        this.newTodo.value = ''
      })
    }
  }

  render() {
    let modalStyle = {backgroundColor: 'rgba(145, 145, 145, 0.3)', width:'100vw', height:'100vh'}
    let modalFormStyle = {top: '25%', left: '25%'}
    if(!this.state.showForm) {
      modalStyle.display = 'none';
      modalFormStyle.display = 'none';
    }
    return (
      <Fragment>
      <button onClick={() => this.setState({showForm: true})} className=" float-right bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        New
      </button>
      <div onClick={() => this.setState({showForm: false})} className='absolute z-40 flex pin-t pin-l' style={modalStyle}></div>
        <div className="container absolute z-50 mx-auto px-4 mt-8 max-w-md" style={modalFormStyle}>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" for="todo">
                New Todo
              </label>
              <input ref={(el) => this.newTodo = el} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="todo" type="text" placeholder="todo" />
            </div>
            <div className="flex items-center justify-between">
              <button onClick={() => this.add()} className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Add
              </button>
            </div>
          </form>
      </div>
      </Fragment>
    )

  }
}
