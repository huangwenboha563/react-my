import React, { PureComponent } from 'react';
// 高阶组件1
function withProps(WrappedComponent) {
	// 在这里做了劫持~~~~~
	return props => {
		return <WrappedComponent {...props} region="中国" />
	}
}


// 高阶组价2
function withRenderTime(WrappedComponent) {
	return class extends PureComponent {
		// 即将渲染获取一个时间 beginTime
		UNSAFE_componentWillMount() {
			this.beginTime = Date.now();
		}

		// 渲染完成再获取一个时间 endTime
		componentDidMount() {
			this.endTime = Date.now();
			const interval = this.endTime - this.beginTime;
			// WrappedComponent.name,所有类都有一个名字
			console.log(`${WrappedComponent.name}渲染时间: ${interval}`)
		}

		render() {
			return <WrappedComponent {...this.props} />
		}
	}
}
// 装饰器写法
@withProps
@withRenderTime
// 装饰器写法
class Home extends PureComponent {
	render() {
		return (
			<div>
				<h2>Home</h2>
				<h3>{this.props.realName}</h3>
				<h3>我是装饰器写法----{this.props.region}</h3>
			</div>
		)
	}
}


// 覆盖原有的配置的问题....
// https://www.jianshu.com/p/65b1f2cdcf76
// https://blog.csdn.net/weixin_42198583/article/details/102504002

export default Home






