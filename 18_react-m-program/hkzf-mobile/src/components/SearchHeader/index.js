import React, { Component } from 'react';
import { Flex } from "antd-mobile";
import PropTypes from 'prop-types';
class SearchHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myName: ''
		}
	}
	render() {
		const {myName} = this.props;
		return (
			<div>
				<Flex>
					<Flex.Item style={{ textAlign: 'center' }} onClick={() => (this.props.history.push('/cityList'))}>定位-{myName}</Flex.Item>
					<Flex.Item style={{ textAlign: 'center' }} onClick={() => (this.props.history.push('/search'))}>全文搜索</Flex.Item>
					<Flex.Item style={{ textAlign: 'center' }} onClick={() => (this.props.history.push('/map'))}>地图找房</Flex.Item>
				</Flex>
			</div>
		);
	}
}
SearchHeader.propTypes = {
	myName: PropTypes.string.isRequired,
}
export default SearchHeader;