import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  render() {
    // 接手父组件传递过来的数据
    const { titles } = this.props;
    // 对象结构
    const {currentIndex} = this.state;
    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
            return (
              <div key={item}
                   className={"tab-item " + (index === currentIndex ? "active": "")}
                   onClick={e => this.itemClick(index)}>
                <span>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      currentIndex: index
    })

    const {itemClick} = this.props;
    itemClick(index);
  }
}

TabControl.propTypes = {
  titles: PropTypes.array.isRequired
}
