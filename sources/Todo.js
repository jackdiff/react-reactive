import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { status: props.status };
  }

  updateStatus() {
    this.setState({status: !this.state.status}, () => {
      this.props.updateCallback(this.props.id, this.state.status);
    })
  }

  render() {
    const style = this.state.status ? "line-through text-grey-darker" :  "text-sm"
    return (
      <form className="w-full h-12 px-2 mt-2">
       <div className="md:flex md:items-center mb-6">
        <label className="block text-grey-darker">
          <input className="mr-2 leading-tight" type="checkbox" checked={this.state.status} onClick={() => this.updateStatus()} />
          <span className={style}>{this.props.name}
          </span>
        </label>
      </div>
      </form>
    )

  }
}