import React, { PureComponent } from 'react';
// 按需导入需要的组件
import { Comment, Avatar, Tooltip } from "antd";
// 导入需要的icon
import { DeleteOutlined } from "@ant-design/icons";

export default class CommentItem extends PureComponent {
	render() {
	  // 结构赋值父组件传递过来的
		const { nickname, avatar, content, datetime } = this.props.comment;

		return (
			<Comment
				author={<a href="/#">{nickname}</a>}
				avatar={<Avatar src={avatar} alt={nickname} />}
				content={<p>{content}</p>}
				datetime={
					<Tooltip title={datetime.format("YYYY-MM-DD")}>
						<span>{datetime.fromNow()}</span>
					</Tooltip>
				}
				actions={[
					<span onClick={e => this.removeItem()}><DeleteOutlined />删除</span>
				]}
			/>
		)
	}

	removeItem() {
	  // 调动父组件传递过来的数据
		this.props.removeItem();
	}
}



