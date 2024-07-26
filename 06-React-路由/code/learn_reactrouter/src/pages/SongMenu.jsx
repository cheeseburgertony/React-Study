import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class SongMenu extends PureComponent {
  constructor() {
    super()
    this.state = {
      songs: [
        { id: 111, name: '歌曲1' },
        { id: 112, name: '歌曲2' },
        { id: 113, name: '歌曲3' },
        { id: 114, name: '歌曲4' },
      ]
    }
  }

  navigateTo(id) {
    const { navigate } = this.props.router
    navigate(`/detail/${id}`)
  }

  render() {
    const { songs } = this.state
    return (
      <div>
        <h2>SongMenu</h2>
        <ul>
          {songs.map(item => <li key={item.id} onClick={(e) => this.navigateTo(item.id)}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default withRouter(SongMenu)