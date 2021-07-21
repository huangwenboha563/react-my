import React, { Component } from 'react'

import { PickerView } from 'antd-mobile'

import FilterFooter from '../../../../components/FilterFooter'

const province = [
	{
		label: '北京',
		value: '01',
		children: [
			{
				label: '东城区',
				value: '01-1'
			},
			{
				label: '西城区',
				value: '01-2'
			},
			{
				label: '崇文区',
				value: '01-3'
			},
			{
				label: '宣武区',
				value: '01-4'
			}
		]
	},
	{
		label: '浙江',
		value: '02',
		children: [
			{
				label: '杭州',
				value: '02-1',
				children: [
					{
						label: '西湖区',
						value: '02-1-1'
					},
					{
						label: '上城区',
						value: '02-1-2'
					},
					{
						label: '江干区',
						value: '02-1-3'
					},
					{
						label: '下城区',
						value: '02-1-4'
					}
				]
			},
			{
				label: '宁波',
				value: '02-2',
				children: [
					{
						label: 'xx区',
						value: '02-2-1'
					},
					{
						label: 'yy区',
						value: '02-2-2'
					}
				]
			},
			{
				label: '温州',
				value: '02-3'
			},
			{
				label: '嘉兴',
				value: '02-4'
			},
			{
				label: '湖州',
				value: '02-5'
			},
			{
				label: '绍兴',
				value: '02-6'
			}
		]
	}
]

export default class FilterPicker extends Component {
	constructor(props) {
		super(props);
		console.log('重新渲染了......',this.props.defaultValue)
		this.state = {
			value: this.props.defaultValue
		}
	}
	componentDidMount() {
		console.log('哈哈哈哈哈哈我重新执行了')
	}

	render() {
		// console.log('我了个去..')
		const { onCancel, onSave, PickFiterData, cols, type } = this.props;
		return (
			<>
				{/* 选择器组件： value 属性看文档*/}
				<PickerView data={PickFiterData} value={this.state.value} cols={cols} onChange={value => {
					this.setState({
						value: value
					})
				}} />

				{/* 底部按钮 */}
				<FilterFooter onCancel={() => {
					onCancel()
				}} onOk={() => {
					onSave(type, this.state.value)
				}} />
			</>
		)
	}
}
