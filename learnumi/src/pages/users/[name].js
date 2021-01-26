import React from 'react';
import styles from './[name].css';

export default function Page(props) {
	const fromName = props.match.params.name;
	const back = () => {
		props.history.goBack();
	}
	return (
		<div>
			<h1 className={styles.title}>
				我是动态路由.... 来自-----{fromName}
			</h1>
			<h2>
				<button onClick={back}>返回</button>
			</h2>
		</div>
	);
}


