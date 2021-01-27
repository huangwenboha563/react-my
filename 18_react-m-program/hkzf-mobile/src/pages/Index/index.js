import React, { Component } from 'react';
import { Carousel, Flex } from 'antd-mobile'
import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'
import './index.css'
import axios from 'axios'
class HomeIndex extends Component {
	constructor(props) {
		super(props)
		this.state = {
			swiperData: [1, 2, 3],
			swiperLoaded: false,
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
			]
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
	// 生命周期
	componentDidMount() {
		// 发送http请求获取真实数据
		this.getSwiperData();
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
			<Flex.Item key={item.title}>
				<img src={item.src} alt="" />
				<div>{item.title}</div>
			</Flex.Item>))
	}
	render() {
		const { swiperLoaded, swiperData } = this.state;
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
				{/* 2.nav */}
				<div className="nav">
					<Flex>
						{this.renderNav()}
					</Flex>
				</div>
			</div>
		);
	}
}

export default HomeIndex;