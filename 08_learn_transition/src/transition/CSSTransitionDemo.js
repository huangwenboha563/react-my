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
				{/*apper是什么意思呢，如果不加apper如果。容器默认是显示的不会有影响，如果默认是隐藏的，此时我们如果不加apper的话，点击动画就不会显示*/}
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
