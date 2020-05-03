/** * @author: wangyongqi@baidu.com
 * @date: 2020-05-03 00:17:45
 * @last Modified time: 2020-05-03 00:17:45
 */


import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
