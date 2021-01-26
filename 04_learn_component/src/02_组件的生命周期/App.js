import React, { Component } from 'react';
// 介绍几个常用的生命周期函数
// 组件1
class Cpn extends Component {
	render() {
		return <h2>我是Cpn组件</h2>
	}

	// 这个生命周期到底有什么用，说实话没用到过到目前为止...
	static getDerivedStateFromProps(props, state) {
		// 官网上说的是当state，完全依赖传递过来的props的时候用这个声明周期....
		// 还有一种说法，计算属性。个人理解，比如后端传递过来的数据不是我们想要的额....可以在这里进行格式化....
		// 这个后端传递过来的数据，是从父组件通过props传递过来的吗...
		return {
			a: 1,
			b: 2
		}
	}

	componentWillUnmount() {
		// 1.在此方法中执行必要的清理操作
		// 2.例如，清楚timer,取消网络请求或清除在componentDidMount中创建的订阅
		console.log("调用了Cpn的componentWillUnmount方法");
	}
}

// 根组件
export default class App extends Component {

	constructor() {
		super();

		this.state = {
			counter: 0,
			isShow: true,
			error: false
		}

		console.log("执行了App组件的constructor方法");
	}

	// 这也是捕获异常的一种方式，和componentDidCatch一样的作用，两个选一个就行
	// 如果要捕获异常在根组件去捕获，这样所有的子组件有异常都会被捕获...
	static getDerivedStateFromError(error) {
		// 更新 state 使下一次渲染可以显降级 UI
		return { error: true };
	}

	// 每次setState的时候都会执行render方法
	render() {
		console.log("执行了App组件的render方法");

		return (
			<div>
				我是App组件
				<h2>当前计数: {this.state.counter}</h2>
				<button onClick={e => this.increment()}>+1</button>
				<hr />
				<button onClick={e => this.changeCpnShow()}>切换</button>
				{/* 在这里调用了Cpn组件，嵌套了一个儿子 */}
				{this.state.isShow && <Cpn />}
				{/*	错误补货什么时候用呢，这是一个使用场景*/}
				{this.state.error ? <h1>出错了</h1> : '没有错...这里可以放一个组件...'}
			</div>
		)
	}

	increment() {
		let { counter } = this.state
		this.setState({
			counter: counter + 1
		})
	}

	changeCpnShow() {
		this.setState({
			isShow: !this.state.isShow
		})
	}

	componentDidMount() {
		console.log("执行了App组件的componentDidMount方法");
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// 1.首次渲染不会执行此方法
		// 2.当组件更新后，可以在此处对DOM进行操作
		// 3.如果你对更新后的
		// 4.snapshot
		console.log("执行了App组件的componentDidUpdate方法");
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			error: true
		})
	}
}


// 错误捕获的一个demo
// 有个组件   HasError 用 HasError

/*
class HasError extends Component {
	constructor() {
		super();

		this.state = {
			error: false
		}

		console.log("执行了App组件的constructor方法");
	}
	// 在这里进行错误捕获
	render() {
		return (
			<div>
				{/!*如果有错误error,判断error的错误就提示错误，没有错误就渲染children，就不写伪代码了*!/}
				{this.props.children}
			</div>
		);
	}
	componentDidCatch(error, errorInfo) {
		// 什么是前端埋点呢，比如这里我们可以把错误信息发送到后台。手动埋点....这就是前端埋点的一个用处...
		// 用户手机型号，浏览器版本，ios版本，账号，总之pc和手机上都能拿到设备的信息的。都给后台...，前后台一起分析错误
		this.setState({
			error: true
		})
	}
}
*/


// export default HasError;

// <HasError> <App /> </HasError>
