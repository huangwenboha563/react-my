import * as actionTypes from './constants';
// 网络请求
import { getNewAlbums } from '@/services/recommend';
// 网络请求（和redux-thunk有关）
import {
  getTopBanners,
  getHotRecommends,
  getTopList
} from '@/services/recommend';
/*
*  action是用来派发的，派发的时候告诉你派发的是哪个，传递新的数据
*  例如：changeTopBannerAction是一个方法，方法返回的才是一个真正的action
*
*/
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})
//  getTopBannerAction最后要传递到dicpatch里面的,dispatch传入的那个函数是getTopBannerAction返回的那个函数
// getTopBannerAction()得到的才是哪个函数
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      // 在这里进行派发... // changeTopBannerAction(res)得到的是一个对象，永远记住dispatch的是一个对象
      dispatch(changeTopBannerAction(res)); // 就会到对应的reducer,进行修改
    })
  }
};

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      // const albums = res.albums;
      dispatch(changeNewAlbumAction(res));
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  }
}
