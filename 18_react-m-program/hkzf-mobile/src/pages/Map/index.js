import React, { Component } from 'react'
import { NavBar, Icon, Toast } from 'antd-mobile';
import { Link } from "react-router-dom";
// import { BASE_URL } from '../../utils/url'
// import axios from 'axios'
// 对axios简单包装一下，就不用每次都写localhost:8080了
// 关于axio的二次包装，方案很多，随便一个都可以不用纠结...
import { API } from '../../utils/api'
import './index.scss'

export default class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			housesList: [],
			isShowList: false
		}
	}

	// 在该生命周期中去处理地图相关
	componentDidMount() {
		// 初始化地图实例
		// 在react叫脚手架中全局对象需要时候用window.xxx来使用
		// 获取本地存储中当前城市的信息
		const { label, value } = JSON.parse(localStorage.getItem('localCity'));
		// 1. 创建地图实例
		const map = new window.BMap.Map("container");
		this.map = map;
		// 添加控件 比例尺和平移缩放
		map.addControl(new window.BMap.ScaleControl());
		map.addControl(new window.BMap.NavigationControl());
		// 创建地址解析器实例
		const myGeo = new window.BMap.Geocoder();
		// 将地址解析结果显示在地图上，并调整地图视野
		// 地址解析器，意思就是把当前城市比如上海放到地图里面，后台为什么不给坐标值呢？就是把"上海"转换为对应的坐标值
		myGeo.getPoint(label, async (point) => {
				// point 看看
				console.log('point->', point);
				if (point) {
					// 初始化地图
					map.centerAndZoom(point, 11);
					this.renderOverlays(value);
				}
			},
			label);
		map.addEventListener('movestart', () => {
			const isShowList = this.state.isShowList;
			if (isShowList) {
				this.setState({
					isShowList: false
				})
			}
		});
		// 2. 设置中心点坐标(经纬度)
		// const point = new window.BMap.Point(116.404, 39.915);
		// 3. 初始化地图，同时设置展示级别，放大级别
		// map.centerAndZoom(point, 15);
	}

	// 获取对应的缩放级别
	getTypeAndZoom() {
		// 调用地图的api来获取当前缩放级别
		const zoom = this.map.getZoom();
		let nextZoom, type;
		if (zoom >= 10 && zoom < 12) { // 区
			nextZoom = 13;
			type = 'circle';
		} else if (zoom >= 12 && zoom < 14) { // 镇
			nextZoom = 15;
			type = 'circle';
		} else if (zoom >= 14 && zoom < 16) { // 小区
			type = 'rect'
		}
		console.log(zoom);
		return {
			nextZoom, type
		}
	}

	// 获取对应的房源数据
	async renderOverlays(id) {
		Toast.loading('加载中...', 0, null, false);
		const res = await await API.get(`/area/map?id=${id}`);
		Toast.hide();
		const data = res.data.body;
		const { nextZoom, type } = this.getTypeAndZoom();
		// 下一级的缩放级别，和挡墙要绘制的类型
		data.forEach(item => {
			this.createOverlays(item, nextZoom, type);
		})
		console.log('执行的结果...')
	}

	// 创建覆盖物
	createOverlays(item, nextZoom, type) {
		console.log('hah', item, nextZoom, type);
		const {
			coord: { latitude, longitude },
			count,
			label: areaName,
			value
		} = item;
		const areaPoint = new window.BMap.Point(longitude, latitude)
		if (type == "circle") { // 区和镇
			this.createCircle(areaPoint, areaName, count, value, nextZoom);
		} else { // 小区 小区就不需要放大了
			this.createRect(areaPoint, areaName, count, value);
		}
	}

	// 创建覆盖物 小区
	createCircle(areaPoint, areaName, count, value, nextZoom) {
		const label = new window.BMap.Label('', {
			// position 创建一个坐标点...
			position: areaPoint,
			offset: new window.BMap.Size(-35, -35)
		});
		// 给唯一标识
		label.id = value;
		// class 不是className注意
		label.setContent(`
						<div class="bubble">
							<p class="bubble-name">${areaName}</p>
							<p>${count}套</p>
						</div>
					`)
		label.setStyle({
			cursor: 'pointer',
			border: '2px solid rgba(255,0,0,0)',
			padding: '0px',
			whiteSpace: 'nowarp',
			fontSize: '12px',
			color: 'rgb(255,255,255)',
			textAlign: 'center'
		})
		// zy65374061 张岳
		label.addEventListener('click', () => {
			console.log('点击了当前', label.id);
			// 当前被点击覆盖物下方的房源数据
			this.renderOverlays(value);
			// 以当前覆盖物为中心，放大地图
			// new window.BMap.Point(item.coord.longitude, item.coord.latitude) 这个可以弄成一个变量
			this.map.centerAndZoom(areaPoint, nextZoom);
			// 解决去掉当前覆盖物时js报错的问题
			setTimeout(() => {
				// 去除当前覆盖物... 清楚地图中所有覆盖物
				this.map.clearOverlays();
			})
		})
		// 添加覆盖物，有多少个item添加多少个覆盖物，创建好的label添加到地图中
		this.map.addOverlay(label);
	}

	// 创建小区覆盖物
	createRect(areaPoint, areaName, count, value) {
		const label = new window.BMap.Label('', {
			// position 创建一个坐标点...
			position: areaPoint,
			offset: new window.BMap.Size(-50, -28)
		});
		// 给唯一标识
		label.id = value;
		// class 不是className注意
		console.log('setContent执行...')
		label.setContent(`
						<div class="rect">
							<p class="rect-name">${areaName}</p>
							<p class="rect-num">${count}套</p>
							<i class="rect-arrow"></i>
						</div>
					`)
		label.setStyle({
			cursor: 'pointer',
			border: '2px solid rgba(255,0,0,0)',
			padding: '0px',
			whiteSpace: 'nowarp',
			fontSize: '12px',
			color: 'rgb(255,255,255)',
			textAlign: 'center'
		})
		// zy65374061 张岳
		label.addEventListener('click', (e) => {
			this.getHousesList(value);
			const target = e.changedTouches[0];
			this.map.panBy(window.innerWidth / 2 - target.clientX, (window.innerHeight - 330) / 2 - target.clientY)
		})
		// 添加覆盖物，有多少个item添加多少个覆盖物，创建好的label添加到地图中
		this.map.addOverlay(label);
	}

	// 获取小区房源数据
	async getHousesList(id) {
		try {
			Toast.loading('加载中...', 0, null, false);
			const res = await API.get(`/houses?cityId=${id}`);
			Toast.hide();
			// console.log('小区的房源数据:', res)
			this.setState({
				housesList: res.data.body.list,
				// 展示房源列表
				isShowList: true
			});
		} catch (e) { // 请求的过程中可能出错 保证出错了也把loading关闭掉
			Toast.hide();
		}
	}

	render() {
		return (
			<div className="map">
				{/*1.导航*/}
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={() => {
						this.props.history.go(-1)
					}}
				>地图找房</NavBar>
				{/*2. 地图 */}
				<div id="container" style={{ height: 'calc(100vh - 45px)' }}>
					我是地图找房
				</div>
				{/* 3. 房源列表 */}
				{/* 添加 styles.show 展示房屋列表 */}
				<div className={'houseList' + (this.state.isShowList ? ' show' : '')}>
					<div className='titleWrap'>
						<h1 className='listTitle'>房屋列表</h1>
						<Link className='titleMore' to="/home/list">
							更多房源
						</Link>
					</div>

					<div className='houseItems'>
						{/* 房屋结构 */}
						{this.state.housesList.map(item => (
							<div className='house' key={item.houseCode}>
								<div className='imgWrap'>
									<img
										className='img'
										src={`http://localhost:8080${item.houseImg}`}
										alt=""
									/>
								</div>
								<div className='content'>
									<h3 className='title'>{item.title}</h3>
									<div className='desc'>{item.desc}</div>
									<div>
										{item.tags.map(tag => (
											<span
												className='tag tag1'
												key={tag}
											>
                        {tag}
                      </span>
										))}
									</div>
									<div className='price'>
										<span className='priceNum'>{item.price}</span> 元/月
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}

