import React, { Component } from 'react';

export default class App extends  Component{
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			message: "Hello World"
		}
	}

	render() {
		console.log("App render函数被调用");
		return (
			<div>
				<h2>当前计数: {this.state.counter}</h2>
				<h2>当前文本: {this.state.message}</h2>
				<button onClick={e => this.increment()}>+1</button>
				<button onClick={e => this.changeText()}>改变文本</button>
			</div>
		)
	}

	// 默认是返回true，这样的话，点击改变文本就不执行render了，只有点击+1才会执行render
	// 子组件不依赖 message，message改的时候不希望子组件的render方法也执行
	// 点击+1的时候 App render函数被调用 一直会被执行，但是点击改变文本的时候不会一直执行，试想，如果 一个子组件没有依赖
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.counter !== nextState.counter) {
			return true;
		}

		return false;
	}

	increment() {
		this.setState({
			counter: this.state.counter + 1
		})
	}

	changeText() {
		this.setState({
			message: "你好啊,李银河"
		})
	}
}
