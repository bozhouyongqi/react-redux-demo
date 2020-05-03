/** * @author: wangyongqi@baidu.com
 * @date: 2020-05-03 00:29:45
 * @last Modified time: 2020-05-03 00:29:45
 */

import {REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_SUBREDDIT} from '../actions/actionType';

const posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {

    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            };

        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };

        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.data.posts,
                lastUpdated: action.data.receivedAt
            };
        default:
            return state;
    }

};

const postsBySubreddit = (state = {}, action) => {

    switch (action.type) {
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            };
        default:
            return state;
    }
};

export default postsBySubreddit;
