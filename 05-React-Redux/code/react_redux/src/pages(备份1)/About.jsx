import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumAction, subNumAction } from '../store/actionCreator'

export class About extends PureComponent {

  render() {
    const { count, banners, recommends } = this.props
    return (
      <div>
        <h2>About Counter: {count}</h2>
        <button onClick={e => this.props.addNum(1)}>+1</button>
        <button onClick={e => this.props.addNum(5)}>+5</button>
        <button onClick={e => this.props.subNum(1)}>-1</button>
        <button onClick={e => this.props.subNum(5)}>-5</button>

        <div className="baneer">
          <h2>Banners:</h2>
          <ul>
            {banners.map((item, index) => <li key={index}>{item.title}</li>)}
          </ul>
        </div>
        <div className="recommend">
          <h2>Recomments:</h2>
          <ul>
            {recommends.map((item, index) => <li key={index}>{item.title}</li>)}
          </ul>
        </div>

      </div>
    )
  }
}

// 将store里的state映射到props的函数   参数是来自store的state  返回一个对象，这个对象将被传递给组件的props
const mapStateToProps = (state) => ({
  count: state.count,
  banners: state.banners,
  recommends: state.recommends
})

// 将store里的dispatch映射到props的函数  参数是来自store的dispatch 返回一个对象，对象里是进行dispatch派发的方法，也将被传递到组件的props中
const mapDispatchToProps = (dispatch) => ({
  addNum: num => dispatch(addNumAction(num)),
  subNum: num => dispatch(subNumAction(num)),
})


// connect本身是一个高阶函数，接收两个函数作为参数，返回一个高阶组件
// 再调用这个高阶组件传入原来的组件，让高阶组件对原本的组件进行截取修改
// connect(将store里的state映射到props的函数, 将store里的dispatch映射到props的函数)
export default connect(mapStateToProps, mapDispatchToProps)(About)