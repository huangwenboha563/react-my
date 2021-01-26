import React, { PureComponent } from "react";
// StoreContext暴露store，依然需要拿到store怎么拿呢？
import { StoreContext } from './context';
/*
*  抽取redux中公共的部分
*  作用，将组件和redux链接在一起（公共代码放在这里...）
*  高阶组件
*  需要用到context部分
*/
// connect函数（接受两个参数一个是state相关，一个是dispatch相关）
export function connect(mapStateToProps, mapDispachToProp) {
  // 返回一个高阶组价（高阶函数）接受一个组件
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context);

        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }
      // 保证dispatch之后页面数据能刷新
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        /*WrappedComponent其实就是about和home组件*/
        /*mapStateToProps(this.context.getState())是个对象，用展开运算符展开*/
        /*
        *   this.context上为什么有 getState和dispatch方法呢 是因为 通过context 的 provider 的 value属性传递到全局的。
        *
        */
        return <WrappedComponent {...this.props}
          {...mapStateToProps(this.context.getState())}
          {...mapDispachToProp(this.context.dispatch)} />
      }
    }
    // 为什么要用context呢？就能拿到this.context上的value值了
    // 在connect的基础上增加context的融入目的就是对connect二次封装便于别人用的时候更方便...这样做的最终目的就是在index.js里面引入一次就可以
    // 这样就可以不在connect.js里面引入store了....这样就间接的把所有的数据都交给store来管理了
    EnhanceComponent.contextType = StoreContext;

    return EnhanceComponent;
  }
}
