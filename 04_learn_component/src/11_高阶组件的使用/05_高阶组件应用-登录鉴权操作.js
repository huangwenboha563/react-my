import React, { PureComponent } from 'react';

class LoginPage extends PureComponent {
  render() {
    return <h2>LoginPage</h2>
  }
}
// 高阶组件
function withAuth(WrappedComponent) {
  const NewCpn = props => {
    const {isLogin} = props;
    if (isLogin) {
      return <WrappedComponent {...props}/>
    } else {
      return <LoginPage/>
    }
  }

  NewCpn.displayName = "AuthCpn"

  return NewCpn;
}

// 购物车组件（需要登录之后才能看见）
class CartPage extends PureComponent {
  render() {
    return <h2>购物车页面</h2>
  }
}
// AuthCartPage 是个组件... 需要鉴权的页面都用withAuth来包裹一下
const AuthCartPage = withAuth(CartPage);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={true}/>
      </div>
    )
  }
}
/*
*
*  再试想一个应用场景：
*  如果某些页面需要发送网络请求，在请求之前小加个loading...可以封装个高阶组件widthAxios，在里面判断什么时候显示loading，什么时候显示对应的组件
*
*
*/
