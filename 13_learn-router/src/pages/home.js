import React, { PureComponent } from 'react'

export default class Home extends PureComponent {
  render() {
    console.log('home-props',this.props);
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}
