

const express = require('express');

const router = express.Router();


router.post('/pushcode', function (req, res, next) {

    console.log('receive the github pushcode request');

    res.status(200);

    res.json({status: 'ok'});
});



module.exports = router;
