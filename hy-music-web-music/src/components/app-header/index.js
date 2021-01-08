import React, { memo } from 'react';

import { headerLinks } from "@/common/local-data";
// 遍历头部导航的要用到NavLink组件，大驼峰命名法
import { NavLink } from 'react-router-dom';
// antd的icon需要安装并单独引入，具体使用看antd的官网即可
import { SearchOutlined } from '@ant-design/icons'
// 这里使用了antd的输入框，所以要引入对应的antd组件
import { Input } from "antd";
// 样式（把关注点放在页面逻辑上，知道styled-components用法即可）
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';
// 全面拥抱hooks，所有的组件采用函数式组件,并且用memo包裹起来，对数据做浅层比较，避免不必要的子组件渲染
export default memo(function HYAppHeader() {

  // 页面代码(前面几个返回NavLink组件，后面几个是a链接，用一个方法做个判断)
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  // 返回的jsx
  return (
    <HeaderWrapper>
      {/*头部主要内容*/}
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      {/*头部下面的那个红色条*/}
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
