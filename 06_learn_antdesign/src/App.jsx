import React, { PureComponent } from 'react';
// vue自带的功能在react中需要引入一个第三方库
// import classNames from 'classnames';
import moment from 'moment';
// antd 官网中有提到， antd的js代码默认支持基于es modules的tree shaking ,对于js部分直接引入 import { Button } from 'antd',就会有按需加载的效果
// tree-shaking 比如有一颗树，上面长满了果子，好多果子成熟了，我们就摇晃这颗树，就把摇下来。
// 比如我页面写了一个var woaini = ""; var aaa = function () {} 但是我整个项目中从来没有用到这个变量和函数。打包的时候就把它移除掉，这样我们的体积就小了

import { Button, DatePicker } from 'antd';
// 使用icons还需要单独安装
import { PoweroffOutlined } from '@ant-design/icons';

import HYHomeRecommend from './components/home/childCpns/home-recommend';

export default class App extends PureComponent {
	render() {
		const loadings = true;

		return (
			<>
				<HYHomeRecommend/>
				<hr/>
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
					点击我
				</Button>
				<Button
					type="primary"
					icon={<PoweroffOutlined/>}
					loading={loadings[2]}
					onClick={() => this.enterLoading(2)}
				/>
				{/*
				1.antdDesign在日期中大量用到了moment
				2.allowClear 是否显示清除按钮，不要设置false即可，需要设置true
				3.defaultValue用来设置默认值
				*/}
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
// 动态添加class
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
