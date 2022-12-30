var express = require('express');
const db = require("../util/sql");
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('left');
});
module.exports = router;
