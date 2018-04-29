var express = require('express');
var router = express.Router();
var models = require('./models/index.js');

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

router.post('/addarticles', function(req, res) {
    console.log(req.body);
    console.log(models.Articles);
    models.Articles.create({
    title: req.body.title,
    assert: req.body.assert,
    author: req.body.author,
    icon_url: req.body.url_icon
  }).then(function(articles) {
      models.Articles.find({
          where: {
              title: req.body.title
            }
        }).then(function(articles) {
            res.json({
                message:"Berhasil membuat articles",
                id_articles: articles.id,
                title: articles.title
            });
        });
    }).catch(function(error) {
        console.log(error);
    });
});

module.exports = router;
