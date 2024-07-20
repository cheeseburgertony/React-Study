import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SubCounter extends Component {
  subHandle(count) {
    console.log(count);
    this.props.subCount(-count)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.subHandle(1)}>-1</button>
        <button onClick={() => this.subHandle(5)}>-5</button>
        <button onClick={() => this.subHandle(10)}>-10</button>
      </div>
    )
  }
}

SubCounter.propTypes = {
  subCount: PropTypes.func
}

export default SubCounter