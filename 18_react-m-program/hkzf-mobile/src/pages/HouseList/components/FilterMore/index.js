import React, { Component } from 'react'

import FilterFooter from '../../../../components/FilterFooter'

import styles from './index.module.css'

export default class FilterMore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedValues: this.props.defaultValue
		}
	}
	// 每一个标签添加点击事件
	onTagClick(value) {
		console.log(value);
		const { selectedValues } = this.state;
		// react中不要修改原来的state值
		const newSelectedValues = [...selectedValues];
		if(selectedValues.indexOf(value)<=-1) { // 如果没有
			newSelectedValues.push(value);
		} else { // 如果有（连续点击两次试试）
			// 知道索引值想要知道索引 findIndex
			const index = newSelectedValues.findIndex(item => item === value);
			newSelectedValues.splice(index,1);
		}
		// 最后更新状态
		this.setState({
			selectedValues:newSelectedValues
		})
	}

	// 渲染标签
	renderFilters(data) {
		// 高亮类名： styles.tagActive styles.tagActive
		const {selectedValues} = this.state;
		return data.map(item => {
			const isSelected = selectedValues.indexOf(item.value)>-1;
			return (
				<span className={[styles.tag,isSelected?styles.tagActive:''].join(' ')} key={item.value} onClick={() => {
					this.onTagClick(item.value)
				}}>{item.label}</span>
			)
		})
	}
	// 点击取消去清空数据
	onCancel = () => {
		this.setState({
			selectedValues:[]
		})
	}
	// 确定
	onOk = () => {
		// type 和 onSave是父组件传递过来的数据
		const {type,onSave} = this.props;
		// onSave 是组件中的方法...
		onSave(type,this.state.selectedValues)
	}
	onMaskClick = () => {
		this.props.onCancel();
	}
	render() {
		const { data: { roomType, oriented, floor, characteristic } } = this.props;
		return (
			<div className={styles.root}>
				{/* 遮罩层 */}
				<div className={styles.mask} onClick={this.onMaskClick}/>

				{/* 条件内容 */}
				<div className={styles.tags}>
					<dl className={styles.dl}>
						<dt className={styles.dt}>户型</dt>
						<dd className={styles.dd}>{this.renderFilters(roomType)}</dd>

						<dt className={styles.dt}>朝向</dt>
						<dd className={styles.dd}>{this.renderFilters(oriented)}</dd>

						<dt className={styles.dt}>楼层</dt>
						<dd className={styles.dd}>{this.renderFilters(floor)}</dd>

						<dt className={styles.dt}>房屋亮点</dt>
						<dd className={styles.dd}>{this.renderFilters(characteristic)}</dd>
					</dl>
				</div>

				{/* 底部按钮 */}
				<FilterFooter className={styles.footer} cancelText='清除' onCancel={this.onCancel} onOk={this.onOk}/>
			</div>
		)
	}
}
