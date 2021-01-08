import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    // 引用类型
    this.state = {
      friends: [
        { name: "lilei", age: 20 },
        { name: "lily", age: 25 },
        { name: "lucy", age: 22 }
      ]
    }
  }

  // shouldComponentUpdate(newProps, newState) {
  //   if (newState.friends !== this.state.friends) {
  //     return true;
  //   }

  //   return false;
  // }

  render() {
    return (
      <div>
        <h2>好友列表:</h2>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return (
                <li key={item.name}>
                  姓名: {item.name}
                  年龄: {item.age}
                  <button onClick={e => this.incrementAge(index)}>age+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.insertData()}>添加数据</button>
      </div>
    )
  }
  // 数组中插入一条数据
  insertData() {
    // 1.在开发中不要这样来做，这样是不起作用的。
    /* const newData = {name: "tom", age: 30}
    this.state.friends.push(newData);
    this.setState({
      friends: this.state.friends
    }); */

    // 2.推荐做法
    const newFriends = [...this.state.friends];
    newFriends.push({ name: "tom", age: 30 });
    this.setState({
      friends: newFriends
    })
  }
  // 数组中修改某一条数据
  incrementAge(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends
    })
  }
}
/*
* 1.数组中增加一条，
* 2.修改数组中的某一条，
* 3.不管哪种方式修改，都需要把原来的state中定义好的数据拷贝一份。在此基础上修改，完了再setState给原来的state(eg:friends)
* 4.总归一句话就是，不要直接操作原来的数据。
*
*
*
*/
