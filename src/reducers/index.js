/** * @author: wangyongqi@baidu.com
 * @date: 2020-05-03 00:40:50
 * @last Modified time: 2020-05-03 00:40:50
 */

import {combineReducers} from 'redux';
import selectedSubreddit from './selectedSubreddit';
import postsBySubreddit from './postBySubreddit';

const finalReducer = combineReducers(
    {
        selectedSubreddit,
        postsBySubreddit
    }
);

export default finalReducer;

