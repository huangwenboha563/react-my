import React, { Component } from 'react'
import './index.scss'
export default class Map extends Component {
    componentDidMount() {
        // 初始化地图实例
        // 在react叫脚手架中全局对象需要时候用window.xxx来使用
        // 1. 创建地图实例
        const map = new window.BMap.Map("container"); 
        // 2. 设置中心点坐标(经纬度)
        const point = new window.BMap.Point(116.404, 39.915);
        // 3. 初始化地图，同时设置展示级别，放大级别
        map.centerAndZoom(point, 15); 
    }
    render() {
        return (
            <div className="map">
                <div id="container">
                    我是地图找房
                </div>
            </div>
        )
    }
}

