import React, { useContext } from 'react';

import { UserContext, ThemeContext } from "../App";
/*
*  useContext
  是一个新的hook，
  如果不用这个hook，
  看以前那节context的代码，会非常冗余的，需要嵌套两层consumer...,
  看着非常乱。如果用这个hook，代码量会少很多...


  context
  是用来爷爷给孙子的
  如果这一节忘记了，可以翻看 04_learn_component下的跨组件通信

*
*/
export default function ContextHookDemo(props) {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  console.log(user, theme);

  return (
    <div>
      <h2>ContextHookDemo</h2>
    </div>
  )
}
