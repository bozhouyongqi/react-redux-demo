/** * @author: wangyongqi@baidu.com
 * @date: 2020-05-03 14:47:50
 * @last Modified time: 2020-05-03 14:47:50
 */
import React from 'react';

export default function (props) {

    const posts = props.posts || [];
    return (
        <ul>
            {
                posts.map((post, index) => <li key={index}>{post}</li>)
            }
        </ul>
    );
}
