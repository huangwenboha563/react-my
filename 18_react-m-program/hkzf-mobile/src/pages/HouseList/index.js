import React, { Component } from 'react';
import { Flex } from 'antd-mobile'
// import { withRouter } from 'react-router-dom'
import SearchHeader from '../../components/SearchHeader'
import Filter from './components/Filter'
import { API } from "../../utils/api";

class HouseList extends Component {

	// 接受子组件传递过来的查询条件
	onFilter = (filters) => {
		this.filters = filters
		console.log('查询条件....', this.filters);
		this.searchHouseList();
	}

	async searchHouseList() {
		// 当前城市id
		const { value } = JSON.parse(localStorage.getItem('localCity'));
		// 注意这个...的用法，往一个对象中添加属性。尽量全部用es6...
		const res = await API.get('/houses', {
			params: {
				cityId: value,
				...this.filters,
				start: 1,
				end: 20
			}
		})
	}

	render() {
		const { label } = JSON.parse(localStorage.getItem('localCity'));
		return (
			<div>
				{/*头部导航*/}
				<Flex>
					{/*如果返回按钮放在SearchHeader中就要用withRouter包裹起来*/}
					<i className="iconfont icon-back" onClick={() => {
						this.props.history.go(-1)
					}}> </i>
					<Flex.Item><SearchHeader myName={label}></SearchHeader></Flex.Item>
				</Flex>
				{/*	Filter组件，条件筛选栏 */}
				<Filter onFilter={this.onFilter}></Filter>
			</div>
		);
	}
}

export default HouseList;