import React from 'react'

import { Flex } from 'antd-mobile'

import styles from './index.module.css'

// 条件筛选栏标题数组：
const titleList = [
  { title: '区域', type: 'area' },
  { title: '方式', type: 'mode' },
  { title: '租金', type: 'price' },
  { title: '筛选', type: 'more' }
]

export default function FilterTitle({titleSelectedStatus,onClick}) {
  // 到底要不要高亮 titleSelectedStatus 来判断
  return (
    <Flex align="center" className={styles.root}>
      {
        titleList.map(item => {
          // 如果是true就高亮
          const isSelected = titleSelectedStatus[item.type];
          // 子组件中调用父组件的方法...
          return (<Flex.Item key={item.type} onClick={() => {onClick(item.type)}}>
            {/* 选中类名： selected */}
            <span className={[styles.dropdown, isSelected?styles.selected:''].join(' ')}>
          <span>{item.title}</span>
          <i className="iconfont icon-arrow" />
        </span>
          </Flex.Item>)
        })
      }
    </Flex>
  )
}
