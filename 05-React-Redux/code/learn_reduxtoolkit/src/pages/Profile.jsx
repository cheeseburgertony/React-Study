import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNum, subNum } from '../store/features/counter'

export class Profile extends PureComponent {
  render() {
    const { counter, banners, recommends } = this.props
    return (
      <div>
        <h2>Profile Counter: {counter}</h2>
        <button onClick={e => this.props.addNum(1)}>+1</button>
        <button onClick={e => this.props.addNum(5)}>+5</button>
        <button onClick={e => this.props.subNum(1)}>-1</button>
        <button onClick={e => this.props.subNum(5)}>-5</button>
        <h2>Banners</h2>
        <ul>
          {banners.map(item => <li key={item.acm}>{item.title}</li>)}
        </ul>
        <h2>Recommends</h2>
        <ul>
          {recommends.map(item => <li key={item.acm}>{item.title}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends
})

const mapDispatchToProps = (dispatch) => ({
  addNum: num => dispatch(addNum(num)),
  subNum: num => dispatch(subNum(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)