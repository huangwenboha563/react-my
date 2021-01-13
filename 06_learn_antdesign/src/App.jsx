import React, { PureComponent } from 'react';
// vue自带的功能在react中需要引入一个第三方库
// import classNames from 'classnames';
import moment from 'moment';

import { Button, DatePicker } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

import HYHomeRecommend from './components/home/childCpns/home-recommend';
// fdsfsdfsdfsdf

export default class App extends PureComponent {
	render() {
		const loadings = true;

		return (
			<>
				<HYHomeRecommend/>
				<Button type="primary" loading>
					Loading
				</Button>
				<Button type="primary" size="small" loading>
					Loading
				</Button>
				<Button type="primary" icon={<PoweroffOutlined/>} loading/>
				<br/>
				<Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
					Click me!
				</Button>
				<Button
					type="primary"
					icon={<PoweroffOutlined/>}
					loading={loadings[1]}
					onClick={() => this.enterLoading(1)}
				>
					Click me!
				</Button>
				<Button
					type="primary"
					icon={<PoweroffOutlined/>}
					loading={loadings[2]}
					onClick={() => this.enterLoading(2)}
				/>
				<DatePicker defaultValue={moment('2015-06-06', "YYYY-MM-DD")}
										allowClear={false}/>
			</>
		)
	}
}


// 知识点: classnames  动态添加class
// export default class App extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isActive: true
//     }
//   }

//   render() {
//     const {isActive} = this.state;
//     const isBar = false;
//     const errClass = "error";
//     const warnClass = 10;

//     return (
//       <div>
//         {/* 原生React中添加class方法 最传统的方式什么都不用，在vue里面动态添加class还是比较容易的*/}
//         <h2 className={"foo bar active title"}>我是标题1</h2>
//         <h2 className={"title" + (isActive ? " active": "")}>我是标题2</h2>
//         <h2 className={["title", (isActive ? "active": "")].join(" ")}>我是标题3</h2>

//         {/* classnames库添加class */}
//         <h2 className="foo bar active title">我是标题4</h2>
//         <h2 className={classNames("foo", "bar", "active", "title")}>我是标题5</h2>
//         active有没有看isActive的真假 ; bar 有没有看 isBar的真假
//         <h2 className={classNames({"active": isActive, "bar": isBar}, "title")}>我是标题6</h2>
//         <h2 className={classNames("foo", errClass, warnClass, {"active": isActive})}>我是标题7</h2>
//         数组形式
//         <h2 className={classNames(["active", "title"])}>我是标题8</h2>
//         数组里面跟上一个对象
//         <h2 className={classNames(["active", "title", {"bar": isBar}])}>我是标题9</h2>
//       </div>
//     )
//   }
// }
