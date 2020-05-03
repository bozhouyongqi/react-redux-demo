
import React from 'react';
import store from '../store';
import { Provider, connect } from 'react-redux';
import Picker from './Picker';
import Posts from './Posts';
import {selectSubreddit} from '../actions/selectSubreddit';
import fetchPostsIfNeeded from '../actions/postBySubreddit';

function App(props) {

    console.log('App', props);
    const { selectedSubreddit, posts, isFetching, lastUpdated, dispatch} = props;
    const isEmpty = posts.length === 0;

    // TO DO
    const handleChange = value => {
        // dispatch select and dispatch postbysubreffit
        dispatch(selectSubreddit(value));
        dispatch(fetchPostsIfNeeded(value));
    };

    const handleRefreshClick = () => {
        dispatch(selectSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
    return (
        <div>
            <Picker value={selectedSubreddit}
                onChange={handleChange}
                options={['reactjs', 'frontend']}>
            </Picker>
            <p>
                {
                    lastUpdated && 
                    <span>
                        lastUpdated at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
                    </span>
                }
                {
                    !isFetching &&
                    <a href="#"
                        onClick={handleRefreshClick}>
                        Refresh
                    </a>
                }
            </p>
            {
                isEmpty ? (isFetching ? <h2> Loading...</h2> : <h2>Empty.</h2>)
                    : <div style={{opacity: isFetching ? 0.5 : 1}}>
                        <Posts posts={posts}></Posts>
                    </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    const {selectedSubreddit, postsBySubreddit = {}} = state;
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: false,
        items: []
    };

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    };
};


const WrapperApp = connect(mapStateToProps)(App);

export default function () {

    return (
        <Provider store={store}>
            <WrapperApp />
        </Provider>
    );
};

