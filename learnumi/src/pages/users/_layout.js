import React from 'react';
import styles from './_layout.css';

export default function Page(props) {
	return (
		<div>
			<h1 className={styles.title}>
				我是用户页面父组件..
			</h1>
			<hr/>
			{props.children}
		</div>
	);
}
/*
*	带了_layout的.js文件可以嵌套子路由
*/