import React, { PureComponent } from 'react'
import { connect } from '../hoc'
import { addNum, subNum } from '../store/features/counter'

export class About extends PureComponent {
  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>About Counter: {counter}</h2>
        <button onClick={e => this.props.addNum(1)}>+1</button>
        <button onClick={e => this.props.subNum(1)}>-1</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNum: num => dispatch(addNum(num)),
  subNum: num => dispatch(subNum(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(About)