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
        return <WrappedComponent {...this.props}
          {...mapStateToProps(this.context.getState())}
          {...mapDispachToProp(this.context.dispatch)} />
      }
    }

    EnhanceComponent.contextType = StoreContext;

    return EnhanceComponent;
  }
}
