import React, { memo } from 'react';

import HYTopBanner from './c-cpns/top-banner';
import HYHotRecommend from './c-cpns/hot-recommend';
import HYNewAlbum from './c-cpns/new-album';
import HYRecommendRanking from './c-cpns/recommend-ranking';
import HYUserLogin from './c-cpns/user-login';
import HYSettleSinger from './c-cpns/settle-singer';
import HYHotAnchor from './c-cpns/hot-anchor';
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';
/*react-redux给提供了一个hooks，useDispatch所以可以直接拿到dispatch*/
function HYRecommend(props) {
  return (
    <RecommendWrapper>
      <HYTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend/>
          <HYNewAlbum/>
          <HYRecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <HYUserLogin/>
          <HYSettleSinger/>
          <HYHotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(HYRecommend);

/*下面这段代码需要优化，用react的hooks*/
// function HYRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners]) // 查一下useEffect的第二个参数

//   return (
//     <div>
//       <h2>HYRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }
// state.recommend是因为对reducer进行了合并，所以多加了一层
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })
/*
*  redux中使用hooks的话， connect又不需要了。我了个草.......
*/
// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));

