// immutable，需要安装这个 immutable解决数据不可变性，提高性能，避免没必要的拷贝
// immutable，是用来提高性能的
import {Map} from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],
    upRanking: {},
    newRanking: {},
    originRanking: {},
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            /*这里为什么可以用set呢？*/
            return state.set("topBanners", action.topBanners);
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.hotRecommends);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbums", action.newAlbums);
        case actionTypes.CHANGE_UP_RANKING:
            return state.set("upRanking", action.upRanking);
        case actionTypes.CHANGE_NEW_RANKING:
            return state.set("newRanking", action.newRanking);
        case actionTypes.CHANGE_ORIGIN_RANKING:
            return state.set("originRanking", action.originRanking);
        default:
            return state;
    }
}

export default reducer;
