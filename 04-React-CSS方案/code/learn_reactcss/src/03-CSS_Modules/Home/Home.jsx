import React, { PureComponent } from 'react'
// import './Home.css'
import homeStyle from './Home.module.css'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className={homeStyle.section}>
          <h2 className={homeStyle.title}>我是Home标题</h2>
          <p className={homeStyle.content}>我是Home内容</p>
        </div>
      </div>
    )
  }
}

export default Home