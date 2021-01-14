import React, { PureComponent } from 'react';


// CSSTransition 是这个库提供的一个组件，只需要对别的进行包裹就行
import { CSSTransition } from 'react-transition-group';

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
// https://reactcommunity.org/react-transition-group/css-transition
// https://blog.csdn.net/weixin_46193248/article/details/108360517
export default class CSSTransitionDemo extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			isShow: true
		}
	}

	render() {
		const { isShow } = this.state;

		return (
			<div>
				{/*点击button的时候根元素的在显示和隐藏的时候会有类名切换*/}
				<button onClick={e => {this.setState({ isShow: !isShow })}}>显示/隐藏</button>
				{/*unmountOnExit这个属性设置为true的话就会彻底从dom中删除掉，这些文档真他妈的有意思。咋么不写这个属性的介绍
				又查了，是自己没找到 CSSTransition 会继承 Transtion；
				unmountOnExit这些属性的介绍在这个里面。

				*/}
				{/*apper是什么意思呢
				eg:没有apper属性和对应类名的情况下isShow是false的话，我们点击按钮变为true会有动画这效果没问题。
				但是此时我们isShow默认为true，我们f5刷新网页，再或者用户初次进入到该页面。我们是看不到这个用CSSTransition包裹的元素从无到有的过程中有动画的，
				如果这个时候也需要有动画就加上apper属性和在css文件中添加对应的样式。
				apper可以理解为第一次加载这个组件

				*/}
				<CSSTransition in={isShow}
											 classNames="card"
											 timeout={5000}
											 unmountOnExit={true}
											 appear
											 onEnter={el => console.log("开始进入")}
											 onEntering={el => console.log("正在进入")}
											 onEntered={el => console.log("进入完成")}
											 onExit={el => console.log("开始退出")}
											 onExiting={el => console.log("退出状态")}
											 onExited={el => console.log("退出完成")}>
					<Card
						style={{ width: 300 }}
						cover={
							<img
								alt="example"
								src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
							/>
						}
						actions={[
							<SettingOutlined key="setting" />,
							<EditOutlined key="edit" />,
							<EllipsisOutlined key="ellipsis" />,
						]}
					>
						<Meta
							avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
							title="Card title"
							description="This is the description"
						/>
					</Card>
				</CSSTransition>
			</div>
		)
	}
}
