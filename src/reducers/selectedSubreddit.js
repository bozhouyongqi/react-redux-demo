/** * @author: wangyongqi@baidu.com
 * @date: 2020-05-03 00:26:45
 * @last Modified time: 2020-05-03 00:26:45
 */

import {SELECT_SUBREDDIT} from '../actions/actionType';

const selectSubreddit = (state = 'reactjs', action) => {

    switch (action.type) {

        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
};

export default selectSubreddit;
