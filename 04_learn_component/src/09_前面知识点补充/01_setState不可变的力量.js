import React, { PureComponent } from 'react';

export default class App extends PureComponent {
	constructor(props) {
		super(props);

		// 引用类型
		this.state = {
			friends: [
				{ name: "lilei", age: 20 },
				{ name: "lily", age: 25 },
				{ name: "lucy", age: 22 }
			],
			obj: {
				name: 'hwb',
				age: 18
			}
		}
	}

	// 如果extends的是Component,又用shouldComponentUpdate进行优化通过第一中做法的话，页面是不会刷新的，这个也只能做浅层比较
	// shouldComponentUpdate(newProps, newState) {
	//   if (newState.friends !== this.state.friends) {
	//     return true;
	//   }

	//   return false;
	// }

	render() {
		return (
			<div>
				<h3>{this.state.obj.name}</h3>
				<h3>{this.state.obj.age}</h3>
				<h2>好友列表:</h2>
				<ul>
					{
						this.state.friends.map((item, index) => {
							return (
								<li key={item.name}>
									姓名: {item.name}
									年龄: {item.age}
									<button onClick={e => this.incrementAge(index)}>age+1</button>
								</li>
							)
						})
					}
				</ul>
				<button onClick={e => this.insertData()}>添加数据</button>
			</div>
		)
	}

	// 数组中插入一条数据
	insertData() {
		// 第一种做法1.在开发中不要这样来做，这样是不起作用的。
		// 注意，这样不是不起作用。如果用的不是PureComponent用的是Component这样是可以的，经过测试
		// this.state.firends是引用类型，所以在shouldComponentUpdate的时候就会认为地址是一样的，所有！==的判断不会走，也就是不会return true
		/*const newData = {name: "tom", age: 30}
		this.state.friends.push(newData);
		this.setState({
			friends: this.state.friends
		});*/

		// 2.推荐做法，如果用的是PureComponent就必须这样做才起作用，因为内部用了浅层比较
		// 3.最简单粗暴的可以对老数据进行深拷贝，对拷贝完的数据进行修改。完了setState(修改后的对象)
		// 4.这样搭配shouldComponentUpdate优化或者PureComponent都是可以的
		// 改变1
		const newFriends = [...this.state.friends];
		newFriends.push({ name: "tom", age: 30 });
		// 改变2
		const { friends } = this.state;
		friends.push({ name: "tom", age: 30 })
		this.setState({
			// 改变1
			friends: [...friends],
			// 顺带尝试改变对象的值
			// obj: {
			// 	...this.state.obj, name: 'lk'
			// },
			// 改变obj的第二种方式
			obj: Object.assign({},this.state.obj,{name:'lk'})
			// 改变2
			// friends: newFriends
			// 总之 friends:xxx    xxx不能是原来的按个引用地址,要么简单拷贝一份，要么深拷贝一份
		})
	}

	// 数组中修改某一条数据，同样也是把原来的饿数组拷贝一份。这里不需要用到深拷贝

	incrementAge(index) {
		// 如果继承的是Component,可以这样改。但是class组件都继承自PureComponent
		/*
		this.state.friends[index].age += 1;
		this.setState({
			friends: this.state.friends
		})
		*/
		// 看到网上有人对state整体进行了深层拷贝...然后进行深层比较。但是在这里是没有必要的，深层比较是非常耗费性能的...
		const newFriends = [...this.state.friends];
		newFriends[index].age += 1;
		this.setState({
			friends: newFriends
		})
	}
}
/*
* 1.数组中增加一条，
* 2.修改数组中的某一条，
* 3.不管哪种方式修改，都需要把原来的state中定义好的数据拷贝一份。在此基础上修改，完了再setState给原来的state(eg:friends)
* 4.总归一句话就是，class组件都用PureComponent来优化，不要直接操作原来的数据。
*
* react官网中性能优化那一章节中国呢，强调setState的是不可变的....。是为了减少没有必要的render
*
*/
