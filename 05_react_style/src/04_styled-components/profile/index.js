import React, { PureComponent } from 'react';
import styled from 'styled-components';

/**
 * 特点:
 *  1.props穿透 直接给HYInput设置type="text"，这就是穿透
 *  2.attrs的使用
 *  3.传入state作为props属性
 */

const HYInput = styled.input.attrs({ // 在HYInput上设置的属性和这里的属性都反应在props上
  placeholder: "coderwhy",
  bColor: "yellow"
})`
  background-color: lightblue;
  border-color: ${props => props.bColor}; // props就是通过attrs设置的属性
  border-width: 10px;
  color: ${props => props.color};
`

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: "blue",
      bgColor: "yellow"
    }
  }

  render() {
    return (
      <div>
        <input type="password"/>
        <hr/>
        <HYInput type="text" bgColor={this.state.bgColor} color={this.state.color}/>
        <hr/>
        <h2>我是Profile的标题</h2>
        <ul>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    )
  }
}

// 关于到底用哪种css方案，自己决定。想用啥方案，用啥方案，遇到问题解决就对了
