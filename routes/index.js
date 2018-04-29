var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var object = { title: 'Ayo Mulai Berbagi', mail: 'garviandiwildan@gmail.com', lainnya: 'hahaha', author: 'Wildan Garviandi' };
    res.render('index', { object: object });
});

router.get('/detailnews', function(req, res) {
    var object = { title: 'detail', mail: 'garviandiwildan@gmail.com' };
    res.render('detailNews', object);
});

module.exports = router;