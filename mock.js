/** * @author: wangyongqi@baidu.com
 * @date: 2020-05-03 01:13:04
 * @last Modified time: 2020-05-03 01:13:04
 */

const express = require('express');

const app = express();
const port = 9000;

app.use('/api', (req, res) => {

    console.log('receive  ', req.originalUrl);

    return res.json(
        {
            posts: [
                '1111111',
                '22222',
                '3333333'
            ],
            receivedAt: new Date().getTime()
        }
    );
});


app.listen(port, () => {
    console.log('mock server has started!, listen port: ', port);

});

