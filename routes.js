var express = require('express');
var router = express.Router();
var frontend = require('./routes/index.js');
var news = require('./routes/server/news.js');

router.use('/', frontend);
router.use('/api/', news);

module.exports = router;