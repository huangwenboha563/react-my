import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { Route, Switch } from 'react-router-dom'
// home中的首页
import Index from '../Index'
// home中的找房子
import HouseList from '../HouseList'
// home中资讯
import News from '../News'
// houme中的我的
import Profile from '../Profile'
import './index.css'

class Home extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props.location.pathname);
		this.state = {
			// 控制默认选中的tab菜单
			selectedTab: this.props.location.pathname,
		}
	}
	// 我们点击首页的nav菜单时候，对应的tabbar没有高亮
	// 原因是我们原来实现该功能的时候，点击tabbar和第一次加载home或者刷新的情况
	// 解决方案：当点击nav导航的时候，会执行Home组件的componentDidUpdatae
	// 我怎么知道路由切换了呢？再查查componentUpdate能干什么...
	componentDidUpdate(prevProps,prevState) {
		console.log('上一次',prevProps.location.pathname)
		console.log('当前',this.props.location.pathname)
		if (prevProps.location.pathname !== this.props.location.pathname) {
			this.setState({
				selectedTab: this.props.location.pathname
			})
		}
	}
	render() {
		return (
			<div className='home' style={{paddingBottom:'50px  '}}>
				{/*理解嵌套路由的套路*/}
				<Route exact path='/home' component={Index}></Route>
				<Route path='/home/list' component={HouseList}></Route>
				<Route path='/home/news' component={News}></Route>
				<Route path='/home/profile' component={Profile}></Route>
				{/*底部菜单栏*/}
				<div>
					<TabBar unselectedTintColor="#888 " tintColor="#21997a" barTintColor="white" noRenderContent={true}>
						<TabBar.Item
							title="首页"
							key="Life"
							icon={<i className={"iconfont icon-ind"} />}
							selectedIcon={<i className={"iconfont icon-ind"} />}
							// 满足这个条件就高亮
							selected={this.state.selectedTab === '/home'}
							// 每次点击都改变selectedTab的值，才能保证每次点击的时候都高亮
							onPress={() => {
								this.setState({
									selectedTab: '/home',
								});
								this.props.history.push('/home');
							}}
							data-seed="logId"
						>
						</TabBar.Item>
						<TabBar.Item
							icon={<i className={"iconfont icon-findHouse"} />}
							selectedIcon={<i className={"iconfont icon-findHouse"} />}
							title="找房"
							key="Koubei"
							selected={this.state.selectedTab === '/home/list'}
							onPress={() => {
								this.setState({
									selectedTab: '/home/list',
								});
								this.props.history.push('/home/list');
							}}
							data-seed="logId1"
						>
						</TabBar.Item>
						<TabBar.Item
							icon={<i className={"iconfont icon-infom"} />}
							selectedIcon={<i className={"iconfont icon-infom"} />}
							title="资讯"
							key="Friend"
							selected={this.state.selectedTab === '/home/news'}
							onPress={() => {
								this.setState({
									selectedTab: '/home/news',
								});
								this.props.history.push('/home/news');
							}}
						>
						</TabBar.Item>
						<TabBar.Item
							icon={<i className={"iconfont icon-my"} />}
							selectedIcon={<i className={"iconfont icon-my"} />}
							title="我的"
							key="my"
							selected={this.state.selectedTab === '/home/profile'}
							onPress={() => {
								this.setState({
									selectedTab: '/home/profile',
								});
								this.props.history.push('/home/profile');
							}}
						>
						</TabBar.Item>
					</TabBar>
				</div>
			</div>
		);
	}
}

export default Home;