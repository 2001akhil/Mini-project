var express = require('express');
const { head } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users=req.session.user
  res.render('main',{student:true,users})
  
 // res.render('/main',{user})
  console.log(users)

});


module.exports = router;
