import React, { PureComponent } from 'react';

// import Home from './pages/home5-redux-saga使用';
// import About from './pages/about3';
import About from './pages/about3'
import Home from './pages/home3-react-redux-connect'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <About/>
      </div>
    )
  }
}
