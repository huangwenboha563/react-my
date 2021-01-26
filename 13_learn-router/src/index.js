import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// import React from 'react';

const MyComponent = (props) => {
  console.log('aa',props);
  return (
    <div>
      我是一个函数组件
    </div>
  );
};

export default MyComponent;


ReactDOM.render(
  <BrowserRouter>
    <App path="/cool" component={MyComponent} a={1} b={2}/>
    {/*<FadingRoute  />*/}
  </BrowserRouter>,
  document.getElementById('root')
);

