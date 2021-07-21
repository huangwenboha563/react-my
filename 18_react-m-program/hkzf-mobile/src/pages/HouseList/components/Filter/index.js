import React, { Component } from 'react'

import FilterTitle from '../FilterTitle'
import FilterPicker from '../FilterPicker'
import FilterMore from '../FilterMore'
import { API } from "../../../../utils/api";
import styles from './index.module.css'

const titleSelectedStatus = {
	area: false,
	mode: false,
	price: false,
	more: false
}
// class组件
export default class Filter extends Component {
	state = {
		titleSelectedStatus,
		// 控制FilterPikcer  FilterMore的显示隐藏
		openType: '',
		filtersData: {},
		// 筛选条件的选中值
		selectedValues: {
			area: ['area', 'null'],
			mode: ['null'],
			price: ['null'],
			more: []
		}
	}

	// 该生命周期发送http请求获取数据
	async componentDidMount() {
		// 获取所有筛选条件的数据...
		const id = JSON.parse(localStorage.getItem('localCity')).value;
		const res = await API.get(`/houses/condition?id=${id}`);
		console.log(res);
		this.setState({
			filtersData: res.data.body
		})
	}

	// 实现状态更新... 要实现完整的功能，需要后续组件配合
	onTitleClick = (type) => {
		console.log(type);
		const { titleSelectedStatus, selectedValues } = this.state;
		const newTitleSelectedStatus = { ...titleSelectedStatus };
		Object.keys(titleSelectedStatus).forEach((key) => {
			if (key == type) {
				newTitleSelectedStatus[key] = true;
			} else {
				const selectedVal = selectedValues[key];
				if (key === 'area' && (selectedVal.length !== 2 || selectedVal[0] !== 'area')) {
					newTitleSelectedStatus[key] = true;
				} else if (key === 'mode' && selectedVal[0] !== 'null') {
					newTitleSelectedStatus[key] = true;
				} else if (key === 'price' && selectedVal[0] !== 'null') {
					newTitleSelectedStatus[key] = true;
				} else if (key === 'more') { // 等做到more组件时处理

				} else {
					newTitleSelectedStatus[key] = false;
				}
			}
		})
		this.setState({
			titleSelectedStatus: newTitleSelectedStatus,
			openType: type
		})
	}
	// 点击取消执行的方法
	onCancel = () => {
		this.setState({
			openType: ''
		})
	}
	// 作为确定按钮的事件处理程序
	onSave = (type, value) => {
		const newSelectedValues = {
			...this.state.selectedValues,
			// 只更新当前type对应的值
			[type]: value
		}
		console.log(type, value);
		const { area , mode ,price,more} = newSelectedValues;
		// 筛选条件数据
		const filters = {};
		const areaKey = area[0];
		let areaValue = 'null';
		if (area.length === 3) {
			areaValue = area[2]!=='null'?area[2]:area[1];
		}
		filters[areaKey] = areaValue;
		// 方式和组件
		filters.mode = mode[0];
		filters.price = price[0];
		// more
		filters.more = more.join(',');
		this.props.onFilter(filters);
		this.setState({
			openType: '',
			selectedValues: newSelectedValues
		})
	}

	render() {
		const { titleSelectedStatus, filtersData, selectedValues } = this.state;
		const { openType } = this.state;
		console.log(openType, typeof openType);
		const isFilterPicker = (openType === 'area' || openType === 'mode' || openType === 'price');
		console.log(isFilterPicker);
		let PickFiterData = [];
		let cols = null;
		let defaultValue = selectedValues[openType];
		console.log('defaultValue--->', defaultValue, openType);
		if (openType === 'area') {
			PickFiterData = [filtersData.area, filtersData.subway];
			cols = 3;
		} else if (openType === 'mode') {
			PickFiterData = filtersData.rentType;
			cols = 1;
		} else if (openType === 'price') {
			PickFiterData = filtersData.price;
			cols = 1;
		}
		const { roomType, oriented, floor, characteristic } = filtersData;
		const data = {
			roomType, oriented, floor, characteristic
		}
		const defaultMoreValue = selectedValues.more;
		return (
			<div className={styles.root}>
				{/* 前三个菜单的遮罩层 */}
				{isFilterPicker && <div className={styles.mask} onClick={this.onCancel} />}

				<div className={styles.content}>
					{/* 标题栏 */}
					<FilterTitle titleSelectedStatus={titleSelectedStatus} onClick={this.onTitleClick} />

					{/* 前三个菜单对应的内容：
					key={openType} 解决这个bug，通过打印state发现PickerViewr没有被重新创建...。那就添加不同的key来实现重新创建...
					如果不设置 key={openType} 的话 FilterPicker 只会执行一次

					*/}
					{isFilterPicker &&
					<FilterPicker key={openType} defaultValue={defaultValue} onCancel={this.onCancel} onSave={this.onSave}
												PickFiterData={PickFiterData} cols={cols} type={openType} />}

					{/* 最后一个菜单对应的内容： */}
					{openType === 'more' &&
					<FilterMore data={data} type={openType} onSave={this.onSave} defaultValue={defaultMoreValue}
											onCancel={this.onCancel} />}
				</div>
			</div>
		)
	}
}
