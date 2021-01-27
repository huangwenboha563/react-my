import React from 'react';
import { Link } from 'umi';
import styles from './index.css';

export default function Page() {
	const lists = [{
		id: 1,
		name: 'lk'
	}, {
		id: 2,
		name: 'hwb'
	}]
	return (
		<div>
			<h1 className={styles.title}>
				我是用户下的那个子路由页面
				<ul>
					{
						lists.map((item) => {
							return (
								<Link to={`/users/${item.name}`}><li key={item.id}>{item.name}</li></Link>
							)
						})
					}
				</ul>
			</h1>
		</div>
	);
}
