var express = require('express');
const { head } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 let user=req.session.user
    res.render('hodmain',{user,hodn:true})
   
   

    

});


module.exports = router;