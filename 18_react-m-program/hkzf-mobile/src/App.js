import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import { Button } from "antd-mobile";

import Home from "./pages/Home";
import CityList from "./pages/CityList";
import Search from "./pages/Search";
import Map from "./pages/Map";



function App() {
	return (
		<Router>
			<div className="App">
				{/*首页，找房，资讯，我的，里面嵌套路由 */}
				<Route exact path='/' render={() => <Redirect to='/home'/>}></Route>
				<Route path='/home' component={Home}></Route>
				<Route  path='/cityList' component={CityList}></Route>
				<Route  path='/search' component={Search}></Route>
				<Route  path='/map' component={Map}></Route>
			</div>
		</Router>
	);
}

export default App;
