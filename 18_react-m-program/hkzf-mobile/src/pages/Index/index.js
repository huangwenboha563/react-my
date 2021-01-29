import React, { Component } from 'react';
// antd-mobile
import { Carousel, Flex, Grid } from 'antd-mobile'
// react 中使用图片
import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'
// 本页面的 样式文件
import './index.scss'
// axios http库
import axios from 'axios'

class HomeIndex extends Component {
	constructor(props) {
		super(props)
		this.state = {
			swiperData: [],
			// 这个状态用来解决轮播图如果是从后端获取数据时不播放的问题
			swiperLoaded: false,
			// nava导航的数据
			navData: [
				{
					title: '整租',
					src: nav1,
					path: '/home/list'
				}, {
					title: '合租',
					src: nav2,
					path: '/home/list'
				}, {
					title: '地图找房',
					src: nav3,
					path: '/home/list'
				}, {
					title: '去出租',
					src: nav4,
					path: '/home/list'
				}
			],
			// 租房小组的数据
			groupData: [],
			// 最新资讯
			newsData: [],
			myName: ''
		}
	}
	// 获取swiper真实的数据
	async getSwiperData() {
		const res = await axios.get('http://localhost:8080/home/swiper');
		const swiperData = res.data.body;
		// console.log('swiper轮播图的数据->',res)
		this.setState({
			swiperData: swiperData,
			swiperLoaded: true
		})
	}
	async getGroupData() {
		const res = await axios.get('http://localhost:8080/home/groups?area=AREA%7C88cff55c-aaa4-e2e0');
		const groupData = res.data.body;
		this.setState({
			groupData: groupData
		})
	}
	async getNewsData() {
		const res = await axios.get('http://localhost:8080/home/news?area=AREA%7C88cff55c-aaa4-e2e0');
		const newsData = res.data.body;
		this.setState({
			newsData: newsData
		})
	}
	// 生命周期
	componentDidMount() {
		// 发送http请求获取真实数据，获取轮播图数据
		this.getSwiperData();
		// 获取租房小组数据
		this.getGroupData();
		// 获取最最新资讯
		this.getNewsData();
		// 地图api获取城市信息
		this.getLocalCity();
	}
	getLocalCity() {
		const myCity = new window.BMap.LocalCity();
		myCity.get(async (res) => {
			const name = res.name;
			const cityRes = await axios.get(`http://localhost:8080/area/info?name=${name}`);
			console.log(cityRes)
			const realName = cityRes.data.body.label;
			this.setState({
				myName: realName
			})
		});
	}
	// 渲染轮播图的方法，提取出来的好处是render看上去没有那么多业务代码...
	renderSwiper() {
		return this.state.swiperData.map(item => (
			<a
				key={item.id}
				href="http://m.breadoffer.com"
				style={{ display: 'inline-block', width: '100%', height: 212 }}
			>
				<img
					src={`http://localhost:8080${item.imgSrc}`}
					alt=""
					style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
				/>
			</a>
		))
	}
	renderNav() {
		return this.state.navData.map((item) => (
			<Flex.Item key={item.title} onClick={this.goToNav(item.path)}>
				<img src={item.src} alt="" />
				<div>{item.title}</div>
			</Flex.Item>))
	}
	renderNews() {
		return this.state.newsData.map((item) => (<div className="flex-news" key={item.id}>
			<div className="img-con">
				<img src={`http://localhost:8080${item.imgSrc}`} alt="" />
			</div>
			<div className="flex-right">
				<Flex direction="column" justify="between">
					<div className="news-top">{item.title}</div>
					<div className="news-bottom">
						<Flex justify="between">
							<span>{item.from}</span>
							<span>{item.date}</span>
						</Flex>
					</div>
				</Flex>
			</div>
		</div>))
	}
	// 去跳转
	goToNav = (path) => {
		return (e) => {
			this.props.history.push(path)
			console.log(path)
		}
	}

	render() {
		const { swiperLoaded, swiperData, groupData, myName } = this.state;
		console.log('aaa', swiperLoaded)
		console.log('bbb', swiperData.length)
		return (
			<div>
				{/* 1.轮播图 */}
				<div className='swiper-con' style={{ height: '212px' }}>
					{
						swiperLoaded && <Carousel autoplay={true} infinite>{this.renderSwiper()}</Carousel>
					}
				</div>
				<div className="temp-list" style={{ height: '30px', lineHeight: '30px', textAlign: 'center' }}>
					<Flex>
						<Flex.Item style={{ textAlign: 'center' }} onClick={() => (this.props.history.push('/cityList'))}>定位-{myName}</Flex.Item>
						<Flex.Item style={{ textAlign: 'center' }} onClick={() => (this.props.history.push('/search'))}>全文搜索</Flex.Item>
						<Flex.Item style={{ textAlign: 'center' }} onClick={() => (this.props.history.push('/map'))}>地图找房</Flex.Item>
					</Flex>
				</div>
				{/* 2.nav */}
				<div className="nav">
					<Flex>
						{this.renderNav()}
					</Flex>
				</div>
				{/* 租房小组 */}
				<div className="group-con">
					<div className="top">
						<span>租房小组</span>
						<span>更多</span>
					</div>
					<div className="group-wrapper">
						<Grid data={groupData} square={false} columnNum={2} activeStyle hasLine={false} renderItem={item => (
							<Flex>
								<Flex.Item>
									<div className="left">
										<p>{item.title}</p>
										<span>{item.desc}</span>
									</div>
								</Flex.Item>
								<Flex.Item>
									<div className="group-img-con">
										<img src={`http://localhost:8080${item.imgSrc}`} alt="" />
									</div>
								</Flex.Item>
							</Flex>
						)} />
					</div>
				</div>
				{/* 最新资讯 */}
				<div className="news-con">
					{this.renderNews()}
				</div>
			</div>
		);
	}
}

export default HomeIndex;

//  是否允许新增采集