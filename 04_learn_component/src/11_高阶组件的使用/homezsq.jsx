import React, { PureComponent } from 'react';

function withProps(WrappedComponent) {
	// 在这里做了劫持~~~~~
	return props => {
		return <WrappedComponent {...props} region="中国" />
	}
}

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
@withProps
@withRenderTime
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
export default Home






