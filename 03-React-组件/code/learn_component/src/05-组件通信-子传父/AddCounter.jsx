import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddCounter extends Component {
  addHandle(count) {
    console.log(count);
    this.props.addCount(count)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addHandle(1)}>+1</button>
        <button onClick={() => this.addHandle(5)}>+5</button>
        <button onClick={() => this.addHandle(10)}>+10</button>
      </div>
    )
  }
}

AddCounter.propTypes = {
  addCount: PropTypes.func
}

export default AddCounter