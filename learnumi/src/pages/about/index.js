import React from 'react';
import styles from './about.css';
import { Button } from 'antd';
export default function Page() {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <h1 className={styles.title}>我是关于页面</h1>
    </div>
  );
}
