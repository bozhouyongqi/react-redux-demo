/** * @author: wangyongqi@baidu.com
 * @date: 2020-05-03 00:17:45
 * @last Modified time: 2020-05-03 00:17:45
 */


import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

// TO DO : 判断开发环境才添加redux-logger
const store = createStore(reducers, {}, applyMiddleware(thunk, createLogger()));

console.log('init state ', store.getState())

export default store;
