import React, { Component } from 'react';
// import { connect } from '../utils/connect';
// 不需要发生任何变化，只需要把进入自己写的那个connect换成第三方的那个即可
import { connect } from 'react-redux';

// import {
// 	decAction,
// 	subAction
// } from "../store/actionCreators";

import * as myTest from '../store/actionCreators'
/*function About(props) {
	console.log("About页面重新渲染了");
	return (
		<div>
			<hr />
			<h1>About</h1>
			<h2>当前计数: {props.counter}</h2>
			<button onClick={e => props.decAction()}>-1</button>
			<button onClick={e => props.subAction(5)}>-5</button>
			{/!*在home3-react-redux-connect中改变store中的值，在这个页面去拿，去遍历，能拿到说明home3-react-redux-connect中成功了*!/}
			{/!*此时在Chrome控制台的redux插件中还是看不到任何redux相关的数据的...*!/}
			<h1>Banner</h1>
			<ul>
				{
					props.banners.map((item, index) => {
						return <li key={item.acm}>{item.title}</li>
					})
				}
			</ul>
			<h1>Recommend</h1>
			<ul>
				{
					props.recommends.map((item, index) => {
						return <li key={item.acm}>{item.title}</li>
					})
				}
			</ul>
		</div>
	)
}*/
class About extends Component {
	render() {
		console.log('this.props->>',this.props);
		return (
			<div>
				<hr />
				<h1>About</h1>
				<h2>当前计数: {this.props.counter}</h2>
				{/*看看这里的用法...*/}
				<button onClick={this.props.decAction}>-1</button>
				<button onClick={e => this.props.subAction(5)}>-5</button>
				{/*在home3-react-redux-connect中改变store中的值，在这个页面去拿，去遍历，能拿到说明home3-react-redux-connect中成功了*/}
				{/*此时在Chrome控制台的redux插件中还是看不到任何redux相关的数据的...*/}
				<h1>Banner</h1>
				<ul>
					{
						this.props.banners.map((item, index) => {
							return <li key={item.acm}>{item.title}</li>
						})
					}
				</ul>
				<h1>Recommend</h1>
				<ul>
					{
						this.props.recommends.map((item, index) => {
							return <li key={item.acm}>{item.title}</li>
						})
					}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		// 在这里获取 轮播图和推荐列表。如果想从store中拿数据就在这拿~~~
		banners: state.banners,
		recommends: state.recommends,
		counter: state.counter
	}
};
/*
*  mapStateToProps和mapDispatchToProps的第二种用法...
*
* https://blog.csdn.net/yoonerloop/article/details/112058929
*
*
*/
// const mapDispatchToProps = dispatch => {
// 	// 如果这个组件中想改变store中的state值在这里修改...
// 	return {
// 		decrement: function () {
// 			dispatch(decAction());
// 		},
// 		subNumber: function (num) {
// 			dispatch(subAction(num))
// 		}
// 	}
// };

// export default connect(mapStateToProps, {
// 	decAction,
// 	subAction
// })(About);
export default connect(mapStateToProps, myTest)(About);
/*
* 这里还需要好好研究，
* 关于connect的第二个参数...
*
*
*/