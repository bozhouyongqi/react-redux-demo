
import React, { Component } from 'react'


// 必须包含React，是因为babel要利用React中提供的CreateElement方法创建虚拟dom
export default class App extends Component {
    render() {
        return (
            <div>
                welcome to App.
            </div>
        );
    }
}
