/**
 * @author: hwb
 * @date: 2020-11-20 09:28
 * @description：ha手动和redux联系
 * @update: 2020-11-20 09:28
 */

/*
*    第三方
*/
import { createStore} from 'redux';
import reducer from './reducer.js';
const store = createStore(reducer);
export default store;
