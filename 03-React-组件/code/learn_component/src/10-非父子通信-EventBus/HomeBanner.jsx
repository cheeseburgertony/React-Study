import React, { Component } from 'react'
import eventBus from './utlis/event-bus';

export class HomeBanner extends Component {

  prevClick() {
    console.log('上一个');

    //发出事件到事件总线上   eventBus('事件名', ...参数)
    eventBus.emit('bannerPrev', 'tony', 18)
  }
  nextClick() {
    console.log('下一个');
    eventBus.emit('bannerNext', { name: 'tony', age: 18 })
  }
  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={() => this.prevClick()}>上一个</button>
        <button onClick={() => this.nextClick()}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner