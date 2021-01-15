import { takeEvery, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_HOME_MULTIDATA, ADD_NUMBER
} from './constants';
import {
  changeBannersAction,
  changeRecommendAction
} from './actionCreators';

// 我想爆粗口，saga的目的也是为了让网络请求的代码再换个地方
function* fetchHomeMultidata(action) {
  // 不需要再.get之后去then，res就直接是我们请求的结果了
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  const banners = res.data.data.banner.list;
  const recommends = res.data.data.recommend.list;
  // 一个一个去put，不需要去手动 dispatch这个关键词了
  // yield put(changeBannersAction(banners));
  // yield put(changeRecommendAction(recommends));
  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendAction(recommends))
  ])
}


// 生成器函数,统一在这里监听action，只要在别得地方派发了action这里就能监听到..
function* mySaga() {
  // takeLatest takeEvery区别:
  // takeLatest: 依次只能监听一个对应的action，比如执行很多次，但是前几次的异步任务都还没完成呢。所以只执行最后一次
  // takeEvery: 每一个都会被执行，触发了多少次就执行多少次
  // yield takeEvery(FETCH_HOME_MULTIDATA,fetchHomeMultidata)
  // 统一在这里监听...
  yield all([
    takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata), // fetchHomeMultidata生成器函数
    // takeLatest(ADD_NUMBER, fetchHomeMultidata),
  ]);
}
// 导出的是一个生成器函数~~~~~~~~，
export default mySaga;
