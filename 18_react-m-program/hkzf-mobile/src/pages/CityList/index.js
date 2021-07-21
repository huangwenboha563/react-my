import React, { Component } from 'react';
// antd-mobile相关
import { NavBar, Icon,Toast } from 'antd-mobile';
import axios from 'axios';
import { List, AutoSizer } from 'react-virtualized';
import { getCurCity } from '../../utils';
import './index.scss'

console.log('List-----', List)

// List data as an array of strings
// const list = Array(100).fill('Brian Vaughn')
function formatListAry(letter) {
	if (letter == '#') {
		return '当前定位'
	}
	if (letter == 'hot') {
		return '热门城市'
	}
	return letter.toLocaleUpperCase()
}

const TitleHeight = 36;
const NameHeight = 50;

class CityList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newListData: {},
			newListAry: [],
			curIndex: 0
		}
		this.listCpn = React.createRef();
	}

	// 拿到的城市列表数据进行数据二次改造，便于后期交互
	formatListData(oldData) {
		// 最后想得到的数据结构是 {a:[],b:[],c:[],d:[]}   ['a','b','c','d']...
		// 无序列表
		const newListData = {};
		oldData.forEach((item) => {
			const short = item.short;
			// 获取short的首字母
			const firstLetter = short.substr(0, 1);
			if (!newListData[firstLetter]) {
				newListData[firstLetter] = []
				newListData[firstLetter].push(item);
			} else {
				newListData[firstLetter].push(item);
			}
		})
		// console.log(newListData)
		const newListAry = Object.keys(newListData).sort();
		return {
			newListData,
			newListAry
		}
	}

	// 返回上一页 张氧化二岳
	goBack() {
		this.props.history.goBack();
	}

	rowRenderer = ({
									 key, // Unique key within array of rows 唯一表示
									 index, // Index of row within collection 索引号
									 isScrolling, // The List is currently being scrolled 当前项是否在滚动中
									 isVisible, // 当前项是否可见 This row is visible within the List (eg it is not an overscanned row)
									 style, // 将来会被应用在每一行上的样式 ，一定要给每一行添加这个属性 Style object to be applied to row (to position it)
								 }) => {
		const { newListAry, newListData } = this.state;
		const letter = newListAry[index];
		const curCityAry = newListData[letter];
		return (
			<div key={key} style={style} className='city'>
				<div className="title">{formatListAry(letter)}</div>
				{
					curCityAry.map((item) => {
						return <div className="name" key={item.value} onClick={this.changeCity(item)}>{item.label}</div>
					})
				}
			</div>
		);
	}
	changeCity = (item) => {
		const {label,value} = item;
		const yfCity = ['北京','上海','广州','深圳'];
		return () => {
			if (yfCity.indexOf(label)>-1) {
				localStorage.setItem('localCity',JSON.stringify({label,value}));
				this.props.history.go(-1);
			} else {
				// alert('当前城市没有房子...')
				Toast.fail('当前城市没有房源',1,null,false)
			}
		}
	}
	async getAreaList() {
		// 1. 获取城市列表数据
		const areaList = await axios.get('http://localhost:8080/area/city?level=1');
		// console.log(areaList)
		const areaListBody = areaList.data.body;
		const newFormListData = this.formatListData(areaListBody);
		const { newListData, newListAry } = newFormListData;
		// 2. 获取热门城市数据 & 拼接数据
		console.log(newFormListData)
		const hotRes = await axios.get('http://localhost:8080/area/hot');
		console.log(hotRes)
		const hotResData = hotRes.data.body;
		newListData['hot'] = hotResData;
		newListAry.unshift('hot');
		// 3. 当前城市 & 拼接数据
		const curCity = await getCurCity();
		console.log(curCity)
		newListData['#'] = [curCity];
		newListAry.unshift('#');
		this.setState({
			newListData,
			newListAry
		})
	}

	getRowHeight = ({ index }) => {
		// console.log(index);
		// console.log('aaa',this.state);
		const { newListData, newListAry } = this.state;
		// console.log('BB',TitleHeight,NameHeight);
		// // 标题的高度 + 城市数量*城市名称的高度
		return (TitleHeight + newListData[newListAry[index]].length * NameHeight)
	}

	// 生命周期发送http请求
	async componentDidMount() {
		// 获取城市列表数据
		await this.getAreaList();
		// 注意调用这个方法要保证list组件中已经有数据了，否则会报错
		this.listCpn.current.measureAllRows();
	}

	renderNewListAry = () => {
		const { newListAry } = this.state;
		return newListAry.map((item,index) => {
			// console.log(index);
			return (<li className="city-index-item" key={item} onClick={this.changeLetter(index)}>
				<span className={`old-class-name ${this.state.curIndex == index?'index-active':null}`}>{item === 'hot'?'热':item.toUpperCase()}</span>
			</li>)
		})
	}
	// 点击去执行
	changeLetter = (index) => {
		return (e) => {
			this.listCpn.current.scrollToRow(index)
		}
	}
	// 用户获取list组件中渲染行的信息
	onRowsRendered = ({startIndex}) => {
		const {curIndex} = this.state;
		console.log(startIndex);
		if (curIndex !== startIndex) { // 避免没必要的setState可以提高性能
			this.setState({
				curIndex: startIndex
			})
		}
	}
	render() {
		const { newListData, newListAry } = this.state;
		return (
			<div className="city-list" style={{ height: '100%', paddingTop: '45px' }}>
				{/* 1. 导航 */}
				<NavBar
					className='top-nav-bar'
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={this.goBack.bind(this)}
				>城市选择</NavBar>
				{/* 2. 列表 */}
				<AutoSizer>
					{
						({ width, height }) => (<List
							ref = {this.listCpn}
							width={width}
							height={height}
							onRowsRendered={this.onRowsRendered}
							rowCount={newListAry.length}
							rowHeight={this.getRowHeight}
							rowRenderer={this.rowRenderer}
							scrollToAlignment='start'
						/>)
					}
				</AutoSizer>
				{/*3. 右侧字母列表	*/}
				<ul className="city-index">
					{this.renderNewListAry()}
				</ul>
			</div>
		);
	}
}

export default CityList;