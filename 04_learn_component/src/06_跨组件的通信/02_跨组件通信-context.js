import React, { Component } from 'react';

// 创建Context对象,创建一个需要共享的Context对象
const UserContext = React.createContext({
	nickname: "aaaa",
	level: -1
})
// 多了一个context，如果ProfileHeader和Profile都是class组件就包裹一层Consumer
const themeContext = React.createContext({
	color: "red",
})

class ProfileHeader extends Component {
	constructor(props, context) {
		super(props, context);
		// 在这里也可以找到context...
		console.log(context);
	}

	render() {
		// 顶层共享的数据就传递到需要使用它的组件里面了，这也是react-redux中connect的原理
		console.log(this.context);
		// jsx ->
		/*return (
			<div>
				<h2>用户昵称: {this.context.nickname}</h2>
				<h2>用户等级: {this.context.level}</h2>
			</div>		)
*/
		return (
			// consumer 原理其实就是 render props模式 看好客租房那个项目 第三天的 那个render prpos的介绍
			<themeContext.Consumer>
				{
					value => {
						return (
							<div>
								<h2>用户昵称: {this.context.nickname}</h2>
								<h2>用户等级: {this.context.level}</h2>
								<h2>颜色:{value.color}</h2>
							</div>
						)
					}
				}
			</themeContext.Consumer>
		)

	}
}

// ProfileHeader它需要共享数据，把它的contentType指向React.createContext创建出来的那个context
ProfileHeader.contextType = UserContext;
// 这样不可以....
// ProfileHeader.contextType = ThemeContext;

function Profile(props) {
	return (
		<div>
			<ProfileHeader />
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
				<hr />
				<UserContext.Provider value={this.state}>
					<themeContext.Provider value={{ color: 'blue' }}>
						<Profile />
					</themeContext.Provider>
				</UserContext.Provider>
			</div>
		)
	}
}
