import React, { Component } from 'react'

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: ["星际穿越", "盗梦空间"]
		}
	}

	render() {
		return (
			<div>
				<h2>电影列表</h2>
				<ul>
					{
						this.state.movies.map((item, index) => {
							return <li key={item}>{item}</li>
						})
					}
				</ul>
				<button onClick={this.insertMovie}>添加电影</button>
			</div>
		)
	}

	insertMovie = () => {
		// 1.往数组的最后追加一个，这中操作其实有没有key作用不大。比较一次生成一次mutation,mutation是变化的意思
		// this.setState({
		//   movies: [...this.state.movies, "大话西游"]
		// })
		this.setState({
			movies: ["大话西游", ...this.state.movies]
		})
	}
}
// react中key的作用，
// 如果在一个数组最后push一个东西，加不加key其实对性能没多大影响，如果在最开始，或者中间随便插一个的话，不加key就会对性能有影响。
/*
* 如果加上key，在比较的时候就发现星际穿越和盗梦空间的key和以前是一样的，直接复用就可以。减少了两次mutation然后星际穿越和盗梦空间只需要发生一次位移即可。
* 所以for循环要加key
* 使用index作为key是对性能没有任何优化的。为什么呢？
*
*
*
* 以前星际穿越是0  盗梦空间 是1
* 大话西游插入到第一个后  星际穿越成了 1  盗梦空间成了 2
* key都发生了变化，当然对性能没有任何优化了。
*
* */


