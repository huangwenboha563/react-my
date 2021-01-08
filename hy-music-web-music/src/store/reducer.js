// combineReducers 要合并reducer就用它，需要安装redux-immutable
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable'; // 转成immutable对象
/* 
如果一个项目用一个reducer，reducer就会特别大
所以先进行拆分...
拆分完了，为什么要合并呢。因为 redux createStore时候传递的reducer只有一个..........

合久必分

分久必合



*/



/*
* reducer的合并
* combineReducers，用来合并
*
*/
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
});

export default cReducer;
