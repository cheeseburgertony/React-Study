import React, { PureComponent } from 'react'
import './Home.css'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className="section">
          <h2 className='title'>我是Home标题</h2>
          <p className='content'>我是Home内容</p>
        </div>
      </div>
    )
  }
}

export default Home