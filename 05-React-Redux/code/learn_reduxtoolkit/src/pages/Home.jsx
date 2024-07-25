import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNum, subNum } from '../store/features/counter'
import { fetchHomeMultidataAction } from '../store/features/home'

export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata()
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <button onClick={e => this.props.addNum(1)}>+1</button>
        <button onClick={e => this.props.addNum(5)}>+5</button>
        <button onClick={e => this.props.subNum(1)}>-1</button>
        <button onClick={e => this.props.subNum(5)}>-5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNum: num => dispatch(addNum(num)),
  subNum: num => dispatch(subNum(num)),
  fetchHomeMultidata: () => dispatch(fetchHomeMultidataAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)