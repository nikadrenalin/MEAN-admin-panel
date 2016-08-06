var express = require('express');
var router = express.Router();
var config = require('config.json');

router.get('/', function (req, res) {
    // log user out
    delete req.session.token;
    
    res.redirect('/login');
});

module.exports = router;