import React, { PureComponent } from 'react';

import CommentInput from './components/CommentInput';
import CommentItem from './components/CommentItem';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      commentList: []
    }
  }

  render() {
    return (
      <div style={{width: "500px", padding: "20px"}}>
        {
          this.state.commentList.map((item, index) => {
            return <CommentItem key={item.id} 
                                comment={item} 
                                removeItem={e => this.removeComment(index)}/>
          })
        }
        <CommentInput submitComment={this.submitComment.bind(this)}/>
      </div>
    )
  }

  submitComment(info) {
    // 严格遵循不可变得数据的力量
    this.setState({
      commentList: [...this.state.commentList, info]
    })
  }

  removeComment(index) {
    // 严格遵循不可变的数据的力量
    const newCommentList = [...this.state.commentList];
    newCommentList.splice(index, 1);
    this.setState({
      commentList: newCommentList
    })
  }
}
