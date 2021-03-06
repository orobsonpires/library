var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../templates'));

router.get('/', (req, res) => {
    /* do not use only ../client... the "../" is considered malicious. The local
    path must be resolved, then call sendfile */
    res.sendFile(path.resolve('layouts/app.html'));
})

module.exports = router;