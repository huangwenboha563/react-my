import React, { Component } from 'react';
/*
*   爷爷  父亲  儿子   爷爷要想给父亲传递数据，props先传递给父亲，父亲再传递给儿子。这样做不是不可以...
*
*/
function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称: {props.nickname}</h2>
      <h2>用户等级: {props.level}</h2>
    </div>
  )
}

function Profile(props) {
  return (
    <div>
      {/* <ProfileHeader nickname={props.nickname} level={props.level}/> */}
      <ProfileHeader {...props}/>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "kobe",
      level: 99
    }
  }

  render() {
    // const {nickname, level} = this.state;

    return (
      <div>
        <Profile {...this.state}/>
      </div>
    )
  }
}
