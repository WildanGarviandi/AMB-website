var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var object = { title: 'Ayo Mulai Berbagi', mail: 'garviandiwildan@gmail.com', lainnya: 'hahaha', author: 'Wildan Garviandi' };
    res.render('index', { object: object });
});

router.get('/entry', function(req, res) {
    var object = { title: 'detail', mail: 'garviandiwildan@gmail.com' };
    res.render('entry', object);
});

router.get('/allnews', function(req, res) {
    var objectNews = [{
            "title": "berita pertama",
            "assert": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
            "author": "Wildan",
            "icon": "http://image.spreadshirtmedia.com/image-server/v1/designs/13109353,width=280,height=280?mediaType=png",
            "date": "28-01-2017"
        },
        {
            "title": "berita kedua",
            "assert": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
            "author": "Wildan",
            "icon": "http://image.spreadshirtmedia.com/image-server/v1/designs/13109353,width=280,height=280?mediaType=png",
            "date": "28-01-2017"
        },
        {
            "title": "berita ketiga",
            "assert": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
            "author": "Wildan",
            "icon": "http://image.spreadshirtmedia.com/image-server/v1/designs/13109353,width=280,height=280?mediaType=png",
            "date": "28-01-2017"
        },
        {
            "title": "berita keempat",
            "assert": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
            "author": "Wildan",
            "icon": "http://image.spreadshirtmedia.com/image-server/v1/designs/13109353,width=280,height=280?mediaType=png",
            "date": "28-01-2017"
        }
    ];
    res.send(objectNews);
});

module.exports = router;