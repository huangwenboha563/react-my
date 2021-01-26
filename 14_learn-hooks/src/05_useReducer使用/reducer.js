// state就是useReducer里面的那个第二个参数 {counter: 0}
export default function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return {...state, counter: state.counter + 1};
    case "decrement":
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
}
