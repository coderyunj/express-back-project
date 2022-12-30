var express = require('express');
const db = require("../util/sql");
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('right');
});
module.exports = router;
