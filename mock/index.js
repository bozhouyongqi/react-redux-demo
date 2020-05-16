/** * @author: wangyongqi@baidu.com
 * @date: 2020-05-03 01:13:04
 * @last Modified time: 2020-05-03 01:13:04
 */

const express = require('express');

const app = express();
const port = 9000;
const apiRouter = require('./api');


app.use('/api', apiRouter);


app.listen(port, () => {
    console.log('mock server has started!, listen port: ', port);
});

