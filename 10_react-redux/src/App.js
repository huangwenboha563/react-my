import React, { PureComponent } from 'react';

// 1.什么都不用最基础的redux如何react组件联系
import Home1 from './pages/home1-手动和redux联系'
import About1 from './pages/about1-手动和redux联系'
import Home2 from './pages/home2-自定义的connect'
import About2 from './pages/about2-自定义的connect'
import Home3 from './pages/home3-react-redux-connect'
import About3 from './pages/about3-react-redux-connect'
import Home4 from './pages/home4-redux-thunk使用'
import About4 from './pages/about4'
import Home5 from './pages/home5-redux-saga使用'
// 2.使用自定义的connect函数
export default class App extends PureComponent {
    render() {
        return (
            <div>
                {/*
                1.最基本的react手动和redux联系
                2.这样可实现Home组件和About组件共享一个state，但是Home和About里面重复的代码太多了
                3.如何优化呢？
                */}
                {/* <Home1></Home1>
                <About1></About1> */}





                {/*2.使用自定义的connect函数*/}
                {/* <Home2></Home2>
                <About2></About2> */}





                {/*3.使用第三方的connect*/}
                <Home3></Home3>
                <About3></About3>




                {/*4.redux-thunk*/}
                {/*<Home4></Home4>*/}
                {/*<About4></About4>*/}





                {/* 5.redux-saga */}
                {/*  <Home5></Home5>
                <About4></About4> */}
            </div>
        )
    }
}
