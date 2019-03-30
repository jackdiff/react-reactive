import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Fragment>
        <div className="flex container mx-auto px-4 mt-8 max-w-md">
          <h2>Hello world!</h2>
        </div>
      </Fragment>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);