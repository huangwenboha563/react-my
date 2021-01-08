import React, {memo} from 'react';
import {renderRoutes} from 'react-router-config';
/*
* 路由嵌套问题，二级路由
* dicoverMenu，提前定义好，到时候循环遍历即可
*/
import {dicoverMenu} from "@/common/local-data";

import {NavLink} from 'react-router-dom';
import {
    DiscoverWrapper,
    TopMenu
} from './style';

export default memo(function HYDiscover(props) {
    /*需要注意二级路由的配置在props里面，解构赋值拿出来再传递给renderRoutes*/
    const {route} = props;

    return (
        <DiscoverWrapper>
            <div className="top">
                {/*TopMenu是可以绑定类名的，就是一个div*/}
                <TopMenu className="wrap-v1">
                    {
                        dicoverMenu.map((item, index) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})

