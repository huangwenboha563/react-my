import React, { PureComponent } from 'react';
// 走配置文件，需要安装 react-router-config
import { renderRoutes } from 'react-router-config';
// 配置文件单独提出来
import routes from './router';

import {
	BrowserRouter,
	Link,
	Route,
	NavLink,
	Switch,
	withRouter
} from 'react-router-dom';

import './App.css';

import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import User from './pages/user';
import NoMatch from './pages/noMatch';
import Login from './pages/login';
import Product from './pages/product';
import Detail from './pages/detail';
import Detail2 from './pages/detail2';
import Detail3 from './pages/detail3';

class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			links: [
				{ to: "/", title: "首页" },
				{ to: "/about", title: "首页" },
				{ to: "/", title: "首页" },
			]
		}
	}

	render() {
		const id = "123";
		const info = { name: "why", age: 18, height: 1.88 };
		console.log(this.props);
		return (
			<div>
				<Link to="/">首页</Link>
				<Link to="/about">关于</Link>
				<Link to="/profile">我的</Link>

				{/* 1.NavLink的使用 */}
				{/*<NavLink exact to="/" activeStyle={{color: "red", fontSize: "30px"}}>首页</NavLink>
                <NavLink to="/about" activeStyle={{color: "red", fontSize: "30px"}}>关于</NavLink>
                <NavLink to="/profile" activeStyle={{color: "red", fontSize: "30px"}}>我的</NavLink>*/}

				{/*<NavLink exact to="/" activeClassName="link-active">首页</NavLink>
        <NavLink to="/about" activeClassName="link-active">关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        <NavLink to="/abc" activeClassName="link-active">abc</NavLink>
        <NavLink to="/user" activeClassName="link-active">用户</NavLink>
        <NavLink to={`/detail/${id}`} activeClassName="link-active">详情</NavLink>
        <NavLink to={`/detail2?name=why&age=18`} activeClassName="link-active">详情2</NavLink>
        <NavLink to={{
                  pathname: "/detail3",
                  search: "name=abc",
                  state: info
                 }}
                activeClassName="link-active">
          详情3
        </NavLink>*/}
				<button onClick={e => this.jumpToProduct()}>商品</button>

				{/* 2.Switch组件的作用: 路径和组件之间的映射关系 */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/profile" component={Profile} />
					<Route path="/:id" component={User} />
					<Route path="/user" component={User} />
					<Route path="/login" component={Login} />
					<Route path="/product" component={Product} />
					<Route path="/detail/:id" component={Detail} />
					<Route path="/detail2" component={Detail2} />
					<Route path="/detail3" component={Detail3} />
					<Route component={NoMatch} />
				</Switch>
				{/*3.走配置文件的*/}
				{/*{renderRoutes(routes)}*/}

			</div>
		)
	}

	jumpToProduct() {
		this.props.history.push("/product");
	}
}
function FadingRoute({ component: Component, ...rest }) {
	console.log(rest);
	{/*routeProps是什么，传递这个是为了让Component使用 history match location等属性*/}

	return (
		<Route
			{...rest}
			render={routeProps => (
				// <FadeIn>
					<Component {...routeProps} />
				// </FadeIn>
			)}
		/>
	);
}
// export default withRouter(App);
// export default App;
export default FadingRoute;
/*
* 如果不用withRouter包裹的话... App里面的props就接受不到history  match  location等
* 因为App不是一个Router，怎么理解呢？
* 看下面的用switch包裹的  Home   Home   Profile   User   Login   Product   Detail  Detail2   Detail3这些里面去props或者this.props都是可以看到location match history的
*                   <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={Home}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/:id" component={User}/>
                    <Route path="/user" component={User}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/detail2" component={Detail2}/>
                    <Route path="/detail3" component={Detail3}/>
                    <Route component={NoMatch}/>
                </Switch>
*
*/
