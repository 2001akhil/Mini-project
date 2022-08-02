var express = require('express');
const { head } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 //let usermain=req.session.usermain
    res.render('facultymain')
   // console.log(usermain);
   

    

});


module.exports = router;