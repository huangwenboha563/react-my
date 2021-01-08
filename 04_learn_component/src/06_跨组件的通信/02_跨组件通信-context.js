import React, {Component} from 'react';

// 创建Context对象,创建一个需要共享的Context对象
const UserContext = React.createContext({
    nickname: "aaaa",
    level: -1
})

class ProfileHeader extends Component {
    render() {
        console.log(this.context);
        // jsx ->
        return (
            <div>
                <h2>用户昵称: {this.context.nickname}</h2>
                <h2>用户等级: {this.context.level}</h2>
            </div>
        )
    }
}
// ProfileHeader它需要共享数据，把它的contentType指向React.createContext创建出来的那个context
ProfileHeader.contextType = UserContext;

// ProfileHeader.contextType = ThemeContext;

function Profile(props) {
    return (
        <div>
            <ProfileHeader/>
            <ul>
                <li>设置1</li>
                <li>设置2</li>
                <li>设置3</li>
                <li>设置4</li>
            </ul>
        </div>
    )
}

// 最外层
export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickname: "kobe",
            level: 99
        }
    }

    render() {
        return (
            <div>
                {/*<UserContext.Provider value={this.state}>
                </UserContext.Provider>
                <Profile/> */}
                {/*这种情况下会找默认值*/}

                
                <hr/>
                <UserContext.Provider value={this.state}>
                    <Profile/>
                </UserContext.Provider>
            </div>
        )
    }
}
