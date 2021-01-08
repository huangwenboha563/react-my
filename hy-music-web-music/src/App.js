/*Suspense是react自带的*/
import React, {memo, Suspense} from 'react';
import {Provider} from 'react-redux';
/*renderRoutes接收一个数组，利用react-router-config（需要安装，就可以走配置文件了...）*/
import {renderRoutes} from 'react-router-config';
/*引入路由的配置文件导出来的是一个数组*/
import routes from './router';
/*redux相关（redux相关的内容又忘记求了...。复习加深印象和理解）导入store是为了共享数据*/
import store from './store';
/*采用哈希路由的方式*/
import {HashRouter} from 'react-router-dom';
/*头部*/
import HYAppHeader from '@/components/app-header';
/*底部*/
import HYAppFooter from '@/components/app-footer';
/*播放器*/
import HYAppPlayerBar from './pages/player/app-player-bar';
/**/
export default memo(function App() {
    return (
        /*通过Provider，把数据进行共享,之前学习redux中自己封装的那个connect和context结合起来使用的xxx.provider，学习redux-thunk的时候用自己自带的Provider*/
        <Provider store={store}>
            {/*不管是用HashRouter还是用BrowserRouter，都把层级最高的给包裹起来就行*/}
            {/*https://reactrouter.com/web/example/basic，react-router官网*/}
            <HashRouter>
                {/*头部*/}
                <HYAppHeader/>
                {/*中间路由切换变化的地方*/}
                {/*如果用了路由懒加载就要用这个*/}
                <Suspense fallback={<div>page loading</div>}>
                    {renderRoutes(routes)}
                </Suspense>
                {/*底部*/}
                <HYAppFooter/>
                {/*固定在底部的播放器*/}
                {/*<HYAppPlayerBar/>*/}
            </HashRouter>
        </Provider>
    )
})
/*
* 注释:
* App.js大写，根组件
* 整个项目全面拥抱hooks，不再使用class组件...
* 使用redux进行状态管理需要安装这几个依赖
* redux
* react-redux(Connect代替原来的自己手动封装的那个connect, Provider代替context的那个provider)
* redux-thunk(redux中异步请求)
*
*
*
*/

