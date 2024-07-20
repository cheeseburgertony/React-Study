import React, { Component } from 'react'
import './style.css'

export class TabControl extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0
    }
  }
  handleClick(index) {
    this.setState({ activeIndex: index })
    this.props.switchTab(index)
  }

  render() {
    const { titles } = this.props
    const { activeIndex } = this.state
    return (
      <div className='tab-control'>
        {titles.map((item, index) => <div
          className={`item ${index === activeIndex ? 'active' : ''}`}
          key={item}
          onClick={() => this.handleClick(index)}
        >
          <span className='text'>{item}</span>
        </div>)}
      </div>
    )
  }
}

export default TabControl