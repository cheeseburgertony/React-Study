import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class User extends PureComponent {
  render() {
    // 直接取出的  需要通过searchParams.get('键名')取出value
    const { searchParams } = this.props.router
    // 转化成对象后的   直接query.键名 取出value
    const { query } = this.props.router
    // console.log(searchParams);
    // console.log(query);
    const name = searchParams.get('name')
    const age = searchParams.get('age')
    const name2 = query.name
    const age2 = query.age
    return (
      <div>
        <h2>User</h2>
        <div>{name}-{age}</div>
        <div>{name2}-{age2}</div>
      </div>
    )
  }
}

export default withRouter(User)