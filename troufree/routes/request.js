var express = require('express');
const { head } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // let users=req.session.users
  res.render('request')
  
 // res.render('/main',{user})
  //console.log(users)

});


module.exports = router;
