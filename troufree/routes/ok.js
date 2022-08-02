const { response } = require('express');
var express = require('express');
var router = express.Router();
const userHelpers=require('../helpers/user-helpers')
var h=require('./routes/index.js')


router.get('/ok',(req,res)=>{
  
 h.Destination();
      let use=req.session.user
      
    
      res.render('pay',{use})
      // function call(res) {
        
        
      // }
      
      
       
    
    
      
    })
    
    router.post('/ok',(req,res)=>{
      console.log(req.body)
    })
    