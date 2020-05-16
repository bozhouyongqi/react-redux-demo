
const express = require('express');

const router = express.Router();
const githubRouter = require('./github');

router.get('/', function (req, res, next) {
    console.log('receive  ', req.originalUrl);

    setTimeout(() => {
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
    }, 1000);
});


router.use('/github', githubRouter);

// 下面可以再继续添加处理api路由下的其他路由

module.exports = router;
