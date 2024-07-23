import React, { PureComponent } from 'react'
// import './Profile.css'
import profileStyle from './Profile.module.css'

export class Profile extends PureComponent {
  render() {
    return (
      <div>
        <div className={profileStyle.section}>
          <h2>Profile</h2>
        </div>
      </div>
    )
  }
}

export default Profile