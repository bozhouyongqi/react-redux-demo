/** * @author: wangyongqi@baidu.com
 * @date: 2020-05-03 00:51:28
 * @last Modified time: 2020-05-03 00:51:28
 */
import {REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_SUBREDDIT, REQUEST_ERROR} from '../actions/actionType';

const requestPosts = subreddit => ({
    type: REQUEST_POSTS,
    subreddit
});

const receivePosts = (subreddit, data) => ({
    type: RECEIVE_POSTS,
    data,
    subreddit
});

const requestError = subreddit => ({
    type: REQUEST_ERROR,
    subreddit
});



const fetchPosts = (subreddit, state) => dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch('/api/reactjs')
        .then(res => res.json())
        .then(json => dispatch(receivePosts(subreddit, json)))
        .catch(err => {
            // dispatch 一个错误的action
            dispatch(requestError(subreddit));
        });
};

const shouldFetchPosts = (state, subreddit) => {
    const posts = state.postsBySubreddit[subreddit];
    if (!posts) {
        return true;
    }
    if (posts.isFetching) {
        return false;
    }
    return posts.didInvalidate;
};

const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
        return dispatch(fetchPosts(subreddit));
    }
};

export default fetchPostsIfNeeded;
