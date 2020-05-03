
import React from 'react';
import store from '../store';
import { Provider, connect } from 'react-redux'; 

function App(props) {

    console.log(props)

    return (
        <div>
            demo

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
        isFetching: true,
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

