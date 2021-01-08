/**/
import React from 'react';
import {Redirect} from "react-router-dom";
// 发现音乐
const HYDiscover = React.lazy(() => import("@/pages/discover"));
// 推荐
const HYRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
// 排行榜
const HYRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
// 歌单
const HYSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
// 主播电台
const HYDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
// 歌手
const HYArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
// 新碟上架
const HYAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
//
const HYPlayer = React.lazy(_ => import("../pages/player"));
// 朋友
const HYFriend = React.lazy(_ => import("../pages/friend"));
// 我的音乐
const HYMine = React.lazy(_ => import("../pages/mine"));

// import HYDiscover from "@/pages/discover";
// import HYRecommend from "../pages/discover/c-pages/recommend";
// import HYRanking from "../pages/discover/c-pages/ranking";
// import HYSongs from "../pages/discover/c-pages/songs";
// import HYDjradio from "../pages/discover/c-pages/djradio";
// import HYArtist from "../pages/discover/c-pages/artist";
// import HYAlbum from "../pages/discover/c-pages/album";
// import HYPlayer from "../pages/player";

// import HYMine from "@/pages/mine";
// import HYFriend from "@/pages/friend";


const routes = [
    // 当访问根路径的时候看到的是发现discover模块
    {
        path: "/",
        // 只要是根路径，必须加exact
        exact: true,
        // Redirect 是基于react-router-dom的一个组件，需要按需引入
        render: () => (
            <Redirect to="/discover"/> // render里面的就是jsx语法，所以依赖react
        )
    },
    // 发现音乐下面有推荐、排行榜、歌单、主播电台、歌手、新碟上架，嵌套路由
    {
        path: "/discover",
        component: HYDiscover,
        routes: [
            // 最主要的是这个配置
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend"/>
                )
            },
            // 推荐
            {
                path: "/discover/recommend",
                component: HYRecommend
            },
            // 排行榜
            {
                path: "/discover/ranking",
                component: HYRanking
            },
            // 歌单
            {
                path: "/discover/songs",
                component: HYSongs
            },
            // 主播电台
            {
                path: "/discover/djradio",
                exact: true,
                component: HYDjradio
            },
            // 歌手
            {
                path: "/discover/artist",
                component: HYArtist
            },
            // 新碟上架
            {
                path: "/discover/album",
                component: HYAlbum
            },
            {
                path: "/discover/player",
                component: HYPlayer
            }
        ]
    },
    {
        path: "/mine",
        component: HYMine
    },
    {
        path: "/friend",
        component: HYFriend
    },
];

export default routes;
