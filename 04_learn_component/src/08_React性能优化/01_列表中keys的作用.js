import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: ["星际穿越", "盗梦空间"]
    }
  }

  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {
            this.state.movies.map((item, index) => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
        <button onClick={this.insertMovie}>添加电影</button>
      </div>
    )
  }

  insertMovie = () => {
    // this.setState({
    //   movies: [...this.state.movies, "大话西游"]
    // })
    this.setState({
      movies: ["大话西游", ...this.state.movies]
    })
  }
}
// react中key的作用，如果在一个数组最后push一个东西，加不加key其实对性能没多大影响，如果在最开始，或者中间随便插一个的话，不加key就会对性能有影响。

