var express = require('express');
var router = express.Router();
var db = require("../util/sql")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/main', function(req, res, next) {
  var val = req.body
  var userName = val.userName
  var userPwd = val.userPwd
  // 从数据库查数据
  db.query("select * from user where userName = ? and userPwd = ?",[userName,userPwd],function(err,data){
    if(err) {
      throw err
    }else if(data.length > 0) {
      res.render("main")
    }else {
      res.end("222")
    }
  })
});
module.exports = router;
